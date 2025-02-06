module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-refresh/recommended', // Thêm dòng này
    ],
    plugins: [
      'react',
      '@typescript-eslint',
      'react-refresh', // Thêm dòng này
    ],
    rules: {
      // Các quy tắc khác của bạn
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };