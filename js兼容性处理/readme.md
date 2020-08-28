# Browserslist的作用 
>在项目中添加了Browserslist配置的话，这些配置会把目标浏览器以及NodeJS版本分享给前端工具，前端工具就可以根据版本来做兼容处理等；
> [browserslist兼容表](https://browserl.ist/)

## Browserslist被应用在以下工具中：[Browserslist](https://github.com/browserslist/browserslist)
**[Autoprefixer](https://github.com/postcss/autoprefixer)**
  >PostCSS插件，用于解析CSS并使用Can I Use中的值向CSS规则添加供应商前缀
**[Babel](https://github.com/babel/babel/tree/master/packages/babel-preset-env)**
  >babel is a javascript compiler babel是JavaScript的转译器(浏览器识别)
**[postcss-preset-env](https://github.com/csstools/postcss-preset-env)**
  >PostCSS Preset Env使您可以将现代CSS转换为大多数浏览器可以理解的内容，并根据目标浏览器或运行时环境确定所需的polyfill(代码块)。  
**[eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat)**
  >减少代码的浏览器兼容性
**[stylelint-no-unsupported-browser-features](https://github.com/ismay/stylelint-no-unsupported-browser-features)**  
  >禁止目标浏览器用户不支持的功能(仅支持css)
**[postcss-normalize](https://github.com/csstools/postcss-normalize)**
  >PostCSS Normalize允许您使用浏览器列表中 所需的normalize.css或sanitize.css部分。(规范)
**[obsolete-webpack-plugin](https://github.com/ElemeFE/obsolete-webpack-plugin)**
  >Webpack插件会生成一个浏览器端独立脚本，该脚本根据Browserslist检测浏览器兼容性，并提示网站用户对其进行升级

  >>>>以上工具通过Browserslist，知道浏览器的版本，就会根据这个版本做相应的兼容处理(浏览器厂商多)


## Browserslist的使用方法

+ 添加配置到package.json中
   ```
    "browserslist": [
        "defaults",
        "not IE 11",
        "not IE_Mob 11",
        "maintained node versions",
    ]
   ```
- 单独写一个文件 .browserslistrc
   ```
   # Browsers that we support

   defaults
   not IE 11
   not IE_Mob 11
   maintained node versions
   ```

## 配置选项的意义
   browserslist会会根据开发者给出的配置选项，去查询符合选项的浏览器有哪些，然后再把这些浏览器版本告诉前端工具

## 如何配置Browserslist
* 我们可以只设置一个default查询，这样对于大多数用户来说是合理的
   `"browserslist": ["default"]`

- 如果想改变默认的defaults配置，官方推荐我们组合像last 1 vesion, not dead 和 > 0.2% 这样的配置(为并集而非交集)
   ```
   "browserslist": [
        ">0.2%",           用户比例大于0.2%的浏览器
        "not dead",        还存活的浏览器
        "last 2 versions"  筛选最新的两个版本浏览器
    ]
   ```
* 之所以要组合查询，而不单独使用 >0.2%, 是为了避免流行的浏览器越来越流行，避免出现当初IE6一样的垄断情况

* 只有当你专门正对某个浏览器(如Chrome)时，才直接使用last 2 Chrome versions。 如果不是针对某个浏览器，不要使用这种写法

* 不要因为不认识某个浏览器，而把它从browserslist配置中去除


## 查询的来源
#### Browserslist 会从以下配置中，根据配置来查询目标浏览器
1. package.json 中的browserslist这个key所对应的字段(官方推荐)。
2. 单独写一个 .browserslistrc配置文件
3. 单独写一个browserslist配置文件
4. BROWSERSLIST 环境变量
5. 如果以上的方式没有产生合法的查询条件， Browserlist会使用 > 0.5%, last 2 versions, Firefox ESR, not dead

## 查询的写法(Browserslist支持查询方式)
+ 或查询： 使用，或 or 拼接查询条件，查询结果为并集
   1. > .5% or last 2 versions
   2. > .5%, last 2 versions
+ 且查询：使用and拼接，结果为交集
   1. > .5% and last 2 versions
+ 非查询
   1. > .5% and not last 2 versions
#### 查询的例子
+ defaults: 默认配置 （>0.5%, last 2 versions,Firefox ESR, not dead）
+ >5%: 选择浏览器用户量大于5%的浏览器，也可以使用>=, < 和 <=
+ >5% in US: 针对美国用户
+ 5% in my stats: 使用开发者自定义的用户数据
+ cover 99.5%: 覆盖最流行的浏览器
+ cover 99.5% in US： 跟上面一样，针对美国用户
+ node 10 and node 10.4：选择最新的NodeJS 10.x.x 或 10.4.x版本
+ ie 6-8: 选择这个范围内的IE浏览器
+ IOS 7: 精确查询IOS 浏览器的7版本