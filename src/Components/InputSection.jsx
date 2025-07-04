import React from "react";
import Styles from "./InputSection.module.css"
import { IoAdd } from "react-icons/io5";
function InputSection(props){
   
    const[newTask , setNewTask] = React.useState("");
    const [newDate , setNewDate] = React.useState("");
    function handleKeyDownEvent(event){
        setNewTask(event.target.value);
       
    }
    function handleDateInput(event){
        setNewDate(event.target.value);
    }
    return(
        <div className="container">
            <div className="row">
                <div className={`col-6 col-md-6 ${Styles["task-input-container"]} `}>

                    <input onChange={handleKeyDownEvent} value = {newTask} className= {Styles["task-input"]} type = "text" placeholder="Add your task here"/>

                </div>
                <div className= {`col-6 col-md-4  ${Styles["date-input-container"]}`}>
                    
                      <input onChange={handleDateInput} value={newDate} className= {Styles["date-input"]} type = "date" />



                </div>
                <div className={`d-none col-md-2 d-md-block ${Styles["task-input-container"]} `}>
                    <button onClick = {()=>{
                        props.handleClick(newTask , newDate);
                        setNewTask("");
                        setNewDate("");
                    }} className= {Styles.button}>Add Task{<IoAdd className={Styles["add-button"]}/>}</button>
                    

                </div> 

            </div>
            <div className="row">
                 <div className={`d-block col-12 d-md-none ${Styles["task-input-container"]} `}>
                    <button onClick = {()=>{
                        props.handleClick(newTask , newDate);
                        setNewTask("");
                        setNewDate("");
                    }} className= {Styles.button}>Add Task{<IoAdd className={Styles["add-button"]}/>}</button>
                    

                </div>

            </div>
            
        </div>
    )

}
export default InputSection