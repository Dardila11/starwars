import { useEffect, useState } from "react"
import { swApi } from "../../../api"
import { Person } from "../../../interfaces"

/**
 * Custom Hook to fetch data of a single star wars character
 * @param id 
 * @returns { CharacterInfo, isError, loading }
 */
export const useCharacter = (id : string) => {
  const [characterInfo, setCharacterInfo] = useState<Person>()
  const [isError, setIsError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        setLoading(true)
        const res = await swApi.get<Person>(`people/${id}`)
        
        if(res.status === 200) {
          setCharacterInfo(res.data)
          setLoading(false)
        } else {
          setIsError(true)
        }
      } catch(err) {
          console.log(err)
      }
    }
    fetchPeople()
  }, [id])

  return {characterInfo, isError, loading}

}