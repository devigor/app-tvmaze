import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #145DA0;
    font-family: 'Montserrat', sans-serif;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`

const FormContainer = styled.div`
  margin-top: 100px;
  text-align: center;
  width: 400px;
`

const Title = styled.h1`
  color: #F9F1F0;
  font-size: 28px;
  letter-spacing: 2px;
  text-transform: uppercase;
`

const Form = styled.form`
  padding-top: 10px;
`

const Input = styled.input`
  width: 100%;
  height: 35px;
  padding: 10px;
  border-radius: 50px;
  border: none;
`

const Button = styled.button`
  border: none;
  width: 100%;
  border-radius: 20px;
  height: 35px;
  margin-top: 10px;
  background-color: palevioletred;
  color: #FFF;
  font-size: 16px;
`

const InfoContainer = styled.div`
  display: flex;
  width: 90%;
  margin-top: 50px;
  border: solid 1px black;
  padding: 20px;
`

const TextContainer = styled.div`
  margin-left: 25px;
`

const Text = styled.p`
  color: #FFF;
  font-size: ${props => props.summary ? '14px' : '24px'};
  letter-spacing: 2px;
  padding: 0 0 10px 0;
`

const InfoImage = styled.img`
  width: 150px;
  height: 200px;
`

export {
  GlobalStyle,
  Container,
  FormContainer,
  Title,
  Input,
  Button,
  Form,
  InfoContainer,
  TextContainer,
  Text,
  InfoImage
}