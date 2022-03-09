import { useEffect, useState } from "react"
import { swApi } from "../../../api"
import { PeopleResponse, Person } from "../../../interfaces"

export const usePeople = () => {
  const [people, setPeople] = useState<Person[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        setLoading(true)
        const res = await swApi.get<PeopleResponse>('people')
        
        if(res.status === 200) {
          setPeople(res.data.results)
          setLoading(false)
        } else {
          setError(res.status.toString())
        }
      } catch(err) {
          console.log(err)
      }
    }
    fetchPeople()
  }, [])

  return {people, error, loading}
}
