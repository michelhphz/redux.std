import app from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

    let firebaseConfig = {
        apiKey: "AIzaSyAAcTEXd7jKbmVrmr2viGE85XC2S7eANHs",
        authDomain: "blogstd-2b709.firebaseapp.com",
        databaseURL: "https://blogstd-2b709.firebaseio.com",
        projectId: "blogstd-2b709",
        storageBucket: "blogstd-2b709.appspot.com",
        messagingSenderId: "628502824662",
        appId: "1:628502824662:web:15e8d220caa5fe2d11ab77"
      } 

class Firebase
{
    constructor()
	{
        app.initializeApp(firebaseConfig)

        this.app = app.database()
    }
	
}

export default new Firebase()