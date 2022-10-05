import axios from "axios"
const baseUrl = "http://localhost:3001/api/notes"


export const createNote = ({title, body, userId}) =>{
	const req = axios.post(baseUrl, {title, body, userId})
	return req.then(res => res.data)
}