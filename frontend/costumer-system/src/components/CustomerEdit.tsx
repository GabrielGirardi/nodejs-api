import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface CustomerEditProps {
    name: string;
    gender: string;
    status: string;
    birth: string;
    cep: string;
    address: string;
    number: string;
    complement: string;
    state: string;
    city: string;
}

const CustomerEdit: React.FC<CustomerEditProps> = ({
    name,
    gender,
    status,
    birth,
    cep,
    address,
    number,
    complement,
    state,
    city,
}) => {
    return (
        <form className="flex flex-wrap w-full">
            <div className="flex flex-col w-1/2 gap-2 mb-2 items-end">
                <label className="w-2/3 mr-4" htmlFor="name">Nome Completo</label>
                <Input className="w-2/3 mr-4" type="text" value={name}/>
            </div>
            <div className="flex flex-col w-1/2 gap-2 mb-2 items-start">
                <label className="w-2/3 ml-4" htmlFor="gender">Gênero</label>
                <select className="w-2/3 mr-4 h-9 rounded-md px-4 bg-white border" value={gender}>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Outro">Outro</option>
                </select>
            </div>
            <div className="flex flex-col w-1/2 gap-2 mb-2 items-end">
                <label className="w-2/3 mr-4" htmlFor="status">Estado Civil</label>
                <select className="w-2/3 mr-4 h-9 rounded-md px-4 bg-white border" value={status}>
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
                <Input type="date" className="w-2/3 ml-4" value={birth}/>
            </div>
            <div className="flex flex-col w-1/2 gap-2 mb-2 items-end">
                <label className="w-2/3 mr-4" htmlFor="cep">CEP</label>
                <Input className="w-2/3 mr-4" type="text" value={cep}/>
            </div>
            <div className="flex flex-col w-1/2 gap-2 mb-2 items-start">
                <label className="w-2/3 ml-4" htmlFor="address">Endereço</label>
                <Input className="w-2/3 ml-4" type="text" value={address}/>
            </div>
            <div className="flex flex-col w-1/2 gap-2 mb-2 items-end">
                <label className="w-2/3 mr-4" htmlFor="number">Número</label>
                <Input className="w-2/3 mr-4" type="number"value={number}/>
            </div>
            <div className="flex flex-col w-1/2 gap-2 mb-2 items-start">
                <label className="w-2/3 ml-4" htmlFor="complement">Complemento</label>
                <Input className="w-2/3 ml-4" type="text" value={complement} />
            </div>
            <div className="flex flex-col w-1/2 gap-2 mb-2 items-end">
                <label className="w-2/3 mr-4" htmlFor="state">Estado</label>
                <select className="w-2/3 mr-4 h-9 rounded-md px-4 bg-white border" value={state}>
                        <option value="SP">SP</option>
                        <option value="RJ">RJ</option>
                        <option value="MG">MG</option>
                        <option value="RS">RS</option>
                        <option value="SC">SC</option>
                </select>
            </div>
            <div className="flex flex-col w-1/2 gap-2 mb-2 items-start">
                <label className="w-2/3 ml-4" htmlFor="city">Cidade</label>
                <Input className="w-2/3 ml-4" type="text" value={city}/>
            </div>
            <div className="flex justify-end w-1/2 mt-4">
                <Button className="w-2/3 h-12 mr-4 bg-green-500 hover:bg-green-600" type="submit">
                    Salvar
                </Button> 
            </div>
            <div className="flex justify-start w-1/2 mt-4">
                <Button className="w-2/3 h-12 ml-4 bg-red-500 hover:bg-red-600">
                    Cancelar
                </Button>
            </div>
        </form>
    );
};

export default CustomerEdit;
