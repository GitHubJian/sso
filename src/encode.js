const NodeRsa = require('node-rsa');
const base64 = require('js-base64').Base64;

const PRIVATE_KEY_PEM =
  '-----BEGIN RSA PRIVATE KEY-----' +
  '\n' +
  'MIIEpAIBAAKCAQEAioyKUZT4nlKXG8sjihdlvB6ZmdLmFioUv/sHlf9kmYjbqPxZ' +
  '\n' +
  'krwtLIw5XQmk3kRn3uua8Rk4Qh/Qn/vF0oFtWPO6sS3wxGKJZcrrFF3Wz9l5SAYw' +
  '\n' +
  'K++DWzpxRqSWtJ6qrDw0UZuWZ8SKG8E8GVRBA6FChu9pyC386ql7nts4TZFWy3nY' +
  '\n' +
  '9ycGbXL8Imhd1UWujtiqzP7vEkkzCb+nDo1ULKs06UkqWVDUTJza5OTDntvZ5ZiZ' +
  '\n' +
  'RjfsVhIW/sS0+TO5gat0QCxkRoEdmic0Mz3P8H0PKzHbXp4wuDkLhE4snPyQsiAl' +
  '\n' +
  '37ZnXeB/51mNFlF7ewvTmk3zS0THrJqXpeGjRQIDAQABAoIBAAMsVtqpe8w8fgN/' +
  '\n' +
  '8o9uG8FkPgZc4zIswo7nE/RmhgpSLR3Asdh/gNVdXM75spH4pRxg7wqIllZFXkTb' +
  '\n' +
  'wlsg5b08z9DRCYul6hmvvRSZVZsrEvEIW0AWWz7SpteEW4NFgwkw083ur1IvGS6r' +
  '\n' +
  'jVHTMS4BGoH2p8iS7RD+0rr/sFluavEzkf4hv4Mkunbum76i8VYngu15kkaOnXd7' +
  '\n' +
  'tI3rhb1Ci4a8AiNzWCT/h+6QUD8flCYmJcEyOpeXg++k3nrCUb1GxkL2H7Q76fky' +
  '\n' +
  'FIaOXmx7JI2U3KeSfVEMxL8S9pUUA0vl/1N3N4S55DjI5crU0NSHM3vewk8O4+gX' +
  '\n' +
  'B06Ggx0CgYEA5LcQxXKHWVzkjN4lTSUV28wB5YzC+k6CIVw2u9ko/qyAcqe1cpAe' +
  '\n' +
  'jvuV4P71QZDizWRW5qjCjcg5jReLS8G4sWzKIQSWr8s29yQwrwdY1kJ87b9dp3DU' +
  '\n' +
  '+rGpzaDBHdnyL1cwsox+XA3AsT3mpMkauJpreA9+3kyueqIB/iW1tQ8CgYEAmxPP' +
  '\n' +
  't0y6AHvLDDu4zUct86lILJu8bM/nz6g35lORE7ROyC2H+LA2mojaeUj8KUrj2pRO' +
  '\n' +
  '2MKkTrkl4TL7plaOOBNtmTRbF4MHmWURr4fXKfjG0aZB/6pkmo9UGDk31vvnWmCv' +
  '\n' +
  'HR3p7wLLOM0S9U9T0B82yINvB7j3sVR04uodqmsCgYEAgi+R5FHkqQEvNt/b66WI' +
  '\n' +
  'Y6wkCD2vXjsB52tN3G8n3o7iLmE37xYJzul1zrRRdhi6gJ70uCanV3z5BU65g02p' +
  '\n' +
  'i5SZGWI7Q6UwjEyVSYutDYibA9lBveWD1Y77UIiIZC2CpV/D4F4ILu3FGR5bAsFV' +
  '\n' +
  '7G45bgWj+XU8e6Fr8PYWEBECgYAi1zyfrflMCoP/55sJY6iLSckRXJvkxoEKQnzs' +
  '\n' +
  'nnHFv4jDqJcX5F8gMQcEoMUmcdDnVtKwGGrZ1PcRtWacZG3nY1YISZ79lU6rw+1J' +
  '\n' +
  'Rnes0lu41mWVjy6zGuiF2LUW89lykK5HGGVqcXI+/LP5sSzfYWPpgL39Oi1MBfGM' +
  '\n' +
  '2ZR4qQKBgQDbIB0iqMH3f/hi0vLE3y+uDbramfrSOfaOKHxNRkQmy2n6Ux+FBKEh' +
  '\n' +
  'NmLCYUuRtoLaL4EOKxydKByqgXGKovyrdMocKJO1wOkeHGMaER3Kq47U+YChqjO+' +
  '\n' +
  'BB3VS4EZFkXdrP+DakJ/h9jVXz6rNoqZjuK/ThVkaWWiItwhYy+qSQ==' +
  '\n' +
  '-----END RSA PRIVATE KEY-----';

var key = new NodeRsa(PRIVATE_KEY_PEM);

var obj = { uid: 'zhangsan', ts: 1433503059910, name: '张三', uno: '111111' };

var token = key.encryptPrivate(JSON.stringify(obj), 'base64');

// token = base64.toBase64(token.toString('utf-8'));

var ptoken = encodeURIComponent(token);

// console.log(ptoken);

// ptoken = `E%2FDhuXAcVSOUsAdcxjw72a%2FttF2wociIF5wjTA0q1FZJIOV7fAQEsVEEHBrF7rVgAOipoJDuc%2BWYnD%2BZzTzR1V7qmBRIp%2BQYnfkGm3QG0JKnjIxG%2BUMAewySgvkE%2FlUR%2FWjmqPUbQ6lv9Oqf3ECftTz8MNr6gi5LRgrHewbWFp4nilgJlw3FrkXTlxylTLnkdF7yi41csnY4xPsAk3gRl5kQCre7IMQM84jgiP%2FCV06gy4yZ6CSiFuKKsHJASixHkS3IEeV2NffS313iO4orjbHv7m4CQ6DlthMOGYVoKdCQoZPE0hDYCdyp8oR4mYIDbfAk%2F4MR3D6aC2I6vLYeig%3D%3D`;

module.exports = ptoken;
