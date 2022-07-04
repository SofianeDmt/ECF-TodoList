import styled from 'styled-components'

// login page

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 40vw;
  background-color: white;
  justify-content: center;
  text-align: center;
  z-index: 4;
`
export const FormulaireLogin = styled.form`
  margin-top: -5vh;
`
export const InputLog = styled.input`
  width: 25vw;
  height: 6vh;
  border-radius: 10px;
  border: 1px solid #f2f4f8;
  font-size: 20px;
  margin-top: 3vh;
`
export const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
`
export const Para = styled.p`
  font-size: 15px;
`
export const PLogin = styled.p`
  font-weight: lighter;
  font-size: 11;
  margin-bottom: -2vh;
  margin-left: -21vw;
  padding-top: 3vh;
`
export const InputButton = styled.input`
  height: 5vh;
  width: 15vw;
  margin-top: 3vh;
  border-radius: 10px;
  border: 1px solid #f2f4f8;
  background-color: #f2f4f8;
`
export const LoginButton = styled.button`
  height: 5vh;
  width: 15vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 12.5vw;
  margin-top: 1vh;
  border-radius: 10px;
  border: 1px solid #f2f4f8;
  background-color: #f2f4f8;
`
export const LogoImg = styled.img`
  height: 35px;
  margin-right: -2vw;
`
export const ContainerRLogin = styled.div`
  display: flex;
  height: 100vh;
  width: 60vw;
  background-color: #f2f4f8;
`
export const IlluSVG = styled.img`
  position: relative;
  top: -10%;
  left: -100%;
  height: 150vh;
  z-index: 0;
`

// Trello page

export const ContainerTrelloLeft = styled.div`
  height: 100vh;
  width: 20vw;
`
export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  align-items: center;
`
export const ImgUser = styled.img`
  height: 150px;
  border-radius: 50%;
  margin-left: 5vw;
  margin-top: 3vh;
`
export const ContainerTrelloRight = styled.div`
  height: 80vh;
  padding-top: 20vh;
  width: 80vw;
  background-color: #f2f4f8;
  overflow-y: scroll;
  padding-bottom: 5vh;
`
export const Card = styled.div`
  height: 80vh;
  margin-top: 4vh;
  margin-left: 2vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const CardCreate = styled.div`
  height: 7vh;
  width: 80vw;
  background-color: white;
  margin-top: -20vh;
  position: fixed;
  display: flex;
  flex-direction: row;
`
export const Deco = styled.button`
  position: relative;
  margin-top: 1vh;
  left: 38vw;
  background-color: #d0d0d1;
  border: 1px solid #f2f4f8;
  border-radius: 10px;
  color: white;
  height: 5vh;
  width: 5vw;
  cursor: pointer;
`
export const InputCreateTb = styled.input`
  height: 4vh;
  width: 25vw;
  margin-top: 1vh;
  border-radius: 10px;
  border: 1px solid #f2f4f8;
  background-color: #f2f4f8;
`
export const ButtonCreateTab = styled.button`
  margin-left: 2vw;
  height: 4vh;
  width: 2vw;
  margin-top: 1.1vh;
  border-radius: 50%;
  background-color: #f2f4f8;
  border: 1px dashed black;
  font-size: 30px;
`
export const ThemeSwicth = styled.div`
  position: relative;
  margin-top: 2vh;
  left: 37vw;
  background-color: #d0d0d1;
  border: 1px solid #f2f4f8;
  border-radius: 10px;
  color: white;
  height: 3vh;
  width: 3.5vw;
  align-items: center;
  text-align: center;
  padding-top: 5px;
  cursor: pointer;
`
// tâche + liste

export const CardListe = styled.div`
  height: fit-content;
  width: 20vw;
  background-color: white;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #f2f4f8;
  margin-left: 2vw;
  padding: 1vh;
`
export const TabTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-left: 37%;
`
export const CardTitleButton = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  align-items: center;
`
export const InputTasks = styled.input`
  height: 3vh;
  width: 13vw;
  margin-left: -2vw;
  border-radius: 10px;
  border: 1px solid #f2f4f8;
  background-color: #f2f4f8;
`
export const InputButtonTasks = styled.input`
  height: 4vh;
  width: 4vw;
  margin-left: 2vw;
  margin-right: -2vw;
  border-radius: 10px;
  border: 1px solid #f2f4f8;
  background-color: #f2f4f8;
`
export const DeletButtonListe = styled.button`
  margin-left: 2vw;
  margin-top: 5px;
  height: 3vh;
  width: 1.6vw;
  border-radius: 50%;
  background-color: #f2f4f8;
  border: 1px dashed black;
`
export const ButtonV = styled.button`
  margin-top: 2vh;
  height: 3vh;
  width: 1.6vw;
  border-radius: 50%;
  background-color: #f2f4f8;
  border: 1px solid #f2f4f8;
`
export const ContainerTasks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2vh;
`
export const ListeTasks = styled.div`
  margin-top: 1vh;
`
