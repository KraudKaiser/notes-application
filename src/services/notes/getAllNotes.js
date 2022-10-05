import axios from "axios" //dependencia que hace lo mismo que un fetch. ALGO mas claro

export const getAllNotes = () => {
	return axios.get("https://jsonplaceholder.typicode.com/posts")
	.then((res) =>{
		const {data} = res
		return data
	})
}
