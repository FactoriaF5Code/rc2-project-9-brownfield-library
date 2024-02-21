/* eslint-disable react/prop-types */
import { Home } from "../../presentation/pages/Home/Home"
import { RHome } from "../../presentation/pages/Home/RHome"
import { Lending } from "../../presentation/pages/Lending/Lending"
import { LendingOk } from "../../presentation/pages/Lending/LendingOk"
import { NewMember } from "../../presentation/pages/NewMember/NewMember"
import { NewMemberOk } from "../../presentation/pages/NewMember/NewMemberOk"
import { ReturnOk } from "../../presentation/pages/ReturnOk/ReturnOk"
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRouter = ({
  searchTerm,
  setSearchResults,
  activeButton,
  handleButtonChange,
  setSearchTerm,
  searchResults
}) => {
  return (
    
    <BrowserRouter>
      <Routes>
        {/* home / book search */}
        <Route path="/" element={<RHome />} />
        {/* member search */}
        {/* add member */}
        {/* add book */}
        {/* add book */}
        {/* <Route path='/*'
          element={<Home 
            searchTerm={searchTerm}
            setSearchResults={setSearchResults}
            activeButton={activeButton}
            handleButtonChange={handleButtonChange}
            setSearchTerm={setSearchTerm}
            searchResults={searchResults}
          />} /> */}
        {/* <Route path="/prestamo/:idBooks"element={<Lending />} />
        <Route path='/prestamo-ok/:idBooks' element={<LendingOk />} />
        <Route path='/nuevo-socio' element={<NewMember />} />
        <Route path='/nuevo-socio-ok/:idMembers' element={<NewMemberOk />} />
        <Route path='/devolucion-ok/:idBooks' element={<ReturnOk />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
