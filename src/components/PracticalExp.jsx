import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function PracticalExp() {
    const [company, setCompany] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    function handleCompanyChange(e) {
        setCompany(e.target.value);
    }

    function handlePositionTitleChange(e) {
        setPositionTitle(e.target.value);
    }

    function handleStartDateChange(e) {
        setStartDate(e.target.value);
    }

    function handleEndDateChange(e) {
        setEndDate(e.target.value);
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
            <div className="field-container">
                {
                    isEditing?
                    <EditView 
                        handleToggle={handleToggle}
                        company={company}
                        positionTitle={positionTitle}
                        startDate={startDate}
                        endDate={endDate}
                        handleCompanyChange={handleCompanyChange}
                        handlePositionTitleChange={handlePositionTitleChange}
                        handleStartDateChange={handleStartDateChange}
                        handleEndDateChange={handleEndDateChange}
                    />
                    :
                    <DisplayView 
                        handleToggle={handleToggle}
                        company={company}
                        positionTitle={positionTitle}
                        startDate={startDate}
                        endDate={endDate}
                    />
                }
            </div>
        </section>
    )
}

function EditView({handleToggle, company, positionTitle, startDate, endDate, handleCompanyChange, handlePositionTitleChange, handleStartDateChange, handleEndDateChange}) {
    return (
        <>
            <div className="button-container">
                <Button onClick={handleToggle}>Submit</Button>
            </div>
            <div className="input-field-container">
                <Input label="Company's Name" value={company} onChange={handleCompanyChange} type='text'></Input>
                <Input label="Position Title" value={positionTitle} onChange={handlePositionTitleChange} type='text'></Input>
                <Input label="Start Date" value={startDate} onChange={handleStartDateChange} type='date'></Input>
                <Input label="End Date" value={endDate} onChange={handleEndDateChange} type='date'></Input>
            </div>
        </>
    )
}

function DisplayView({handleToggle, company, positionTitle, startDate, endDate}) {
    return (
        <>
            <div className="button-container">
                <Button onClick={handleToggle}>Edit</Button>
            </div>
            <div className="text-field-container">
                <div className="text-container">
                    <p>Company's Name: {company}</p>
                </div>
                <div className="text-container">
                    <p>Position Title: {positionTitle}</p>
                </div>
                <div className="text-container">
                    <p>Start Date: {startDate}</p>
                </div>
                <div className="text-container">
                    <p>End Date: {endDate}</p>
                </div>
            </div>
        </>
    )
}