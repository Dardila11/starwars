import { FC } from "react"
import { Person } from "../../interfaces"

interface CharacterCardInfoProps {
  character: Person
}

export const CharacterCardInfo : FC<CharacterCardInfoProps> = ({character}) => {
  return (
    <div>
      <h2 className="pl-4 mt-8 font-bold">General Information</h2>
      <div>
        <div className="flex flex-row justify-between px-4 py-4">
          <p>Eye Color</p>
          <p className="font-bold">{character.eye_color}</p>
        </div>
        <span className='block w-full h-[0.2px] pl-4 bg-gray-300'></span>
      </div>
      <div>
        <div className="flex flex-row justify-between px-4 py-4">
          <p>Hair Color</p>
          <p className="font-bold">{character.hair_color}</p>
        </div>
        <span className='block w-full h-[0.2px] pl-4 bg-gray-300'></span>
      </div>
      <div>
        <div className="flex flex-row justify-between px-4 py-4">
          <p>Skin Color</p>
          <p className="font-bold">{character.skin_color}</p>
        </div>
        <span className='block w-full h-[0.2px] pl-4 bg-gray-300'></span>
      </div>
      <div>
        <div className="flex flex-row justify-between px-4 py-4">
          <p>Eye Color</p>
          <p className="font-bold">{character.eye_color}</p>
        </div>
        <span className='block w-full h-[0.2px] pl-4 bg-gray-300'></span>
      </div>
      <div>
        <div className="flex flex-row justify-between px-4 py-4">
          <p>Birth Year</p>
          <p className="font-bold">{character.birth_year}</p>
        </div>
        <span className='block w-full h-[0.2px] pl-4 bg-gray-300'></span>
      </div>
    </div>
  )
}