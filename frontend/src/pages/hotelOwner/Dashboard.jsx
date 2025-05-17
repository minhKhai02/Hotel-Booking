import React, { useState } from 'react';
import Title from '../../components/title/Title';
import { assets, dashboardDummyData } from '../../assets/assets';

const Dashboard = () => {
  const [dashboardData, setDashboard] = useState(dashboardDummyData);

  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="Bảng điều khiển"
        subTitle="Theo dõi danh sách phòng, theo dõi đặt phòng và phân tích doanh thu—tất cả tại một nơi. Luôn cập nhật thông tin chi tiết theo thời gian thực để đảm bảo hoạt động trơn tru."
      />

      {/* Thống kê tổng */}
      <div className="flex gap-4 my-8 flex-wrap">
        <div className="bg-blue-100 border border-blue-200 rounded flex p-4 pr-8 items-center min-w-[200px]">
          <img src={assets.totalBookingIcon} className="hidden sm:block h-10" alt="" />
          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg">Tổng số đặt phòng</p>
            <p className="text-neutral-700 text-base">{dashboardData.totalBookings}</p>
          </div>
        </div>
        <div className="bg-blue-100 border border-blue-200 rounded flex p-4 pr-8 items-center min-w-[200px]">
          <img src={assets.totalRevenueIcon} className="hidden sm:block h-10" alt="" />
          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg">Tổng doanh thu</p>
            <p className="text-neutral-700 text-base">{dashboardData.totalRevenue}</p>
          </div>
        </div>
      </div>

      {/* Booking gần đây */}
      <h2 className="text-xl text-blue-950/70 font-medium mb-5">Đặt phòng gần đây</h2>
      <div className="w-full max-w-3xl text-left border border-gray-200 rounded-lg max-h-80 overflow-y-auto">
        <table className="w-full">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium">Tên người dùng</th>
              <th className="py-3 px-4 text-gray-800 font-medium hidden sm:table-cell">Tên phòng</th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">Tổng số tiền</th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">Trạng thái thanh toán</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {dashboardData.bookings.map((item, index) => (
              <tr key={index} className="border-t border-gray-100">
                <td className="py-3 px-4 text-gray-700">{item.user.username}</td>
                <td className="py-3 px-4 text-gray-700 hidden sm:table-cell">{item.room.roomType}</td>
                <td className="py-3 px-4 text-gray-700 text-center">${item.totalPrice}</td>
                <td className="py-3 px-4 text-center">
                  <span
                    className={`py-1 px-3 text-xs rounded-full ${
                      item.isPaid
                        ? 'bg-green-100 text-green-600'
                        : 'bg-amber-100 text-amber-600'
                    }`}
                  >
                    {item.isPaid ? 'Hoàn thành' : 'Chưa thanh toán'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
