import React, {useState, forwardRef, useImperativeHandle} from "react"
//Forward Ref es un useRef especial para conectar componentes con referencias.
//useImperativeHandle es un hook que se isa para definir funciones en un componente que se pueden invocar fuera del componente
//no cambia su valor a menos que aclares una dependencia. como un useeffect al final
const Togglable = forwardRef(({children, buttonLabel}, ref) =>{
	const [visible, setVisible] = useState(false)
 // cargamos un estado para ver si el formulario de login es visible o no
	const hiddenWhenVissible = {display:visible ? "none" : ""}
	const showWhenVissible = {display:visible ? "" : "none"}
	// y tenemos unas constantes para los estilos de los dos divs de abajo
	
	const toggleVisibility = () => setVisible(!visible)

	useImperativeHandle(ref, () => {
		return {
			toggleVisibility
		}
	}) //guardamos toggleVisibility para que se pueda usar fuera de Togglable
	return(
		<div>
			<div style={hiddenWhenVissible}> 
				<button onClick={toggleVisibility}>{buttonLabel}</button>
			</div>

			<div style={showWhenVissible}>
				{children}
				<button onClick={toggleVisibility}> Cancel</button>
			</div>
		</div>
		
	)
})
// creamos un Toggable. El cual permite reutilizar codigo de una manera ordenada con la propiedad children.

export default Togglable