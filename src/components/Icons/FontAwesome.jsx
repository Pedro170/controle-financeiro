import React from 'react'

const FontAwesome = ({ s='s', icon }) => {
  return (
    <i className={`fa${ s } fa-${ icon }`}></i>
  )
}

export default FontAwesome
