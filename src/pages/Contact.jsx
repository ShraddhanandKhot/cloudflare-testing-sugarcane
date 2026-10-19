
export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault()

    const form = new FormData(event.currentTarget)
    const name = form.get('name')
    const phone = form.get('phone')
    const message = form.get('message')

    const text = encodeURIComponent(
      `Hello, I would like to enquire about sugarcane seedlings.\n\n` +
      `Name: ${name}\nPhone: ${phone}\nEnquiry: ${message}`,
    )

    // Replace this placeholder with the nursery's real WhatsApp number.
    window.open(
      `https://wa.me/918197588468?text=${text}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <section className="section contact-page">
      <div className="section-heading">
        <span className="eyebrow">GET IN TOUCH</span>
        <h2>Contact Our Nursery</h2>
        <p>
          Tell us what you need, and prepare an enquiry to send
          through WhatsApp.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" required placeholder="Enter your name" />

        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="Enter your phone number"
        />

        <label htmlFor="message">Your enquiry</label>
        <textarea
          id="message"
          name="message"
          required
          rows="5"
          placeholder="Variety, quantity, location, or planting date..."
        />

        <button className="button button-green" type="submit">
          Prepare WhatsApp Enquiry
        </button>
      </form>
    </section>
  )
}
