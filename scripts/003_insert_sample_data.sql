-- Insert community categories
INSERT INTO public.community_categories (name, description, icon, color) VALUES
('Anxiety & Stress', 'Share experiences and coping strategies for anxiety and stress management', 'Brain', 'blue'),
('Depression Support', 'A safe space to discuss depression and find peer support', 'Heart', 'purple'),
('Academic Pressure', 'Discuss challenges with studies, exams, and academic expectations', 'BookOpen', 'green'),
('Relationships', 'Navigate friendships, family relationships, and romantic connections', 'Users', 'pink'),
('Self-Care & Wellness', 'Tips and discussions about maintaining mental and physical wellness', 'Sparkles', 'yellow'),
('Crisis Support', 'Immediate support and resources for mental health crises', 'AlertTriangle', 'red');

-- Insert sample counselors
INSERT INTO public.counselors (name, title, specialties, bio, image_url, years_experience, rating) VALUES
('Dr. Sarah Johnson', 'Licensed Clinical Psychologist', ARRAY['Anxiety', 'Depression', 'Academic Stress'], 'Dr. Johnson specializes in cognitive-behavioral therapy and has extensive experience working with college students facing academic and personal challenges.', '/professional-woman-therapist.png', 8, 4.9),
('Dr. Michael Chen', 'Licensed Professional Counselor', ARRAY['Relationship Issues', 'Social Anxiety', 'Life Transitions'], 'Dr. Chen focuses on helping students navigate the complex social and emotional challenges of university life with compassion and evidence-based approaches.', '/professional-man-therapist.png', 12, 4.8),
('Dr. Maria Rodriguez', 'Licensed Marriage and Family Therapist', ARRAY['Family Dynamics', 'Cultural Identity', 'Self-Esteem'], 'Dr. Rodriguez brings a multicultural perspective to therapy, helping students explore identity, family relationships, and personal growth in a supportive environment.', '/professional-woman-therapist-hispanic.jpg', 10, 4.9);
