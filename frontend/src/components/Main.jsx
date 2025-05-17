import React from 'react'
import { assets, cities } from "../assets/assets"
const Main = () => {
    return (
        <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover
    bg-center h-screen'>
            <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20'>Trải nghiệm khách sạn tuyệt đỉnh</p>
            <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] mdLleading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>Khám phá điểm đến Thành phố Hoàn hảo của Bạn</h1>
            <p className='max-w-130 mt-2 text-sm md:text-base'>Sự sang trọng và thoải mái vô song đang chờ đón bạn tại các khách sạn và khu nghỉ dưỡng độc quyền nhất thế giới. Hãy bắt đầu hành trình của bạn ngay hôm nay.</p>
            <form className='bg-white text-gray-500 rounded-lg px-6 py-4 mt-8  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

                <div>
                    <div className='flex items-center gap-2'>
                        <img className='h-4' src={assets.calenderIcon} alt="" />
                        <label htmlFor="destinationInput">Điểm đến</label>
                    </div>
                    <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
                    <datalist id='destinations'>
                        {cities.map((city,index)=>(
                            <option value={city} key={index}></option>
                        ))}
                    </datalist>
                </div>

                <div>
                    <div className='flex items-center gap-2'>
                        <img className='h-4' src={assets.calenderIcon} alt="" />
                        
                        <label htmlFor="checkIn">Check in</label>
                    </div>
                    <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
                </div>

                <div>
                    <div className='flex items-center gap-2'>
                        <img className='h-4' src={assets.calenderIcon} alt="" />
                        
                        <label htmlFor="checkOut">Check out</label>
                    </div>
                    <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
                </div>

                <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                    <label htmlFor="guests">Số người</label>
                    <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
                </div>

                <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
                        <img className='h-7' src={assets.searchIcon} alt="" />
                    
                    <span>Tìm kiếm</span>
                </button>
            </form>
        </div>
    )
}

export default Main
