// CLI entry point — run with: node scripts/sync-blog.mjs [--watch]
import { syncBlog } from '../src/lib/blog/syncGoogleDoc.mjs';

const isWatch = process.argv.includes('--watch');

if (isWatch) {
  console.log('[sync-blog] Watch mode — polling every 60s. Ctrl-C to stop.');
  await syncBlog();
  setInterval(async () => {
    try { await syncBlog(); } catch (e) { console.error('[sync-blog] Poll error:', e.message); }
  }, 60_000);
} else {
  await syncBlog();
}
