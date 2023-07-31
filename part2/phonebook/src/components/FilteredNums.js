const FilteredNums = ({newSearch, persons}) => {
    return (
        <div>
        {persons.filter(person => !newSearch || person.name.toLowerCase().includes(newSearch.toLowerCase()))
          .map(person => <ul key={person.id}>{person.name} {person.phone}</ul>)
        }
        </div>
    )
}

export default FilteredNums;