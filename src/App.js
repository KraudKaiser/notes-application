import {Note} from "./components/Note.js"

const notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2019-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      date: "2019-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2019-05-30T19:20:14.298Z",
      important: true
    }
  ]
 //definimos un array con objetos de notas




const App = () => {

	return (
		<div>
			{
				notes.map(note => <Note key={note.id} content={note.content} date={note.date}/>)
			}
		</div>
	) // Devolvemos en App un map que tome cada nota y en usamos el componente Note, pasandole los parametros de content, date y id para la key
} // la key debe usarse solamente donde se este renderizando. no al modelar el componente
export default App;
