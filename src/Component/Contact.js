import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Contact.css";
const Contact = () => {
   
  const [inputs, setInput ] = useState({
    firstname : "",
    lastname : "",
  });

  const [editIndex,setEditIndex] = useState("");

  const [Data, setData] = useState([]); // create array for storing data
  const [editClick,setEditClick] = useState(false); // for change Add button to update button

  // const navigate = useNavigate();  //for navigate to data page
  // const navigateToData = () => {
  //    navigate('/contact/data');
  // }
  
  const handleChange = (e) => {
    setInput(
       {
        ...inputs,
        [e.target.name] : e.target.value,
       });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();         //its help to refresh page
         
    if(editClick){     // replace data
       const tempTabledata = Data;
       Object.assign(tempTabledata[editIndex],inputs);
       setData([...tempTabledata]);
       setEditClick(false);
       setInput({                  // for clear input area after click on submit button
        firstname : "",
        lastname : "",
      });
    }else{
      setData([...Data, inputs]); //send to table data   
      setInput({                  // for clear input area after click on submit button
      firstname : "",
      lastname : "",
    });
    }
  };

  const handleDelete = (index) => {  // for delete data  //through index we again fiter and set data value
    const filterData = Data.filter((item,i) => i !== index);
    setData(filterData);
  };

  const handleEdit = (index) => {      //for edit data
    const tempdata = Data[index];  //set intital data to tempdata
    setInput({                            // set tempdata in setinput field
      firstname: tempdata.firstname,
      lastname:  tempdata.lastname,
    });
    setEditClick(true);
    setEditIndex(index);
  };

  console.log(Data);
  return (
    <div className='container'>
       <h2>Create Contact Screen</h2>
       <form className='myform' onSubmit={onFormSubmit}>
        <div className='form-container'>
        <label> 
          First Name : <input placeholder='First Name' type="text" name='firstname' value={inputs.firstname} onChange={handleChange}/>
        </label>
        <label> 
          Last Name : <input placeholder='Last Name' type="text" name='lastname' value={inputs.lastname} onChange={handleChange}/>
        </label>
        <label>
            Status: <input type="radio" value="Active" name="status"/> Active
                    <input type="radio" value="Inactive" name="status" /> Inactive
        </label>
        </div>
        <button type='submit' className='save-button'>{editClick?"Update Contact":"Save Contact"}</button>
       </form>


       <div>
        <table>
            <thead style={{ color: "white", padding:"20px", alignItems:"center"}}>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody style={{ color: "white"}}>
                {Data.map((item,i) => ( 
                <tr>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>
                        <button onClick={()=>handleEdit(i)} style={{ fontSize:"20px", color:"white",backgroundColor:"green"}}>Edit</button>
                        <button onClick={()=>handleDelete(i)} style={{ fontSize:"20px", color:"white",backgroundColor:"red"}}>Delete</button>
                    </td>
                </tr>
                 ))} 
            </tbody>
        </table>
    </div>
    </div>
    

    



  );
};

export default Contact;