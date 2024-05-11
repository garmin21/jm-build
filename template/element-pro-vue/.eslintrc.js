module.exports = {
  // root: 表示当前配置文件是否为根配置文件，用于告诉 ESLint 停止在父目录中查找其他配置文件。
  root: true,
  // env: 用于指定您的代码将运行在哪种环境中，每个环境都有预定义的全局变量。
  env: {
    node: true,
    browser: true,
  },
  // 继承的eslint 规则配置，eslint:recommended 是 eslint的通用检查 js 的规则, 也可以使用安装的eslint 规则
  // 比如 airbnb
  extends: ['airbnb-base', "plugin:vue/recommended", 'plugin:prettier/recommended'],
  // extends: ['eslint:recommended'],
  // overrides: 允许您为特定的文件或文件夹指定特定的配置,覆盖其他的配置
  // overrides: {},
  // parserOptions: 提供给解析器的选项，例如指定 ECMAScript 版本和支持的语法特性。
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  // plugins: 指定要使用的 ESLint 插件，它们可以提供额外的规则和功能。
  plugins: ['vue'],
  // rules: 指定您要启用或禁用的规则以及它们的错误级别。
  // "off" 或 0 - 关闭规则
  // "warn" 或 1 - 打开规则作为警告（出现黄色波浪线不影响退出代码）
  // "error" 或 2 - 打开规则作为错误（出现红色波浪线触发时退出代码为 1）
  rules: {
    'import/prefer-default-export': 'off',
    'no-shadow': "off",
    'no-underscore-dangle': "off",
    'guard-for-in': 'off',
    'no-restricted-syntax': 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'no-unused-expressions': ["error", { "allowShortCircuit": true }],
    'no-var': 'error',
    'no-console': 'warn',
    'linebreak-style': 'off',
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    'func-names': ['error', 'as-needed'],
    "no-plusplus": "off",
    "import/no-unresolved": "off",
    'max-lines': ['warn', { max: 1000 }],
    "prettier/prettier": [
      "error",
      {
        "semi": false
      }
    ]
  },
};
