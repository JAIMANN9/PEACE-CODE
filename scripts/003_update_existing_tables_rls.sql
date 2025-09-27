-- Update existing tables to work with new role-based system

-- Update community_posts policies to allow admin access
DROP POLICY IF EXISTS "community_posts_admin_select_all" ON public.community_posts;
CREATE POLICY "community_posts_admin_select_all" ON public.community_posts
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'administrator'
    )
  );

-- Update counseling_sessions policies to allow admin access  
DROP POLICY IF EXISTS "counseling_sessions_admin_select_all" ON public.counseling_sessions;
CREATE POLICY "counseling_sessions_admin_select_all" ON public.counseling_sessions
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'administrator'
    )
  );

-- Update counselors policies to allow admin management
DROP POLICY IF EXISTS "counselors_admin_all" ON public.counselors;
CREATE POLICY "counselors_admin_all" ON public.counselors
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'administrator'
    )
  );

-- Update post_comments policies to allow admin access
DROP POLICY IF EXISTS "post_comments_admin_select_all" ON public.post_comments;
CREATE POLICY "post_comments_admin_select_all" ON public.post_comments
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'administrator'
    )
  );
