const path = require('path');

module.exports = {

    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                path.resolve(__dirname, 'src/style/global.scss')
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    //vueをtypescriptとして監視する
                    appendTsSuffixTo: [/\.vue$/]
                  }
            },
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                }
            },
            {
                test: /\.(wav|mp3)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'sounds/[name][ext]'
                }
            }
        ]
    },
    
    resolve: {
        extensions: ['.ts', '.js'],
        roots: [__dirname],
        alias: {
            '~game': path.resolve(__dirname, 'src/js/game'),
            'Images': path.resolve(__dirname, 'src/images')
        }
    },
};