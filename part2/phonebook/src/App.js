import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchFilter from './components/SearchFilter';
import FilteredNums from './components/FilteredNums';
import NameForm from './components/NameForm';

const App = () => {
  // const [persons, setPersons] = useState([
  //   { name: 'George P. Burdell', id: 1, phone: '(123) 456-7890'}
  // ]) 

  const [persons, setPersons] = useState([])   
  const [newSearch, setNewSearch] = useState('');
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value);
    setNewPhone(event.target.value);
  }

  const handleSearch = (event) => {
    console.log(event.target.value);
    setNewSearch(event.target.value);
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
      <h2>Search Filter</h2>
      <SearchFilter newSearch={newSearch} handleSearch={handleSearch} />
      
      <h2>Phonebook</h2>
      <NameForm addName={addName} newName={newName} newPhone={newPhone} 
                handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange}/>
      
      <h2>Numbers</h2>
      <FilteredNums newSearch={newSearch} persons={persons}/>
    </div>
  )
}

export default App;