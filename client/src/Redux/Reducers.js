import {apiGetContactos,apiAddContacto, apiUpdateContacto,apiDeleteContacto} from '../lib/api'



const initialState = {
    contactos:[],
};

const GET_CONTACTOS = 'GET_CONTACTOS'
const ADD_CONTACTO = 'ADD_CONTACTO'
const UPDATE_CONTACTO = 'UPDATE_CONTACTO'
const DELETE_CONTACTO = 'DELETE_CONTACTO'

const getContactos  = (contacto)=>({
    type:GET_CONTACTOS,
    payload:contacto
})

const addContacto =(contacto)=>({
    type:ADD_CONTACTO,
    payload:contacto
})

const updateContacto = (contacto) =>({
    type:UPDATE_CONTACTO,
    payload:contacto
})

const deleteContacto = (id) =>({
    type:DELETE_CONTACTO,
    payload:id
})

export const fetchGetContactos = () =>{
    return(dispatch) =>{
        apiGetContactos()
            .then(res=>{
                dispatch(getContactos(res.data))
            })
    }
}

export const fetchAddContacto = (contacto) =>{
    return(dispatch)=>{
        apiAddContacto(contacto)
            .then(res =>{
                dispatch(addContacto(res))
            })
    }
}

export const fetchUpdateContacto =(id,contacto)=>{
    return(dispatch)=>{
        apiUpdateContacto(id,contacto)
            .then(res=>{
                dispatch(updateContacto(res))
            })
    }
}

export const fetchDeleteContacto =(id)=>{
    return(dispatch)=>{
        apiDeleteContacto(id)
            .then(res =>{
                dispatch(deleteContacto(id))
            })
    }
}

const Reducer =(state = initialState, action) =>{
    switch (action.type) {
        case GET_CONTACTOS:
            return {...state,contactos:action.payload};

        case ADD_CONTACTO:
            return {
                ...state,
                contactos:[action.payload,...state]
            }
        case UPDATE_CONTACTO:
            return{
                ...state,
                contactos:state.contactos.map(item=> item.id === action.payload.id ? action.payload : item)
            }
        case DELETE_CONTACTO:
            return{
                ...state,
                contactos:state.contactos.filter(item=>item.id !== action.payload)
            }
        default:
            break;
    }
    return state;
}


export default Reducer