
# 1、创建npm工程

在任意目录下创建文件夹 "redux-01", 然后打开命令行工具，进入到该目录，执行 *npm init* 命令对项目进行初始化。

{% codeblock lang:shell %}
> npm init
{% endcodeblock %}

# 2、添加依赖

{% codeblock lang:shell %}
> npm install -D redux webpack-cli webpack
{% endcodeblock %}

# 3、添加webpack配置

在"redux-01"目录下创建 *webpack-config.js*文件， 添加如下webpack配置：

{% codeblock %}
// webpack.config.js
const path = require('path')

const config = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.js'
    }
}

module.exports = config
{% endcodeblock %}

配置中，入口为'src/index.js'文件，打包出口为'./dist/app.js'。

# 4、创建src目录

在"redux-01"目录下，添加"src"目录，然后把 actions.js、reducers.js和index.js添加到"src"目录中。执行 "webpack" 命令，即可在"dist"目录下找到"app.js"文件。

{% codeblock lang:shell %}
> webpack
{% endcodeblock %}

"dist"目录下的 "app.js"文件即是将actions.js、reducers.js和index.js打包输出的结果。将app.js文件引入到任何html文件中，然后用浏览器打开该html文件，再按F12打开控制台，就将看到本文的结果输出。