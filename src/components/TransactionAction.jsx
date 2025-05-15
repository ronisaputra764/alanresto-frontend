import React from 'react'
import { LuChefHat } from "react-icons/lu";

const TransactionAction = ({ toggleShowCharge, toggleShowBill, saveButton, selectFood, clearCart }) => {

    const formatRupiah = (value) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(value)
    }

    const totalPrice = selectFood.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className='shadow-xl border border-black/10 rounded w-100 h-156 p-6'>
            <div className='flex items-center font-[500] justify-center gap-1 mb-6'>
                <div className='w-6 h-6 rounded-full flex justify-center items-center border border-black'>
                    <LuChefHat />
                </div>
                <p>Pesanan</p>
            </div>
            <div className='h-90 overflow-y-auto'>

                {selectFood.map((item, index) => (
                    <div key={index} className='mb-4 flex justify-between font-[500] text-sm items-center'>
                        <div className='flex items-center gap-4'>
                            <img className='w-20 h-15 object-cover' src={`${import.meta.env.VITE_API_URL}/storage/${item.image}`} alt="" />
                            <p>{item.name}</p>
                        </div>
                        <div className='flex gap-4'>
                            <p>X {item.quantity}</p>
                            <p className='text-[#00acee]'>{formatRupiah(item.price)}</p>
                        </div>
                    </div>
                ))}


            </div>
            <div className='mt-5'>
                <button onClick={clearCart} className='border border-red-600 text-red-600 py-2 rounded w-full'>Clear Cart</button>
                <div className='w-full flex justify-between gap-2 my-2'>
                    <button disabled={selectFood < 1} onClick={saveButton} className='bg-[#83b68a] w-full text-white rounded shadow py-2'>Save Bill</button>
                    <button disabled={selectFood < 1} onClick={toggleShowBill} className='bg-[#83b68a] w-full text-white rounded shadow py-2'>Print Bill</button>
                </div>
                <button onClick={toggleShowCharge} className='bg-[#00acee] w-full text-white rounded shadow py-2'>Charge {formatRupiah(totalPrice)}</button>
            </div>
        </div>
    )
}

export default TransactionAction