import { useState } from "react";
import Input from "./Input";

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
        <>
            <Input label="Company's Name" value={company} onChange={handleCompanyChange} type='text'></Input>
            <Input label="Position Title" value={positionTitle} onChange={handlePositionTitleChange} type='text'></Input>
            <Input label="Start Date" value={startDate} onChange={handleStartDateChange} type='date'></Input>
            <Input label="End Date" value={endDate} onChange={handleEndDateChange} type='date'></Input>
        </>
    )
}