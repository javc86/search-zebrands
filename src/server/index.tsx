import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

if (process.env.APP_ENV === 'dev') {
    const webpackConfig = require('../../webpack.config');
    const webpack = require('webpack');
    const middleware = require('webpack-dev-middleware');
    app.use(middleware(webpack(webpackConfig)));
}

app.use(cors());
app.use(bodyParser.json());

app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, process.env.APP_ENV === 'dev' ? '../../public/index.html' : '../public/index.html'));
});

app.listen((process.env.SERVER_PORT || 3000), () => {
    console.log('**************************************************');
    console.log('SERVER RUNNING ' + (process.env.SERVER_PORT || 3000));
    console.log('**************************************************');
});