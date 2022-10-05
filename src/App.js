import {useState} from "react"
import {Note} from "./components/Note.js"





const App = (props) => { //declaramos las props para recibir las notas del index.js

	const [notes, setNotes] = useState(props.notes) //el valor inicial del useState son todas las notas del Index
	const [newNote, setNewNote] = useState("")
	const [showAll, setShowAll] = useState(true)

	const handleChange = (event) =>{
		setNewNote(event.target.value) // guardamos en setNewNote el event.target.value para poder pasarselo a newnote luego
	} 
	//input recibe una variable OnChange que usa este handle change. Manejando que hacer cuando algo cambia en el input


	const handleSubmit = (event) =>{
		event.preventDefault()

		const noteToAddToState = {
			id: notes.length + 1,
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random() < 0.5 //simple variable para que la mitad de elementos sean true y los otros false
		}
		setNotes(notes.concat(noteToAddToState)) //no hay que mutar en react. Por lo que a notes le agregamos la nota
		setNewNote("") //simplemente reseteamos el input
	}

	const handleShowAll = () =>{
		setShowAll(() => !showAll)
	} //una simple funcion. SI se toca el boton cambia el texto mostrado

	return (
		<div>
			<h1>Notes</h1>
			<button onClick={handleShowAll}>{showAll ? "Show only important" : "Show All"}</button>
			{
				notes
				.filter(note => {
					if(showAll === true){
						return note
					} else{
						return note.important === true
					}
				}) //filter para mostrar notas segun si show all o only esta activado 
				.map(note => <Note key={note.id} content={note.content} date={note.date}/>)
			} 
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={handleChange} value={newNote}/>   
				<button>Crear Nota</button>
			</form>
		</div> 
	) // Devolvemos en App un map que tome cada nota y en usamos el componente Note, pasandole los parametros de content, date y id para la key
} // la key debe usarse solamente donde se este renderizando. no al modelar el componente
export default App;
