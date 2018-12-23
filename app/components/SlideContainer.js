const React = require('react');
const ReactDOM = require('react-dom');


function SqSlide() {
  return (
    <div className='SqSlide'>
    </div>
  )
}

function LongSlide() {
  return (
    <div className='LongSlide'>
    </div>
  )
}


class SlideContainer extends React.Component {
  render() {
   return (
     <div className='SlideContainer'>
       <SqSlide />
       <SqSlide />
       <SqSlide />
       <SqSlide />
       <LongSlide />
       <LongSlide />
       <SqSlide />

     </div>
   )
 }

}

module.exports = SlideContainer
