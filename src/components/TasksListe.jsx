import { useState } from "react";
import { CardListe, CardTitleButton, DeletButtonListe, InputButtonTasks, InputTasks, ListeTasks, TabTitle } from "../style/Style";
import Modal from "./Modal";
import Tasks from './Tasks'


const TasksListe = ({ tableName, tables, setTables, id }) => {
    const [tasks, setTasks] = useState([]);
    const [value, setValue] = useState("");
    const [isShowing, setIsShowing] = useState(false);


    // fonction qui permet de crée des tâches et de donner un id 


    function CreateTasks(e) {
        e.preventDefault()
        if (value !== "") {
            setValue(value)
            setTasks(prevState => [...prevState, { id: Math.floor(Math.random() * 10000), value: value }])
            setValue("")
        }
    }

    // fonction qui permet de supprimé la liste de taches en filtrant tout le tableau de liste et en ressortant ceux avec des id different
    
    function Delete(id) {
        const NewListe = tables.filter((table) => table.id !== id)
        setTables(NewListe)
    }

            // fonction qui permet d'ouvrir le modal avec un state

    function toggle() {
        setIsShowing(!isShowing);
    }


    return (
        <CardListe>

            <CardTitleButton>

                <TabTitle>{tableName}</TabTitle>
                
                <DeletButtonListe onClick={toggle}>X</DeletButtonListe>

            </CardTitleButton>

                <Modal id={id} Delete={() => Delete(id)} isShowing={isShowing} hide={toggle} />
            
            <form onSubmit={CreateTasks}>

                <InputTasks type="text" value={value} onChange={(e) => setValue(e.target.value)} />

                <InputButtonTasks value="Create" type="submit"/>

            </form>
            
            <ListeTasks>

            {tasks.map((todo) => 
                <Tasks key={todo.id} tasks={tasks} setTasks={setTasks} id={todo.id} value={todo.value} />
                )}
                
            </ListeTasks>

         </CardListe>

    )
}

export default TasksListe;