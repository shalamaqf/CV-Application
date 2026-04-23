import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

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
        <section>
            <div>
                {isEditing? 
                    <>
                        <div>
                            <Button onClick={handleToggle}>Submit</Button>
                        </div>
                        <div>
                            <Input label="Name" value={name} onChange={handleNameChange} type='text' />
                            <Input label="Email" value={email} onChange={handleEmailChange} type='email' />
                            <Input label="Phone Number" value={phoneNumber} onChange={handlePhoneNumberChange} type='tel' />
                        </div>
                    </> :
                    <>
                    </>
                }
            </div>
        </section>
    )
}

function EditView({handleToggle, name, email, phoneNumber, handleNameChange, handleEmailChange, handlePhoneNumberChange}) {
    return (
        <>
            <div>
                <Button onClick={handleToggle}>Submit</Button>
            </div>
            <div>
                <Input label="Name" value={name} onChange={handleNameChange} type='text' />
                <Input label="Email" value={email} onChange={handleEmailChange} type='email' />
                <Input label="Phone Number" value={phoneNumber} onChange={handlePhoneNumberChange} type='tel' />
            </div>
        </>
    )
}

function DisplayView({handleToggle, name, email, phoneNumber}) {
    return (
        <>
            <div className="button-container">
                <Button onClick={handleToggle}>Edit</Button>
            </div>
            <div className="field-container">
                <div className="text-container">
                    <p>Name: {name}</p>
                </div>
                <div className="text-container">
                    <p>Email: {email}</p>
                </div>
                <div className="text-container">
                    <p>Phone Number: {phoneNumber}</p>
                </div>
            </div>
        </>
    )
}