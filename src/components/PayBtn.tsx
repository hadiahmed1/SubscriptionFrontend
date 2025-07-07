import { Button } from "@mui/material"
import api from "../utils/axiosInstace";
import { useRazorpay, type RazorpayOrderOptions } from "react-razorpay";
import type { razorpayResponse } from "../types/razorpayResponse";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const PayBtn = ({ planId }: { planId: string }) => {
    const navigate=useNavigate();
    const { isLoading, Razorpay } = useRazorpay();
    const verifyOrder = async (data: razorpayResponse) => {
        try {
            await api.post('/order/verify', data);
            toast.success("Susbscription created successfully");
            navigate('mysubscriptions')
        } catch (error) {
            console.log(error);
            toast.error("Subscription couldn't be created: Contact administrator")
        }
    }

    const makeOrder = async () => {
        const res = await api.post(`/order/${planId}`);
        const order = res.data;

        const options: RazorpayOrderOptions = {
            key: import.meta.env.VITE_RAZORPAY_KEY,
            amount: order.amount,
            currency: "INR",
            name: "HADI AHMED",
            description: `Transaction for Plan ${planId}`,
            order_id: order.order_id,

            handler: (response) => {
                verifyOrder(response)
                toast.success("Payment Successful!");
            },
            prefill: {
                name: "John Doe",
                email: "john.doe@example.com",
                contact: "9999999999",
            },
            theme: {
                color: "#F37254",
            },
        };

        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();
    };
    return (<Button
        disabled={isLoading}
        size="large"
        variant="contained"
        onClick={() => makeOrder()}
    >
        Pay
    </Button>)
}

export default PayBtn;


// {
//     "razorpay_payment_id": "pay_QowSZOy40FDr66",
//     "razorpay_order_id": "order_QowPefPWWR7IzJ",
//     "razorpay_signature": "768097139ee9a69ca0990049d4013129ebe156d99255d773b6157db37047a8c7"
// }