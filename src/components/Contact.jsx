import React from 'react';

const Contact = () => {
    return (
        <div name='contact' className='md:py-56 w-full md:h-screen bg-[#0a192f] flex   justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/d9324a73-da19-4007-aafd-8709e890be7c" className='flex flex-col  text-black max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'> Submit the form below or shoot me an email at- <span className='text-pink-600'>khalidhasansuhas@gmail.com</span></p>
                </div>
                <input className='bg-[#ccd6f6] p-2 rounded-md'  type="text" placeholder='Name' name='name' required/>
                <input className='bg-[#ccd6f6] mt-4 p-2 rounded-md' type="text" placeholder='phone/Whatsapp' name='whatsapp' />
                <input className='my-4 p-2 bg-[#ccd6f6] rounded-md' type="email" placeholder='Email' name='email' required/>
                <textarea className='bg-[#ccd6f6] p-2 rounded-md' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    );
};

export default Contact;