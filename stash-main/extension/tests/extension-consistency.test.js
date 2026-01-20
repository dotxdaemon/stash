// ABOUTME: Validates extension configuration and message handling behavior.
// ABOUTME: Ensures permissions and authenticated inserts align with runtime needs.

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const extensionDir = path.join(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(extensionDir, 'manifest.json'), 'utf8'));
const background = fs.readFileSync(path.join(extensionDir, 'background.js'), 'utf8');
const content = fs.readFileSync(path.join(extensionDir, 'content.js'), 'utf8');

assert.ok(
  Array.isArray(manifest.permissions) && manifest.permissions.includes('scripting'),
  'manifest.json must include the scripting permission'
);

assert.ok(
  !background.includes('CONFIG.USER_ID'),
  'background.js should not use CONFIG.USER_ID for authenticated inserts'
);

assert.ok(
  /request\.action === 'getSelection'[\s\S]*?return false;/.test(content),
  'content.js should return false for getSelection to close the message channel'
);
