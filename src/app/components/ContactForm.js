"use client"
import React, { useState } from 'react'
import styles from "@/app/contact/contact.module.css"
import { Mulish } from 'next/font/google'
 
const mulish = Mulish({
  weight: ['300','400','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'swap',
})
const ContactForm = () => {
    const[user,setUser]=useState({
        username:" ",
        email:" ",
        phone:" ",
        message:" "

    })
    const[status,setStatus]=useState(null);

    function handleChange(e){
        console.log(e);

        const name=e.target.name;
       
        const value=e.target.value;
        
     setUser((prevUser) => ({...prevUser, [name] : value}));
     console.log(name);

    }
    const handleSubmit=async(e)=>{
             e.preventDefault();
        try {
            const response=await fetch("/api/contact",{
                method:'POST',
                headers:{"Content_Type":"application/json"},
                body:JSON.stringify({
                    username:user.username,
                    email:user.email,
                    phone:user.phone,
                    message:user.message
                })
            })
            if (response.status==200) {
                setUser({
                    username:" ",
                    email:" ",
                    phone:" ",
                    message:" "
            
                })
                setStatus('Success');
            }
            else{
                setStatus('error');
            }
        } catch (error) {
            console.log(e);
        }

       
    }
  return (
    <>
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor='username' className={styles.label}>
                    Enter Your Name
                    <input type="text" name="username" id="username" placeholder="Enter your name" 
                    className={mulish.className}
                    value={user.username}
                    onChange={handleChange}
                    autoComplete='off'
                    required />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor='email' className={styles.label}>
                    Enter Your Email
                    <input type="text" name="email" id="email" placeholder="Enter your email" 
                    className={mulish.className}
                    value={user.email}
                    onChange={handleChange} 
                    autoComplete='off'
                    required/>
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor='phone' className={styles.label}>
                    Enter Your Phone number
                    <input type="number" name="phone" id="phone" placeholder="Enter Your Phone number" 
                    className={mulish.className}
                    value={user.phone}
                    onChange={handleChange}
                    autoComplete='off' 
                    required/>
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor='message' className={styles.label}>
                    Message
                    <textarea name="message" id="message" rows={5} placeholder="Enter Your Message" 
                    className={mulish.className}
                    value={user.message}
                    onChange={handleChange}
                    autoComplete='off'
                    required />
                </label>
            </div>
            <div>
                {status==='Success' && <p className={styles.success_msg}>Thank you for Your message</p>}
                {status==='error' && <p className={styles.error_msg}>There was an error in submitting your message</p>}

                <button type='submit' className={mulish.className}>Send Message</button>
            </div>
        </form>
      
    </>
  )
}

export default ContactForm
