import React from 'react'
import ContactCard from '../components/ContactCard'
import styles from "@/app/contact/contact.module.css"
import ContactForm from '../components/ContactForm'
const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact us page</h1>
        <ContactCard/>
      
        <section className={styles.contact_section}>
          <h2>We'd love to hear<span>form you</span></h2>
          <ContactForm/>
        </section>
      </div>
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212779.5152617716!2d72.85333454575861!3d33.56169151959357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df948974419acb%3A0x984357e1632d30f!2sRawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1691577213568!5m2!1sen!2s" 
      width={100} height={450} style={{border:0}} allowFullScreen="" loading="lazy" className={styles.mapping} referrerPolicy="no-referrer-when-downgrade">

      
      </iframe>
    </>
  )
}

export default Contact
