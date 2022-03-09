import { FC } from 'react'
import arrowIcon from '../../assets/icons/arrow.svg'
import { Person } from '../../interfaces'

interface ListItemCardProps {
  person: Person
}

export const ListItemCard : FC<ListItemCardProps> = ( {person} ) => {
  
  return (
    <div>
      <div className='flex flex-row justify-between w-full py-4 pl-4 pr-6'>
        <div className='flex flex-col'>
            <h2 className='font-bold'>{person.name}</h2>
            <p className='capitalize'>{person.gender}</p>
        </div>
        <img src={arrowIcon} alt="arrow icon"/>
      </div>
    </div>
  )
}