const title = "Bonjour les gens !"
const style = { color: "white", backgroundColor: "red", padding: "10px", borderRadius: "5px" }
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
    <Title color="white" backgroundColor="red" />
    <Title2 color="white" backgroundColor="grey" id="monid" className="maclasse">Mon composant Titre 2</Title2>
    <Title2 color="white" backgroundColor="green" hidden>Mon composant Titre 2 Caché</Title2>
    <input type="text" />
    <input type="checkbox" />
    <p>Coucou coucou coucou coucou coucou coucou</p>
    <ul>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul>
  </>
}

function Title (props) {
  return <h1 style={
    {color:props.color, 
      backgroundColor:props.backgroundColor, 
      borderRadius: "10px", 
      padding: "10px",
      fontFamily: "Arial, monospace",
    }}>
      Mon composant Titre
      </h1>
}

function Title2 ({color, backgroundColor, children, hidden, ...props}) {

  if (hidden) { {/* Détecte la présence/absence de la prop */}
    return null
  }
  
  const prop = {
    id : "monid",
    className: "maclasse"
  }

  return <h1 style={
    {color: color, 
      backgroundColor: backgroundColor, 
      borderRadius: "10px", 
      padding: "10px",
      fontFamily: "Arial, monospace",
    }} {...prop}> {/* Toutes les propriétés restantes (html ou autre) dedans et directement attribuées*/}
      {children} {/* Ce qui est mis entre les balises ouvrantes et fermantes*/}
      </h1>
}

export default App
