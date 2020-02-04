import React from "react";
import CardData from '../data/Fruit.json';





const Drawcards = () => (
  <div>
    <h3>Darw Cards</h3>
    <small>Draw Cards</small>
    {CardData.map((item, ind)=> {

      return <div>
      <img
         src={item.pic} 
        alt={item.title}>
      </img>
      </div>
    }
      )}
  </div>

)



// render () {
//   return (
//     <div className='container'>
//       <Picture key={picture.id} src={picture.src}>
//           //what is placed here is passed as props.children  
//       </Picture>
//     </div>
//   )
// }






export default Drawcards;
