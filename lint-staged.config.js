module.exports = {
  '*.{ts,tsx}': [() => 'tsc --skipLibCheck --noEmit', 'eslint --fix'],
  '*.{html,css,json,md}': ['prettier --write']
}
