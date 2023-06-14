import React from 'react'
import './ContactCard.css'

export default function ContactCard(props) {
    const {id, name, email} = props.contact;
  return (
    <div className='item'>
        <div className='content'>
            <div className='name'>{name}</div>
            <div className='email'>{email}</div>
        </div>
        <button className='delete contact'  onClick={() => props.clickHandler(id)}>delete</button>
    </div>
  )
}
