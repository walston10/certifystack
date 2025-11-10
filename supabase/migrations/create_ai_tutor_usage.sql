-- AI Tutor Usage Tracking Table
-- Stores all AI tutor interactions for rate limiting and analytics

CREATE TABLE IF NOT EXISTS ai_tutor_usage (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  response TEXT NOT NULL,
  lesson_id INTEGER,
  tokens_used INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for efficient rate limiting queries (checking daily usage per user)
CREATE INDEX IF NOT EXISTS idx_user_date ON ai_tutor_usage(user_id, DATE(created_at));

-- Index for lesson-based queries (finding previous conversations in same lesson)
CREATE INDEX IF NOT EXISTS idx_lesson_user ON ai_tutor_usage(lesson_id, user_id, created_at DESC);

-- Enable Row Level Security
ALTER TABLE ai_tutor_usage ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only view their own AI tutor usage
CREATE POLICY "Users can view own AI tutor usage"
  ON ai_tutor_usage
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Users can insert their own AI tutor usage
CREATE POLICY "Users can insert own AI tutor usage"
  ON ai_tutor_usage
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Policy: Users cannot update AI tutor usage (immutable audit log)
-- Policy: Users cannot delete AI tutor usage (immutable audit log)

-- Comments for documentation
COMMENT ON TABLE ai_tutor_usage IS 'Tracks all AI tutor interactions for rate limiting, analytics, and conversation history';
COMMENT ON COLUMN ai_tutor_usage.user_id IS 'Reference to the authenticated user who asked the question';
COMMENT ON COLUMN ai_tutor_usage.question IS 'The question asked by the user';
COMMENT ON COLUMN ai_tutor_usage.response IS 'The AI-generated response';
COMMENT ON COLUMN ai_tutor_usage.lesson_id IS 'Optional reference to the lesson context where question was asked';
COMMENT ON COLUMN ai_tutor_usage.tokens_used IS 'Number of OpenAI tokens consumed for this interaction';
COMMENT ON COLUMN ai_tutor_usage.created_at IS 'Timestamp when the interaction occurred (used for rate limiting)';
