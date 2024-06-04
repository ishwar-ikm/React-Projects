import React from 'react'
import './contact.css'

const Contact = () => {
    
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "Type you API key");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In porro unde pariatur molestiae dolor dolores iure voluptatem, sunt quo cupiditate recusandae, fuga aspernatur dicta iste. Vitae sapiente incidunt obcaecati fugit.</p>

                <ul>
                    <li>xyz@company.com</li>
                    <li>+91 3123412421</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                </ul>
            </div>

            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label htmlFor="">Your Name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label htmlFor="">Phone Number</label>
                    <input type="text" name='phone' placeholder='Enter your phone number' required />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows={6} placeholder='Enter your message' required></textarea>

                    <button className='btn dark-btn'>Submit Now</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact
