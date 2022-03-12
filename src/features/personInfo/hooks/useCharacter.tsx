import { useEffect, useState } from "react"

import { swApi } from "api"
import { Person, Vehicle } from "interfaces"
import { getCharacterId } from "utils"



/**
 * Custom Hook to fetch data of a single star wars character
 * @param id 
 * @returns { CharacterInfo, isError, loading }
 */
export const useCharacter = (id : string) => {
  const [characterInfo, setCharacterInfo] = useState<Person>()
  const [isError, setIsError] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchVehicles = async (vehiclesUrls: string[]) => {
    let vehiclesNames: string[] = []
    for(let i=0; i< vehiclesUrls.length; i++) {
      const res = await swApi.get<Vehicle>(`vehicles/${getCharacterId(vehiclesUrls[i])}`)
      vehiclesNames.push(res.data.name)
    }
    return vehiclesNames
  }

  useEffect(() => {
    const fetchCharacterInfo = async () => {
      try {
        setLoading(true)
        const res = await swApi.get<Person>(`people/${id}`)
        if(res.status === 200) {
          const resVehicles = await fetchVehicles(res.data.vehicles)
          let newData = Object.assign(res.data, { vehiclesName: resVehicles })
          setCharacterInfo(newData)
          setLoading(false)
        } else {
          setIsError(true)
        }
      } catch(err) {
          console.log(err)
      }
    }
    fetchCharacterInfo()
  }, [id])

  return {characterInfo, isError, loading}

}