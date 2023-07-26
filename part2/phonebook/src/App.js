import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'George P. Burdell', id: 1, phone: '(911) 123-4567'}
  ]) 
  
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value);
    setNewPhone(event.target.value);
  }

  const addName = (event) => {
    event.preventDefault();

    const nameObj = {
      name: newName,
      id: persons.length + 1,
      phone: newPhone
    };

    if (persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already in the database.`);
    } else {
      setPersons(persons.concat(nameObj));
      setNewName('');
      setNewPhone('');
    } 
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value = {newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value = {newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <ul key={person.id}>{person.name} {person.phone}</ul>)}
    </div>
  )
}

export default App;