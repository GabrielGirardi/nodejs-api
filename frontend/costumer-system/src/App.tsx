import './App.css'
import React, { useState } from 'react'
import CustomerForm from './components/CustomerForm'
import CustomerTable from './components/CustomerTable'
import CustomerEdit from './components/CustomerEdit'

import { Button } from "@/components/ui/button"
import { FaUserPlus } from "react-icons/fa"
import DownloadApp from './assets/download-app.svg'
import errorGifCat from './assets/9195-error.gif'
import Logo from './assets/logo.svg'

function App() {
    const [showTable, setShowTable] = useState(false);

    const handleShowTable = () => {
        setShowTable(true);
    };

    return (
        <>
            <div className="hidden min-w-screen min-h-screen md:flex">
                <section className={`flex flex-col min-h-full gap-4 bg-gradient-to-b from-gray-800 to-black border-r border-black p-4 shadow-lg shadow-gray-800/80 ${showTable ? '2xl:w-2/3 w-full' : 'w-2/5'}`}>
                    <div className="flex justify-end w-full h-18 gap-2">
                        {showTable && <Button className="bg-white text-black text-sm 2xl:text-md transition duration-100 ease-in-out hover:bg-gray-200" onClick={() => setShowTable(false)}>Fechar</Button>}
                        {!showTable && <Button className="bg-white text-black text-sm 2xl:text-md transition duration-100 ease-in-out hover:bg-gray-200" onClick={handleShowTable}>Ver tabela completa</Button>}
                    </div>

                    <div className="flex flex-col justify-start p-2 w-full h-3/4 overflow-y-scroll scrollbar bg-slate-200 rounded-sm">
                        <div className="bg-gradient-to-b from-gray-800 to-black border border-gray-600 rounded-sm p-4 mb-4 shadow">
                            <h1 className="flex justify-center font-bold text-sm 2xl:text-md text-white">Lista de Clientes</h1>
                        </div>
                        { showTable ? <CustomerEdit/> : <CustomerTable/> }
                    </div>
                    <span className="text-xs text-white"><b>Nota*:</b> Você pode deslizar para ver mais resultados</span>8
                </section>

                <section className={`flex flex-col items-center gap-2 flex-wrap min-h-full  bg-slate-200 ${showTable ? 'xl:w-1/3 2xl:flex hidden' : 'w-full'}`}>
                    <div className="flex w-full justify-between items-center bg-gradient-to-b from-gray-100 to-white p-4 shadow text-md">
                        <div className="flex items-center gap-2 font-bold text-md">
                            <FaUserPlus className="w-7 h-7"/>
                            <h3>Cadastro</h3>
                        </div>
                        
                        <div className="w-16 h-16 rounded-full  overflow-hidden flex items-center justify-center">
                            <img className="rounded-full border border-black" src={Logo} alt="Logo" width={64} height={64}/>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-11/12 my-8 bg-white rounded-lg p-4 shadow">
                        <h2 className="text-md font-bold uppercase">Adicione um novo cliente</h2>
                        <p className="text-sm">Preencha os dados abaixo:</p>             
                    </div>

                    <div className="flex w-11/12 justify-center rounded-lg bg-white shadow py-10">
                        <CustomerForm/>
                    </div>

                    <div className="flex flex-col w-full mt-8">
                        <div className="flex gap-6">
                            <div className="flex flex-col items-center w-full gap-2">
                                <h3 className="font-bold text-md">Baixe nosso App</h3>
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
            <div className="flex flex-col gap-2 justify-center items-center w-full min-h-screen md:hidden"> 
                <img className="w-fit h-fit" src={errorGifCat} alt="Device Error" title="Device Error"/>
                <h2 className="text-lg">Ooops!</h2>
                <p className="text-md text-center">Parece que você está tentando acessar a plataforma de um dispositivo mobile, tente novamente de um desktop ou tablet!</p>
                <p className="text-center text-md font-bold">ou se preferir, baixe nosso App!</p>
                <img className="mt-2" src={DownloadApp} alt="Download App" width={250} height={40}/>
            </div>
        </>
    )
}

export default App
