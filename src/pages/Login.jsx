import Navbar from './Navbar'
import Footer from './Footer'
import '../Reset.css'
import '../App.css'

function botao(){

    let emailcerto = "fiap.com"
        let senhacerto = "floricultura"
    
        let email = document.querySelector("#email").value
        let senha = document.querySelector("#senha").value
        if(email == emailcerto && senha == senhacerto){
          alert("Bem Vindo(a)")
        }else{
          alert("senha ou email inválidos")
        }


}

function Login() {


    return (
        <>
            <Navbar/>
            <div className='divlogin'>
                <section className='login'>
                        <h1>Acessar</h1>
                        <input type="email" name="email" id="email" placeholder=' Email ou Login'/>
                        <input type="password" name="senha" id="senha" placeholder=' Senha'/>
                        <button className='LoginBtn' onClick={botao}>Login</button><br />
                        <h3 className='Cadastro'>cadastre-se</h3>
                </section>
            </div>
            <Footer/>
        </>
    )
}

export default Login