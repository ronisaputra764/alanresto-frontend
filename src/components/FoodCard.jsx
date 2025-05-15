import React from 'react'

const FoodCard = ({ name, image, price, onClick }) => {

    const formatRupiah = (value) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(value)
    }

    return (
        <div onClick={onClick} className='w-50 h-58 shadow-xl border border-black/10 rounded cursor-pointer'>
            <img className='rounded-t h-40 w-full object-cover' src={`${import.meta.env.VITE_API_URL}/storage/${image}`} alt={name} />
            <div className='text-center font-[500] pt-2.5'>
                <p>{name}</p>
                <p className='text-[#00acee]'>{formatRupiah(price)}</p>
            </div>
        </div>
    )
}

export default FoodCard