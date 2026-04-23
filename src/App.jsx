const title = "Bonjour les gens !"
const style = {color: "white", backgroundColor: "red", padding: "10px", borderRadius: "5px"}
const ShowTitle = true
const todos = [
  "Présenter react",
  "Présenter JSX",
  "Créer des composants",
]

function App() {

const handleClick = (e) => {
  console.log(e)
  alert("Vous avez cliqué sur le titre !")
}

  return <> 
    {ShowTitle ? 
    <h1 onClick={handleClick} id="title" className="titre" style={style}>{title}</h1> : 
    <h1>Le titre est caché</h1>
    }
    <input type="text" />
    <input type="checkbox"/>
    <p>Coucou coucou coucou coucou</p>
    <ul>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul>
    </> 
}

export default App
