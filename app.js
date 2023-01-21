

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
        // Authentication
        this.$app = document.querySelector("#app");
        this.$authContainer = document.querySelector("#firebaseui-auth-container");

        // signout btn
        this.$logoutButton = document.querySelector(".logout");
        
        this.ui = new firebaseui.auth.AuthUI(auth);
        this.manageAuth();

        this.addEventListeners();
      

    }
    manageAuth() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.redirectToApp();
            } else {
                this.redirectToAuth();
            }
          });
          
    }
    redirectToApp() {
        this.$authContainer.style.display = "none";
        this.$app.style.display = "block";
    }

    redirectToAuth() {
        this.$authContainer.style.display = "block";
        this.$app.style.display = "none";

        this.ui.start('#firebaseui-auth-container', {
            signInOptions: [
              firebase.auth.EmailAuthProvider.PROVIDER_ID,
              
            ],
            // Other config options...
          });
    }

    handleLogout() {
        firebase.auth().signOut().then(() => {
            this.redirectToAuth()
          }).catch((error) => {
            console.log("ERROR OCCURRED", error)
        
          });
          
    }
    addEventListeners() {
        this.$logoutButton.addEventListener("click", (event) =>{
            this. handleLogout();

        });

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
