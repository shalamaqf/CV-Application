import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function EducationalExp() {
    const [school, setSchool] = useState('');
    const [titleStudy, setTitleStudy] = useState('');
    const [dateStudy, setDateStudy] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    function handleSchoolChange(e) {
        setSchool(e.target.value);
    }

    function handleTitleStudyChange(e) {
        setTitleStudy(e.target.value);
    }

    function handleDateStudyChange(e) {
        setDateStudy(e.target.value);
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
                            school={school}
                            titleStudy={titleStudy}
                            dateStudy={dateStudy}
                            handleSchoolChange={handleSchoolChange}
                            handleTitleStudyChange={handleTitleStudyChange}
                            handleDateStudyChange={handleDateStudyChange}
                        />
                    :
                        <DisplayView
                            handleToggle={handleToggle}
                            school={school}
                            titleStudy={titleStudy}
                            dateStudy={dateStudy}
                        />
                }
            </div>
        </section>
    )
}

function EditView({handleToggle, school, titleStudy, dateStudy, handleSchoolChange, handleTitleStudyChange, handleDateStudyChange}) {
    return (
        <>
            <div className="button-container">
                <Button onClick={handleToggle}>Submit</Button>
            </div>
            <div className="input-field-container">
                <Input label='School/University' value={school} onChange={handleSchoolChange} type='text'></Input>
                <Input label='Title of Study' value={titleStudy} onChange={handleTitleStudyChange} type='text'></Input>
                <Input label='Date of Study' value={dateStudy} onChange={handleDateStudyChange} type='date'></Input>
            </div>
        </>
    )
}

function DisplayView({handleToggle, school, titleStudy, dateStudy}) {
    return (
        <>
            <div className="button-container">
                <Button onClick={handleToggle}>Edit</Button>
            </div>
            <div className="text-field-container">
                <div className="text-container">
                    <p>School/University: {school}</p>
                </div>
                <div className="text-container">
                    <p>Title of Study: {titleStudy}</p>
                </div>
                <div className="text-container">
                    <p>Date of Study: {dateStudy}</p>
                </div>
            </div>
        </>
    )
}