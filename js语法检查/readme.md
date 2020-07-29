## 语法检查

```
语法检查：eslint-loader 依赖于eslint
  注意： 只检查自己写的代码，不检查第三方库
  设置检查规则：
   package.json中eslintConfig中设置
    "eslintConfig": {
        "extends": "airbnb-base"
    }
   基于airbnb校验--> eslint-config-airbnb-base eslint-plugin-import
```
```
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
            // 自动修复
            fix: true
        }
    },
```