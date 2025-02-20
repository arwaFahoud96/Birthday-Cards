import List from './List'
import data from './data'
import { useState } from 'react'
const App = () => {
  const [people, setPeople] = useState(data)
  const clear = () => setPeople([])
  return (
    <main>
      <section className="container">
        <h1>{people.length} Birthdays Today</h1>
        <List people={people}  />
        <button className="btn btn-block" onClick={clear}>
          Clear
        </button>
      </section>
    </main>
  )
}
export default App
