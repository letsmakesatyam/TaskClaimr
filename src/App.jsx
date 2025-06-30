import React  from 'react'
import Header from './Components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import InputSection from './Components/InputSection';
import ItemContainer from './Components/ItemsContainer';
import {nanoid} from "nanoid";


function App() {

  const currentDate = new Date().toLocaleDateString(); // e.g., "29/06/2025"
  let todoListArray  = [
    {
      task : "College Study" , 
      date : currentDate, 
      id : nanoid()
    },{
      task : "College Study" , 
      date : currentDate,
      id : nanoid()
    },{
      task : "College Study" , 
      date : currentDate,
      id: nanoid()

    }
  ]
  
  const [todoList , setTodoList] = React.useState(todoListArray);
  function addTask(newTask , newDate){
    console.log(`new Task: ${newTask} and date: ${newDate}`);
    setTodoList((prevList)=>{
      return [...prevList , {task: newTask, date: newDate , id: nanoid()}]
    })
  }

  
  

  return (

    <>
    <Header/>
    <InputSection  handleClick = {addTask}/>
    <ItemContainer taskArray = {todoList}  />
    </>
  )
}

export default App
