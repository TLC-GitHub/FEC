const axios = require('axios');
const url = require('url')

let getProductInfo = (widget, queryParams, subCategory='') => {

  let apiLink = ""
  if (typeof queryParams === 'object') {

    const params = new url.URLSearchParams(queryParams);
    console.log(params);

    apiLink = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${widget}?${params}`;

  } else {

    apiLink = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${widget}/${queryParams}/${subCategory}`;

  }
    console.log('---------------------------------------------');
    console.log(apiLink)
    console.log('---------------------------------------------');

    let options = {
      url: apiLink,
      headers: {
        'Authorization': process.env.API_TOKEN
      }
    };

    return axios(options);
}

module.exports.getProductInfo = getProductInfo;