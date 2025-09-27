-- Profiles policies
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Community categories policies (public read)
CREATE POLICY "Anyone can view categories" ON public.community_categories
  FOR SELECT USING (true);

-- Community posts policies
CREATE POLICY "Anyone can view posts" ON public.community_posts
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create posts" ON public.community_posts
  FOR INSERT WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Users can update their own posts" ON public.community_posts
  FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "Users can delete their own posts" ON public.community_posts
  FOR DELETE USING (auth.uid() = author_id);

-- Comments policies
CREATE POLICY "Anyone can view comments" ON public.post_comments
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create comments" ON public.post_comments
  FOR INSERT WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Users can update their own comments" ON public.post_comments
  FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "Users can delete their own comments" ON public.post_comments
  FOR DELETE USING (auth.uid() = author_id);

-- Counselors policies (public read)
CREATE POLICY "Anyone can view counselors" ON public.counselors
  FOR SELECT USING (true);

-- Counseling sessions policies
CREATE POLICY "Users can view their own sessions" ON public.counseling_sessions
  FOR SELECT USING (auth.uid() = student_id);

CREATE POLICY "Users can create their own sessions" ON public.counseling_sessions
  FOR INSERT WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Users can update their own sessions" ON public.counseling_sessions
  FOR UPDATE USING (auth.uid() = student_id);
