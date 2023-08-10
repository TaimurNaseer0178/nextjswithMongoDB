import React from 'react'
import styles from "@/app/contact/contact.module.css"
import { MdEmail,MdVoiceChat,MdForum } from 'react-icons/md';
import Link from 'next/link';
const ContactCard = () => {
  return (
    <>
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.grid_card}>
                        <i> <MdEmail /></i>
                        <h2>Email</h2>
                        <p>Monday to Friday Expected</p>
                        <p className={styles.last_para}>response time:72 hour</p>
                        <Link href='/'>Send Email <span>&gt;</span>
                        </Link>
                    </div>
                    <div className={styles.grid_card}>
                        <i> <MdVoiceChat /></i>
                        <h2>Live Chat</h2>
                        <p>Weekdays:9 AM - 6PM ET </p>
                        <p className={styles.last_para}>Weekdays:9 AM - 6PM ET</p>
                        <Link href='/'>Chat Now <span>&gt;</span>
                        </Link>
                    </div>
                    <div className={styles.grid_card}>
                        <i> <MdForum /></i>
                        <h2>Community Form</h2>
                        <p>Monday to Friday Expected</p>
                        <p className={styles.last_para}>response time:72 hour</p>
                        <Link href='/'>Ask the Community <span>&gt;</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default ContactCard;
