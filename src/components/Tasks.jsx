import { useState } from "react";
import { ButtonV, ContainerTasks } from "../style/Style";


const Tasks = ({ tasks, setTasks, id, value }) => {
    const [line, setLine] = useState(false)

        // fonction permetant de supprimé de la liste l'id actuel de la tache que l'on veux remov

    function Delete(id) {
       const NewListe = tasks.filter((tasks) => tasks.id !== id)
        setTasks(NewListe)
    }


    return (
        <ContainerTasks>

            <ButtonV style={{backgroundColor: line && 'green'}} onClick={() => setLine(!line)}>
                V
            </ButtonV>

            <p style={{textDecoration: line && "line-through"}}>
                {value}
            </p>

            <ButtonV onClick={() => Delete(id)}>
                X
            </ButtonV>

        </ContainerTasks>

    )
}

export default Tasks;