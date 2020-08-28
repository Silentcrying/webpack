/**
 * 服务器代码
 * 启动指令： 
 *   npm i nodemon -g
 *   nodemon server.js
 * 
 *   node server.js
 */

 const express = require('express');

 const app = express();

 // maxAge 有效期
 app.use(express.static('built', {maxAge: 1000 * 3600}));

 app.listen(3000, () => {
     console.log('服务启动')
 })