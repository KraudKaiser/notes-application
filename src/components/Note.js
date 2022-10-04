export const Note = ({id, content, date}) =>{
	return <div>
		<p>
			{content}
		</p>
		<time>{date}</time>
	</div>
} // creamos un componente de NOtas que recibe como parametro el id, contenido y fecha de la nota que reciba

