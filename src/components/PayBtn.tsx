import { Button } from "@mui/material"
import api from "../utils/axiosInstace";
import { useRazorpay, type RazorpayOrderOptions } from "react-razorpay";
import type { razorpayResponse } from "../types/razorpayResponse";

const PayBtn = ({ planId }: { planId: string }) => {
    const { isLoading, Razorpay } = useRazorpay();
    const verifyOrder = async (data: razorpayResponse) => {
        const res = await api.post('/order/verify', data);
        console.log(res.data)
    }

    const makeOrder = async () => {
        const res = await api.post(`/order/${planId}`);
        const order = res.data;

        const options: RazorpayOrderOptions = {
            key: "rzp_test_hOW0s7mspGJF2F",
            amount: order.amount * 100,
            currency: "INR",
            name: "HADI AHMED",
            description: `Transaction for Plan ${planId}`,
            order_id: order.order_id,

            handler: (response) => {
                console.log("PAYMENT RES:>>", response);
                verifyOrder(response)
                alert("Payment Successful!");
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