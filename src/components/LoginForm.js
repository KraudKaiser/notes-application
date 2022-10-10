import React, {useState} from "react"

export default function LoginForm({handleSubmit, ...props}) {

	const [loginVisible, setLoginVisible] = useState(false)
 // cargamos un estado para ver si el formulario de login es visible o no
	const hiddenWhenVissible = {display:loginVisible ? "none" : ""}
	const showWhenVissible = {display:loginVisible ? "" : "none"}
	// y tenemos unas constantes para los estilos de los dos divs de abajo
	return(
		<div>
			
			<div style={hiddenWhenVissible}> 
				<button onClick={() => setLoginVisible(true)}> Show Login</button>
			</div>

			<div style={showWhenVissible}>
				<form onSubmit={handleSubmit}>
					<div>
						<input 
							type="text"
							value={props.username}
							placeholder='Username'
							name='Username'
							onChange={props.handleUsernameChange}
						/>
					</div>
					<div>
						<input 
							type="password"
							value={props.password}
							placeholder='Password'
							name='Password'
							onChange={props.handlePasswordChange}
						/>
					</div>
					<button>
						Login
					</button>
				</form>
				<button onClick={() => setLoginVisible(false)}> Cancel</button>
			</div>
		</div> 
	)
	
  }