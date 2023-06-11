import React from 'react';
import Data from "./Contact";
const MyData = () => {
  return (
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
                {Data.map((e) => ( 
                <tr>
                    <td>{e.firstname}</td>
                    <td>{e.lastname}</td>
                    <td>
                        <button style={{ fontSize:"20px", color:"white",backgroundColor:"green"}}>Edit</button>
                        <button style={{ fontSize:"20px", color:"white",backgroundColor:"red"}}>Delete</button>
                    </td>
                </tr>
                 ))} 
            </tbody>
        </table>
    </div>
  );
};

export default MyData;