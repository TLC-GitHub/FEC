const axios = require('axios');
const url = require('url');

let apiLink = "";

module.exports = {

  getInfo: function (widget, queryParams, pathVariable, subCategory='') {
    // console.log('params: ', queryParams);
    // console.log(typeof queryParams);
    // console.log()
    // if (typeof queryParams === 'object') {
    if (pathVariable === '') {
      const params = new url.URLSearchParams(queryParams);
      apiLink = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${widget}?${params}`;
      console.log('api: ', apiLink);
    } else {
      // apiLink = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${widget}/${queryParams}/${subCategory}`;
      apiLink = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${widget}/${pathVariable}/${subCategory}`;
      // console.log('else api: ', apiLink);
    }
    let options = {
      url: apiLink,
      headers: {
        'Authorization': process.env.API_TOKEN
      }
    };
    console.log(options);
    return axios(options);
  },

  postInfo: function (widget, bodyParams, queryParams, subCategory='') {
    if (queryParams === '') {
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

    // console.log(options, 'this is options')
    return axios(options);
  },

  updateInfo: function (widget, queryParams, pathVariable, subCategory) {
    if (pathVariable === '') {
      const params = new url.URLSearchParams(queryParams);
      apiLink = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${widget}?${params}`;
      // console.log('api: ', apiLink);
    } else {
      // apiLink = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${widget}/${queryParams}/${subCategory}`;
      apiLink = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${widget}/${pathVariable}/${subCategory}`;
      // console.log('else api: ', apiLink);
    }
    let options = {
      url: apiLink,
      method: "PUT",
      headers: {
        'Authorization': process.env.API_TOKEN
      }
    };
    return axios(options);
  }
}
