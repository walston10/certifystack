import { useMemo } from 'react';
import { getFlashcardsByLesson } from '../data/courses/network-plus/flashcards/index.js';
import FlashcardPlayer from './FlashcardPlayer';

function FlashcardActivity({ lessonId }) {
  const lessonCards = useMemo(() => getFlashcardsByLesson(lessonId), [lessonId]);

  return (
    <FlashcardPlayer
      initialCards={lessonCards}
      sessionTitle={`Lesson ${lessonId} Flashcards`}
      lessonId={lessonId}
    />
  );
}

export default FlashcardActivity;