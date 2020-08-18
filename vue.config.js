let path = require('path');
let glob = require('glob');

//配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
    let entries = {},
        basename, tmp, pathname, appname;

    glob.sync(globPath).forEach(function (entry) {
        basename = path.basename(entry, path.extname(entry));
        // console.log(entry)
        tmp = entry.split('/').splice(-3);
        //console.log(tmp)
        pathname = basename; // 正确输出js和html的路径

        // console.log(pathname)
        entries[pathname] = {
            entry: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[1] + '.js',
            template: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[2],
            title: tmp[2],
            filename: tmp[2],
            chunks: ['chunk-vendors', 'chunk-common', tmp[1]]
        };
    });
    return entries;
}

let pages = getEntry('./src/pages/**?/*.html');
console.log(pages)
//配置end

module.exports = {
    lintOnSave: false, //禁用eslint
    //baseUrl: '/',
    productionSourceMap: false,
    publicPath: '/projectName/',
    pages,
    devServer: {
        index: 'index.html',
        open: true,
        host: '',
        port: 8088,
        https: false,
        hotOnly: false,

    },
    /*chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => {
                // 修改它的选项...
                options.limit = 100
                return options
            })
        Object.keys(pages).forEach(entryName => {
            config.plugins.delete(`prefetch-${entryName}`);
        });
        if(process.env.NODE_ENV === "production") {
            config.plugin("extract-css").tap(() => [{
                path: path.join(__dirname, "./dist"),
                filename: "css/[name].[contenthash:8].css"
            }]);
        }
    },*/
    /*chainWebpack: config => {
        Object.keys(pages).forEach(entryName => {
            config.plugins.delete(`prefetch-${entryName}`);
        });
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === "production") {
            console.log(config.output);
            /!*config.output = {
                path: path.join(__dirname, "./dist"),
                filename: "js/[name].[contenthash:8].js"
            };*!/
        }
    }*/
}


/*
module.exports = {
    // publicPath: process.env.NODE_ENV === 'production'
    //     ? '/xxx/'
    //     : './'
    publicPath:'/xxx/',

    productionSourceMap: false
}*/
