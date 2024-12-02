/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Country, State } from "country-state-city";

const BIAModal = ({
  formData,
  handleChange,
  setModalShow,
  ...props
}) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const countryList = Country.getAllCountries();
    setCountries(countryList);
  }, []);

  const handleCountryChange = (e) => {
    const selectedCountryCode = e.target.value;
    const stateList = State.getStatesOfCountry(selectedCountryCode);
    setStates(stateList || []);
    handleChange(e);
  };

  const handleSubmit = async (e) => {
     e.preventDefault(); 
    setIsLoading(true);
    handleBeforeClose(e);
    try {
      console.log(formData)
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      console.log("error")
    } finally {
      setIsLoading(false);
    }
  };

  const handleBeforeClose = (e) => {
    if (e.target.closest("form").checkValidity()) {
      setModalShow(false);
    } else {
      e.target.closest("form").reportValidity(); // Trigger validation UI feedback
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="custom-modal-style"
    >
      <Modal.Body>
        <Form className="modalForm d-flex flex-column justify-content-center">
          <h2 className="name-div-head text-center">Enroll</h2>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              as="select"
              name="country"
              value={formData.country}
              onChange={handleCountryChange}
              required
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Control
              as="select"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              disabled={!formData.country}
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state.isoCode} value={state.isoCode}>
                  {state.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="email"
              placeholder="example@gmail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="tel"
              placeholder="Enter Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              minLength={7}
              maxLength={15}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter Occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button
            style={{ width: "40%", margin: "0 auto" }}
            variant="primary"
            className="section-3-btn my-2"
            onClick={handleSubmit}
            disabled={isLoading}
            // onClick={handleBeforeClose}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default BIAModal;