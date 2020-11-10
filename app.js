const note = require('./notes');
// const v = require('validator');
// const ch = require('chalk');
const yar = require('yargs');
const notes = require('./notes');

// console.log(getn());

// console.log(v.isEmail('ashirwad2@gmail.com'));
// console.log(ch.green.bold('Success'))
// console.log(ch.green.bold.inverse('Success'))

// console.log(process.argv);
// console.log(yar.argv);
//adding a a note
yar.command({
    command:'add',
    describe:'Will add a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'This is body',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv) => {
        
        console.log("Ttie: "+argv.title);
        console.log("Body of title: "+argv.body);   
        note.addnote(argv.title,argv.body);
    }
})


//removing a note
yar.command({
    command:'remove',
    describe:'Will remove a note',
    builder:{
        title:{
            describe:'Title of note',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        note.removeNote(argv.title)
    }
})

//listing all created notes
yar.command({
    command:'list',
    describe:'Will list all notes',
    handler:()=>{
        console.log('This is the all list');
        note.listNotes()

    }
})

//reading a notes
yar.command({
    command:'read',
    describe:'will read a note',
    builder:{
        title:{
            describe:'Titele',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        console.log("rading data form a npes");
        notes.readNotes(argv.title)
    }
})

// const fs = require('fs');

// fs.writeFileSync('fist.txt',"This is first file");
// fs.appendFileSync('fist.txt'," This is appeniding file")
// console.log(yar.argv);
yar.parse();