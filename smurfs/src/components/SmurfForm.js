import React, { useState } from "react";
import { connect } from "react-redux";
import {addSmurfs} from "../actions/index";

function SmurfForm(props) {
    console.log("this is props in form", props);
    const [newSmurf, setNewSmurf] = useState({});

    const handleChanges = e => {
        console.log("handlechanges run this is new smurf", newSmurf)
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: (e.target.value)
        })
      };

    const handleSubmit = e =>{
        e.preventDefault();
        props.addSmurfs(newSmurf)
        console.log("this is newSmurf", newSmurf)
       
  
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="name" 
            placeholder="name"
            value={newSmurf.name} 
            onChange={handleChanges} 
            />
             <input 
            type="text" 
            name="age" 
            placeholder="age"
            value={newSmurf.age} 
            onChange={handleChanges} 
            />
             <input 
            type="text" 
            name="height" 
            placeholder="height"
            value={newSmurf.height} 
            onChange={handleChanges} 
            />
         
            <button>Add Smurf</button>
           
            </form>    
        </div>
    )
}

const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
      smurfs: state.smurfs,
      error: state.error 
    }
  }
  
  export default connect(mapStateToProps, {addSmurfs})(SmurfForm);
