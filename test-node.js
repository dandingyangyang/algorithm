
const http = require('http');
const { spawn } = require('child_process');

const server = http.createServer((req, res) => {
  console.log(`process.pid:${process.pid}`);
  console.log(`process.ppid:${process.ppid}`);
  console.log(`process.cwd:${process.cwd()}`);
  console.log(`process.platform:${process.platform}`);
  res.end('hello');
});
server.listen(4000, () => {
  process.title = '哈哈'
  console.log(1111);
});

const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`子进程退出，退出码 ${code}`);
});