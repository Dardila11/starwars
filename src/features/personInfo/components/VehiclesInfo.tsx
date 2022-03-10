import { FC } from "react";

interface VehiclesInfoProps {
  vehicles: string[]
}

export const VehiclesInfo : FC<VehiclesInfoProps> = ({vehicles}) => {
  return (

    <>
      <h2 className="pl-4 mt-8 font-bold">Vehicles</h2>
      {vehicles.length === 0 ? <>No Vehicles</> : 
      <>
      {vehicles.map((vehicle, index) => (
        <div key={index}>
          <div className="flex flex-row justify-between px-4 py-4">
            <p className="text-[#828282]">{vehicle}</p>
          </div>
          <span className='block w-full h-[0.2px] pl-4 bg-gray-300'></span>
      </div>
      ))}
      </>}
      
    </>
  )
}