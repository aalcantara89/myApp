function GeneralInfo({genInfo, setGenInfo}) {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setGenInfo(prevState => ({ ...prevState, [name]: value }));
    };

  return (
    <>
      <div className="general-info-content">
        <h3>General Information</h3>
        <form className="info-form" id="genral-info">
            <div>
              <label htmlFor="fullName">Full Name: </label>
              <input
                  type="text"
                  value={genInfo.fullName}
                  name="fullName"
                  onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="email">Email: </label>
              <input
                  type="text"
                  value={genInfo.email}
                  name="email"
                  onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="phone">Phone Number: </label>
              <input
                  type="tel"
                  value={genInfo.phone}
                  name="phone"
                  onChange={handleInputChange}
              />
            </div>
        </form>
      </div>
    </>
  )
}
export default GeneralInfo