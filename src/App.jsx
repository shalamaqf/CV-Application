import { useState } from 'react'
import Header from './components/Header';
import GeneralInformation from './components/GeneralInfo';
import EducationalExp from './components/EducationalExp';
import PracticalExp from './components/PracticalExp';
import Footer from './components/Footer';

function App() {
  const [name, setName] = useState('John Doe');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <div id='wrapper'>
      <Header name={name} />
      <main>
        <GeneralInformation name={name} handleNameChange={handleNameChange} />
        <EducationalExp />
        <PracticalExp />
      </main>
      <Footer />
    </div>
  )
}

export default App
