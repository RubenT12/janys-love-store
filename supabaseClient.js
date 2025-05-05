import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mxcwvwgkuxgacogailgm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14Y3d2d2drdXhnYWNvZ2FpbGdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzNTAzMTQsImV4cCI6MjA2MTkyNjMxNH0.luWGB0EREJDdeocXlBjGUDoW2gscYm1pvcIFBiOPOKA';

export const supabase = createClient(supabaseUrl, supabaseKey);
