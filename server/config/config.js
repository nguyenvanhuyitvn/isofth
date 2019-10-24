const fs = require('fs');


var now = new Date();
now = now.toLocaleDateString();
//document.getElementById("demo").innerHTML = now;


fs.readFile(__dirname + '/../config/config.json', function(err, content) {
    if (err) throw err;
    var parseJson = JSON.parse(content);
    var str = parseJson.development.database;
    //var str = "develop_dhy_reduce_2019_10_06_21_12";

    var a = str.slice(19, 29);
    var arr = a.split('_');
    var date = new Date(arr[0], arr[1] - 1, arr[2]);
    var now1 = now.split('/');
    var now2 = now1[2] + "_" + now1[0] + "_" + now1[1];

    date = date.toLocaleDateString();
    console.log(date)
    console.log(now)
    if (date !== now) {
        str = str.replace(a, now2);
        parseJson.development.database = str;
        fs.writeFile(__dirname + '/../config/config.json', JSON.stringify(parseJson), function(err) {
            if (err) throw err;
        })

    }

})