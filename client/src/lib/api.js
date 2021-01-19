export const apiGetContactos = () =>{
    const url = "/contactos/";
    return fetch(url).then(response => response.json())
}

export const apiAddContacto = (contacto) =>{
    const url = "/add/";
    const request = {
        method: 'POST',
        body:JSON.stringify(contacto),
        headers:{
            "Content-type":"application/json; charset=UTF-8",
        }
    }
    return fetch(url,request).then(response => response.json())
}

export const apiUpdateContacto = (id,contacto) =>{
    const url = `/edit/${id}`
    const request = {
        method: 'PUT',
        body:JSON.stringify(contacto),
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        }
    }
    return fetch(url,request).then(response=> response.json())
}

export const apiDeleteContacto =(id)=>{
    const url = `/delete/${id}`
    const request ={
        method:'DELETE'
    }
    return fetch(url,request).then(response=> response.json())
}