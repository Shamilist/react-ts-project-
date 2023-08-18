import React, { useState } from "react";
import { IProduct } from "../models";
import axios from "axios";
import { ErrorMessage } from "./ErrorMessage";

const productData: IProduct=  {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    id: 1,
    rating: {
        rate: 42,
        count: 15
    }
}

interface createProductProps {
    onCreate: () => void;
}

export function CreateProduct( {onCreate}: createProductProps) {

    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const subHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('');

        if (value.trim().length === 0) {
            setError('Please enter valid title')
            return;
        }

        productData.title = value;

        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
        onCreate();

    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
         setValue(event.target.value);
    }

    return (
        <form onSubmit={subHandler}>
            <input 
            type="text"
            className="border py-2 px-4 mb-2 w-full outline-0"
            placeholder="Enter product..."
            value={ value }
            onChange={changeHandler}
             />

             {error && <ErrorMessage error={error} />}

             <button type='submit' className="py-2 px-4 border bg-yellow-400 hover:text-white ">Create</button>
        </form>
    )
}