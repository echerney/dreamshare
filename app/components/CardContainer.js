const React = require('react');
const ReactDOM = require('react-dom');


function Card() {
  return (
    <div className='Card'>
    </div>
  )
}


class CardContainer extends React.Component {
  render() {
   return (
     <div className='CardContainer'>
       <Card />
       <Card />
       <Card />
     </div>
   )
 }

}

module.exports = CardContainer
