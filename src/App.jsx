import {useState} from "react"
const title = "Bonjour les gens !"
const style = { color: "white", backgroundColor: "red", padding: "10px", borderRadius: "5px" }
const ShowTitle = true
const todos = [
  "Présenter react",
  "Présenter JSX",
  "Créer des composants",
]

function App() {
  
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
    age: 18    
  }) 
  const increment = () => {
    setPerson({...person, age: person.age + 1})
  }

  return <>
    <Title1 color="white" backgroundColor="red">Mon composant Titre 1</Title1>
    <input type="text" />
    <input type="checkbox" />
    <p>Coucou coucou coucou coucou coucou coucou</p>
    <ul>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul>

    <p>Âge de {person.firstName} : {person.age}</p>
    <button onClick={increment}>Incrémenter</button>

  </>

}

function Title1 ({color, backgroundColor, children, hidden, ...props}) {

  if (hidden) { {/* Détecte la présence/absence de la prop */}
    return null
  }

  return <h1 style={
    {color: color, 
      backgroundColor: backgroundColor, 
      borderRadius: "10px", 
      padding: "10px",
      fontFamily: "Arial, monospace",
    }} {...props}> {/* Toutes les propriétés restantes (html ou autre) dedans et directement attribuées*/}
      {children} {/* Ce qui est mis entre les balises ouvrantes et fermantes*/}
      </h1>
}

export default App
