import Auth from '../.././config.js'
import axios from 'axios';

export const logInteractions = (e) => {

  let element = e.target;
  let widget = e.path[e.path.length - 9].id;
  let date = new Date()
  let time = date.toLocaleString("en-US", {timeZone: "America/Los_Angeles"});


  console.log(e);
  // axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/interactions', {
  //   element: element,
  //   widget: widget,
  //   time: time
  // }, { headers: Auth })
  //   .then(() => {
  //     console.log('success, interaction logged');
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
}
