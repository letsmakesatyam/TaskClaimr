import React  from 'react'
import Header from './Components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import InputSection from './Components/InputSection';
import ItemContainer from './Components/ItemsContainer';
import {nanoid} from "nanoid";


function App() {


  
  
  const [todoList , setTodoList] = React.useState(()=>{
    const storedList = localStorage.getItem("todoList");
    return storedList ? JSON.parse(storedList) : [];
  });
  React.useEffect(()=>{
    localStorage.setItem("todoList" , JSON.stringify(todoList))
  },[todoList])
  function addTask(newTask , newDate){
    console.log(`new Task: ${newTask} and date: ${newDate}`);
    setTodoList((prevList)=>{
      return [...prevList , {task: newTask, date: newDate , id: nanoid() , completed: false}]
    })
  }
  function toggleTaskStatus(id){
    setTodoList((prevList)=>{
      return prevList.map((object)=>{
        return object.id === id  ? {...object , completed : !object.completed} : object;
      })
    })
  }

  
  function handleDelete(id){
    setTodoList((prevList)=>{
      return prevList.filter((object)=>{
        return (object.id !==id);
      })
    })
  }

  return (

    <>
    <Header/>
    <InputSection  handleClick = {addTask}/>
    <ItemContainer handleDelete= {handleDelete} handleToggle = {toggleTaskStatus}  taskArray = {todoList}  />
    </>
  )
}

export default App
