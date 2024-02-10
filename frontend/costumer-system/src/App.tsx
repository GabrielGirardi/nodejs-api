import './App.css'
import CustomerForm from './components/CustomerForm'
import CustomerTable from './components/CustomerTable'

import { Button } from "@/components/ui/button"
import { FaUserPlus } from "react-icons/fa"
import DownloadApp from './assets/download-app.svg'
import Logo from './assets/logo.svg'

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
                        <CustomerTable/>
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
                        
                        <div className="w-16 h-16 rounded-full  overflow-hidden flex items-center justify-center">
                            <img src={Logo} alt="Logo" width={64} height={64}/>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-full my-8 bg-blue-400 rounded-sm p-4">
                        <h2 className="text-lg font-bold uppercase">Adicione um novo cliente</h2>
                        <p>Preencha os dados abaixo:</p>             
                    </div>

                    <div className="flex w-full justify-center">
                        <CustomerForm/>
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
