import React from 'react'

const FontAwesome = ({ s='s', icon, color }) => {
  return (
    <i className={`fa${ s } fa-${ icon }`} style={{ color: color }}></i>
  )
}

export default FontAwesome
