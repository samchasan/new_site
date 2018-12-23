const path = require('path');
const fs = require('fs');

let folderList = [];
var masterList = {};

const archive = path.join(__dirname, 'static');

loadDir(archive, list =>{
  // console.log(list)
  // masterList = []
  loadFiles(folderList, files => {
    // console.log(files);
      writeFiles(masterList, msg => {
      console.log(msg)
    })
  })
})

function loadDir(path,callback){
  // console.log(path)
  fs.readdir(path, function(err, folders) {

      for(let i = 0; i < folders.length; i++){
        if (folders[i] != '.DS_Store'){
        const folder = folders[i];
        folderList.push(folder);
      }
    }
    callback(folderList)
  })
}

function loadFiles(pathList, callback){
  for (let name of pathList){
      const fullPath = path.join(archive, name);
      // console.log(fullPath)
      fs.readdir(fullPath, function(err, items) {
        var result = '[';

// for all items in folder write them to a long array and make it a string
        for(let i = 0; i < items.length; i++){

          if(items[i] != '.DS_Store'){
          const file = items[i];
          result = result + "'" + file + "',";
          }
        }
          result = result + ']';
          masterList[name] = result;
          callback(masterList)
        })
      }
  }

function writeFiles(obj,callback){
  const fileToWrite = path.join(__dirname, 'photos.js');
  const contentToWrite = 'const photos =' + JSON.stringify(obj)

  fs.writeFile(fileToWrite, contentToWrite, function(err) {
    if(err) {
    callback("err")
    }
    else
    callback("The file was saved!")
  });
}
