import React, { useState } from 'react'
import axios from 'axios';
import { IoCloudUploadOutline } from "react-icons/io5";

const AddMenu = ({ toggleAddMenu }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [imageFile, setImageFile] = useState(null); // untuk dikirim
    const [imagePreview, setImagePreview] = useState(null); // untuk ditampilkan

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('image', imageFile);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/foods', formData, {
                headers: {
                    'Accept': 'application/json',
                }
            });
            console.log(response.data);
            toggleAddMenu(); // Tutup modal/form
        } catch (error) {
            console.error(error.response?.data || error.message);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file); // file asli
            setImagePreview(URL.createObjectURL(file)); // preview
        }
    };

    const handleClearImage = () => {
        setImageFile(null);
        setImagePreview(null);
        document.getElementById('fileUpload').value = '';
    };

    return (
        <form onSubmit={handleSubmit}>
            <p className='text-[#00acee] font-semibold mt-2'>Tambahkan Menu</p>

            <p className='mt-8 text-gray-500'>Nama Menu</p>
            <input
                className='border-gray-200 border-2 py-2 px-3 rounded w-full'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <p className='mt-8 text-gray-500'>Gambar Menu</p>
            <div className='w-full'>
                <input
                    type="file"
                    id="fileUpload"
                    className="hidden"
                    accept="image/*"
                    name="image"
                    onChange={handleFileChange}
                />
                <label
                    htmlFor="fileUpload"
                    className="w-full cursor-pointer flex items-center justify-center gap-2 border-2 border-gray-200 bg-gray-100 text-gray-600 py-10 px-4 rounded-md hover:bg-gray-200 transition min-h-40"
                >
                    {imagePreview ? (
                        <img src={imagePreview} alt="Preview" className="h-40 object-cover rounded" />
                    ) : (
                        <>
                            <IoCloudUploadOutline className="text-xl" />
                            <span>Upload File</span>
                        </>
                    )}
                </label>
                {image && (
                    <button
                        type="button"
                        onClick={handleClearImage}
                        className="mt-2 text-sm text-red-500 underline"
                    >
                        Hapus Gambar
                    </button>
                )}
            </div>

            <p className='mt-8 mb-1 text-gray-500'>Harga Menu</p>
            <div className='flex'>
                <span className='bg-[#00acee] rounded-s py-3 px-4 text-white font-[500]'>Rp.</span>
                <input
                    className='border-gray-200 border-2 py-2 px-3 rounded-e w-full'
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>

            <div className='flex justify-end mt-8 mb-4 gap-4'>
                <button type="button" onClick={toggleAddMenu} className='border-2 border-red-400 text-red-400 py-2 px-6 rounded font-[500]'>Batal</button>
                <button type="submit" className='bg-[#83b68a] rounded py-3 px-20 text-white font-[500]'>Simpan</button>
            </div>
        </form>
    )
}

export default AddMenu