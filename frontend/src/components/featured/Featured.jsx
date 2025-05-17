import React from 'react'
import { roomsDummyData } from '../../assets/assets'
import HotelCart from './HotelCart'
import Title from '../title/Title'
import { useNavigate } from 'react-router-dom'
const Featured = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50
    py-20'>
        <Title title='Điểm đến nổi bật' subTitle='Khám phá danh sách các bất động sản đặc biệt được chúng tôi tuyển chọn kỹ lưỡng trên khắp thế giới, mang đến sự sang trọng vô song và những trải nghiệm khó quên.'/>
      <div className='flex flex-wrap items-center justify-center gap-5 mt-20'>
        {
            roomsDummyData.slice(0,4).map((room,index)=>(
               <HotelCart key={room._id} room={room} index={index}/>
            ))
        }
      </div>
      <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}} className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>
        Xem tất cả các điểm đến
      </button>
    </div>
  )
}

export default Featured
