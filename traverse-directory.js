var fs = require("fs");

var traverseDirectory = function traverseDirectory(dir, filelist) {
    var files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function(file) {
        if (fs.statSync(dir + file).isDirectory() && file.charAt(0) != '.') {
            filelist = traverseDirectory(dir + file + '/', filelist);
        }
        else if(file.charAt(0) != '.'){
            filelist.push(dir + file);
        }
    });
    return filelist;
};

( module || {} ).exports = traverseDirectory;
