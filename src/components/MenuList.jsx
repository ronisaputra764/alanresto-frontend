import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MenuList = ({ toggleAddMenu }) => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/api/foods`)
            .then(res => setFoods(res.data))
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <button onClick={toggleAddMenu} className='rounded bg-[#00acee] text-white py-1 px-5 mb-5'>+ Tambah menu</button>

            <div className='bg-gray-200 shadow flex py-4'>
                <p className='w-1/10 ms-10'>#</p>
                <p className='w-3/10 ms-5'>Nama</p>
                <p className='w-1/10 ms-50'>Foto</p>
                <p className='w-2/10 ms-20'>Harga</p>
            </div>

            {foods.map((food, index) => (
                <div key={food.id} className='bg-gray-50 shadow flex items-center text-gray-500 py-1'>
                    <p className='w-1/10 ms-10'>{index + 1}</p>
                    <p className='w-3/10 ms-5'>{food.name}</p>
                    <img className='object-cover h-12 w-16 ms-50' src={`${import.meta.env.VITE_API_URL}/storage/${food.image}`} alt={food.name} />
                    <p className='w-2/10 ms-32'>Rp.{food.price}</p>
                </div>
            ))}
        </>
    )
}

export default MenuList
