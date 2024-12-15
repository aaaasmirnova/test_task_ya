# Тестовое задание

## Сборка webpack

```sh
$ npm init -y
```

Добавить в package.json:
```
"scripts": {
    "start": "webpack serve",
    "build": "webpack"
  },
```

Установите webpack, webpack-cli и webpack-dev-server
```sh
$ npm install webpack webpack-cli webpack-dev-server --save-dev
```

Установка loader's:
```sh
$ npm install style-loader css-loader sass-loader html-loader --save-dev
```

Установка html-webpack-plugin
```sh
$ npm install html-webpack-plugin --save-dev
```

В корне проекта создайте пустой файл webpack.config.js и добавьте туда код базовой конфигурации проекта.

Для запуска сервера разработки
```sh
$ npm start
```