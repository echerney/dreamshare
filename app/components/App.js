const React = require('react');
const ReactDOM = require('react-dom');
const CardContainer = require('./CardContainer.js');
const BioContainer = require('./BioContainer.js');
const SlideContainer = require('./SlideContainer.js')

function Hero() {
  return (
    <div className='HeroImg'>
    </div>
  )
}

function Card() {
  return (
    <div className='Card'>
    </div>
  )
}

function Bio() {
  return (
    <div className='Bio'>
    </div>
  )
}

function Footer() {
  return (
    <div className='Footer'>
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
