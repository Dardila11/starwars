import { FC } from 'react'
import { useNavigate } from 'react-router-dom';

import { Person } from '../../../interfaces'
import arrowIcon from '../../../assets/icons/arrow.svg'
import { getCharacterId } from '../../../utils'

interface ListItemCardProps {
  character: Person
}

export const ListItemCard: FC<ListItemCardProps> = ({ character }) => {

  let navigate = useNavigate()

  const onClick = () => {
    navigate(`/character/${getCharacterId(character.url)}`)
  }

  return (
    <>
      <div onClick={onClick} className='flex flex-row justify-between w-full py-4 pl-4 pr-6' >
        <div className='flex flex-col'>
          <h2 className='font-bold text-[#333333]'>{character.name}</h2>
          <p className='text-[#828282]'> <span className='capitalize'>{character.speciesNameArray.length === 0 ? 'Human' : character.speciesNameArray[0] }</span> from <span className='capitalize'>{character.homeworldName[0]}</span></p>
        </div>
        <img src={arrowIcon} alt="arrow icon" />
      </div>
      <span className='block w-full h-[0.2px] ml-4 bg-gray-300'></span>
    </>
  )
}