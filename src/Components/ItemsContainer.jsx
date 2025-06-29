import React from "react";
import Styles from "./ItemsContainer.module.css"
import TodoItem from "./TodoItem";
function ItemContainer(){
    return(
        <center>
            <div className={Styles.card}>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
               

        </div>

        </center>
        
    )

}
export default ItemContainer