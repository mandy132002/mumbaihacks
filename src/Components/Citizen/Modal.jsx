import "./Modal.css";

function Modal() {
  return (
    <>
      <div className="modal">
        <div>
          <label htmlFor="category">Choose category: </label>
        </div>
        <p className="modal__title">
          <select name="category" id="category">
            <option value="">Select</option>
            <option value="fire">Fire Department</option>
            <option value="police">Police Department</option>
            <option value="ambulance">Ambulance</option>
            <option value="ndrf">NDRF</option>
          </select>
        </p>
        <div className="modal__buttons">
          <button className="btn btn__cancel">Cancel</button>
          <button className="btn">Confirm</button>
        </div>
        <div className="note">*Pulling the alarm chain without reasonable and sufficient cause is a punishable offence under Section 141 of Indian Railways Act, 1989. The penalty includes imprisonment of up to one year or a fine of Rs 1,000 or both.</div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
