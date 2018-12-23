const React = require('react');
const ReactDOM = require('react-dom');


function Bio() {
  return (
    <div className='Bio'>
    </div>
  )
}


class BioContainer extends React.Component {
  render() {
   return (
     <div className='BioContainer'>
       <Bio />
       <Bio />
       <Bio />
       <Bio />
     </div>
   )
 }

}

module.exports = BioContainer
