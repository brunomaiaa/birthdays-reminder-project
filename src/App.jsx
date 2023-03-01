import './App.css'
import List from './components/List'
import { useState } from 'react'
import data from './data'

function App() {
 const [birthdayList, setBirthdayList] = useState(data )


  return (
    <main>
      <section className='container'>
        <h3>Birthdays Reminder</h3>
        <h3> {birthdayList.length} Birthdays today</h3>
        <List birthdayList={birthdayList}/>
        <button onClick={() => setBirthdayList([])}>clear all</button>
      </section>
    </main>

  
  )
}

export default App
