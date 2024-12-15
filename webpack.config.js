const path = require('path'); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './source/index.js', // Точка входа для сборки проекта
    mode: 'development', // Режим сборки

    output: {
        filename: './dict/bundle.js', // Имя выходного файла сборки
        path: path.resolve(__dirname, 'dist'), // Путь для выходного файла сборки
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/, // Регулярное выражение для обработки файлов с расширением .css
                use: ['style-loader', 'css-loader'],
            }, // Загрузчики, используемые для обработки CSS-файлов
            {
                test: /\.(jpg|png|svg|jpeg|gif)$/,
                type: 'asset/resource'
            }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './source/index.html',
        }),
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Каталог для статики
        },
        open: true, // Автоматически открывать браузер
    },
};