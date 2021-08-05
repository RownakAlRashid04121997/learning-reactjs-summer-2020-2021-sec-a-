import { useParams } from "react-router";
import React,{ Component } from "react";



  const CreateUser = ({status})=>{
    const {id:eid} = useParams();
   /* constructor(props){
        super(props)

        this.state={
            name:''
        }
    }

    handlenameChange= (event)=>{
        this.setState({
            name:event.target.value

        })
    }*/
   


    return(
        <>
            <br/>
            <h3>{status==='add'?'Create':'Edit'} User Page: {eid}</h3>
            <form>
                Name: <input type='text' name='name' value=""/> <br/>
                ID: <input type='text' name='id' value="" /><br/>
                Dept: <input type='text' name='dpet' value="" /><br/>
                <input type='submit' value={status==='add'?'Create':'Update'}/>
            </form>
        </>
    );
}

export default CreateUser;