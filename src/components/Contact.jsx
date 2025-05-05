import React, { useEffect } from 'react'

const Contact = ({setTab}) => {
    useEffect(()=>{
        setTab("contact")
    },[])
  return (
    <div>
      contact
    </div>
  )
}

export default Contact
