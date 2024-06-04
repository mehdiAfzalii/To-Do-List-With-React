import { useState } from "react";

function ToDoList() {

    const [tasks, setTask] = useState([])
    const [newTask, setNewTask] = useState("")

    function handleChange(e) {
        setNewTask(e.target.value)
    }

    function addTask() {
        if (newTask.trim() !== "") {            
            setTask(t => [...t, newTask])
            setNewTask("")
        }
        else {
            alert("Please Enter task...")
        }
    }

    function deleteTask(index) {
        const updateTask =  tasks.filter((_, i) => i !== index)
        setTask(updateTask)
    }

    return (
        <div className="to-do-list">
            <h1>To Do List</h1>

            <div>
                <input type="text" placeholder="Enter a task ..." value={newTask} onChange={(e) => handleChange(e)}/>
                <button onClick={addTask} className="add-button">Add</button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default ToDoList;