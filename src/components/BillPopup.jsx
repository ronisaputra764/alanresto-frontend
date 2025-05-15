import React from 'react'
import { IoRestaurantOutline } from 'react-icons/io5'

const BillPopup = ({ showBill, toggleShowBill, selectFood }) => {

    const formatRupiah = (value) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(value)
    }

    const totalPrice = selectFood.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className={`absolute right-100 top-15 bg-white p-5 min-h-120 flex flex-col justify-between z-50 w-90 ${showBill ? '' : 'hidden'}`}>
            <button onClick={toggleShowBill} className='absolute font-semibold top-[-35px] right-[0px] text-white border rounded px-2'>Close</button>
            <div>
                <div className='flex justify-center items-center border-b mb-2'>
                    <IoRestaurantOutline className='text-3xl me-2' />
                    <p className='font-semibold py-3 text-2xl'>Alan Resto</p>
                </div>
                {selectFood.map((item, index) => (
                    <div key={index} className='flex justify-between'>
                        <p>{item.name} X {item.quantity} </p>
                        <p>{formatRupiah(item.price)}</p>
                    </div>
                ))}

            </div>
            <div className='flex justify-between font-semibold'>
                <p>Total:</p>
                <p>{formatRupiah(totalPrice)}</p>
            </div>
        </div>
    )
}

export default BillPopup