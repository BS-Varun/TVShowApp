import React, { useState } from 'react';

const SummaryScreen = ({ summary, movieName, movieDetails }) => {
  const [bookingFormVisible, setBookingFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleBookingFormToggle = () => {
    setBookingFormVisible(!bookingFormVisible);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Store the form data in local storage
    localStorage.setItem('bookingData', JSON.stringify(formData));
    alert('Booking successful!');
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Summary</h5>
          <p className="card-text">{summary}</p>
          <button className="btn btn-primary" onClick={handleBookingFormToggle}>
            Book Movie Ticket
          </button>
        </div>
      </div>

      {bookingFormVisible && (
        <div className="mt-4">
          <h5>Book Movie Ticket</h5>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                required
              />
            </div>
        
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SummaryScreen;
