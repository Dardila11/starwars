import { FC } from "react"
import { Person } from "../../../interfaces"
import { SeparatorLine } from "../../../shared/ui"

interface GeneralInfoProps {
  character: Person
}

export const GeneralInfo : FC<GeneralInfoProps> = ({character}) => {

  const appearance =  ['Eye Color', 'Hair Color', 'Skin Color', 'Birth Year']
  return (
    <div>
      <h2 className="pl-4 mt-8 font-bold">General Information</h2>
      <div>
        <div className="flex flex-row justify-between px-4 py-4">
          <p className="text-light" >Eye Color</p>
          <p className="font-bold capitalize">{character.eye_color}</p>
        </div>
        <SeparatorLine/>
      </div>
      <div>
        <div className="flex flex-row justify-between px-4 py-4">
          <p className="text-light">Hair Color</p>
          <p className="font-bold capitalize">{character.hair_color}</p>
        </div>
        <SeparatorLine/>
      </div>
      <div>
        <div className="flex flex-row justify-between px-4 py-4">
          <p className="text-light">Skin Color</p>
          <p className="font-bold capitalize">{character.skin_color}</p>
        </div>
        <SeparatorLine/>
      </div>
      <div>
        <div className="flex flex-row justify-between px-4 py-4">
          <p className="text-light">Birth Year</p>
          <p className="font-bold capitalize">{character.birth_year}</p>
        </div>
        <SeparatorLine/>
      </div>

    </div>
  )
}