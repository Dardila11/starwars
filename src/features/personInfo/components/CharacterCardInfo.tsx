import { FC } from "react"
import { Person } from "../../../interfaces"
import { GeneralInfo } from "./GeneralInfo"

interface CharacterCardInfoProps {
  character: Person
}

export const CharacterCardInfo : FC<CharacterCardInfoProps> = ({character}) => {
  return (
    <div>
      <GeneralInfo character={character}/>
      {/* Vehicle Info */}
    </div>
  )
}