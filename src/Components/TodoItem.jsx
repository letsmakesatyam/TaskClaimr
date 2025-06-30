import React from "react";
import Styles from "./TodoItem.module.css"
import { RiDeleteBin6Line } from "react-icons/ri";

function TodoItem(props){
    
    return(
        <div className={Styles["item"]}>

            <input id = {props.id} type = "checkbox" checked= {props.completed} onChange={()=>{
                props.handleToggle(props.id);
            }} className={Styles["checkbox"]}/>
            <label htmlFor = {props.id} className={Styles["para"]}>`{props.task} on:  {props.date}  `</label>
            <RiDeleteBin6Line onClick={(id)=>{
                props.handleDelete(props.id);
            }} className={Styles["delete-icon"]}/>


        </div>


    )

}
export default TodoItem