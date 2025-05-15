import React, { useState } from 'react'
import MenuList from '../components/MenuList'
import AddMenu from '../components/AddMenu'

const FoodList = () => {
    const [addMenu, setAddMenu] = useState(false)

    function toggleAddMenu() {
        setAddMenu(!addMenu)
    }

    return (
        <div>
            <div className='max-w-290 mx-auto h-200'>
                <p className='my-6 font-[500] text-gray-400'>Tambahkan menu makanan yang ada di resto</p>
                <div className='p-5 shadow-lg border-black/10 border'>
                    {addMenu ? <AddMenu toggleAddMenu={toggleAddMenu} /> : <MenuList toggleAddMenu={toggleAddMenu} />}
                </div>
            </div>
        </div>
    )
}

export default FoodList