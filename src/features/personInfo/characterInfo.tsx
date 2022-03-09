import { FC } from "react"
import { useParams } from "react-router-dom"
import { Layout } from "../../shared/layouts"
import { CharacterCardInfo } from "./components/CharacterCardInfo"
import { useCharacter } from './hooks/useCharacter';


export const CharacterInfo : FC = () => {
  let { id } = useParams() as {id : string}
  
  const { characterInfo, isError, loading } = useCharacter(id)

  if(loading) {
    return <p>loading</p>
  }

  if(isError) {
    return <p>Failed to Load Data</p>
  }

  return (
  <Layout title={`${characterInfo?.name}`} back={true}>
    {characterInfo !== undefined ? 
    <CharacterCardInfo character={characterInfo}/> : <p>404</p>}
  </Layout>
  )
}
