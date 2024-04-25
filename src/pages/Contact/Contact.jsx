import { useState} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import Accordion from '../../components/Accordion/Accordion';


const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const sendEmail = (e) => {
    e.preventDefault()
    

    const serviceId = 'service_waz13gr';
    const templateId = 'template_165m7gg';
    const publicKey =  'user_WQMcSNLI0hjkIK9BzfhAF';

    const templateParams = {
      from_name : firstName + " " + lastName,
      from_email : email,
      to_name: "EMA BD",
      message: message
    }
    console.log(templateParams);

    emailjs
      .sendForm(serviceId, templateId, templateParams, publicKey)
      .then(
        (response) => { 
          console.log('Email sent successfully!', response);
          setFirstName('');
          setLastName('');
          setEmail('');
          setMessage('');
        })
        .catch((error) => {
          console.log('Something went wrong!', error.text);
        });

  }



    return (
        <div className="mt">
           <div>
             <h1 className='section-header text-center'>Frequently Asked Questions</h1>
             <Accordion title="What is Lorem Ipsum?" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod purus et magna sodales consectetur."></Accordion>
             <Accordion title="Why do we use it?" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod purus et magna sodales consectetur."></Accordion>
             <Accordion title="Where does it come from?" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod purus et magna sodales consectetur."></Accordion>
             <Accordion title="How can I use it?" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod purus et magna sodales consectetur."></Accordion>
           </div>


            <div className="contact-header">
                <h1 className="section-header text-center montserrat">Contact EMA-BD</h1>
                <p className="text-center">If you have any questions, please check the <i>Frequently Asked Questions </i> first. If you can&#39;t, contact us by filling the form below. We will try to get back as soon as possible! </p>
            </div>
            <div className='contact-form mt-5'>
            <form  onSubmit={sendEmail}>
              <div className='d-flex input-wrapper'>
             
              <div>
                <input 
                name='first_name'
                type='text' 
                placeholder='First Name'
                value = {firstName}
                onChange={(e) => setFirstName(e.target.value)}
                ></input>
                <input 
                name='last_name' 
                type='text' 
                placeholder='Last Name'
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)}
                ></input>
                <input 
                name='user_email' 
                type='email' 
                placeholder='Email Address'
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div>
                <textarea 
                name='message' 
                placeholder='Type your message' 
                rows={11} cols={50}
                value={message} 
                onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              </div>
            <button className='btn-submit text-center' type='submit'>Send</button>
            </form>
            </div>
           
            
        </div>
    );
};

export default Contact;