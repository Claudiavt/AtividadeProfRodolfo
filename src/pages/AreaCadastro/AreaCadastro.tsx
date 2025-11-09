import NavBar from '../../components/NavBar/NavBar';
import Cadastro from '../../components/Cadastro/Cadastro';

const AreaCadastro = () => {
    return (
        <>
            <div className='background'>
                <NavBar />
                <div className='content'>
                    <h2>Área de Cadastro</h2>
                    <Cadastro />
                </div>
            </div>
        </>
    );
};

export default AreaCadastro;