import React from 'react'

export default function Image(props) {
  return (
    <div>
        <img src={props.myImage} alt='Julia Roberts' height="400" width="300"/>
    </div>
  )
}
