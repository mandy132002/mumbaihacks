import "./Report.css";

function Report() {
  return (
    <div className="outer-container">
      <div className="form-container">
        <form className="login-form">
          <div className="header-container">
            <h1 className="header">Report</h1>
          </div>
          <hr />
          <div className="internal-form-container">
            <div>
              <label htmlFor="title">Title: </label>
            </div>
            <div>
              <input type="text" id="title" required />
            </div>
          </div>
          <div className="internal-form-container">
            <div>
              <label htmlFor="description">Description: </label>
            </div>
            <div>
              <textarea
                name="description"
                id="description"
                cols="20"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div className="internal-form-container">
            <div>
              <label htmlFor="category">Choose category: </label>
            </div>
            <div>
              <select name="category" id="category">
                <option value="">Select</option>
                <option value="fire">Fire Department</option>
                <option value="police">Police Department</option>
                <option value="ambulance">Ambulance</option>
                <option value="ndrf">NDRF</option>
              </select>
            </div>
          </div>
          <div className="internal-form-container">
            <div>
              <label htmlFor="fileUpload">Upload File: </label>
            </div>
            <div className="fileUpload">
              <input type="file" id="file" name="file" accept="image/*" />
            </div>
          </div>
          <div className="internal-form-container">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Report;
