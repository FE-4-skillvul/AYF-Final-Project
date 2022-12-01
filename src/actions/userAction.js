import { Alert, responsiveFontSizes } from "@mui/material"
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
export const GET_COMMENTS = "GET_COMMENTS"
export const ADD_COMMENT = "ADD_COMMENT"
export const DELETE_POST = "DELETE_POST"
export const CHANGE_PASS = "CHANGE_PASS"
export const CHANGE_THREAD = "CHANGE_THREAD"

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

export const getComments = (id) =>{
    return (dispatch)=>{
        dispatch({
            type : GET_COMMENTS,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method : "GET",
            url : `https://ayf28.up.railway.app/comments/${id}`,
            timeout: 120000
        })
            .then((res)=>{
                dispatch({
                    type : GET_COMMENTS,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
               
            })
            .catch((err)=>{
                dispatch({
                    type : GET_COMMENTS,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })


    }
}

export const deletePost = (id, uid) =>{
    const token = localStorage.getItem('TOKEN')
    return (dispatch)=>{
        dispatch({
            type : DELETE_POST,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method : "DELETE",
            url : `https://ayf28.up.railway.app/threads/${id}`,
            data: {
                user: `${uid}`
              },
            headers:{Authorization: `Bearer ${token}`},
            timeout: 120000
        })
            .then((res)=>{
                dispatch({
                    type : DELETE_POST,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
                alert(res.data.message);
            })
            .catch((err)=>{
                dispatch({
                    type : DELETE_POST,
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
    return (dispatch)=>{
        dispatch({
            type : GET_UNAME,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method : "GET",
            url : `https://ayf28.up.railway.app/users/`,
            headers:{Authorization: `Bearer ${token}`},
            timeout: 120000
        })
            .then((res)=>{
                dispatch({
                    type : GET_UNAME,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
              
               localStorage.setItem('UCreatedAt',res.data.data.createdAt)
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
                alert(err.response.data.message)
            })


    }
}

export const changePass = (data) =>{
    const token = localStorage.getItem('TOKEN')
   
    return (dispatch)=>{
        dispatch({
            type : CHANGE_PASS,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
    
        axios({
            method : "PUT",
            url : "https://ayf28.up.railway.app/users/change-password",
            timeout: 120000,
            data: data,
            headers : {Authorization: `Bearer ${token}`}
        })
            .then((res)=>{
                dispatch({
                    type : CHANGE_PASS,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
                alert(res.data.message)
            })
            .catch((err)=>{
                dispatch({
                    type : CHANGE_PASS,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
                alert(err.response.data.message)
            })


    }
}

export const changeThread = (data, id) =>{
    const token = localStorage.getItem('TOKEN')
   
    return (dispatch)=>{
        dispatch({
            type : CHANGE_THREAD,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method : "PUT",
            url : "https://ayf28.up.railway.app/threads/"+id,
            timeout: 120000,
            data: data,
            headers : {Authorization: `Bearer ${token}`}
        })
            .then((res)=>{
                dispatch({
                    type : CHANGE_THREAD,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
                alert(res.data.message)
              
            })
            .catch((err)=>{
                dispatch({
                    type : CHANGE_THREAD,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
                alert(err.response.data.message)
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
            // headers: { "Content-Type": "multipart/form-data" },
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
                alert(err.response.data.message)
            })


    }
}

export const addComment = (data, id) =>{
    const token = localStorage.getItem('TOKEN')
    return (dispatch)=>{
        dispatch({
            type : ADD_COMMENT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method : "POST",
            url : `https://ayf28.up.railway.app/comments/${id}`,
            timeout: 120000,
            data: data,
            headers : {Authorization: `Bearer ${token}`}
        })
            .then((res)=>{
                dispatch({
                    type : ADD_COMMENT,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err)=>{
                dispatch({
                    type : ADD_COMMENT,
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
                localStorage.setItem("RID",res.data.data.role);
                localStorage.setItem("USERNAME", res.data.data.username)
             
                if(res.data.data.role === '6385e3cfce9651ed571871d9'){
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
                alert(err.response.data.message)
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
        localStorage.removeItem("TOKEN")
        localStorage.removeItem("USERNAME")
        localStorage.removeItem("RID")
        localStorage.removeItem("UCreatedAt")
    }
}

export const updatePublish = (id,uid) =>{
    const token = localStorage.getItem('TOKEN')
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
        fetch(`https://ayf28.up.railway.app/threads/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                isPublish: true
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization':`Bearer ${token}`
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
    const token = localStorage.getItem('TOKEN')
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

        fetch(`https://ayf28.up.railway.app/threads/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                isPublish: false
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization':`Bearer ${token}`
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