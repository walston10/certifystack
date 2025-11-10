-- Create a profile for your existing user
-- Replace YOUR_USER_ID with your actual user ID from the error message

INSERT INTO public.profiles (id, full_name, membership_tier, xp_points, study_streak)
VALUES (
    '11ca3a35-26be-4c60-9a2f-46de507e6920'::uuid,  -- Your user ID from the error
    'User',  -- Default name
    'premium',  -- Set to premium so everything is unlocked
    0,
    0
)
ON CONFLICT (id) DO UPDATE 
SET membership_tier = 'premium';

-- Verify it was created
SELECT * FROM public.profiles WHERE id = '11ca3a35-26be-4c60-9a2f-46de507e6920';
