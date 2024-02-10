import React, { useState } from 'react'
import axios from 'axios'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Swal from 'sweetalert2'

const CustomerForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        status: '',
        birth: '',
        cep: '',
        address: '',
        number: '',
        complement: '',
        state: '',
        city: ''
    });

    const [serverMessage, setServerMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/customer', formData);
            const responseData = response.data;
            const customerAge = (new Date().getFullYear() - new Date(formData.birth).getFullYear()) - 1;

            setServerMessage(responseData.message); 
            serverMessage ? serverMessage : 'Cadastro realizado';

            


            if (responseData.daysUntilNextBDay !== null) {
                const birthMessage = responseData.daysUntilNextBDay === 365 ? `Hoje é o seu dia, feliz aniversário! Completando ${customerAge + 1} ${customerAge == 1 ? 'Ano' : 'Anos'}` : `Faltam ${responseData.daysUntilNextBDay} dias para o próximo aniversário! Atualmente o usuário tem ${customerAge} ${customerAge == 1 ? 'Ano' : 'Anos'}`;

                Swal.fire({
                    title: serverMessage,
                    text: birthMessage,
                    icon: 'success',
                    confirmButtonText: 'Confirmar'
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                })
            } else {
                Swal.fire({
                    title: 'Cadastro realizado!',
                    text: responseData.message + ' ' + serverMessage,
                    icon: 'success',
                    confirmButtonText: 'Confirmar'
                })
            }
        } catch (error) {
            console.log(error);

            Swal.fire({
                title: 'Oooops!',
                text: 'Ocorreu um erro ao cadastrar o usuário... ' + serverMessage,
                icon: 'error',
                confirmButtonText: 'Continuar'
            })
        }
    };

    const handleCancel = () => {
        Swal.fire({
            title: 'Cancelar Cadastro',
            text: 'Você realmente deseja cancelar o cadastro? todo o progresso será perdido!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#000',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                setFormData({
                    name: '',
                    gender: '',
                    status: '',
                    birth: '',
                    cep: '',
                    address: '',
                    number: '',
                    complement: '',
                    state: '',
                    city: ''
                });
            }
        })
    }

    return (
        <form className="flex flex-wrap w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col w-1/2 gap-2 mb-2 items-end">
                <label className="w-2/3 mr-4" htmlFor="name">Nome Completo</label>
                <Input className="w-2/3 mr-4" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
            </div>
            <div className="flex flex-col w-1/2 gap-2 mb-2 items-start">
                <label className="w-2/3 ml-4" htmlFor="gender">Gênero</label>
                <select className="w-2/3 ml-4 h-9 rounded-md px-4 bg-white border" name="gender" id="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Selecione uma opção</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Outro">Outro</option>
                </select>
            </div>
            <div className="flex flex-col w-1/2 gap-2 mb-2 items-end">
                <label className="w-2/3 mr-4" htmlFor="status">Estado Civil</label>
                <select className="w-2/3 mr-4 h-9 rounded-md px-4 bg-white border" name="status" id="status" value={formData.status} onChange={handleChange} required>
                        <option value="">Selecione uma opção</option> 
                        <option value="Solteiro">Solteiro</option>
                        <option value="Casado">Casado</option>
                        <option value="Divorciado">Divorciado</option>
                        <option value="Viúvo">Viúvo</option>
                        <option value="Outro">Outro</option>
                </select>
            </div>
            <div className="flex flex-col w-1/2 gap-2 mb-2 items-start">
                <label className="w-2/3 ml-4" htmlFor="birth">
                    Data de Nascimento <span className="text-xs font-thin italic">(DD/MM/YY)</span>
                </label>
                <Input type="date" className="w-2/3 ml-4" id="birth" name="birth" value={formData.birth} onChange={handleChange} required/>
            </div>
            <div className="flex flex-col w-1/2 gap-2 mb-2 items-end">
                <label className="w-2/3 mr-4" htmlFor="cep">CEP</label>
                <Input className="w-2/3 mr-4" type="text" id="cep" name="cep" value={formData.cep}  onChange={handleChange} required/>
            </div>
            <div className="flex flex-col w-1/2 gap-2 mb-2 items-start">
                <label className="w-2/3 ml-4" htmlFor="address">Endereço</label>
                <Input className="w-2/3 ml-4" type="text" id="address" name="address" value={formData.address} onChange={handleChange} required/>
            </div>
            <div className="flex flex-col w-1/2 gap-2 mb-2 items-end">
                <label className="w-2/3 mr-4" htmlFor="number">Número</label>
                <Input className="w-2/3 mr-4" type="number" id="number" name="number" value={formData.number} onChange={handleChange}/>
            </div>
            <div className="flex flex-col w-1/2 gap-2 mb-2 items-start">
                <label className="w-2/3 ml-4" htmlFor="complement">Complemento</label>
                <Input className="w-2/3 ml-4" type="text" id="complement" name="complement" value={formData.complement} onChange={handleChange} required/>
            </div>
            <div className="flex flex-col w-1/2 gap-2 mb-2 items-end">
                <label className="w-2/3 mr-4" htmlFor="state">Estado</label>
                <select className="w-2/3 mr-4 h-9 rounded-md px-4 bg-white border" name="state" id="state" value={formData.state} onChange={handleChange} required>
                        <option value="">Selecione uma opção</option>
                        <option value="SP">SP</option>
                        <option value="RJ">RJ</option>
                        <option value="MG">MG</option>
                        <option value="RS">RS</option>
                        <option value="SC">SC</option>
                </select>
            </div>
            <div className="flex flex-col w-1/2 gap-2 mb-2 items-start">
                <label className="w-2/3 ml-4" htmlFor="city">Cidade</label>
                <Input className="w-2/3 ml-4" type="text" id="city" name="city" value={formData.city} onChange={handleChange} required/>
            </div>
            
            <div className="flex justify-end w-1/2 mt-4">
                <Button className="w-2/3 h-12 mr-4 bg-green-500 hover:bg-green-600" type="submit">
                    Cadastrar
                </Button> 
            </div>
            <div className="flex justify-start w-1/2 mt-4">
                <Button className="w-2/3 h-12 ml-4 bg-red-500 hover:bg-red-600" type="button" onClick={handleCancel}>
                    Cancelar
                </Button>
            </div>
        </form>
    );
};

export default CustomerForm;
