import React, { useRef } from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser';


const ContactData = [
  {
    id:1,
    icon: <MdOutlineEmail />,
    title:"Email",
    info: "yassin.awad2006@gmail.com",
    link: "mailto:yassin.awad2006@gmail.com",
  },
  {
    id:2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "Yassin Mohamed",
    link: "https://m.me/yassin.awad66"
  },
  {
    id:3,
    icon: <BsWhatsapp />,
    title:"WhatsApp",
    info: "01016277903",
    link: "https://api.whatsapp.com/send?phone=201016277903",
  }
]


function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lkfucsg', 'template_cspn0ta', form.current, 'ZOeGj1_P7L2BthKFZ',
      )
      e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="top_section">
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact_container">
        <div className="contact_options">
          {ContactData.map(({id,icon,title,info,link})=>(
            <article key={id} className='contact_option'>
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target='_blank'>Send Massage</a>
            </article>
          )
          )}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' placeholder='Full Name' name='name'/>
          <input type='email' placeholder='Your Email' name='email'/>
          <textarea rows={10} name="message" placeholder='Message...'></textarea>
          <button className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact