import { useState } from "react";
import Input from "./Input";

export default function GeneralInformation({name, handleNameChange}) {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePhoneNumberChange(e) {
        setPhoneNumber(e.target.value);
    }

    return (
        <>
            <Input label="Name" value={name} onChange={handleNameChange} type='text'></Input>
            <Input label="Email" value={email} onChange={handleEmailChange} type='email'></Input>
            <Input label="Phone Number" value={phoneNumber} onChange={handlePhoneNumberChange} type='tel'></Input>
        </>
    )
}