import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Person } from '../../interfaces'
import arrowIcon from '../../assets/icons/arrow.svg'

interface ListItemCardProps {
  person: Person
}

export const ListItemCard : FC<ListItemCardProps> = ( {person} ) => {

  let navigate = useNavigate()

  const getCharacterId = (url : string) : string => {
    return url.slice(-2,-1)
  }

  const onClick = () => {
    navigate(`/character/${getCharacterId(person.url)}`)
  }

  
  return (
    <>
      <div className='flex flex-row justify-between w-full py-4 pl-4 pr-6' onClick={onClick}>
        <div className='flex flex-col'>
            <h2 className='font-bold text-[#333333]'>{person.name}</h2>
            <p className='capitalize text-[#828282]'>{person.gender}</p>
        </div>
        <img src={arrowIcon} alt="arrow icon"/>
      </div>
      <span className='block w-full h-[0.2px] pl-4 bg-gray-300'></span>
    </>
  )
}