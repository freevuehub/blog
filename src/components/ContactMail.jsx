import React from 'react'

const ContactMail = () => {
  return (
    <>
      <h2 className="sidebar-header">Mailing List</h2>
      <div className="sidebar-emails">
        <h2>Mailing list here</h2>
        <p>Subscribe to my list for lots of great reasons</p>
        <form>
          <input type="text" id="email" aria-label="email" />
          <input
            type="submit"
            value="Subscribe"
            aria-label="subscribe"
          />{" "}
        </form>
        <span>Weekly updates, unsubscribe at any time</span>
      </div>
    </>
  )
}

export default ContactMail
