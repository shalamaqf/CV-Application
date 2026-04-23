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
                        <div>
                            <Button onClick={handleToggle}>Edit</Button>
                        </div>
                        <div>
                            <div>
                                <p>Name: {name}</p>
                            </div>
                            <div>
                                <p>Email: {email}</p>
                            </div>
                            <div>
                                <p>Phone Number: {phoneNumber}</p>
                            </div>
                        </div>
                    </>
                }
            </div>
        </section>
    )
}