import { useState } from 'react';
import type { RegisterData } from '../../interfaces/RegisterData';
import { RegisterAPI } from '../../services/MercadoFacilAPI';
import './Cadastro.css';

const Cadastro = () => {
    const [registerData, setRegisterData] = useState<RegisterData>({
        name: '',
        email: '',
        password: '',
        role: '',
        addresses: [{
            street: '',
            number: '',
            complement: '',
            district: '',
            city: '',
            state: '',
            country: '',
            zipCode: '',
            neighborhood: ''
        }],
        observedShares: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setRegisterData({
            ...registerData,
            [name]: value
        });
    };

    const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setRegisterData({
            ...registerData,
            addresses: [{
                ...registerData.addresses[0],
                [name]: value
            }]
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await RegisterAPI(registerData);
            if (response.status === 201) {
                alert("Cadastro realizado com sucesso!");
            } else {
                alert("Erro ao cadastrar. Tente novamente.");
            }
        } catch (e: Error | any) {
            console.error("Register error:", e.message);
        }
    };

    return (
        <div className="cadastro-container">
            <h3>Cadastro - Mercado Fácil</h3>
            <form className="cadastro-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nome" value={registerData.name} onChange={handleChange} />
                <input type="email" name="email" placeholder="E-mail" value={registerData.email} onChange={handleChange} />
                <input type="password" name="password" placeholder="Senha" value={registerData.password} onChange={handleChange} />
                <input type="text" name="role" placeholder="Função" value={registerData.role} onChange={handleChange} />

                <h4>Endereço</h4>
                <input type="text" name="street" placeholder="Rua" value={registerData.addresses[0].street} onChange={handleAddressChange} />
                <input type="text" name="number" placeholder="Número" value={registerData.addresses[0].number} onChange={handleAddressChange} />
                <input type="text" name="complement" placeholder="Complemento" value={registerData.addresses[0].complement} onChange={handleAddressChange} />
                <input type="text" name="district" placeholder="Bairro" value={registerData.addresses[0].district} onChange={handleAddressChange} />
                <input type="text" name="city" placeholder="Cidade" value={registerData.addresses[0].city} onChange={handleAddressChange} />
                <input type="text" name="state" placeholder="Estado" value={registerData.addresses[0].state} onChange={handleAddressChange} />
                <input type="text" name="country" placeholder="País" value={registerData.addresses[0].country} onChange={handleAddressChange} />
                <input type="text" name="zipCode" placeholder="CEP" value={registerData.addresses[0].zipCode} onChange={handleAddressChange} />
                <input type="text" name="neighborhood" placeholder="Região" value={registerData.addresses[0].neighborhood} onChange={handleAddressChange} />

                <input type="text" name="observedShares" placeholder="Observações" value={registerData.observedShares} onChange={handleChange} />

                <button type="submit" className="submit-button">Cadastrar</button>
            </form>
        </div>
    );
};

export default Cadastro;