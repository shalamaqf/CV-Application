import { useState } from "react";
import Input from "./Input";

export default function EducationalExp() {
    const [school, setSchool] = useState('');
    const [titleStudy, setTitleStudy] = useState('');
    const [dateStudy, setDateStudy] = useState('');

    function handleSchoolChange(e) {
        setSchool(e.target.value);
    }

    function handleTitleStudyChange(e) {
        setTitleStudy(e.target.value);
    }

    function handleDateStudyChange(e) {
        setDateStudy(e.target.value);
    }

    return (
        <>
            <Input label='School/University' value={school} onChange={handleSchoolChange} type='text'></Input>
            <Input label='Title of Study' value={titleStudy} onChange={handleTitleStudyChange} type='text'></Input>
            <Input label='Date of Study' value={dateStudy} onChange={handleDateStudyChange} type='date'></Input>
        </>
    )
}