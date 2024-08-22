const fs = require('fs');
const path = require('path');

const commandPath = path.join(__dirname, 'Command.txt');
// this listens to changes in the command.txt file
fs.watch(commandPath, (eventType, filename) => {
    if (eventType === 'change' && filename === 'Command.txt') {
        fs.readFile(commandPath , 'utf-8', (error, data)=>{
            if(error){
                console.log(error);
            }
            else{
                processData(data.trim())
            }
        } )

    }

})

function processData(data){
    const [Command, ... Cdm] = data.split(' ')
  
        if(Command === 'create' && Cdm[0] === 'a'&& Cdm[1] === 'file'){
            const fname = Cdm[2]
            fs.writeFile(fname, '', (error)=>{
                if(error){
                    console.log("error creating file")
                }
                else{
                    console.log("  file ${fname} created")
                }
              //  console.log("error creating file")
            }
        );
    
            
        }

   

  
    else if (Command === 'delete' && Cdm[0] === 'the' && Cdm[1] === 'file') {
        const fileName = Cdm[2];
        if (!fileName) {
            console.error('error: No file name provided.');
            return;
        }
        try{
            fs.unlink(fileName,
                (err) => {
                if (err) console.error('error deleting file:', err);
                else console.log(`File ${fileName} deleted.`);
            });

        }catch{
            console.log("error deleting file")
        }
      
      
   

}
else if(Command === 'rename' && Cdm[0] === 'the' && Cdm[1] === 'file'){
    const oldname = Cdm[2];
    const newname = Cdm[4];
    // if (!oldname || !newname) {
    //     console.error('error: No file name provided.');
    //     return;
    // }
    try{
        fs.rename(oldname, newname, (err) => {
            if (err) console.error('error renaming file:', err);
            else console.log(`File ${oldname} renamed to ${newname}.`);
        });

    }catch{
        console.log("error renaming file")
    }

   

}
else if (Command === 'add' && Cdm[0] === 'to' && Cdm[1] === 'the' && Cdm[2] === 'file') {
    const fileName = Cdm[3];
    const additionalText = Cdm.slice(4).join(' ');
    fs.appendFile(fileName, additionalText, (err) => {
      if (err) console.error('Error adding to file:', err);
      else console.log(`Added to file ${fileName}: "${additionalText}".`);
    });
  }
  else{
    console.log('unrecognized command:');

  }

}