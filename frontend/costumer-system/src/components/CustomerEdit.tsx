import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Swal from 'sweetalert2'
import { FaSpinner } from "react-icons/fa"

const CustomerEdit = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/');
            setCustomers(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error);

            Swal.fire({
                title: 'Erro!',
                text: 'Ocorreu um erro ao buscar os clientes.',
                icon: 'error',
                confirmButtonText: 'OK'
            });

            setLoading(false);
        }
    };

    const handleEditCustomer = async (customer) => {
        const birthDate = new Date(customer.birth).toISOString().split('T')[0];

        const { value: formValues } = await Swal.fire({
            title: 'Edição de cliente',
            html: `
                <div class="content-edit-form">
                    <input type="text" id="nameEdit" value="${customer.name}" class="swal2-input" placeholder="Nome Completo" required>
                    <select id="genderEdit" class="swal2-select" required>
                        <option value="${customer.gender}">${customer.gender} - Anterior</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outro">Outro</option>
                    </select>
                    <select id="statusEdit" class="swal2-select" required>
                        <option value="${customer.status}">${customer.status} - Anterior</option>
                        <option value="Solteiro(a)">Solteiro(a)</option>
                        <option value="Casado(a)">Casado(a)</option>
                        <option value="Divorciado(a)">Divorciado(a)</option>
                        <option value="Viúvo(a)">Viúvo(a)</option>
                    </select>
                    <input type="date" id="birthEdit" value="${birthDate}" class="swal2-input" placeholder="Data de Nascimento" required>
                    <input type="text" id="cepEdit" value="${customer.cep}" class="swal2-input" placeholder="CEP" required>
                    <input type="text" id="addressEdit" value="${customer.address}" class="swal2-input" placeholder="Endereço" required>
                    <input type="number" id="numberEdit" value="${customer.number}" class="swal2-input" placeholder="Número">
                    <input type="text" id="complementEdit" value="${customer.complement}" class="swal2-input" placeholder="Complemento" required>
                    <select id="districtEdit" class="swal2-select" required>
                        <option value="${customer.district}">${customer.district} - Anterior</option>
                        <option value="SP">SP</option>
                        <option value="RJ">RJ</option>
                        <option value="MG">MG</option>
                        <option value="RS">RS</option>
                        <option value="SC">SC</option>
                    </select>
                    <input type="text" id="cityEdit" value="${customer.city}" class="swal2-input" placeholder="Cidade" required>
                </div>
            `,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Salvar',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#38d500',
            cancelButtonColor: '#d33',
            preConfirm: () => {
                return {
                    name: document.getElementById('nameEdit').value,
                    gender: document.getElementById('genderEdit').value,
                    status: document.getElementById('statusEdit').value,
                    birth: document.getElementById('birthEdit').value,
                    cep: document.getElementById('cepEdit').value,
                    address: document.getElementById('addressEdit').value,
                    number: document.getElementById('numberEdit').value,
                    complement: document.getElementById('complementEdit').value,
                    district: document.getElementById('districtEdit').value,
                    city: document.getElementById('cityEdit').value,
                }
            },
            customClass: {
                container: 'content-edit',
            }
        });

        if (formValues) {
            setLoading(true);

            try {
                await axios.put(`http://localhost:3000/${customer._id}`, formValues);

                Swal.fire({
                    title: 'Cliente Editado!',
                    text: 'As alterações foram salvas com sucesso.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                
                fetchData();
                setLoading(false); 
            } catch (error) {
                console.log(error);

                Swal.fire({
                    title: 'Erro!',
                    text: 'Ocorreu um erro ao editar o cliente.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                setLoading(false);
            }
        } else {
            Swal.fire({
                title: 'Alteração não realizada',
                text: 'Parece que a operação foi cancelada',
                icon: 'info',
                confirmButtonText: 'OK'
            });
        }
    };

    const formatDate = (dateString? : number) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();

        return `${day}/${month}/${year}`;
    };

    return (
        <div className="bg-white rounded-sm shadow p-6">
            <table className="border-collapse"> 
                <thead className="font-bold text-sm">
                    <tr>
                        <th className="text-start">Nome</th>
                        <th className="text-start">Gênero</th>
                        <th className="text-start">Cônjuge</th>
                        <th className="text-start">Nascimento</th>
                        <th className="text-start">CEP</th>
                        <th className="text-start">Endereço</th>
                        <th className="text-center">Nº</th>
                        <th className="text-start">Complemento</th>
                        <th className="text-center">UF</th>
                        <th className="text-start">Cidade</th>
                        <th className="text-start">Ações</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {customers.map((customer, index) => (
                        <tr className="border-b" key={index}>
                            <td className="w-2/12 h-10 overflow-hidden">{customer.name}</td>
                            <td className="w-1/12 h-10 overflow-hidden">{customer.gender}</td>
                            <td className="w-1/12 h-10 overflow-hidden">{customer.status}</td>
                            <td className="w-1/12 h-10 overflow-hidden">{formatDate(customer.birth)}</td>
                            <td className="w-1/12 h-10 overflow-hidden">{customer.cep}</td>
                            <td className="w-2/12 h-10 overflow-hidden">{customer.address}</td>
                            <td className="w-1/12 h-10 overflow-hidden text-center">{customer.number}</td>
                            <td className="w-1/12 h-10 overflow-scroll">{customer.complement}</td>
                            <td className="w-1/12 h-10 overflow-hidden text-center">{customer.district}</td>
                            <td className="w-1/12 h-10 overflow-hidden">{customer.city}</td>
                            <td>
                                <button onClick={() => handleEditCustomer(customer)}>Editar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={`bg-gray-300 opacity-50 text-black flex items-center justify-center w-full p-2 rounded-md mt-2 ${loading == true ? 'flex' : 'hidden'}`}>        
                <FaSpinner className="animate-spin h-5 w-5 mr-3" />
                Carregando...
            </div>
        </div>
    );
};

export default CustomerEdit;
