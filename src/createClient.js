import {createClient} from '@supabase/supabase-js'

export const supabase = createClient(
  'https://bsaxybrcwdxrlqcxzvnk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzYXh5YnJjd2R4cmxxY3h6dm5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2MzczMTIsImV4cCI6MjAyOTIxMzMxMn0.TPmzw-3iAWQI9vaixB4v9mFYtk6Asm2QWlXzFd5bMcU'
)