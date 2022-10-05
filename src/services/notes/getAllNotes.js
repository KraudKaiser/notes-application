import axios from "axios" //dependencia que hace lo mismo que un fetch. ALGO mas claro
const baseUrl = "http://localhost:3001/api/notes"
export const getAllNotes = () => {
	const req = axios.get(baseUrl)
	return req.then(res => res.data)
}
