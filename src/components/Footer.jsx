import React from 'react'

const Footer = () => {
    const footerLinks = (element) => {

        const allFooterLinks = document.querySelectorAll(".footerLinks")
       


        switch (element) {
            case 0:

                allFooterLinks.forEach((item, index) => index === 0 ? (item.style.opacity = 1) : (item.style.opacity = 0.2))
                break;
          
            case 1:

                allFooterLinks.forEach((item, index) => index === 1 ? (item.style.opacity = 1) : (item.style.opacity = 0.2))
                break;
            case 2:

                allFooterLinks.forEach((item, index) => index === 2 ? (item.style.opacity = 1) : (item.style.opacity = 0.2))
                break;
            case 3:

                allFooterLinks.forEach((item, index) => index === 3 ? (item.style.opacity = 1) : (item.style.opacity = 0.2))
                break;
            case 4:

                allFooterLinks.forEach((item, index) => index === 4 ? (item.style.opacity = 1) : (item.style.opacity = 0.2))
                break;

            case 5:

                allFooterLinks.forEach((item, index) => index === 5 ? (item.style.opacity = 1) : (item.style.opacity = 0.2))
                break;
                
           
            default:
                allFooterLinks.forEach((item) => (item.style.opacity = 1))

                break;
        }

    }
    const linksBackToNormal = ()=>{
        const allFooterLinks = document.querySelectorAll(".footerLinks")
        allFooterLinks.forEach((item) => (item.style.opacity = 1))
        
    }
    return (

        <>
            <footer>
                <h1>
                    let's
                    <br />
                    #ConnectonCutting?
                </h1>

                <aside onMouseLeave={linksBackToNormal}>
                    <a href="/" onMouseOver={() => footerLinks(0)} className='footerLinks'>Home</a>
                    <a href="/story" onMouseOver={() => footerLinks(1)} className='footerLinks'>Story</a>
                    <a href="/media" onMouseOver={() => footerLinks(2)} className='footerLinks'>Media</a>
                    <a href="/francise" onMouseOver={() => footerLinks(3)} className='footerLinks'>Franchise</a>
                    <a href="/events" onMouseOver={() => footerLinks(4)} className='footerLinks'>Events</a>
                    <a href="/chaiwalacares" onMouseOver={() => footerLinks(5)} className='footerLinks'>Chai Wala Cares</a>
                </aside>

                <div>
                    <h5>Email</h5>
                    <a href="mail to : info@mbachaiwala.com">info@mbachaiwala.com</a>
                    <a href="mail to : franchise@mbachaiwala.com">franchise@mbachaiwala.com</a>
                </div>

                <div>
                    <h5>Contact</h5>
                    <a href="tel : +91722905222">+91722905222</a>
                </div>

                <p>© COPYRIGHT 2023 MBA CHAIWALA. MADE BY</p>
            </footer>
        </>
    )
}

export default Footer