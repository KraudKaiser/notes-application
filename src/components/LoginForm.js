import React from "react"
import Togglable from "./Togglable"
export default function LoginForm({handleSubmit, ...props}) {

	return (
		<Togglable buttonLabel="Show Login">
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
		</Togglable> 
	)
	
  }