import React from 'react'
import Title from './title/Title'
import { assets, exclusiveOffers } from '../assets/assets'

const ExclusiveOffer = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>
      <div className='flex flex-col md:flex-row items-center justify-between w-full'>
        <Title align='left' title='Ưu đãi độc quyền' subTitle='Hãy tận dụng các ưu đãi có thời hạn và gói đặc biệt của chúng tôi để nâng cao kỳ nghỉ của bạn và tạo nên những kỷ niệm khó quên.'/>
        <button className='group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12'>
            Xem tất cả các ưu đãi
            <img className='group-hover:translate-x-1 transition-all' src={assets.arrowIcon} alt="" />
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
        {
            exclusiveOffers.map((item)=>(
                <div key={item._id} className='group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center' style={{backgroundImage: `url(${item.image})`}}>
                    <p className='px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full'>GIẢM GIÁ {item.priceOff}% </p>
                    <div>
                       <p className='text-wxl font-medium font-playfair'>{item.title}</p> 
                       <p>{item.description}</p>
                       <p className='text-xs text-white/70 mt-3'>Expires{item.expiryDate}</p>
                    </div>
                    <button className='flex items-center ga-2 font-medium cursor-pointer mt-4 mb-5'>
                        Xem Ưu đãi
                        <img className='invert group-hover:translate-x-1 transition-all' src={assets.arrowIcon} alt="" />
                    </button>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default ExclusiveOffer
