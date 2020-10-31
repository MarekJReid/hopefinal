import React from 'react'
import Layout from '../components/layout'

import ContactPage from '../components/pages/contact/Contact'

function Contact() {
    return (
       
            <Layout>
            <ContactPage />
            {process.env.GATSBY_GRAPHQL_IDE}
            </Layout>
   
    )
}

export default Contact
