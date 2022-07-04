import { useContext, useState } from 'react'
import Modal from '../components/Modal'
import TasksListe from '../components/TasksListe'
import {
  ButtonCreateTab,
  Card,
  CardCreate,
  ContainerTrelloLeft,
  ContainerTrelloRight,
  Deco,
  ImgUser,
  InputCreateTb,
  Nav,
  ThemeSwicth,
} from '../style/Style'
import Bft from '../img/BFT.png'
import { Link, Navigate } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'




const Tab = () => {
  const [tables, setTables] = useState([])
  const [tableName, setTableName] = useState('')
  const { theme, SetTheme } = useContext(ThemeContext)

        // fonction pour crée les Carte qui contiendont les listes de tâches

  function CreateTab(e) {
    e.preventDefault()
    if (tableName !== '') {
      setTableName(tableName)
      setTables((prevState) => [
        ...prevState,
        {
          id: Math.floor(Math.random() * 10000),
          tableName: tableName,
          modal: <Modal />,
        },
      ])
      setTableName('')
    }
  }
  

      // fonction pour se deconnecter qui utilise le local storage pour valider la Deconnection

  function Deconnection() {
    localStorage.setItem('loginStatus', false)
    window.location.reload(true)
    return <Navigate to="/" />
  }

  return (

    <div style={{ display: 'flex' }}>



      
      <ContainerTrelloLeft>
        <h2 style={{ marginLeft: '1.5vw' }}>
          Welcome Back {localStorage.getItem('username').toUpperCase()}
        </h2>
        <ImgUser src={Bft} alt="" />
        <p style={{ marginLeft: '4vw', marginTop: '5vh' }}>
          Vous avez {tables.length} listes en attente
        </p>

        <Nav>
          <Link
            style={{
              textDecoration: 'none',
              color: '#D0D0D1',
              marginTop: '3vh',
              fontSize: 21,
            }}
            to="/trello"
          >
            Workspace Visible
          </Link>
          <Link
            style={{
              textDecoration: 'none',
              color: '#D0D0D1',
              marginTop: '3vh',
              fontSize: 21,
            }}
            to="/trello"
          >
            Power Ups
          </Link>
          <Link
            style={{
              textDecoration: 'none',
              color: '#D0D0D1',
              marginTop: '3vh',
              fontSize: 21,
            }}
            to="/trello"
          >
            Automation
          </Link>
          <Link
            style={{
              textDecoration: 'none',
              color: '#D0D0D1',
              marginTop: '3vh',
              fontSize: 21,
            }}
            to="/trello"
          >
            Activity
          </Link>
          <Link
            style={{
              textDecoration: 'none',
              color: '#D0D0D1',
              marginTop: '3vh',
              fontSize: 21,
            }}
            to="/trello"
          >
            Monitor
          </Link>
          <Link
            style={{
              textDecoration: 'none',
              color: '#D0D0D1',
              marginTop: '3vh',
              fontSize: 21,
            }}
            to="/trello"
          >
            Profil
          </Link>
        </Nav>
      </ContainerTrelloLeft>

      <ContainerTrelloRight>

        <CardCreate>
          
          <form style={{ display: 'flex' }} onSubmit={CreateTab}>

            <InputCreateTb
              placeholder="Name of TodoListe"
              type="text"
              value={tableName}
              onChange={(e) => setTableName(e.target.value)}
            />

            <ButtonCreateTab value="" type="submit" />

          </form>

          <ThemeSwicth onClick={() => SetTheme(!theme)}>Theme</ThemeSwicth>

          <Deco onClick={Deconnection}>Logout</Deco>

        </CardCreate>

        <Card>
          {tables.map((liste) => (
            <TasksListe
              modal={<Modal />}
              key={liste.id}
              tables={tables}
              setTables={setTables}
              id={liste.id}
              tableName={liste.tableName}
            />
          ))}
        </Card>
      </ContainerTrelloRight>
    </div>
  )
}

export default Tab
