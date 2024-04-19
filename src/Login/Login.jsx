import './Login.css'
const Login = ({texto, color}) => {
    return (
        <article style={color}>
          <p>{texto}</p>
        </article>
    )
}

export default Login;