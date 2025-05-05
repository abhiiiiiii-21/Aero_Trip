import React, { useEffect } from 'react'

const About = ({setTab}) => {
    useEffect(()=>{
        setTab("about")
    },[])
  return (
    <div>
      about
    </div>
  )
}

export default About
