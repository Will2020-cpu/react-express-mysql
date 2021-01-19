import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact} from '@fortawesome/free-brands-svg-icons'



const NavBar = () => {
    return (
        <Fragment>
            <div className="bg-white h-12 shadow-md  flex items-center">
                <div className="w-4/5 m-auto flex items-center justify-between">
                <Link to="/"><FontAwesomeIcon icon={faReact} size="2x" className="text-indigo-600"/></Link>
                    
                   <div>
                   <Link to="/add" className="hidden md:block whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 ">Agregar</Link>
                    <Sidebar/>
                   </div>
                    <nav className="hidden md:block">
                        <Link to="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Inicia Sesion</Link>
                        <Link to="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Registrarse</Link>
                    </nav>
                </div>
            </div>
        </Fragment>
    )
}

export default NavBar
