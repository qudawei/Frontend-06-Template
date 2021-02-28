### 学习笔记

#### yoman 基础
需要全局安装 `npm i -g yo`
```
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
      // Calling the super constructor is important so our generator is correctly set up
      super(args, opts);
    }


     async initPackage() {
       const answers = await this.prompt([
          {
            type: "input",
            name: "name",
            message: "Your project name",
            default: this.appname // Default to current folder name
          }]);


        const pkgJson = {
            "name":answers.name,
            "version": "1.0.0",
            "description": "",
            "main": "generators/app/index.js",
            "scripts": {
              "test": "echo \"Error: no test specified\" && exit 1"
            },
            "files": [
              "generators"
            ],
            "keywords": [
              "yeoman-generator"
            ],
            "author": "",
            "license": "ISC",
            "devDependencies": {
          
            },
            "dependencies": {

            }
        };
    
        // Extend or create package.json file in destination path
        this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
        this.npmInstall(["vue"],{'save-dev':false});
        this.npmInstall(["webpack","webpack-cli","vue-loader","vue-style-loader","css-loader","vue-template-compiler","copy-webpack-plugin"],{'save-dev':true});
      
        this.fs.copyTpl(
          this.templatePath('HelloWorld.vue'),
          this.destinationPath('src/HelloWorld.vue')
        );
        this.fs.copyTpl(
          this.templatePath('webpack.config.js'),
          this.destinationPath('webpack.config.js')
        );
        this.fs.copyTpl(
          this.templatePath('main.js'),
          this.destinationPath('src/main.js')
        );
        this.fs.copyTpl(
          this.templatePath('index.html'),
          this.destinationPath('src/index.html'),{
            title:answers.name
          }
        );
      
    }
    
  };
```

* `package.json` 文件的name开头必须 `generator-`+name
* 启动命令 yo name

#### webpack 基础
```
module.exports = {
    mode: 'development',  //production生成模式，development 开发模式
  
   // 1、entry λ口 (entry)指小webpock以哪个文件作为入口起点开始打包。
   entry: './src/index.js',
    // entry:['./src/index.js','./src/mian.js'],
    // entry:{
    //     one:['./src/index.js','./src/one.js'],
    //     two:'./src/mian.js'
    // },
    // entry: {
    //     vendor:['./src/mian.js'],
    //     index:'./src/js/index.js',
    //     cart:'./src/js/one.js'
    // },

    // 2. output输出(output)指小webpack/T包后的资源bundles输出到哪里，以及如何命名。

     output:{
         filename: '[name].js',
         path:resolve(__dirname,'build')
     },
     //loader 规格的配置
     module: { 
         rules:[ 
            {
                test: /\.css$/,
                use: [
                     "css-loader"
                ]
              },
        
             {
                 test:/\.scss$/,
                 use:['style-loader','css-loader','sass-loader']
             }
            {
                test:/\.(pngljpgljpeglgif)$/,
                loader: 'url-loader',
                options: {
                    publicPath: './images/',
                    outputPath: 'images/',
                    limit: 1024 * 8,
                    name: '[name].[ext]'
                }
            },
            {
                test:/\.html$/,
                loader:'html-loader',
            },
            {
               exclude:/\.(js|json|html|css|less|scss|png|gif|jpg|jpeg)$/, 
               loader: 'file-loader',
               options: {
                    outputPath: 'font/',
                    publicPath: './font' ,
                    name:'[name][hash:8].[ext] '
                }
                
            }

            
                
         ]
     },

     // fIiwebpack5 斋要加上:这个配置项才可以自动刷新
     target:"web",
     devServer: {
         port: 3001,
         compress:true,
         open:true,
         hot: true
     },

     plugins:[  //插件配置
       
     ]
}

```



#### babel 基础
需要安装 `"@babel/core", "@babel/preset-env", "@babel/cli"`
```
  {
        test:/\.js$/,
        ues:{
           loader:"babel-loader",
           options:{
              presets: ["@babel/preset-env"],
              plugins: [["@babel/plugin-transform-react-js"],{pragma:"createElement"}]
           }
        }
    }

```
#### .babelrc 文件配置
···
{
    "presets": ["@babel/preset-env"]
}
···