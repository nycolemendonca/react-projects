// Import Components
import Search from '../components/Search';
import User from '../components/User';
import Error from '../components/Error';

// Import User Types
import { UserProps } from '../types/user';

// Import React Hooks
import { useState } from 'react';

const Home = () => {
  // The type of return is UserProps or Null
  const [user, setUser] = useState<UserProps | null>(null);

  // The normal state of error is false
  const [error, setError] = useState(false);
  
  // The return of an async() function is a promise
  // Promise: Represents the eventual success (or failure) of an async operation
  const loadUser = async(userName: string) => {
    setError(false)
    setUser(null)

    // await -> syntactic sugar
    // fetch(): Starts a request and returns a promise. When the request completes, the promise is resolved with the response
    const res = await fetch(`https://api.github.com/users/${userName}`)
    
    // .json() is a method of the Response object that allows a JSON object to be extracted from the response
    const data = await res.json()

    // if the user's URL not found
    if (res.status === 404) {
      setError(true)
      return
    }
    
    // Data imported from API
    const {avatar_url, login, location, followers, following} = data
    const userData: UserProps = {
      avatar_url, 
      login, 
      location, 
      followers, 
      following
    }

    setUser(userData)
  }

  return (
    <div>
      <Search loadUser={loadUser}/>
      {/* User Data */}
      {user && <User {...user}/>}
      {/* Error Data */}
      {error && <Error/>}
    </div>
  )
}

export default Home