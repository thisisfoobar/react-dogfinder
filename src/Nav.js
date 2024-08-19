import { Link } from "react-router-dom"

const Nav = ({dogs}) => {

  return(
    <nav>
      <ul>
        <li><Link to='/dogs'>Home</Link></li>
      {dogs.map(d => (
        <li><Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link></li>
      ))}
      </ul>
    </nav>
  )
}

export default Nav