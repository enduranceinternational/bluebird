const fs = require('fs');
const args = process.argv.slice(2);
const dir = args[0] || './src/components';

fs.readdir(dir, (err, items) => {
  if (!err)
    items.map(item =>
      console.log(`export ${item.split('.')[0]} from './components/${item}';`),
    );
});
