import '../styles/educational.css'

function Education({education, setEducation}) {
    const handleInputChange = (id, event) => {
        const {name, value} = event.target;
        setEducation(education.map(edu => (edu.id === id ? {...edu, [name]: value } :edu)));
    };
    const handleAddEducation = () => {
        setEducation([...education, {
            id: Date.now(),
            school: '',
            title: '',
            startYear: '',
            gradYear: '',
        }]);
    };
    const handleDeleteEducation = (id) => {
        setEducation(education.filter(edu => edu.id !== id));
    }
    return (
        <>
            <div className="cv-input-container-content">
                <h3>Educational Background</h3>
                <div className="cv-input-form-list">
                    {education.map((edu) => (
                        <form key={edu.id} className="actual-form">
                            <button type="button" className="close-button" onClick={() => handleDeleteEducation(edu.id)}>x</button>
                            <div>
                                <label htmlFor={`school-${edu.id}`}><span>College/University</span></label>
                                <input
                                    type="text"
                                    name="school"
                                    id={`school-${edu.id}`}
                                    value={edu.school || ''}
                                    onChange={(event) => handleInputChange(edu.id, event)}
                                />
                            </div>
                            <div>
                                <label htmlFor={`location-${edu.id}`}><span>Location</span></label>
                                <input
                                    type="text"
                                    name="location"
                                    id={`location-${edu.id}`}
                                    value={edu.location}
                                    onChange={(event) => handleInputChange(edu.id, event)}
                                />
                            </div>
                            <div>
                                <label htmlFor={`title-${edu.id}`}><span>Title of Study</span></label>
                                <input
                                    type="text"
                                    name="title"
                                    id={`title-${edu.id}`}
                                    value={edu.title}
                                    onChange={(event) => handleInputChange(edu.id, event)}
                                />
                            </div>
                            <div className="grid-div">
                                <div >
                                    <label htmlFor={`start-year-${edu.id}`}><span>Started Year</span></label>
                                    <input
                                        type="date"
                                        name="startYear"
                                        id={`start-year-${edu.id}`}
                                        value={edu.startYear}
                                        onChange={(event) => handleInputChange(edu.id, event)}
                                    />
                                </div>
                                <div >
                                    <label htmlFor={`gradYear-${edu.id}`}><span>Graduated On/By</span></label>
                                    <input
                                        type="date"
                                        name="gradYear"
                                        id={`gradYear-${edu.id}`}
                                        value={edu.gradYear}
                                        onChange={(event) => handleInputChange(edu.id, event)}
                                    />
                                </div>
                            </div>
                        </form>
                    ))}
                </div>
                <button type="button" className="add-button" onClick={handleAddEducation}>Add Education</button>
            </div>
        </>
    )
};
export default Education