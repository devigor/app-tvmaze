import { useState } from 'react'
import * as S from './Styles/Styles'

function App() {
  const [serie, setSerie] = useState('')
  const [id, setId] = useState(null)
  const [name, setName] = useState('')
  const [image, setImage] = useState(null)
  const [summary, setSummary] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      // Make fetch to api
      const fetchApi = await fetch(`http://api.tvmaze.com/search/shows?q=${serie}`)
      // Transform response in json
      const fetchResponse = await fetchApi.json()
      // Result
      const { id, name, image, summary } = fetchResponse[0].show
      setId(id)
      setName(name)
      setImage(image.medium)
      setSummary(summary)
      setSerie('')

    } catch(e) {
      setError(e)
    }
  }

  function handleChange(event) {
    const { target } = event
    setSerie(target.value)
  }

  return (
    <S.Container>
      <S.GlobalStyle />
      <S.FormContainer>
        <S.Title>App TvMaze</S.Title>
        <S.Form onSubmit={ handleSubmit }>
          <S.Input
            onChange={ handleChange }
            type="text"
            placeholder="Busque sua série"
            value={serie} />
          <S.Button>Pesquisar</S.Button>
        </S.Form>
      </S.FormContainer>
      { error ? "" : ""}
      { id ?
        <S.InfoContainer>
          <S.InfoImage src={ image } />
          <S.TextContainer>
            <S.Text>{ name }</S.Text>
            <S.Text summary dangerouslySetInnerHTML={{ __html: summary }} />
          </S.TextContainer>
        </S.InfoContainer>
      : ''}
    </S.Container>
  )
}

export default App
