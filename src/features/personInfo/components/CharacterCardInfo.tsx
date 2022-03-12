import { FC } from "react"
import { Person } from "../../../interfaces"
import { GeneralInfo } from "./GeneralInfo"
import { VehiclesInfo } from "./VehiclesInfo"

interface CharacterCardInfoProps {
  character: Person
}

export const CharacterCardInfo : FC<CharacterCardInfoProps> = ({character}) => {
  return (
    <div>
      <GeneralInfo character={character}/>
      <VehiclesInfo vehicles={character.vehiclesName}/>
    </div>
  )
}