import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import {fetchAddContacto} from '../Redux/Reducers'
import {useForm} from 'react-hook-form'
import {Redirect} from 'react-router-dom'

const Form = ({fetchAddContacto}) => {
    const [state,setState] = useState(false)
    const {register,handleSubmit} = useForm();
    const onSubmit = data =>{
        fetchAddContacto(data)
        setState(!state)
    }

    return (
        <Fragment>
            {state ? <Redirect to="/"/> : null}
            <div className="bg-white shadow-md max-w-xs mx-auto p-8 rounded-xl"> 
                <form className="flex flex-col space-y-2" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-center text-3xl text-gray-600">Guardar</h1>
                    <input ref={register} name="nombre" type="text" placeholder="Nombre" className="border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent p-2"/>
                    <input ref={register} name="numero" type="text" placeholder="Numero" className="border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border0-transparent p-2"/>
                    <button className="p-2 bg-purple-600 rounded-xl text-white focus:outline-none">Guardar</button>
                </form>
            </div>
        </Fragment>
    )
}

export default connect(null,{fetchAddContacto})(Form)
