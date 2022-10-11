import React, {useState} from "react"

export default function Togglable({children, buttonLabel}){
	const [visible, setVisible] = useState(false)
 // cargamos un estado para ver si el formulario de login es visible o no
	const hiddenWhenVissible = {display:visible ? "none" : ""}
	const showWhenVissible = {display:visible ? "" : "none"}
	// y tenemos unas constantes para los estilos de los dos divs de abajo
	
	return(
		<div>
			<div style={hiddenWhenVissible}> 
				<button onClick={() => setVisible(true)}>{buttonLabel}</button>
			</div>

			<div style={showWhenVissible}>
				{children}
				<button onClick={() => setVisible(false)}> Cancel</button>
			</div>
		</div>
		
	)
}
// creamos un Toggable. El cual permite reutilizar codigo de una manera ordenada con la propiedad children.