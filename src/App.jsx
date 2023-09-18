// Importing necessary dependencies and components
import { useState } from "react";
import "./App.css";
import Head from "./components/Head";
import TaskCard from "./components/TaskCard";

function App() {
    // State to manage the list of tasks and the input value
    const [taskList, setTaskList] = useState([]);
    const [inputValue, setInputValue] = useState("");

    // Function to update the inputValue state as the user types
    function newTaskToAdd(event) {
        setInputValue(event.target.value);
    }

    // Function to add a new task to the taskList state
    function addNewTask() {
        if (inputValue.trim() != "") {
            setTaskList((prevTasksList) => {
                // Adding the inputValue to the previous task list
                return [...prevTasksList, inputValue];
            });
        }
        // Clearing the input field after adding a task
        setInputValue("");
    }

    // Mapping the taskList to TaskCard components
    let activeTasks = taskList.map((task, index) => (
        <TaskCard key={index} task={task} onDelete={() => deleteTask(index)} />
    ));

    // Function to delete a task from the taskList
    function deleteTask(index) {
        const updatedTaskList = taskList.filter((_, i) => i !== index);
        setTaskList(updatedTaskList);
    }

    // Rendering the JSX
    return (
        <>
            {/* Header component */}
            <Head />
            {/* Container for displaying the list of tasks */}
            <div className="task-list-container">
                <div className="new-task-container">
                    {/* Input field for adding new tasks */}
                    <input
                        onChange={newTaskToAdd}
                        value={inputValue}
                        placeholder="Enter a new task"
                        className="new-task"
                        type="text"></input>
                    {/* Button to add a new task */}
                    <box-icon
                        onClick={addNewTask}
                        name="plus"
                        size="28px"
                        color="#ffffff"></box-icon>
                </div>
                {activeTasks}
            </div>
        </>
    );
}

export default App;
