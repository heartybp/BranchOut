// import components
import Login from './components/Login.jsx'
import Navbar from './components/Navbar.jsx'

// App.jsx is the entry point of a React application
// Here, you define your main React component and render the initial structure of the user interface

// components are listed in the components folder in src
// client > src > components

function App() {

  return (
    <>
      <Navbar />
      <Login /> 
      {/* in order to display a component, add an import at the top of the file */}
      {/* and then render inside the div using the format <ComponentName /> */}

    </>
  )
}

export default App
