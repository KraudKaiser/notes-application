import {useState, useEffect} from "react" //useEffect se utiliza cada vez que se renderiza nuestro componente
import {Note} from "./components/Note.js"
import { createNote } from "./services/notes/createNote.js"
import { getAllNotes } from "./services/notes/getAllNotes.js"



const App = () => { //declaramos las props para recibir las notas del index.js

	const [notes, setNotes] = useState([]) //el valor inicial del useState son todas las notas del Index
	const [newNote, setNewNote] = useState("")
	const [loading, setLoading] = useState(false)

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	useEffect(() => {
		setLoading(true)
		getAllNotes().then((notes) =>{
			setNotes(notes)
			setLoading(false)
		})
			
	}, []) // en este useEffect decimos que mientras esta tomamndo el fetch de posts, un SetLoading esta en true. Que pone un texto de "cargando"

	

	const handleChange = (event) =>{
		setNewNote(event.target.value) // guardamos en setNewNote el event.target.value para poder pasarselo a newnote luego
	} 
	//input recibe una variable OnChange que usa este handle change. Manejando que hacer cuando algo cambia en el input


	const handleNoteChange = (event) =>{
		event.preventDefault()

		const noteToAddToState = {
			title: newNote,
			body: newNote,
			userdId: 1
		}
		createNote(noteToAddToState)
		.then(nota => {
			setNotes((prevNotes) => prevNotes.concat(nota))
		})
		.catch((e) =>{
			console.error(e)
		})

		setNewNote("") //simplemente reseteamos el input
	}

	const handleSubmit = (event) =>{
		event.preventDefault()

		console.log("this is submit")
	}

	return (
		<div>
			<h1>Notes</h1>
			{ loading ? "Cargando..." : ""}
		<form onSubmit={handleSubmit}>
			<input
			type="text"
			value={username}
			name="Username"
			placeholder="Username"
			onChange={({target}) => setUsername(target.value)}
			/>
			<input
			type="text"
			value={password}
			name="Password"
			placeholder="Password"
			onChange={({target}) => setPassword(target.value)}
			/>
			<button>
				Login
			</button>
		</form>
			{
				notes
				.map(note => <Note key={note.id} {...note}/>)
			} 
			<form onSubmit={handleNoteChange}>
				<input type="text" onChange={handleChange} value={newNote}/>   
				<button>Crear Nota</button>
			</form>
		</div> 
	) // Devolvemos en App un map que tome cada nota y en usamos el componente Note, pasandole los parametros de content, date y id para la key
} // la key debe usarse solamente donde se este renderizando. no al modelar el componente
export default App;
