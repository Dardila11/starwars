import { FC } from "react"
import { useParams } from "react-router-dom"
import { Layout } from "../../components/layouts"


export const CharacterInfo : FC = () => {

  let {name} = useParams()


  return (<Layout title={`${name}`}>Person info</Layout>)
}
