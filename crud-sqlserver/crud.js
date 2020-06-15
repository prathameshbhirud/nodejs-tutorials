var sqlInstance = require('mssql');

var setUp = {
    server: '(localdb)\\MSSQLLocalDB',
    database: 'Test',
    port: 1433,
    options: {
        trustedConnection: true
    }
};

sqlInstance.connect(setUp);

// To retrieve all the data - Start  
new sqlInstance.Request()  
.query("select * from Student")  
.then(function (dbData) {  
    if (dbData == null || dbData.length === 0)  
        return;  
    console.dir('All the students');  
    console.dir(dbData);  
})
.catch(function (error) {  
    console.dir(error);  
});  
// To retrieve all the data - End  