import path from 'path';

console.log(path.dirname(process.cwd()));
console.log(path.dirname('/a/b/c'));
console.log(process.cwd());

console.log(path.basename('a/b/c.js'));
console.log(path.basename('a/b/c.js','.js'));
console.log(path.basename('a/b/c.js', 'js'));
console.log(path.basename('a/b/c.js', 's'));
console.log(path.extname('/a/b/c.js'));
console.log(path.normalize('/a/b//c//d/e/..'));
console.log(path.parse('/home/user/dir/file.txt'));