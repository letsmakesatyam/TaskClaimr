import React from "react";
import Styles from "./TodoItem.module.css"
import { RiDeleteBin6Line } from "react-icons/ri";

function TodoItem(props){
    let date = "29/06/2025"
    return(
        <div className={Styles["item"]}>

            <input id = "task" type = "checkbox" className={Styles["checkbox"]}/>
            <label htmlFor = "task" className={Styles["para"]}>{props.task}: {props.date}</label>
            <RiDeleteBin6Line className={Styles["delete-icon"]}/>


        </div>


    )

}
export default TodoItem