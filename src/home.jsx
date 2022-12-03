import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import axios from "axios";
import "./home.css";
function Home() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [pin, setPin] = useState("");
    const [confirmPin, setConfirmPin] = useState("");
    const [verifyPin, setVerifyPin] = useState(false)
    const [pinLength, setPinLength] = useState(false)


    const handleInputChange = (e) => {
        const { id, value } = e.target;

        if (id === "username") {
            setUserName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "phone") {
            setPhoneNumber(value);
        }
        if (id === "pin") {
            setPin(value);
        }
        if (id === "confirmPin") {
            setConfirmPin(value);
        }
    }
    // console.log(email,phoneNumber,)

    const handleSubmit = async () => {
        if(pin !== confirmPin) {
            setVerifyPin(true)
        }
        if(pin.length !== 5){
            setPinLength(true)
        }
        else{
            const res = await axios.post("/register", {
                username: userName,
                email: email,
                phone: phoneNumber,
                pin: pin,
            })
    
        console.log(res)
    }}
    return (
        <>
            <div className="main_container flex items-center justify-center min-h-screen bg-gray-100">
                <div className="second_container px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
                    <div className="flex justify-center">

                    </div>
                    <h3 className="create_account text-2xl font-bold text-center">Create An Account</h3>
                    <form action="">
                        <div className="form_div mt-4">
                            <div>
                                <label className="labels block">
                                    Username
                                </label>
                                <input
                                    value={userName} 
                                    onChange={(e) => handleInputChange(e)}
                                    id="username"
                                    type="text"
                                    placeholder="username"
                                    className="input w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                ></input>
                            </div>
                            <div className="form_div mt-4">
                                <label className="labels block">
                                    Email
                                </label>
                                <input
                                    value={email}
                                    onChange={(e) => handleInputChange(e)}
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    className="input w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                ></input>
                            </div>
                            <div className="form_div mt-4">
                                <label className="labels block">Phone Number</label>
                                <input
                                    value={phoneNumber}
                                    onChange={(e) => handleInputChange(e)}
                                    id="phone"
                                    type="number"
                                    placeholder="phone number"
                                    className="input w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                ></input>
                            </div>
                            <div className="form_div mt-4">
                                <label className="labels block">PIN</label>
                                <input
                                    value={pin}
                                    onChange={(e) => handleInputChange(e)}
                                    id="pin"
                                    type="number"
                                    placeholder="pin"
                                    className="input w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                ></input>
                            </div>
                            <div className="form_div mt-4">
                                <label className="labels block">Confirm PIN</label>
                                <input
                                    value={confirmPin}
                                    onChange={(e) => handleInputChange(e)}
                                    id="confirmPin"
                                    type="number"
                                    placeholder="re-enter pin"
                                    className="input w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                ></input>
                            </div>
                            {verifyPin && <span className="password_warning text-xs text-red-400">Pins do not Match!</span>}
                            {pinLength && <span className="password_warning text-xs text-red-400">Pin must be 5 characters</span>}
                            <div className=" form_div flex">
                                <button onClick={() => handleSubmit()} className="create_acc_btn w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                                    Create Account
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Home;
