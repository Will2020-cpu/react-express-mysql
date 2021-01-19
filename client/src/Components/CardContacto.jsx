import React, { Fragment, useState } from 'react'
import { fetchDeleteContacto, fetchGetContactos,fetchUpdateContacto } from '../Redux/Reducers'
import { connect } from 'react-redux'
import {useForm} from 'react-hook-form'

const CardContacto = ({ nombre, numero, id, fetchDeleteContacto, fetchGetContactos,fetchUpdateContacto }) => {
    const [editing, setEditing] = useState(false)
    const [contacto,setContacto] =useState({
        id,
        nombre,
        numero
    })
    
    const {register, handleSubmit} = useForm()
    const handleClickEliminar = (id) => {
        fetchDeleteContacto(id)
        fetchGetContactos()
    }
    const handleClickEdit = ()=>{
        setEditing(!editing)
    }
    const handleInputOnchange = (event) =>{
        const {name,value} = event.target
        setContacto({...contacto,[name]:value})
    }

    const onSubmit = data =>{
        setEditing(!editing)
        fetchUpdateContacto(contacto.id,{
            nombre:data.nombre,
            numero:data.numero
        })
        fetchGetContactos()
    }
    return (
        <Fragment>
            <div className="py-8 px-8 max-w-sm bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="https://d22y893cekuu8h.cloudfront.net/p_b770024451ae-2019-09-18-09-13-05-000339.jpg" alt="perfil" />
                <div className="text-center space-y-2 sm:text-left">
                    {
                        editing ? <form className="space-y-0.5" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" ref={register} name="nombre" className="border border-gray-400 rounded text-black font-semibold focus:outline-none" value={contacto.nombre} onChange={handleInputOnchange}/>
                            <input type="text" ref={register} name="numero" className="border border-gray-400 rounded text-gray-500 font-medium focus:outline-none" value={contacto.numero} onChange={handleInputOnchange}/>
                            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600">Guardar</button>
                        </form> :
                            <div className="space-y-0.5">
                                <p className="text-lg text-black font-semibold">
                                    {nombre}
                                </p>
                                <p className="text-gray-500 font-medium">{numero}</p>
                            </div>
                    }
                    {
                        editing ? null :
                        <button onClick={()=> handleClickEdit()} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 fp">Editar</button>
                    }
                    <button onClick={() => handleClickEliminar(id)} className="px-4 py-1 text-sm text-white bg-red-600 font-semibold m-2 rounded-full focus:outline-none">Eliminar</button>
                </div>
            </div>
        </Fragment>
    )
}

export default connect(null, { fetchDeleteContacto, fetchGetContactos, fetchUpdateContacto })(CardContacto)
