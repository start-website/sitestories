const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

module.exports = {
    entry: {
        // 'backend-legacy': { import: './src/backend.js', filename: 'js/[name].js' },
        'backend': { import: './src/backend.js', filename: 'js/[name].js' },
        // 'app-popup-dev': { import: './src/js/app-popup.js', filename: 'js/[name].js'}
    },
    output: {
        filename: '[name].js',
        //path: path.resolve(__dirname, "dist"),
        path: 'C:/Users/Evgenii/Desktop/Web desing/OSPanel/domains/localhost/wa-apps/shop/plugins/sitestories'
    },
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'templates/actions/marketing/rules/Stories.html',
            template: './src/Stories.html',
            inject: false,
            minify: false,
        }),
       new VueLoaderPlugin()
    ],
    optimization: {
        minimize: false,
        usedExports: true,
    },
    experiments: {
        topLevelAwait: true,
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                resourceQuery: /blockType=i18n/,
                type: 'javascript/auto',
                loader: '@kazupon/vue-i18n-loader'
            },
            // {
            //     test: /\.js$/,
            //     use: {
            //         loader: "babel-loader"
            //     }
            // },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ],
    }
};
