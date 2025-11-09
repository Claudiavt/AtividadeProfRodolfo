import {useState} from 'react';
import type { LoginData } from '../../interfaces/LoginData';
import { LoginAPI } from '../../services/MercadoFacilAPI';
const Login = () => {
    const [loginData, setLoginData] = useState<LoginData>({
        email: '',
        password: ''
    });

    const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    }

    const handleSubmit = async (event: React.MouseEventHandler<HTMLButtonElement> | any) => {
        event.preventDefault();
        try{
            const response = await LoginAPI(loginData);
            if(response.data && response.status === 200){
                //alert("Login realizado com sucesso!");
                sessionStorage.setItem('token', response.data.token);
                //const testeRecuperaDado = sessionStorage.getItem('token');
                //console.log("Token armazenado no sessionStorage: ", testeRecuperaDado);
            } else {
                alert("Falha no login. Verifique suas credenciais.");
            }
        } catch(e: Error | any){
            console.error("Login error: ", e.message);
        }
    }

    return (
        <>
            <div className="login-container">                              
                <div className="spacer">
                    <h3>Mercado Fácil</h3>
                </div>
                <div className="LoginForm">
                    <form className="login-form-inline">
                        <input 
                            id = "text_mail"
                            type="text"
                            name="email"
                            placeholder="E-mail"
                            value={loginData.email}
                            onChange={handleLogin}
                        />
                    
                    <input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        value={loginData.password}
                        onChange={handleLogin}
                    />
                    <button 
                        className="submit-button" 
                        onClick={handleSubmit}>
                        Entrar
                    </button>
                </form>
                </div>
            </div>
        </>
    );
}
export default Login;
