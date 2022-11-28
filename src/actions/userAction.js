import { responsiveFontSizes } from "@mui/material"
import axios from "axios"

export const GET_LIST_USER = "GET_LIST_USER"
export const ADD_USER = "ADD_USER"
export const ADD_POST = "ADD_POST"
export const LOGOUT = "LOGOUT" 
export const UPDATE_PUBLISH = "UPDATE_PUBLISH"
export const UNPUBLISH = "UNPUBLISH"
export const GET_COUNTRY = "GET_COUNTRY"
export const LOGIN = "LOGIN"
export const GET_UNAME = "GET_UNAME"
export const GET_CATEGORY = "GET_CATEGORY"

export const getListUser = () =>{
    return (dispatch)=>{
        dispatch({
            type : GET_LIST_USER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method : "GET",
            url : "https://ayf28.up.railway.app/threads",
            timeout: 120000
        })
            .then((res)=>{
                dispatch({
                    type : GET_LIST_USER,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err)=>{
                dispatch({
                    type : GET_LIST_USER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })


    }
}

export const getListCountry = () =>{
    return (dispatch)=>{
        dispatch({
            type : GET_COUNTRY,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method : "GET",
            url : "https://ayf28.up.railway.app/countries",
            timeout: 120000
        })
            .then((res)=>{
                dispatch({
                    type : GET_COUNTRY,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err)=>{
                dispatch({
                    type : GET_COUNTRY,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })


    }
}

export const getCategory = () =>{
    return (dispatch)=>{
        dispatch({
            type : GET_CATEGORY,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method : "GET",
            url : "https://ayf28.up.railway.app/categories",
            timeout: 120000
        })
            .then((res)=>{
                dispatch({
                    type : GET_CATEGORY,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err)=>{
                dispatch({
                    type : GET_CATEGORY,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })


    }
}

export const getUname = () =>{
    const token = localStorage.getItem('TOKEN')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return (dispatch)=>{
        dispatch({
            type : GET_UNAME,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios.get( 
            'https://ayf28.up.railway.app/users/',
            config
          )
            .then((res)=>{
                dispatch({
                    type : GET_UNAME,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err)=>{
                dispatch({
                    type : GET_UNAME,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })


    }
}

export const addPost = (data) =>{
    const token = localStorage.getItem('TOKEN')
   
    return (dispatch)=>{
        dispatch({
            type : ADD_POST,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
    
        axios({
            method : "POST",
            url : "https://ayf28.up.railway.app/threads",
            timeout: 120000,
            data: data,
            headers : {Authorization: `Bearer ${token}`}
        })
            .then((res)=>{
                dispatch({
                    type : ADD_POST,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err)=>{
                dispatch({
                    type : ADD_POST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })


    }
}

export const addUser = (data) =>{
    return (dispatch)=>{
        dispatch({
            type : ADD_USER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method : "POST",
            url : "https://ayf28.up.railway.app/auth-users/register",
            timeout: 120000,
            data: data
        })
            .then((res)=>{
                dispatch({
                    type : ADD_USER,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err)=>{
                dispatch({
                    type : ADD_USER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })


    }
}

export const login = (data) =>{
    return (dispatch)=>{
        dispatch({
            type : LOGIN,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method : "POST",
            url : "https://ayf28.up.railway.app/auth-users/login",
            timeout: 120000,
            data: data
        })
            .then((res)=>{
                dispatch({
                    type : LOGIN,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
               
                localStorage.setItem("TOKEN", res.data.data.token)
                localStorage.setItem("USERNAME", res.data.data.username)
                if(res.data.data.role === '637c0221b2e1e083f01b0c43'){
                    window.location='/home'
                }else{
                    window.location='/admin'
                }
                
            })
            .catch((err)=>{
                dispatch({
                    type : LOGIN,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })


    }
}

export const Logout = () =>{
    const deleteData = localStorage.removeItem("TOKEN")
    return (dispatch)=>{
        dispatch({
            type : LOGOUT,
            payload: {
                data: deleteData
            }
        })
    }
}

export const updatePublish = (id,uid) =>{
    
    return(dispatch)=>{
        //loading dispatch
        dispatch({
            type:UPDATE_PUBLISH,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
        })
        fetch(`https://63496bd50b382d796c86192b.mockapi.io/users/${uid}/threads/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                publish: true
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })
    .then((res) => res.json())
        .then((res)=>{
            dispatch({
                type:UPDATE_PUBLISH,
                payload:{
                    loading:false,
                    data:res.data,
                    errorMessage:false
                }
            })
        })
        .catch((err)=>{
            dispatch({
                type:UPDATE_PUBLISH,
                payload:{
                    loading:false,
                    data:false,
                    errorMessage:err.message
                }
            })
        })
    }
}

export const unPublish = (id,uid) =>{
    return(dispatch)=>{
        //loading dispatch
        dispatch({
            type:UNPUBLISH,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
        })

        fetch(`https://63496bd50b382d796c86192b.mockapi.io/users/${uid}/threads/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                publish: false
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })
    .then((res) => res.json())
        .then((res)=>{
            dispatch({
                type:UNPUBLISH,
                payload:{
                    loading:false,
                    data:res.data,
                    errorMessage:false
                }
            })
        })
        .catch((err)=>{
            dispatch({
                type:UNPUBLISH,
                payload:{
                    loading:false,
                    data:false,
                    errorMessage:err.message
                }
            })
        })
    }
}