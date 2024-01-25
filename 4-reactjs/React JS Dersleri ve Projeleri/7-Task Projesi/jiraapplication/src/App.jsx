import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TaskCreate from "./components/taskCreate";
import TaskList from "./components/TaskList";

function App() {
  
  const [tasks, setTasks] = useState([]);

  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc,
      },
    ];
    setTasks(createdTasks);
  };

  const deleteTaskById=(id)=>{
   const afterDeleteingTasks= tasks.filter((task)=>{
      return task.id!==id;
    })
    setTasks(afterDeleteingTasks);
  }

  const editTaskById=(id,updatedTitle,updatedTaskDesc)=>{
    const updatedTasks= tasks.map((task)=>{
      if(task.id===id){
        return {id,title:updatedTitle,taskDesc:updatedTaskDesc}
      }
      return task;
     })
     setTasks(updatedTasks);
   }

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById} />
    </div>
  );
}

export default App;
