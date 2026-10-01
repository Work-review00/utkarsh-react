import Card from "./Card"


const App = () => {
  return (
    <div className="parent">
      
      <Card user='Utkarsh' age={21} img="https://images.unsplash.com/photo-1790360053427-73764c8ff920?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" p='Beaches are the bestest place to get relax yourself'/>
      <Card user='Harsh' age={24} img="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" p='Dogs are the most loyal friend in your life'/>
      <Card user='Suryansh' age={20} img="https://images.unsplash.com/photo-1789947998062-393d05531f04?q=80&w=695&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" p='Dogs are the most loyal friend in your life'/>

    </div>
  )
}

export default App
