import { Link } from "react-router-dom";

const DogList = ({dogs}) => {
  return (
    <div className="DogList">
      <h1>We have some cute dogs!!</h1>
      {dogs.map((d) => (
        <div className="DogList-Dogs">
          <img className="DogList-img" src={`/${d.src}.jpg`} alt={d.name}/>
          <Link className="DogList-link" to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default DogList;
