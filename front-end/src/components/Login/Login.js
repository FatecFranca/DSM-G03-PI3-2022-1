import React from 'react'
import './Login.css';
/*
function initialState() {
  return {user: '',
          password: ''}
}
*/
function Login({user, password}) {
  console.log("Usuário: "+user)
  console.log("Password: "+password)
  return(
    <a href="/home">Entrar</a>
  )
 
}
/*
const Userlogin = () => {
  const [values, setValues] = useState(initialState)


function onChange(event){
  const {value, name} = event.target
  setValues(initialState)
}

function onSubmit(){
  event.preventDefault()

  Login(values)

  console.log("Voltei")
}
return(
  <div>
    onSubmit=
  </div>
)
}
*/
export default Login;
