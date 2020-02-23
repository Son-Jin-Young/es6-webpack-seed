'use strict';

/**
 * 웹팩 Develop 환경 설정
 */
// 웹팩 여러 개의 설정을 통합해주는 라이브러리
const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.config.common');
const helpers      = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    // 개발 모드
    mode: 'development',
    // https://webpack.js.org/configuration/devtool/
    devtool: 'cheap-module-eval-source-map',
    // https://webpack.js.org/configuration/output/
    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    optimization: {
        // 오류가 있을 때 방출? 단계를 뛰어 넘으려면 true 설정
        // false 인 경우 오류 유무에 상관없이 모두 방출?
        // 방출 -> 빌드??
        noEmitOnErrors: true
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});