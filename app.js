

class Note {
    constructor(id, title, text) {
        this.id = id;
        this.title = title;
        this.text = text;
    }
}


class App {
    constructor() {
        this.notes=[];

    }

    addEventListeners() {

    }

    addNote(id, {title,text}) {
        const newNote = new Note(id, title, text);
        this.notes =[...this.notes, newNote]
    }
    editNote(id,{title, text}) {
        this.notes = this.notes.map((note) => {
            if (note.id == id) {
                note.title = title
                note.text = text
            }
            return note;
        })
    }

    deleteNote(id) {
        this.notes = this.notes.filter((note) =>note.id != id)
    }
    displayNotes() {
        this.notes.map((note) => 
        console.log(`
            ID: ${note.id}
            ID: ${note.id}
            ID: ${note.id}
        `)

        );
    }
}

const app = new App();
