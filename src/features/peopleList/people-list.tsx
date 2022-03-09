import { Layout } from "../../shared/layouts"
import { Loading } from "../../shared/ui"
import { ListItemCard } from "./components/ListItemCard"
import { usePeople } from "./hooks/usePeople"

export const PeopleList = () => {

  const { people, error, loading } = usePeople()

  return (
    <Layout title='People of Star Wars'>
      {loading ? <Loading/> :
        error !== "" ? <h1 className="text-red-600">Failed to Load Data</h1> :
          people.map(person => (
            <ListItemCard key={person.name} person={person}/>
          ))}
    </Layout>
  )
}