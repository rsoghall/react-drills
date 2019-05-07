import React from 'react'

export default function List(props) {
  let rList = props.list.map((item,index) => <p key={index}>{item}</p>)
  return (
    <div>
     {rList}
    </div>
  )
}
