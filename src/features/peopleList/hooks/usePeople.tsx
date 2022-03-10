import { useEffect, useState, useCallback } from 'react';
import { swApi } from "../../../api"
import { PeopleResponse, Person } from "../../../interfaces"

export const usePeople = (page: number) => {
  const [people, setPeople] = useState<Person[]>([])
  const [isError, setIsError] = useState(false)
  const [endOfData, setEndOfData] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchPeople = useCallback( async () => {
    try {
      setLoading(true)
      const res = await swApi.get<PeopleResponse>(`people/?page=${page}`)

      if(res.status === 404) {
        setIsError(true)
        setLoading(false)
      }
      
      if(res.status === 200) {
        setPeople(prev => [...prev, ...res.data.results])
        setLoading(false)
        if(res.data.next === null) setEndOfData(true)
      } else {
        setIsError(true)
      }
    } catch(err) {
    }
  },[page])

  useEffect(() => {
    fetchPeople()
  }, [page, fetchPeople])

  return {people, isError, loading, endOfData}
}
