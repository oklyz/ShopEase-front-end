const ContactAs = () => {
  return (
    <>
      <div className="simple-contact-container">
        <div className="simple-contact-header">
          <h1>Contact Us</h1>
          <p>
            ShopEase makes online shopping easy and convenient for everyone.
          </p>
        </div>

        <div className="simple-contact-content">
          <div className="simple-contact-info">
            <h2>About ShopEase</h2>
            <p>
              ShopEase is your one-stop online shopping destination. We offer a
              wide range of products with fast delivery and excellent customer
              service.
            </p>

            <div className="simple-contact-methods">
              <h3>Need Help?</h3>
              <div className="contact-method">
                <i className="fas fa-envelope"></i>
                <span>Email: support@shopease.com</span>
              </div>
              <div className="contact-method">
                <i className="fas fa-phone"></i>
                <span>Phone: +1 (555) 123-4567</span>
              </div>
              <div className="contact-method">
                <i className="fas fa-clock"></i>
                <span>Support Hours: 9AM - 5PM (Mon-Fri)</span>
              </div>
            </div>
          </div>

          <div className="simple-contact-note">
            <p>
              <strong>Note:</strong> For faster service, please include your
              order number in any communications.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactAs
