import React from 'react'
import Hero from './hero/Hero'
import BoxPicLeft from '../../reusable/slidinboxes/boxPicLeft'
import BoxPicRight from '../../reusable/slidinboxes/boxPicRight'
import Header from '../../header'
import Footer from '../../footer'
import MailChimpSignUpForm from '../../reusable/mailchimp-signup/MailChimpSignUpForm'

function Landing() {
    return (
        <div>
            <Hero />
            <div class=""
            style={{
                padding: '0 10vw'
            }}
            >
            <BoxPicLeft boxId="0"/>
            <BoxPicRight boxId="1"/>
            <BoxPicLeft boxId="2"/>
            <MailChimpSignUpForm />
            </div>
                        
            <Footer />
        </div>
    )
}

export default Landing
