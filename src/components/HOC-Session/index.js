import React from 'react'

const Session = Componenet => props => {
    const getUser = () => {
        console.log('entro fuc')
        return(localStorage.getItem('dataUser'))
    }
    console.log('entro hoc')
    return <Componenet {...props}  refetchUser={getUser}/>
}

export default Session;