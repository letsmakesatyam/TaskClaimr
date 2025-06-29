import React from "react";
import Styles from "./Header.module.css"
import { LuListTodo } from "react-icons/lu";
function Header(){
    return(
        <div className={Styles["main-container"]}>
             
            <div className="d-flex flex-row text-center">
                <LuListTodo className={Styles["logo"]} />
                <h1>Hey</h1>
                <p>What's up</p>

            </div>
            
            <h1 className={Styles["right-heading"]}>TaskClaimr</h1>

        </div>
    )
}
export default Header