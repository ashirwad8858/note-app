
const fs = require('fs')
const chalk = require('chalk')

const getnotes = () => { return "Your notes"; }

const addnote = (title,body)=>{
    const notes = loadnote()
    // const duplicate = notes.filter((note)=>{
    //     return note.title===title
    // })
    const duplicate = notes.find((note)=>{
        return note.title===title
    })

    debugger
    // if(duplicate.length === 0){
    if(!duplicate){
        notes.push({
            title:title,
            body:body
        })
        debugger
        savenote(notes)
        console.log("New notes added")
    }else{
        console.log("Note title taken");
    }

    
}

const savenote = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadnote = ()=>{

    try{
        const datdbuffer = fs.readFileSync('notes.json');
    const dataJSON = datdbuffer.toString();
    const data  = JSON.parse(dataJSON);
    return data

    }catch(e){
        return []

    }

}

const removeNote = (title)=>{
    // console.log(title);
    const notes = loadnote()
    console.log("notes: ",notes);

    const notesToKeep = notes.filter((note)=>{
        return note.title !==title
    })

    if(notes.length > notesToKeep.length){
        console.log(chalk.green('Notes remove'));
    savenote(notesToKeep)

    }else{
        console.log(chalk.red('No note found'));

    }

    console.log(notesToKeep)

}

const listNotes = ()=>{
    const notes = loadnote()
    notes.forEach(element => {
        console.log(element.title)
    });
}

const readNotes = (titile)=>{
    const notes = loadnote()
    const note = notes.find((n)=>{
        return n.title === titile
    })
   if(note){
       console.log(chalk.white.inverse(note.body))
   }else{
       console.log(chalk.red('Note not found'))
   }
}

module.exports = {
    getnotes: getnotes,
    addnote: addnote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNotes:readNotes
};