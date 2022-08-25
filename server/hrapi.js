const axios = require('axios');
const url = require('url')

let getProductInfo = (widget, queryParams, subCategory='') => {

  if (typeof queryParams === 'object') {

    const params = new url.URLSearchParams(queryParams);
    apiLink = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${widget}?${params}`;

  } else {

    apiLink = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${widget}/${queryParams}/${subCategory}`;

  }

  let options = {
    method: "get",
    url: apiLink,
    headers: {
      'Authorization': process.env.API_TOKEN
    }
  };

  return axios(options);
}

module.exports.getProductInfo = getProductInfo;