import React, {useState, useRef} from "react"
import Togglable from "./Togglable"
//useRef permite es guardar en un objeto una referencia que no va a cambiar mientras renderizamos
export default function NoteForm({addNote, handleLogout}){ //creamos NoteForm para poder controlar las notas que se crean. Fuera de app
	const [newNote, setNewNote] = useState('')
	const togglableRef = useRef()
	const handleChange = (event) =>{
		setNewNote(event.target.value)
	} //Handle que guarda cuando se escribe algo en el imput

	const handleSubmit = (event) =>{
		event.preventDefault()
		
		const noteObject = {
			content: newNote,
			important: Math.random() > 0.5
		}

		addNote(noteObject)
		setNewNote("")
		togglableRef.current.toggleVisibility()
	} //HandleSubmit que controla que se envie las notas. Trabajando en conjunto con addNote en App.js
	return (
		<Togglable buttonLabel="New Note" ref={togglableRef}>
		<h3>Creá una nueva nota</h3>
		<form onSubmit={handleSubmit}>
        	<input
				placeholder='Write your note content'
          		value={newNote}
          		onChange={handleChange}
        	/>
        	<button type="submit">Save</button>
      </form>
	  <div>
			<button onClick={handleLogout}>
				Logout
			</button>
	  </div>
	  </Togglable>
	)
}