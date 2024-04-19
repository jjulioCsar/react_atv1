import Body from "../Fundo/Body";
import imgDesktop from '../assets/images/imagemfundo.png'
import Login from "../Login/Login"

const App = () =>{
  return(
    <section>

      <Body 
      imagem={imgDesktop}
      titulo="fundo"
      
      />
      
      <Login 
      />

    </section>


  )
}

export default App;
