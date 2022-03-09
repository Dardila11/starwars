import { Layout } from "../../components/layouts"
import { ListItemCard } from "../../components/ui"
import { usePeople } from "./hooks/usePeople"

export const PeopleList = () => {

  const { people, error, loading } = usePeople()

  return (
    <Layout title='People of Star Wars'>
      {loading ? <h1 className="text-blue-600">Loading</h1> :
        error !== "" ? <h1 className="text-red-600">Failed to Load Data</h1> :
          people.map(person => (
            <ListItemCard key={person.name} person={person}/>
          ))}
    </Layout>
  )
}