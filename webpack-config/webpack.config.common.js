/**
 * 웹팩 공통 설정 정보
 */
// const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin      = require('html-webpack-plugin');
const BundleAnalyzerPlugin   = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const helpers = require('./helpers');
 
module.exports = {
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        // 성공적으로 빌드 후에 사용하지 않는 웹팩 파일 제거 하는 플러그인
        new CleanWebpackPlugin({ 
            root: helpers.root(), 
            verbose: true 
        }),
        // 번들링 될 때의 HTML 설정 플러그인
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        // 무분별한 import를 제거하고 번들링을 최적화 및 번들링 확인을 위한 플러그인
        new BundleAnalyzerPlugin()
    ]
};
