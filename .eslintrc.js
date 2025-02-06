// filepath: /c:/Users/TUYET NHI/Documents/GitHub/remod-418-build-a-simple-to-do-list-app/.eslintrc.js
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:react-refresh/recommended', // Xóa dòng này nếu không cần thiết
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    // 'react-refresh', // Xóa dòng này nếu không cần thiết
  ],
  rules: {
    // Xóa quy tắc 'react-refresh/only-export-components' nếu nó tồn tại
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};