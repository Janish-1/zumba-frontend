import { useCallback, useState } from "react";
import FreeText from "../components/free-text";
import PremiumFeaturesFrame from "../components/premium-features-frame";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";
const Premium = () => {
  const navigate = useNavigate();
  const [orderid,setorder]=useState('');
  const onNotificationBellIconClick = useCallback(() => {
    navigate("/notification");
  }, [navigate]);
  const BASE_URL=process.env.REACT_APP_API_URL;
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    // Retrieve the user_id from localStorage
    const user_id = localStorage.getItem("userId");
    // Make the Axios POST request with user_id included in the request body

      const result = await axios.post(`${BASE_URL}/api/subscribe/`, {
        user_id: user_id // Include the user_id in the request body
      });
      // Handle the result of the POST request
      console.log("Payment order successfully created:", result.data);
      setorder(result.data.order_id);


    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, order_id, currency } = result.data;

    const options = {
      key: 'rzp_test_QDtDJzsjSHThRn', // Enter the Key ID generated from the Dashboard
      amount:(amount*100).toString(),
      currency: "INR",
      name: "Zumba.",
      description: "Test Transaction",
      image:"/red-black-minimalist-fitness-logo--2-1@2x.png",
      order_id: order_id,
      handler: async function (response) {
        console.log("response from payment ",response)
        const data = {
          orderCreationId: order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: order_id,
          razorpay_signature: response.razorpay_signature,
        };
        console.log("data after successfull payment ",data);
        const result = await axios.post(`${BASE_URL}/api/paymentview/`, data);
        if(result.status==200){
          navigate('/')
        }
        console.log("response of sec",result)
        alert(result.data.message);
      },
      prefill: {
        name: "Soumya Dey",
        email: "SoumyaDey@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="w-full relative bg-gray-200 overflow-hidden flex flex-col items-center justify-start pt-[79px] px-0 pb-[80px] box-border gap-[32px]">

      <main className="self-stretch flex flex-row items-start justify-start pt-0 pb-3 px-[25px]">
        <section className="flex-1 w-full rounded-16xl bg-darkslategray-200 flex flex-col items-start justify-start py-[30px] px-0 gap-[30px] text-center text-xl text-small-text font-poppins">
          <FreeText free="Premium" notificationBell="₹100" />
          <PremiumFeaturesFrame />
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[30px] text-6xl text-gray-100">
            <div className="flex-1 rounded-sm bg-firebrick flex flex-row items-center justify-center z-[1]">
              <div className="self-stretch w-[327px] relative rounded-sm bg-firebrick hidden" />
              <b className="h-[55px] flex-1 relative tracking-[0.05em] leading-[118.5%] flex items-center justify-center z-[1]"
                onClick={displayRazorpay}
              >{`Buy now `}</b>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Premium;
