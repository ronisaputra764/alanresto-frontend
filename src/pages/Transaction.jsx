import React, { useEffect } from 'react'
import FoodCard from '../components/FoodCard'
import TransactionAction from '../components/TransactionAction'
import { useState } from 'react'
import ChargePopup from '../components/ChargePopup'
import BillPopup from '../components/BillPopup'
import Swal from 'sweetalert2';
import axios from 'axios'


const Transaction = () => {
    const [showCharge, setShowCharge] = useState(false)
    const [showBill, setShowBill] = useState(false)
    const [foods, setFoods] = useState([])
    const [selectFood, setSelectFood] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/api/foods`)
            .then(res => setFoods(res.data))
            .catch(err => console.error(err))
    }, [])

    const handleSelectFood = (food) => {
        setSelectFood(prev => {
            const existing = prev.find(f => f.id === food.id)
            if (existing) {
                return prev.map(f =>
                    f.id === food.id ? { ...f, quantity: f.quantity + 1 } : f
                )
            } else {
                return [...prev, { ...food, quantity: 1 }]
            }
        })
    }

    const clearCart = () => {
        setSelectFood([]);
    };

    function toggleShowCharge() {
        setShowCharge(!showCharge)
        setShowBill(false)
    }

    function toggleShowBill() {
        setShowBill(!showBill)
        setShowCharge(false)
    }

    const saveButton = () => {
        Swal.fire({
            title: 'Berhasil!',
            text: 'Data berhasil disimpan.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    const paymentSuccess = () => {
        Swal.fire({
            title: 'Berhasil!',
            text: 'Transaksi Berhasil!.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        setShowCharge(false)
        clearCart()
    };

    return (
        <div className='px-10 max-w-290 mx-auto relative py-10 flex justify-between'>
            <div className='grid grid-cols-3 gap-5'>
                {foods.map((food, index) => (
                    <FoodCard
                        key={index}
                        name={food.name}
                        image={food.image}
                        price={food.price}
                        onClick={() => handleSelectFood(food)}
                    />
                ))}

            </div>
            <TransactionAction toggleShowCharge={toggleShowCharge} toggleShowBill={toggleShowBill} saveButton={saveButton} selectFood={selectFood} clearCart={clearCart} />
            <ChargePopup showCharge={showCharge} toggleShowCharge={toggleShowCharge} selectFood={selectFood} paymentSuccess={paymentSuccess} />
            <BillPopup showBill={showBill} toggleShowBill={toggleShowBill} selectFood={selectFood} />

            {(showCharge || showBill) && (
                <div className="fixed inset-0 bg-black/50 z-40"></div>
            )}
        </div>
    )
}

export default Transaction