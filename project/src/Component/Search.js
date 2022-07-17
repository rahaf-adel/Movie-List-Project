import React, { useState ,useEffect} from 'react'
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
const people = [
    "Naif",
    "Noura",
    "Masha",
    "Lamia",
    "Rahaf",
    "Raghad",
    "Ahmad"
  ];
  
export default function Search() {
const [searchTerm, setSearchTerm] = useState("");
const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const results = people.filter(people =>
      people.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div className='ToDoList'>
        <h1 className='title'>Search</h1>
        <input
        type="text"
        placeholder="Search"
        onChange={ (event) => {setSearchTerm(event.target.value);}}
        value={searchTerm}
      />
      <ul>
      {searchResults.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
    
  )
}
 