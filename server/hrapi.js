const axios = require('axios');
const url = require('url')

let apiLink = "";

let getInfo = (widget, queryParams, subCategory='') => {
  if (typeof queryParams === 'object') {
    const params = new url.URLSearchParams(queryParams);
    apiLink = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${widget}?${params}`;
  } else {
    apiLink = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${widget}/${queryParams}/${subCategory}`;
  }
  console.log(apiLink);
  let options = {
    url: apiLink,
    headers: {
      'Authorization': process.env.API_TOKEN
    }
  };
  return axios(options);
}

let postInfo = (widget, bodyParams, queryParams, subCategory='') => {
  console.log("------------in the post function------------")
  if (queryParams === undefined) {
    console.log("----------i should be here--------------")
    apiLink = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${widget}`;
  } else {
    apiLink = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${widget}/${queryParams}/${subCategory}`;
  }
  console.log(apiLink);
  console.log(bodyParams);
  let options = {
    url: apiLink,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Authorization': process.env.API_TOKEN
    }
  };
  return axios(options);
}

let updateInfo = (widget, queryParams, subCategory) => {
  apiLink = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${widget}/${queryParams}/${subCategory}`;
  console.log(apiLink);
  let options = {
    url: apiLink,
    method: 'PUT',
    headers: {
      'Authorization': process.env.API_TOKEN
    }
  };
  return axios(options);
}

module.exports.getInfo = getInfo;
module.exports.postInfo = postInfo;
module.exports.updateInfo = updateInfo;