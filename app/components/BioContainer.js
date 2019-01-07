const React = require('react');
const ReactDOM = require('react-dom');


function Bio() {
  return (
    <div className='bio'>
      <img className='avatar' src="../../assets/Bradley.png" />
      <p>Bradley Hunter</p>
      <p className='roboto w-resize90'>Based in Chicago. I love playing tennis and loud music.
      </p>
    </div>
  )
}


class BioContainer extends React.Component {
  render() {
   return (
     <div className='containerThree'>
       <h2 className='headline'>Meet a partner for your best</h2>
       <div className='bioContainer'>
         <Bio />
         <Bio />
         <Bio />
         <Bio />
       </div>
       <div className='redHollowButton'>
         <p>See other partners</p>
       </div>
     </div>
   )
 }

}

module.exports = BioContainer
