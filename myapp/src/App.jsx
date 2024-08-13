import {useState} from 'react';
import GeneralInfo from "./components/generalInfo";
import Education from './components/educational';
import Experience from './components/experience';
import CVRenderer from './components/CVRenderer';
import './App.css'
function App() {
    const [genInfo, setGenInfo] = useState({
        fullName: '',
        email: '',
        phone: ''
    });

    const [education, setEducation] = useState([{
        id: Date.now(),
            school: '',
            title: '',
            startYear: '',
            gradYear: '',
    }]);

    const [experiences, setExperiences] = useState([{
      id: Date.now(),
      company: '',
      location: '',
      position: '',
      startDate: '',
      endDate: '',
      isStillWorking: false,
      responsibilities: ''
    }]);
  
    return (
        <>
          <div className="container">
            <div className="cv-input-container">
              <GeneralInfo genInfo={genInfo} setGenInfo={setGenInfo} />
              <Education education={education} setEducation={setEducation} />
              <Experience experiences={experiences} setExperiences={setExperiences} />
            </div>
            <div className="cv-display-container">
              <CVRenderer genInfo={genInfo} education={education} experiences={experiences}/>
            </div>
          </div>
        </>
      )
}
export default App