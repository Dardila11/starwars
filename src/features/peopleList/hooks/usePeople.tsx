import { useEffect, useState, useCallback } from 'react';

import { swApi } from 'api';
import { Person, Specie, Planet, PeopleResponse } from 'interfaces';
import { getCharacterId } from 'utils';

export const usePeople = (page: number) => {
  const [people, setPeople] = useState<Person[]>([])
  const [isError, setIsError] = useState(false)
  const [endOfData, setEndOfData] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchSpecieByPerson = async (person: Person) => {
    let specieNames: string[] = []
    person.species.forEach(url => {
      swApi.get<Specie>(`species/${getCharacterId(url)}`)
        .then(res => specieNames.push(res.data.name))
    })
    return specieNames
  }

  const fetchPlanetByPerson = async (person: Person) => {
    let home: string[] = []
    const res = await swApi.get<Planet>(`planets/${getCharacterId(person.homeworld)}`)
    home.push(res.data.name)
    return home;
  }


  const fetchPeople = useCallback(async () => {
    try {
      setLoading(true)
      const res = await swApi.get<PeopleResponse>(`people/?page=${page}`)

      if (res.status === 200) {
        for(let i=0; i< res.data.results.length; i++){
          let newPerson: Person
          let specieNames = await fetchSpecieByPerson(res.data.results[i])
          let planet = await fetchPlanetByPerson(res.data.results[i])

          newPerson = Object.assign(res.data.results[i],
            { speciesNameArray: specieNames, homeworldName: planet })
          // update person
          res.data.results[i] = newPerson

        }
        setPeople(prev => [...prev, ...res.data.results])
        setLoading(false)

        if (res.data.next === null) setEndOfData(true)
      } else {
        setIsError(true)
      }
    } catch (err) {
      setLoading(false)
      setIsError(true)
    }
  }, [page])

  useEffect(() => {
    fetchPeople()
  }, [page, fetchPeople])



  return { people, isError, loading, endOfData }
}
