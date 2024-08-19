import { Routes, Route, Navigate } from "react-router-dom"
import DogList from "./DogList"
import DogDetails from "./DogDetails"

const DogRoutes = ({dogs}) => {
  return(
    <Routes>
      <Route
            path='/dogs'
            element={<DogList dogs={dogs}/>} // DogList no longer receives route props directly, but you can pass them as necessary.
          />
          <Route
            path='/dogs/:name'
            element={<DogDetails dogs={dogs}/>} // DogDetails will need to receive the `useParams` hook to access the `name` parameter.
          />
          <Route
            path='*'
            element={<Navigate to='/dogs' />} // This replaces the Redirect component.
          />
    </Routes>
  )
}

export default DogRoutes