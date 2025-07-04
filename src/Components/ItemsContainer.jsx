import React from "react";
import Styles from "./ItemsContainer.module.css"
import TodoItem from "./TodoItem";
function ItemContainer(props){
    let taskArray = props.taskArray.map((object)=>{
        return (
            <TodoItem handleDelete = {props.handleDelete} handleClick = {props.handleClick} handleToggle = {props.handleToggle} completed = {object.completed} id = {object.id} key = {object.id} task = {object.task} date = {object.date}/>
        )
    })
    return(
        <center>
            <div className={Styles.card}>
               {taskArray}
               



        </div>

        </center>
        
    )

}
export default ItemContainer