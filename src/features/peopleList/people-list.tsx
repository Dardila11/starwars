import { useCallback, useState, useEffect, useRef } from 'react';

import { Layout } from "../../shared/layouts"
import { Loading } from "../../shared/ui"

import { ListItemCard } from "./components/ListItemCard"
import { usePeople } from "./hooks/usePeople"
import { getCharacterId } from '../../utils/utils';

export const PeopleList = () => {

  const [page, setPage] = useState(1)
  const { people, isError, loading, endOfData } = usePeople(page)
  const loader = useRef(null);

  const handleObserver = useCallback(entries => {
    const target = entries[0]
    if (target.isIntersecting) {
      setPage((prev) => prev + 1)
    }
  }, [])

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    }
    const observer = new IntersectionObserver(handleObserver, option)
    if (loader.current) observer.observe(loader.current)
  }, [handleObserver])

  return (
    <Layout title='People of Star Wars'>
      {people.map(character => (
        <ListItemCard key={getCharacterId(character.url)} character={character} />
      ))}
      {/*  <div className='flex flex-row justify-center'><h1 className='text-red-600'>no more data</h1></div>  */}
      {endOfData ? <></> : (
        <>
          {loading && <Loading />}
          {isError && <div className='flex flex-row justify-center'><h1 className="text-red-600 font-semibold">Failed to Load Data</h1></div>}
          <div ref={loader} />
        </>
      )}

    </Layout>
  )
}