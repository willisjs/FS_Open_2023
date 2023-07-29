const FilteredNums = ({newSearch, persons}) => {
    return (
        <div>
        <h2>Numbers</h2>
        {persons.filter(person => !newSearch || person.name.toLowerCase().includes(newSearch.toLowerCase()))
          .map(person => <ul key={person.id}>{person.name} {person.phone}</ul>)
        }
        </div>
    )
}

export default FilteredNums;