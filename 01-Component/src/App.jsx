
import Card from './components/Card'
import Navbar from './components/Navbar'

const   App= () => {
  return (
    <div>
      <Navbar/>
      <div className='card'>
        <h1>
          Hello
        </h1>
        <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam architecto dolores sed eum, nemo, voluptates et tenetur id magnam culpa unde ipsam repudiandae tempora. Quia soluta esse provident ex molestias.</h2>
      </div>
      <Card/>
      
      
    </div>
  )
}

export default App
