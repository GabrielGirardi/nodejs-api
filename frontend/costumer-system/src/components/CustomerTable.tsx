import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { MdDelete } from 'react-icons/md'
import { FaSpinner } from "react-icons/fa"
import Swal from 'sweetalert2'

const CustomerTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/');
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    const handleDelete = async (customerId?  : string) => {
        Swal.fire({
            title: 'Deseja mesmo exluir?',
            text: `Você realmente deseja excluir o cliente para sempre? Esta ação não poderá ser desfeita!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                setLoading(true);

                try {
                    await axios.delete(`http://localhost:3000/${customerId}`);
                    Swal.fire('Excluído!', 'O cliente foi excluído com sucesso.', 'success');
                    fetchData();
                    setLoading(false);
                } catch (error) {
                    console.log('Error deleting customer:', error);
                    Swal.fire('Erro!', 'Ocorreu um erro ao excluir o cliente.', 'error');
                    setLoading(false);
                }
            }
        });
    };

    const formatDate = (dateString? : number) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();

        return `${day}/${month}/${year}`;
    };

    return (
        <>
            <table className="border-collapse bg-white rounded-sm shadow">
                <thead className="font-bold text-sm 2xl:text-md">
                    <tr>
                        <th className="p-2 text-start">Nome</th>
                        <th className="p-2 text-start">Nascimento</th>
                        <th className="p-2 text-start">UF</th>
                        <th className="p-2 text-center">Ações</th>
                    </tr>
                </thead>
                <tbody className="text-xs 2xl:text-sm">
                    {data.map((item, index) => (
                        <tr className="border-b" key={index}>
                            <td className="p-2 w-3/12 overflow-hidden h-12">{item.name}</td>
                            <td className="p-2 w-3/12 h-12">{formatDate(item.birth)}</td>
                            <td className="p-2 w-3/12 h-12">{item.district}</td>
                            <td className="p-2 w-3/12 h-12">
                                <MdDelete className="mx-auto w-1/4 2xl:w-1/6 h-12 cursor-pointer hover:fill-red-500" onClick={() => handleDelete(item._id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={`bg-gray-300 opacity-50 text-black flex items-center justify-center w-full p-2 rounded-md mt-2 ${loading == true ? 'flex' : 'hidden'}`}>        
                <FaSpinner className="animate-spin h-5 w-5 mr-3" />
                Carregando...
            </div>
        </>
    );
};

export default CustomerTable;
