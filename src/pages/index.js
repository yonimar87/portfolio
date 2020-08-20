import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Yoni Marlow - Full Stack Developer'
  const siteDescription = 'Site description'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Yoni Marlow
              <br />
              Software Engineer
            </h2>
          </header>
          <p>
            I am a recent graduate from General Assembly's Software Engineering Immersive course. My front-end experience is using JavaScript, React.js, CSS and HTML.
          </p>
          <p>
            I have experience in backend engineering using Node.js, MongoDB, Ruby on Rails, Firebase and some SQL and Postgres experience.</p>
          <p> 
            I found myself in the customer service and sales world where I’ve developed many integral life and business soft skills such as collaborating with other departments, sales, and most importantly really listening to a customer’s needs.
          </p>
          <p>
            While working at RedBalloon and Prospa my love of web development has grown through my collaboration with the IT department on new products.
          </p>
        </section>

        <section id="two">
          <h2>Recent Work</h2>
          <Gallery />
          <ul className="projects">
            <li>
              <a href="https://github.com/yonimar87" target="_blank" className="icon fa-github"> Please click to reach my GitHub profile
              <span className="label">Github</span>
              </a>
            </li>
          </ul>
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            I'm currently looking for roles either in Full-Stack capacity or a front-end focus. Please reach out through the form below or send through an email via the "e-mail" tab in the footer.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="mailto:yonathanmarlow@gmail.com">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  0412-639-879
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">yonathanmarlow@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
