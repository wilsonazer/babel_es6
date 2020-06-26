"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.get('/', (req, res) => {
  res.send("<h1>tudo funcionando na porta 3333</h1>");
});
app.listen(3333, () => {
  console.log("executando!");
});