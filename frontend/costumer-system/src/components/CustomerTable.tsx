import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { FaRegEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { LuView } from 'react-icons/lu'
import Swal from 'sweetalert2'

const CustomerTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/');
            setData(response.data);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    const handleDelete = async (customerId?  : string) => {
        Swal.fire({
            title: 'Deseja mesmo exluir?',
            text: `Você realmente deseja excluir o cliente ${customerId}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`http://localhost:3000/${customerId}`);
                    Swal.fire('Excluído!', 'O cliente foi excluído com sucesso.', 'success');
                    fetchData();
                } catch (error) {
                    console.log('Error deleting customer:', error);
                    Swal.fire('Erro!', 'Ocorreu um erro ao excluir o cliente.', 'error');
                }
            }
        });
    };

    return (
        <table className="border-collapse bg-white">
            <thead className="font-bold text-md">
                <tr>
                    <th className="p-1 text-start">Nome</th>
                    <th className="p-1 text-start">ID</th>
                    <th className="p-1 text-start">Ações</th>
                </tr>
            </thead>
            <tbody className="text-sm">
                {data.map((item, index) => (
                    <tr className="border-b" key={index}>
                        <td className="p-1 w-1/3 overflow-hidden h-12">{item.name}</td>
                        <td className="p-1 w-1/3 h-12">{item._id}</td>
                        <td className="p-1 w-full h-12 flex items-center justify-end gap-1">
                            <FaRegEdit className="w-1/3 h-1/3 cursor-pointer" />
                            <MdDelete className="w-1/3 h-1/2 cursor-pointer" onClick={() => handleDelete(item._id)} />
                            <LuView className="w-1/3 h-1/2 cursor-pointer"/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CustomerTable;
