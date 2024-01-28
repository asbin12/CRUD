
import Crud from "./Crud"

import { Route, Routes } from "react-router-dom"
import Edit from "./Edit"
import Create from "./Create"

const AppRoute = () => {
  return (
      <Routes>
              <Route path="/" element={<Crud/>}></Route>
              <Route path="create" element={<Create/>}></Route>
              <Route path="update/:id" element={<Edit/>}></Route>
      </Routes>
  )
}

export default AppRoute