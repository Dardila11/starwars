import { FC } from "react"
import { useParams } from "react-router-dom"

import { Layout } from "shared/layouts"
import { Loading, ErrorMessage } from "shared/ui"
import { CharacterCardInfo } from "./components/CharacterCardInfo"
import { useCharacter } from "./hooks/useCharacter"



export const CharacterInfo: FC = () => {
  let { id } = useParams() as { id: string }

  const { characterInfo, isError, loading } = useCharacter(id)

  return (
    <Layout title={`${characterInfo?.name === undefined ? '' : characterInfo?.name }`} back={true}>
      {loading && <Loading/>}
      {isError && <ErrorMessage/>}
      {characterInfo !== undefined ?
        <CharacterCardInfo character={characterInfo} /> : <></>}
    </Layout>
  )
}
