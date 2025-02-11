// import components
import Login from './components/Login.jsx'
import Navbar from './components/Navbar.jsx'
import Profile from './components/Profile.jsx'

// App.jsx is the entry point of a React application
// Here, you define your main React component and render the initial structure of the user interface

// components are listed in the components folder in src
// client > src > components

function App() {

  return (
    <div className='flex flex-col items-center'>
      <Navbar />
      {/* <Login />  */}
      {/* in order to display a component, add an import at the top of the file */}
      {/* and then render inside the div using the format <ComponentName /> */}

      <Profile />

    </div>
  )
}

export default App
