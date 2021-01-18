import React from 'react'

export default function MessageBox(props) {
  return (
    <div className={`allert allert-${props.variant || 'info'}`}>
      {props.children}
    </div>
  )
}
