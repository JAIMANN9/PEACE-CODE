-- Create profiles table for user management
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  role TEXT NOT NULL CHECK (role IN ('student', 'administrator')),
  university TEXT,
  student_id TEXT,
  bio TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create community categories table
CREATE TABLE IF NOT EXISTS public.community_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  color TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create community posts table
CREATE TABLE IF NOT EXISTS public.community_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category_id UUID REFERENCES public.community_categories(id) ON DELETE CASCADE,
  author_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  is_anonymous BOOLEAN DEFAULT FALSE,
  upvotes INTEGER DEFAULT 0,
  downvotes INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create comments table
CREATE TABLE IF NOT EXISTS public.post_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES public.community_posts(id) ON DELETE CASCADE,
  author_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  is_anonymous BOOLEAN DEFAULT FALSE,
  upvotes INTEGER DEFAULT 0,
  downvotes INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create counselors table
CREATE TABLE IF NOT EXISTS public.counselors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  specialties TEXT[],
  bio TEXT,
  image_url TEXT,
  years_experience INTEGER,
  rating DECIMAL(2,1) DEFAULT 5.0,
  is_available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create counseling sessions table
CREATE TABLE IF NOT EXISTS public.counseling_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  counselor_id UUID REFERENCES public.counselors(id) ON DELETE CASCADE,
  session_type TEXT NOT NULL CHECK (session_type IN ('video', 'chat', 'group', 'crisis')),
  preferred_date DATE,
  preferred_time TIME,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.counselors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.counseling_sessions ENABLE ROW LEVEL SECURITY;
