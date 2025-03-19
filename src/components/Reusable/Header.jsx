import React from 'react'

import './Header.css'
function Header({data}) {
  return (
    <div className='header'>
      <div className="header-logo">
        <img src="/header/TaskFlow-logo-vector.png" alt="" />
      </div>
      <div className="header-menu">
      </div>
      <div className="header-info">
        <div>{data.name}</div>
        <div>{data.email}</div>
      </div>
      <div className="header-profile">
        <img src={data.profile_img} alt="" />
      </div>
    </div>
  )
}

export default Header
