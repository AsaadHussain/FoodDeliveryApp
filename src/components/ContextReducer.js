import React, { createContext, useContext, useReducer } from 'react'


const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {

    switch (action.type) {

        case "ADD":
            return [...state, { id: action.id, name: action.name, price: action.price, qty: action.qty, size: action.size, img: action.img }]
        case "REMOVE":
            let newArray = [...state];
            newArray.splice(action.index, 1);
            return newArray;
        case "UPDATE":
            let newArr = [...state]
            newArr.find((food, index) => {
                if (food.id === action.id) {
                    newArr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
                }
                return newArr
            });
            return newArr;
        case "DROP":
            let empArray = []
            return empArray;
        default:
            console.log("Error in reducer");

    }
}

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, []);

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    );
}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);