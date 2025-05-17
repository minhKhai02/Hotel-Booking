import React, { useState } from 'react'
import { roomsDummyData } from '../../assets/assets'
import Title from '../../components/title/Title'

const ListRoom = () => {

  const [rooms,setRooms] = useState(roomsDummyData)
  return (
    <div>
     <Title align='left' font='outfit' title='Danh sách phòng' subTitle='Xem, chỉnh sửa hoặc quản lý tất cả các phòng được liệt kê. Cập nhật thông tin để cung cấp trải nghiệm tốt nhất cho người dùng.'/>
     <p className='text-gray-800 mt-8'>Tất cả các phòng</p>
      <div className="w-full max-w-3xl text-left border border-gray-200 rounded-lg max-h-80 overflow-y-auto mt-3">
          <table className="w-full">
             <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium">Loại phòng</th>
              <th className="py-3 px-4 text-gray-800 font-medium hidden sm:table-cell">Cơ sở vật chất</th>
              <th className="py-3 px-4 text-gray-800 font-medium ">	Giá/đêm</th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">Hoạt động</th>
            </tr>
          </thead>
          <tbody className='text-sm'>
              {
                rooms.map((item,index)=>(
                  <tr key={index}>
                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                      {item.roomType}
                    </td>
                     <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                      {item.amenities.join(',')}
                    </td>
                     <td className='py-3 px-4 text-gray-700 border-t border-gray-300 '>
                      {item.pricePerNight}
                    </td>
                     <td className='py-3 px-4 text-red-500 border-t border-gray-300 text-center '>
                      <label className='relative inline-flex items-center cursor-pointer text-gray-900 gap-3'>
                        <input type="checkbox" className='sr-only peer'checked={item.isAvailable} />
                        <div className='w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200'> </div>
                        <span className='dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5'></span>
                      </label>
                    </td>
                  </tr>
                ))
              }
          </tbody>
          </table>
      </div>
    </div>
  )
}

export default ListRoom
