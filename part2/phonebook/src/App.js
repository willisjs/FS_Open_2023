import { useState } from 'react'
import SearchFilter from './components/SearchFilter';
import FilteredNums from './components/FilteredNums';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'George P. Burdell', id: 1, phone: '(123) 456-7890'}
  ]) 
  
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newSearch, setNewSearch] = useState('');

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

  const handleSearch = (event) => {
    console.log(event.target.value);
    setNewSearch(event.target.value);
  }

  return (
    <div>
      <SearchFilter newSearch={newSearch} handleSearch={handleSearch} />
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
      <FilteredNums newSearch={newSearch} persons={persons}/>
    </div>
  )
}

export default App;