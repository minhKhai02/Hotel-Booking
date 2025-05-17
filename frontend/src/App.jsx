import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms'
import RoomDetail from './pages/RoomDetail';
import MyBooking from './pages/MyBooking';
import HotelReg from './components/HotelReg';
import Layout from './pages/hotelOwner/Layout.jsx'
import Dashboard from './pages/hotelOwner/Dashboard.jsx';
import AddRoom from './pages/hotelOwner/AddRoom.jsx';
import ListRoom from './pages/hotelOwner/ListRoom.jsx';
const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
    {!isOwnerPath && <Navbar/>}
    {false &&<HotelReg/>}
    <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rooms' element={<AllRooms/>}/>
        <Route path='/rooms/:id' element={<RoomDetail/>}/>
        <Route path='/my-bookings' element={<MyBooking/>}/>
        <Route path='/owner'element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='add-room' element={<AddRoom/>}/>
          <Route path='list-room' element={<ListRoom/>}/>
        </Route>
      </Routes>
    </div>
    <Footer/>
    </div>
    
  )
}

export default App
