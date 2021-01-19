import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import {fetchGetContactos} from '../Redux/Reducers'
import CardContacto from './CardContacto'

const ContianerContactos = ({contactos,fetchGetContactos}) => {

    useEffect(()=>{
        fetchGetContactos()   
    },[fetchGetContactos])

    return (
        <Fragment>
            <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 m-auto">
                {   
                    contactos.map(item=>(
                        <CardContacto nombre={item.nombre} numero={item.numero} key={item.id} id={item.id}/>
                    ))
                }
            </div>
        </Fragment>
    )
}

const mapDispatchToProps = state =>({
    contactos:state.contactos
})

export default connect(mapDispatchToProps,{fetchGetContactos})(ContianerContactos)
