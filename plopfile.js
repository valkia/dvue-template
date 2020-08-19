module.exports = function (plop) {

    plop.setGenerator("多页应用", {
        description: '创建多页应用的一组vue文件',
        prompts: [
            {
                type: 'input',  // 交互类型
                name: 'name',   // 参数名称
                message: '请输入文件名称' // 交互提示
            },
            {
                type: 'input',
                name: 'path',
                message: '请输入文件创建目录'
            }
        ],
        actions: [
            //创建一个vue文件
            {
                type: 'add', // 动作类型
                path: '{{ path }}/{{ name }}.vue', // '{{  }}' 双大括号内设置动态参数
                templateFile: 'plop-templates/views/vue.hbs' // 模板文件地址， 使用hbs文件
            },
            //创建一个html文件
            {
                type: 'add', // 动作类型
                path: '{{ path }}/{{ name }}.js', // '{{  }}' 双大括号内设置动态参数
                templateFile: 'plop-templates/views/js.hbs' // 模板文件地址， 使用hbs文件
            },
            //创建一个js文件
            {
                type: 'add', // 动作类型
                path: '{{ path }}/{{ name }}.html', // '{{  }}' 双大括号内设置动态参数
                templateFile: 'plop-templates/views/html.hbs' // 模板文件地址， 使用hbs文件
            },
            //components
            {
                type: 'add', // 动作类型
                path: '{{ path }}/components/{{ name }}.vue', // '{{  }}' 双大括号内设置动态参数
                templateFile: 'plop-templates/views/components.hbs' // 模板文件地址， 使用hbs文件
            },
            //创建一个axiosApi文件
            {
                type: 'add', // 动作类型
                path: 'src/request/api/{{ name }}Api.js',
                templateFile: 'plop-templates/views/api.hbs'
            },
            //Api文件关联到api里
            {
                type: 'modify', // 修改文件
                path: 'src/request/api/api.js',
                pattern:/\/\/引入其他模块的接口Api/g,
                template:'import {{name}}Api from \'./{{name}}Api\';\n//引入其他模块的接口Api'
            },
            //Api文件关联到api里
            {
                type: 'modify', // 修改文件
                path: 'src/request/api/api.js',
                pattern:/\/\/导出其他模块的接口Api/g,
                template:'{{name}}Api,\n//导出其他模块的接口Api'
            }
        ]

    });

    plop.setGenerator("单页应用的组件", {
        description: '创建单页应用的组件',
        prompts: [
            {
                type: 'input',  // 交互类型
                name: 'name',   // 参数名称
                message: '请输入文件名称' // 交互提示
            },
            {
                type: 'input',
                name: 'path',
                message: '请输入文件创建目录'
            }
        ],
        actions: [
            //components
            {
                type: 'add', // 动作类型
                path: '{{ path }}/{{properCase name}}.vue', // '{{  }}' 双大括号内设置动态参数
                templateFile: 'plop-templates/views/components.hbs' // 模板文件地址， 使用hbs文件
            }
        ]

    })

}