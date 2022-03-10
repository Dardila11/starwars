import { FC } from "react"
import { Person } from "../../../interfaces"
import { GeneralInfo } from "./GeneralInfo"
import { VehiclesInfo } from "./VehiclesInfo"

interface CharacterCardInfoProps {
  character: Person
}

export const CharacterCardInfo : FC<CharacterCardInfoProps> = ({character}) => {

  console.log(character)

  return (
    <div>
      <GeneralInfo character={character}/>
      {/* Vehicle Info */}
      <VehiclesInfo vehicles={character.vehiclesName}/>
    </div>
  )
}