import React from 'react'
import Addnotes from './Addnotes'
import Navbar from './Navbar'
const Events = (props) => {
  const {showalert}=props
  return (
    <div>
          <Navbar/>
    <div className="container">
      <Addnotes  showalert={showalert}/>
    </div>
    </div>
  )
}

export default Events
