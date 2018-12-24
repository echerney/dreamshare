const React = require('react');
const ReactDOM = require('react-dom');


function SqSlide() {
  return (
    <div className='sqSlide'>
      <h2>Sports and Activities</h2>
    </div>
  )
}

function LongSlide() {
  return (
    <div className='longSlide'>
      <h2>Culture and Education</h2>
    </div>
  )
}


class SlideContainer extends React.Component {
  render() {
   return (
     <div className='containerFour'>
       <h2 className='headline'>Discover holiday activity ideas</h2>
       <div className='slideContainer'>
         <SqSlide />
         <SqSlide />
         <SqSlide />
         <SqSlide />
         <LongSlide />
         <LongSlide />
         <SqSlide />
       </div>
     </div>
   )
 }

}

module.exports = SlideContainer
