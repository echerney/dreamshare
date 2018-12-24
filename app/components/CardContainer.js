const React = require('react');
const ReactDOM = require('react-dom');


function Card() {
  return (
    <div className='card'>
    <div className='cardContent'>
    <div className='stepButton'>
      <p>STEP 1</p>
    </div>
    <h2>Sed leo enim, condimentum</h2>
    <p className='roboto cardSubtext'>Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.</p>
    </div>
    </div>
  )
}


class CardContainer extends React.Component {
  render() {
   return (
     <div className='containerTwo'>
       <h2 className='headline'>How Dreamshare</h2>
       <div className='cardContainer'>
        <Card />
        <Card />
        <Card />
       </div>
     </div>
   )
 }

}

module.exports = CardContainer
