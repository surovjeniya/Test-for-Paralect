import {Navbar} from './components/Navbar/Navbar'
import {UserInfo} from './components/UserInfo/UserInfo'
import {Empty} from './components/Empty/Empty'
import {useSelector} from 'react-redux'
import {Loader} from './components/Loader/Loader'
import {RepositoresList} from './components/RepositoresList/RepositoresList'
 

function App() {

  const userInfo = useSelector(state => state.userReducer)
  const {user} = userInfo;


  return (
    <div className="App">
      <Navbar/>
        <Loader/>
      {
        user ? 
        <main className="main container">
          <UserInfo/>
          <RepositoresList/>
        </main>
        :
        <main className="main container">
          <Empty 
            icon={'fa-solid fa-magnifying-glass'}
            message='Start with searching
          a GitHub user'/>
        </main>
      }
    </div>
  );
}

export default App;
