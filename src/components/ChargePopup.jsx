import React, { useState } from 'react'

const ChargePopup = ({ showCharge, toggleShowCharge, selectFood, paymentSuccess }) => {
    const [buyerMoney, setBuyerMoney] = useState('');

    const formatRupiah = (value) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(value)
    }

    const totalPrice = selectFood.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const change = buyerMoney - totalPrice;

    function payButton() {
        paymentSuccess()
        setBuyerMoney('')
    }

    return (
        <div className={`bg-white p-8 w-240 h-80 font-[500] ${showCharge ? '' : 'hidden'} absolute right-25 z-50 top-20`}>
            <p className='text-xl mb-2'>Detail Pesanan</p>
            <div className='flex justify-between'>
                <div className=' w-140 overflow-x-hidden h-50'>
                    <div className='bg-gray-200 shadow flex py-4'>
                        <p className='w-1/10 ms-10'>#</p>
                        <p className='w-3/10'>Nama</p>
                        <p className='w-1/10 ms-10'>Foto</p>
                        <p className='w-2/10 ms-12'>Harga</p>
                    </div>
                    {selectFood.map((item, index) => (
                        <div key={index} className='bg-gray-50 shadow flex items-center text-gray-500 py-1 w-140'>
                            <p className='w-1/10 ms-10'>{index + 1}</p>
                            <p className='w-3/10'>{item.name} X {item.quantity}</p>
                            <img className='object-cover h-12 w-16 ms-10' src={`${import.meta.env.VITE_API_URL}/storage/${item.image}`} alt="" />
                            <p className='w-2/10 ms-10'>{formatRupiah(item.price)}</p>
                        </div>
                    ))}

                </div>
                <div>
                    <p className='border h-40 border-gray-200'></p>
                </div>
                <div className='w-70 font-[500]'>
                    <p className='text-center mb-4'>Uang Pembeli (Rp)</p>
                    <input
                        value={buyerMoney}
                        onChange={(e) => setBuyerMoney(e.target.value)}
                        className='border-gray-200 border-2 rounded py-2 px-4 w-full mb-4' type="number"
                    />
                    <div className='w-full justify-between flex gap-4 mb-4'>
                        <button onClick={toggleShowCharge} className='border-gray-200 border-2 w-full rounded py-2 px-4'>Close</button>
                        <button onClick={payButton} disabled={change < 0} className={`bg-[#00acee] w-full py-2 px-4 rounded text-white`}>Pay!</button>
                    </div>
                    <p className='text-red-500'>Kembalian: {change}</p>
                </div>
            </div>
        </div>
    )
}

export default ChargePopup