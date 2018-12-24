const React = require('react');
const ReactDOM = require('react-dom');
const CardContainer = require('./CardContainer.js');
const BioContainer = require('./BioContainer.js');
const SlideContainer = require('./SlideContainer.js')

function Hero() {
  return (
    <div className='heroImg'>
      <h1 className='topLogo'>DREAMSHARE</h1>
      <ul className="navBar">
        <li><a href="#">Log In</a></li>
        <li><a className='hollowButton' href="#">Sign Up</a></li>
      </ul>
      <div className='titleSection'>
        <h1>SHARE YOUR HOLIDAY DREAM</h1>
        <h2 className='roboto subtext'>And find the perfect partner to fulfill it.</h2>
        <button className='filledButton'>Find your holiday partner</button>
      </div>
    </div>
  )
}


function Footer() {
  return (
    <div className='footer'>
      <h2 className='headline'>Create your holiday</h2>
      <h3 className='roboto formSubtext'>Hi! What are your holiday interests?</h3>
      <input type="text" name="name" />
      <button className='filledButton'>Search partners</button>
      <hr />
      <div className='footerLinks'>
        <a href='#' className='bottomLogo'>DREAMSHARE</a>
        <table>
          <tbody>
            <tr>
              <th>
              <a href='#'>Company</a>
              </th>
            </tr>
            <tr>
              <td>
              <a href='#'>About</a>
              </td>
            </tr><tr>
              <td>
              <a href='#'>Contact</a>
              </td>
            </tr><tr>
              <td>
              <a href='#'>Press</a>
              </td>
            </tr><tr>
              <td>
              <a href='#'>Company</a>
              </td>
            </tr><tr>
              <td>
              <a href='#'>Blog</a>
              </td>
            </tr><tr>
              <td>
              <a href='#'>Terms and Privacy</a>
              </td>
            </tr><tr>
              <td>
              <a href='#'>Help</a>
              </td>
            </tr>
          </tbody>
        </table>
        <a href='#' className='partners'>Partners</a>
      </div>
    </div>
  )
}

class App extends React.Component {
  render() {
   return (
     <div>
       <Hero />
       <CardContainer/>
       <BioContainer />
       <SlideContainer />
       <Footer />
     </div>
   )
 }

}

module.exports = App
