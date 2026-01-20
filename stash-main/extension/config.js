// Stash Configuration
// Replace these with your Supabase project details

const CONFIG = {
  // Your Supabase project URL (from Project Settings > API)
  SUPABASE_URL: 'https://wgpqtdnycqidwwwwfhkk.supabase.co',

  // Your Supabase anon/public key (from Project Settings > API)
  SUPABASE_ANON_KEY: 'sb_publishable_RnXWPl5cTiAe2QdERKlYWw_MZG_E8lT',

  // Your web app URL (after deploying to Vercel/Netlify)
  WEB_APP_URL: 'https://your-stash-app.vercel.app',

  // Your user ID from Supabase (Authentication > Users)
  // For multi-user mode, this can be removed and auth will be required
  USER_ID: '4adc9819-2e50-46bf-8df6-748fe82501e5',
};

// Don't edit below this line
if (typeof module !== 'undefined') {
  module.exports = CONFIG;
}
