import './App.css'
import axios from 'axios'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FaRegEdit, FaUserPlus } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import DownloadApp from './assets/download-app.svg'
import Logo from './assets/logo.avif'

const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:3000/');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};


function App() {
    return (
        <>
            <div className="flex min-w-screen min-h-screen">
                <section className="flex flex-col w-2/5 min-h-full gap-4 bg-blue-400 p-4 shadow-lg shadow-blue-500/80">
                    <div className="flex justify-end w-full h-18">
                        <Button className="bg-white text-black transition duration-100 ease-in-out hover:bg-gray-200">+ Cadastrar</Button>
                    </div>

                    <div className="flex flex-col justify-start p-2 w-full h-1/3 overflow-y-scroll scrollbar bg-blue-100 rounded-sm">
                        <div className="bg-blue-400 rounded-sm p-4 mb-4">
                            <h1 className="flex justify-center font-bold text-lg">Lista de Clientes</h1>
                        </div>
                        <table className="border-collapse bg-white">
                            <thead className="font-bold text-md">
                                <tr>
                                    <th className="p-1 text-start">Nome</th>
                                    <th className="p-1 text-start">ID</th>
                                    <th className="p-1 text-start">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b">
                                    <td className="p-1 w-1/3 overflow-hidden h-12">Lorem ipsum</td>
                                    <td className="p-1 w-1/3 h-12">9DFD78756</td>
                                    <td className="p-1 w-1/3 h-12 flex items-center justify-end gap-1">
                                        <FaRegEdit className="w-1/2 h-1/2 cursor-pointer" />
                                        <MdDelete className="w-1/2 h-1/2 cursor-pointer" />
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-1 w-1/3 h-12 overflow-hidden">Lorem ipsum Dolor</td>
                                    <td className="p-1 w-1/3 h-12">9FFD73487</td>
                                    <td className="p-1 w-1/3 h-12 flex items-center justify-end gap-1">
                                        <FaRegEdit className="w-1/2 h-1/2 cursor-pointer" />
                                        <MdDelete className="w-1/2 h-1/2 cursor-pointer" />
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-1 w-1/3 h-12 overflow-hidden">Lorem ipsum Dolor</td>
                                    <td className="p-1 w-1/3 h-12">9FFD73487</td>
                                    <td className="p-1 w-1/3 h-12 flex items-center justify-end gap-1">
                                        <FaRegEdit className="w-1/2 h-1/2 cursor-pointer" />
                                        <MdDelete className="w-1/2 h-1/2 cursor-pointer" />
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-1 w-1/3 h-12 overflow-hidden">Lorem ipsum Dolor</td>
                                    <td className="p-1 w-1/3 h-12">9FFD73487</td>
                                    <td className="p-1 w-1/3 h-12 flex items-center justify-end gap-1">
                                        <FaRegEdit className="w-1/2 h-1/2 cursor-pointer" />
                                        <MdDelete className="w-1/2 h-1/2 cursor-pointer" />
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-1 w-1/3 h-12 overflow-hidden">Lorem ipsum Dolor</td>
                                    <td className="p-1 w-1/3 h-12">9FFD73487</td>
                                    <td className="p-1 w-1/3 h-12 flex items-center justify-end gap-1">
                                        <FaRegEdit className="w-1/2 h-1/2 cursor-pointer" />
                                        <MdDelete className="w-1/2 h-1/2 cursor-pointer" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <span className="text-xs"><b>Nota*:</b> Você pode deslizar para ver mais resultados</span>

                    <div className="flex flex-col justify-end w-full h-1/2">
                        <p className='font-bold text-md'>
                            Informações e avisos
                        </p>
                        <div className="flex justify-start items-center w-full h-14 p-4 bg-white">
                            <p className="text-sm text-black">
                                Bem Vindo ao Sistema!
                            </p>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center gap-8 flex-wrap w-full min-h-full p-4">
                    <div className="flex w-full justify-between items-center">
                        <div className="flex items-center gap-2 font-bold">
                            <FaUserPlus className="w-8 h-8"/>
                            <h3>Cadastro</h3>
                        </div>
                        
                        <div className="w-16 h-16 rounded-full border overflow-hidden">
                            <img src={Logo} alt="Logo" width={64} height={64}/>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-full my-8 bg-blue-400 rounded-sm p-4">
                        <h2 className="text-lg font-bold uppercase">Adicione um novo cliente</h2>
                        <p>Preencha os dados abaixo:</p>             
                    </div>

                    <div className="flex w-full justify-center">
                        <form className="flex flex-wrap w-full">
                            <div className="flex flex-col w-1/2 gap-2 mb-2 items-end">
                                <label className="w-2/3 mr-4">Nome Completo</label>
                                <Input className="w-2/3 mr-4"/>
                            </div>
                            <div className="flex flex-col w-1/2 gap-2 mb-2 items-start">
                                <label className="w-2/3 ml-4">Gênero</label>
                                <Select>
                                    <SelectTrigger className="w-2/3 ml-4">
                                        <SelectValue placeholder="Selecione uma opção"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Masculino">Masculino</SelectItem>
                                        <SelectItem value="Feminino">Feminino</SelectItem>
                                        <SelectItem value="Outro">Outro</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col w-1/2 gap-2 mb-2 items-end">
                                <label className="w-2/3 mr-4">Estado Civil</label>
                                <Select>
                                    <SelectTrigger className="w-2/3 mr-4">
                                        <SelectValue placeholder="Selecione uma opção"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Solteiro">Solteiro</SelectItem>
                                        <SelectItem value="Casado">Casado</SelectItem>
                                        <SelectItem value="Divorciado">Divorciado</SelectItem>
                                        <SelectItem value="Viúvo">Viúvo</SelectItem>
                                        <SelectItem value="União Estável">União Estável</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col w-1/2 gap-2 mb-2 items-start">
                                <label className="w-2/3 ml-4">
                                    Data de Nascimento <span className="text-xs font-thin italic">(DD/MM/YY)</span>
                                </label>
                                <Input type="date" className="w-2/3 ml-4"/>
                            </div>
                            <div className="flex flex-col w-1/2 gap-2 mb-2 items-end">
                                <label className="w-2/3 mr-4">CEP</label>
                                <Input className="w-2/3 mr-4"/>
                            </div>
                            <div className="flex flex-col w-1/2 gap-2 mb-2 items-start">
                                <label className="w-2/3 ml-4">Endereço</label>
                                <Input className="w-2/3 ml-4"/>
                            </div>
                            <div className="flex flex-col w-1/2 gap-2 mb-2 items-end">
                                <label className="w-2/3 mr-4">Número</label>
                                <Input className="w-2/3 mr-4"/>
                            </div>
                            <div className="flex flex-col w-1/2 gap-2 mb-2 items-start">
                                <label className="w-2/3 ml-4">Complemento</label>
                                <Input className="w-2/3 ml-4"/>
                            </div>
                            <div className="flex flex-col w-1/2 gap-2 mb-2 items-end">
                                <label className="w-2/3 mr-4">Estado</label>
                                <Select>
                                    <SelectTrigger className="w-2/3 mr-4">
                                        <SelectValue placeholder="Selecione uma opção" className="placeholder:text-gray-600"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="SP">SP</SelectItem>
                                        <SelectItem value="RJ">RJ</SelectItem>
                                        <SelectItem value="MG">MG</SelectItem>
                                        <SelectItem value="RS">RS</SelectItem>
                                        <SelectItem value="SC">SC</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col w-1/2 gap-2 mb-2 items-start">
                                <label className="w-2/3 ml-4">Cidade</label>
                                <Input className="w-2/3 ml-4"/>
                            </div>
                            <div className="flex justify-end w-1/2 mt-4">
                                <Button className="w-2/3 h-12 mr-4 bg-green-500 hover:bg-green-600">
                                    Cadastrar
                                </Button> 
                            </div>
                            <div className="flex justify-start w-1/2 mt-4">
                                <Button className="w-2/3 h-12 ml-4 bg-red-500 hover:bg-red-600">
                                    Cancelar
                                </Button>
                            </div>
                        </form>
                    </div>

                    <div className="flex flex-col w-full mt-8">
                        <div className="flex gap-6">
                            <div className="flex flex-col items-center w-full gap-2">
                                <h3 className="font-bold text-lg">Baixe nosso App</h3>
                                <img className="cursor-pointer" src={DownloadApp} alt="Download App" width={282} height={40}/>
                            </div>
                        </div>
                        <div className="flex justify-center w-full mt-4">
                            <p className="flex flex-col text-center text-sm font-thin text-gray-500 italic">
                                Todos os direitos reservados @2024 - Empresa lorem ipsum
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default App
