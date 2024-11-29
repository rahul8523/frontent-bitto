/* eslint-disable no-unused-vars */
import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Membership from './Pages/Membership'
import ThankYou from './Components/modals/ThankYou'
import NotFound from './Pages/NotFound'
import BitoPage from './Pages/BitoPage'
import MembershipPlans from './Pages/MembershipPlans'
import BIA from './Pages/BIA'
import BIAFooter from './Components/BIAFooter'



const App = () => {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bia' element={<BIA />} />
          <Route path='/membership' exact element={<Membership />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/bito" element={<BitoPage />} />
          <Route path="/membership-plans" element={<MembershipPlans />} />

          <Route component={<NotFound />} /> {/* Catch-all for 404 */}

        </Routes>

        <Routes>
        <Route
          path="/bia"
          element={<BIAFooter />}
        />

        <Route
          path="*"
          element={<Footer />}
        />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App