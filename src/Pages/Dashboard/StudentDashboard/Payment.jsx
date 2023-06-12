import React from 'react';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useSelectedById from '../../../api2/useSelectedById';
import useTitle from '../../../api2/useTitile';
const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_PublishableKey}`);

const Payment = () => {
    useTitle("Music Masters | Payment")
    const [mySelected] = useSelectedById()
    console.log(mySelected)
    const StringNumber = mySelected?.price
    const price = parseFloat(StringNumber)
    console.log(price)
    const id = mySelected?._id;
    const payment_class_Id = [id];
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} mySelected={mySelected} payment_class_Id={payment_class_Id} />
            </Elements>
        </div>
    );
};

export default Payment;