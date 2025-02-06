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
    'react-refresh/only-export-components': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};