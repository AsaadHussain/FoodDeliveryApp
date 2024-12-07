
import React from 'react'
import { useCart, useDispatchCart } from './ContextReducer'
import trash from '../assets/trash.svg'

export default function Cart() {

    let data = useCart();
    let dispatch = useDispatchCart();
    if (data.length === 0) {
        return (
            <div>
                <div className="m-5 w-100 text-center fs-3 text-light fw-bold">The cart is Empty</div>
            </div>
        )
    }

    const handleCheckout = async () => {
        let userEmail = localStorage.getItem("userEmail")
        console.log(data);
        console.log(userEmail);
        
        let response = await fetch("http://localhost:5000/api/orderData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order_data: data,
                email: userEmail,
                order_date: new Date().toDateString()
            })
        });
        if (response.status === 200) {
            dispatch({ type: "DROP" })
        }
    }

    let totalPrice = data.reduce((total, food) => total + food.price, 0);

    return (
        <div>
            <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
                <table className='table table-hover table-dark'>
                    <thead className="fs-4 text-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Option</th>
                            <th scope="col">Amount</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody className=" fs-6 text-light fw-light">
                        {
                            data.map((food, index) => (
                                <tr>
                                    <th scope='row'>{index + 1}</th>
                                    <th scope='row'>{food.name}</th>
                                    <th scope='row'>{food.qty}</th>
                                    <th scope='row'>{food.size}</th>
                                    <th scope='row'>{food.price}</th>
                                    <th><button type='button' className='btn p-0 text-light'><img src={trash} alt="delete" onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button></th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div>
                    <h1 className='fs-3 text-light'>
                        Total Price: {totalPrice}/-
                    </h1>
                </div>
                <div>
                    <button className='btn bg-success mt-5' onClick={handleCheckout}>
                        Check out
                    </button>
                </div>
            </div>
        </div>
    )
}
