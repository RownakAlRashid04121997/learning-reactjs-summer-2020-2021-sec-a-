import { useParams } from "react-router";
import React,{ Component } from "react";



  const CreateEmployee = ({status})=>{
    const {id:eid} = useParams();

   


    return(
        <>
            <br/>
            <h3>{status==='add'?'Create':'Edit'} User Page: {eid}</h3>
            <form>
                Name: <input type='text' name='name' value=""/> <br/>
                Contact: <input type='text' name='contact' value="" /><br/>
                Username: <input type='text' name='username' value="" /><br/>
				Password: <input type='text' name='password' value="" /><br/>
                <input type='submit' value={status==='add'?'Create':'Update'}/>
            </form>
        </>
    );
}

export default CreateUser;