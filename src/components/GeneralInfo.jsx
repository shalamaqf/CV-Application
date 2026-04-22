import { useState } from "react";
import Input from "./Input";

export default function GeneralInformation({name, handleNameChange}) {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePhoneNumberChange(e) {
        setPhoneNumber(e.target.value);
    }

    function handleToggle() {
        if (isEditing) {
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    }

    return (
        <>
            <Input label="Name" value={name} onChange={handleNameChange} type='text'></Input>
            <Input label="Email" value={email} onChange={handleEmailChange} type='email'></Input>
            <Input label="Phone Number" value={phoneNumber} onChange={handlePhoneNumberChange} type='tel'></Input>
        </>
    )
}