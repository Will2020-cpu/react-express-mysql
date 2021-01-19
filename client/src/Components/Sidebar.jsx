import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import {faReact} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Fragment>

            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-indigo-500">
                    <span className="sr-only">Open Menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                 </button>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                   <FontAwesomeIcon icon={faReact} size="3x" className="text-indigo-600"/>
                                </div>
                                <div className="-mr-2">
                                    <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close Menu</span>
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                   <Link to="/add" onClick={() => setIsOpen(!isOpen)} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                        <FontAwesomeIcon icon={faUserPlus} size="1x" className="text-indigo-600"/>
                                        <span className="ml-3 text-base font-medium text-gray-900">Agregar</span>
                                   </Link>
                                </nav>
                                
                                <div className="mt-8">
                                    <Link to="#" className="w-full flex items-center justify-center px-4 py-2 border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                        Registrarse
                                    </Link>
                                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                                        Tienes cuenta ?  
                                        <Link to="#" className="text-indigo-600 hover:text-indigo-500">
                                            Iniciar Sesion
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>

        </Fragment>
    )
}

export default Dropdown