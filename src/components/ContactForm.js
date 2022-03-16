import { useEffect, useState } from 'react';
import './ContactForm.css';
import emailjs from 'emailjs-com'

function ContactForm() {
    const [submitMessage, setSubmitMessage] = useState('Send message');
    const [formData, setFormData] = useState({
            name: "",
            email: "",
            message: ""
        });

    const resetSubmitMessage = () => {
        setTimeout(() => setSubmitMessage(submitMessage), 5000);
        return () => clearTimeout();
    }

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        emailjs.send('service_ou01jnv', 'template_ou01jnv', formData, 'YJl_QAOGNeDWdjpWz')
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
            console.log('FAILED...', error);
            });
        e.preventDefault();
        setFormData({
            name: "",
            email: "",
            message: ""
        });
        setSubmitMessage('Message sent!');
        resetSubmitMessage();
    }

    return (
        <div className="Contact">
            <h1 className="Contact-headline separator">Get in touch!</h1> 
            <form className="Contact-form" onSubmit={handleSubmit}>
                <div>
                    <label></label>
                    <input 
                        name="name"
                        type="text"
                        id="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        placeholder="Name"/>
                </div>
                <div>
                    {/* <label htmlFor="email">Email:</label> */}
                    <input 
                        name="email"
                        type="email" 
                        id="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required
                        placeholder="E-mail" />
                </div>
                <div>
                    {/* <label htmlFor="message">Message:</label> */}
                    <textarea 
                        name="message"
                        id="message" 
                        value={formData.message} 
                        onChange={handleChange}
                        required 
                        placeholder="Message"/>
                </div>
                <button id = "submit" type="submit">{submitMessage}</button>
            </form>
        </div>

    );
}

export default ContactForm;
