type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
}

import { useState, KeyboardEvent } from 'react';

import { GoSearch } from 'react-icons/go';

import classes from './Search.module.css';

const Search = ({loadUser}: SearchProps) => {
  const [userName, setUserName] = useState('');

  // Pressing the enter key -> Search user
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      loadUser(userName)
    }
  }

  return (
    <div className={classes.search}>
      <h2>Search for a user:</h2>
      <p>Discover your best projects</p>

      <div className={classes.inputField}>
        {/* e.target.value: Retrieves the value of input */}
        <input 
          type='text' 
          placeholder='Enter username'
          onChange={(e) => setUserName(e.target.value)} 
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}><GoSearch/></button>
      </div>
    </div>
  )
}

export default Search