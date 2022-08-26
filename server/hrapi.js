const axios = require('axios');
const url = require('url')

let apiLink = "";

module.exports = {

  getInfo: function (widget, queryParams, subCategory='') {
    if (typeof queryParams === 'object') {
      const params = new url.URLSearchParams(queryParams);
      apiLink = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${widget}?${params}`;
    } else {
      apiLink = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${widget}/${queryParams}/${subCategory}`;
    }
    let options = {
      url: apiLink,
      headers: {
        'Authorization': process.env.API_TOKEN
      }
    };
    return axios(options);
  },

  postInfo: function (widget, bodyParams, queryParams, subCategory='') {
    if (queryParams === undefined) {
      apiLink = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${widget}`;
    } else {
      apiLink = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${widget}/${queryParams}/${subCategory}`;
    }
    let options = {
      url: apiLink,
      method: 'POST',
      data: bodyParams,
      headers: {
        'Authorization': process.env.API_TOKEN
      }
    };
    return axios(options);
  },

  updateInfo: function (widget, queryParams, subCategory) {
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
}