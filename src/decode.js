const NodeRsa = require('node-rsa');
const hasha = require('hasha');
const base64 = require('js-base64').Base64;
const ptoken = require('./encode.js');

const PUBLIC_KEY_PEM =
  '-----BEGIN PUBLIC KEY-----' +
  '\n' +
  'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAioyKUZT4nlKXG8sjihdl' +
  '\n' +
  'vB6ZmdLmFioUv/sHlf9kmYjbqPxZkrwtLIw5XQmk3kRn3uua8Rk4Qh/Qn/vF0oFt' +
  '\n' +
  'WPO6sS3wxGKJZcrrFF3Wz9l5SAYwK++DWzpxRqSWtJ6qrDw0UZuWZ8SKG8E8GVRB' +
  '\n' +
  'A6FChu9pyC386ql7nts4TZFWy3nY9ycGbXL8Imhd1UWujtiqzP7vEkkzCb+nDo1U' +
  '\n' +
  'LKs06UkqWVDUTJza5OTDntvZ5ZiZRjfsVhIW/sS0+TO5gat0QCxkRoEdmic0Mz3P' +
  '\n' +
  '8H0PKzHbXp4wuDkLhE4snPyQsiAl37ZnXeB/51mNFlF7ewvTmk3zS0THrJqXpeGj' +
  '\n' +
  'RQIDAQAB' +
  '\n' +
  '-----END PUBLIC KEY-----';

var key = new NodeRsa(PUBLIC_KEY_PEM);

// var ptoken = `iAb7o/WYsF22c4gwgm/3+CNc5gb2ZyXFtwaRVEama8/z6EKwRrxostz/qvai8QhhtLlytUu1+XNkd/0yBkoDVw==`;

// var otoken = decodeURI(ptoken);

var otoken = decodeURIComponent(ptoken);

// token = base64.toBase64(otoken);

token = key.decryptPublic(otoken, 'utf-8');

console.log(token.toString());
