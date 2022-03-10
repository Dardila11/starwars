import { FC } from "react"
import { useParams } from "react-router-dom"
import { Layout } from "../../shared/layouts"
import { Loading } from "../../shared/ui";
import { CharacterCardInfo } from "./components/CharacterCardInfo"
import { useCharacter } from './hooks/useCharacter';


export const CharacterInfo: FC = () => {
  let { id } = useParams() as { id: string }

  const { characterInfo, isError, loading } = useCharacter(id)

  if (loading) {
    return <Loading />
  }

  if (isError) {
    return (
    <div className="flex flex-row justify-center" >
      <p className="text-red-600 font-bold">Failed to Load Data</p>
    </div>
    )
  }

  return (
    <Layout title={`${characterInfo?.name}`} back={true}>
      {characterInfo !== undefined ?
        <CharacterCardInfo character={characterInfo} /> : <p>404</p>}
    </Layout>
  )
}
