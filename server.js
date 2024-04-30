const fs=require('fs');


fs.writeFile('textfile.txt',"this is line one in textfile.",()=>{
    console.log("filecreated successfully...")
})

fs.appendFile('textfile.txt',"\nThis is line second  in textfile.",()=>{
    console.log("file append");
})

fs.readFile('textfile.txt','utf8',(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
})