import React, { useEffect } from 'react'

const SearchFlight = ({setTab}) => {
    useEffect(()=>{
        setTab("search")
    },[])
  return (
    <div   >
      search
    </div>
  )
}

export default SearchFlight
