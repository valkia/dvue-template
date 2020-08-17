结合plop命令生成代码的vue多页面模版


项目目录cd \src\main\webapp

设置淘宝镜像 npm install -g cnpm --registry=https://registry.npm.taobao.org

但是通过vue init webpack projectName新建项目是和淘宝镜像没关系的，因为vue-cli 用的是 npm 源，所以只要设置 npm 源就行了，可以提升创建速度：

1.npm cache clean --force 清除npm的缓存 (可能会报错但是没关系)

2.npm config set registry https://registry.npm.taobao.org

3.vue create xxx / npm install

4.如果npm run serve不能启动，需要npm install -g @vue/cli

解决chrome跨域问题
右键chrome图标，在目标：最后加上 --disable-web-security --user-data-dir   （最前面有空格）

打开项目前需要先生成一次页面模版（page）

####创建模版文本步骤
#####plop
#####? 选择多页应用
#####? 请输入文件名称 index
#####? 请输入文件创建目录 src/pages/index


# web

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
#### 默认启动index 修改位置：vue.config.js devServer: index: index.html
#### 多页面的情况下，在地址栏 [项目名]/[页面模版名].html 修改成对应的页面模版名 
```
npm run serve
```

### Compiles and minifies for production 正式环境
```
npm run build
```

### Compiles and minifies for production 测试环境
```
npm run alpha
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
