import React from 'react'
import { useNavigate } from 'react-router-dom';
import Contact from './Contact';
import "./CreateContact.css";

const CreateContact = () => {
  const navigate = useNavigate();
  const navigateToContacts = () => {
    navigate('/contact');
  }
  return (
    <div className="container">
      <button type='submit' onClick={navigateToContacts}>Create Contact</button>
      <div className='pop-up'>
        <i class="fa-solid fa-triangle-exclamation"></i>
         <p> No Contact Found <br/>Please add contact from <br/>
         Create Contact Button </p>
      </div>
    </div>
  );
};

export default CreateContact;