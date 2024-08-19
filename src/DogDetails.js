import { Navigate, useParams } from "react-router-dom"

const DogDetails = ({dogs}) => {
  const {name} = useParams()
  let dog;
  if(name) {
    dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase())
    if (!dog) {
      return <Navigate to="/dogs"/>
    }
  }
  
  return (
    <div>
      <h1>{dog.name}</h1>
      <h3>Age: {dog.age}</h3>
      <ul>
        {dog.facts.map(f => (
          <li>{f}</li>
        ))}
      </ul>
      <img src={`/${dog.src}.jpg`} alt={dog.name}/>
      {}
    </div>
  )

}

export default DogDetails