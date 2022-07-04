import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogContext } from '../context/LogContext'
import {
  ContainerLogin,
  ContainerRLogin,
  FormulaireLogin,
  IlluSVG,
  InputButton,
  InputLog,
  LoginButton,
  LogoImg,
  Para,
  PLogin,
  Title,
} from '../style/Style'
import google from '../img/google.svg'
import Illustration from '../img/IlluLoging.svg'

// petite base de donnée local

const database = { username: 'jimmylan', password: '123' }

const Login = () => {
  const [data, setData] = useState({ username: null, password: null })
  const { loginStatus, setLoginStatus } = useContext(LogContext)
  const navigate = useNavigate()

  // use effect qui veirifie si le login est true dans le localStorage

  useEffect(() => {
    if (localStorage.getItem('loginStatus') === 'true') {
      setLoginStatus(true)
    }
  }, [setLoginStatus])

  // fonction qui reprend les tape dans l'input et qui les compares ala petite base de donnée, puis, met tout ca dans le local storage

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      data.username === database.username &&
      data.password === database.password
    ) {
      setLoginStatus(true)
      localStorage.setItem('loginStatus', true)
      localStorage.setItem('username', data.username)
    }
  }

  // use effect de redirection si besoin

  useEffect(() => {
    if (loginStatus) {
      navigate('/trello')
    }
  }, [loginStatus, navigate])

  return (
    <div style={{ display: 'flex' }}>
      <ContainerLogin>
        <FormulaireLogin onSubmit={handleSubmit}>
          <Title>Welcome back</Title>
          <Para> Welcome back? enter your details</Para>
          <PLogin>Username</PLogin>
          <InputLog
            type="text"
            onChange={(e) =>
              setData((prevstate) => ({
                ...prevstate,
                username: e.target.value,
              }))
            }
          />
          <PLogin>Password</PLogin>
          <InputLog
            type="password"
            onChange={(e) =>
              setData((prevstate) => ({
                ...prevstate,
                password: e.target.value,
              }))
            }
          />
          <br />
          <InputButton value="Log In" type="submit" />
          <br />
          <LoginButton>
            <LogoImg src={google} alt="google" />
            Sign In with Google
          </LoginButton>
        </FormulaireLogin>
      </ContainerLogin>

      <ContainerRLogin>
        <IlluSVG src={Illustration} alt="illu" />
      </ContainerRLogin>
    </div>
  )
}

export default Login
