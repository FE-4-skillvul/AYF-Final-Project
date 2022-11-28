import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListUser, updatePublish, unPublish } from '../../actions/userAction';
import BorderExample from '../Spinner';
import Button from 'react-bootstrap/Button';
import {motion} from 'framer-motion'
import moment from 'moment';

function CardProfile() {

  const getLs = localStorage.getItem("USER_ID")
  const getProfile = JSON.parse(getLs)
  const id = getProfile.id
  const { getListUserResult, getListUserLoading, getListUserError} = useSelector((state)=> state.UserReducer)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getListUser())
    }, [dispatch])

  return (
    <>
    <div className="container mt-5 mb-3 mx-auto text-center">
    <h3 className='text-white'>{getProfile.username}'s Threads</h3>
    </div>

    <motion.div className='container'
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    > 
      
        {getListUserResult ? (
            getListUserResult.map((person)=>{
              if(person.id === id){
                return(
                <div className='container'>
                    {person.articles.map((x)=>{
                       let createdAt = moment(x.createdAt).fromNow(true); 
                        if(x.publish === true){
                        return(
                          <div class="card w-75 card border-success mb-3 m-auto">
                          <div class="card-body">
                          <div className='container__card'>
                          <h6 id='uname' class="card-title mb-1">{person.username}</h6>
                          <h6>.</h6>
                          <p class="card-title text-start"> {createdAt} </p> 
                          </div>
                          <Button id='cat' className='btn-sm' variant="success">{x.theme}</Button>
                            <h3 class="card-text">
                              {x.title}
                            </h3>
                            <p class="card-text">
                              {x.content}
                            </p>
                            
                            
                          </div>
                        </div>
                        )
                        }
                    }) 
                }
                </div>
               )
              
              } })
          
        ) : getListUserLoading ? (
          //  <p>Loading....</p>
          <div className="container text-center justify-content-center mt-5">
          <BorderExample/>
          </div>
        ): (
            <p>{getListUserError ? getListUserError : "DATA KOSONG"}</p>
        )}
        
    </motion.div>
    
    </>
  )
}

export default CardProfile