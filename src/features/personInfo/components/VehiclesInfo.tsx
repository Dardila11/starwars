import { FC } from "react";
import { SeparatorLine } from "../../../shared/ui";

interface VehiclesInfoProps {
  vehicles: string[]
}

export const VehiclesInfo : FC<VehiclesInfoProps> = ({ vehicles }) => {
  return (

    <>
      <h2 className="pl-4 mt-8 font-bold">Vehicles</h2>
      {vehicles.length === 0 ? <></> :
        <>
          {vehicles.map((vehicle, index) => (
            <div data-testid={`vehicleName-${index}`} key={index}>
              <div className="flex flex-row justify-between px-4 py-4">
                <p  className="text-light font-bold">{vehicle}</p>
              </div>
              <SeparatorLine/>
            </div>

          ))}

        </>}

    </>
  )
}