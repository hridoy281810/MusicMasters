import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './Chakout.css'
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../api2/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import useMySelected from "../../../api2/useMySelected";
import { updateClasses } from "../../../api/classes";
import { useNavigate } from "react-router-dom";
const CheckoutForm = ({ price, mySelected, payment_class_Id }) => {
  // const user = useAuth()
  const { user } = useContext(AuthContext)
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure()
  const [cardError, setCartError] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const [processing, setProcessing] = useState(false)
  const [transactionId, setTransactionId] = useState('')
  const [, refetch] = useMySelected()
  const navigate = useNavigate()
  // console.log(mySelected)
  useEffect(() => {
    if (price > 0) {
      axiosSecure.post('/create-payment-intent', { price })
        .then(res => {
          // console.log(res)
          const data = res.data.clientSecret
          // console.log(data)

          setClientSecret(data)
        })
    }

  }, [price, axiosSecure])

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // console.log(card)
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCartError(error.message)
    } else {
      setCartError('')
      console.log('[PaymentMethod]', paymentMethod);
    }
    setProcessing(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'no found email',
            name: user?.displayName || 'no found name',
          }
        }
      }
    )

    if (confirmError) {
      console.log(confirmError)
      setCartError(confirmError.message)
    }
    console.log(['paymentIntent'], paymentIntent)
    setProcessing(false)
    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentMethod.id)
      const transactionId = paymentIntent.id
      const paymentIfo = {
        email: user?.email,
        name: user?.displayName,
        userPhoto: user?.photoURL, price,
        date: new Date(),
        transactionId,
        classId: mySelected.classId,
        payment_class_Id: payment_class_Id,
        class_name: mySelected.class_name,
        class_image_url: mySelected.class_image_url,
        number_of_students: parseInt(mySelected.number_of_students + 1),
        available_seats: parseInt(mySelected.available_seats - 1),
        status: "payed",
        instructor_email: mySelected.instructor_email,
        instructor_name: mySelected.instructor_name, role: mySelected.role
      }
      axiosSecure.post('/payments', paymentIfo)
        .then(res => {
          console.log(res.data)
          if (res.data.result.insertedId) {
            updateClasses(paymentIfo.number_of_students, paymentIfo.available_seats, paymentIfo.classId, paymentIfo.status)
              .then(data => {
                console.log(data)
                refetch()
                alert('booking successful')
                navigate('/dashboard/mySelected')
              })
              .catch(error => console.log(error))
          }
        })

    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        {/* TODO: */}
        <button type="submit" className="btn btn-sm btn-wide btn-primary mt-4 inline-flex justify-center ms-[100px]" disabled={!stripe || !clientSecret || !processing}>Pay</button>
      </form>
      {cardError && <> <p className="text-red-600 ps-[100px] pt-4">{cardError}</p> </>}
      {transactionId && <> <p className="text-green-600 ps-[100px] pt-4">Your Transaction Complete , Your Transaction Id: {transactionId}</p> </>}
    </>
  );
};
export default CheckoutForm;