var fs = require('fs');

//read file content
fs.readFile('TestFile.txt', function (err, data) {
    if (err) 
        throw err;
    console.log(data.toString());
});

//write to a file
fs.writeFile('test.txt', 'Hello World!', function (err) { 
    if (err)
        console.log(err);
    else
        console.log('Write operation complete.');
});

fs.appendFile('test.txt', '...........', function (err) { 
    if (err)
        console.log(err);
    else
        console.log('Append operation complete.');
});
