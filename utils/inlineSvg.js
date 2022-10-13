var axios = require('axios');
// var fs = require('fs');
// var fetch = require('isomorphic-fetch')
var environment = process.env.NODE_ENV;
var axiosUrl = process.env._AXIOS_BASE_URL_;
var npmCommand = process.env.npm_lifecycle_event;
var folderPath = process.cwd();

export default function getContent(data) {
  // console.log('process: ', process.cwd());
  // console.log('process: ', process.env._AXIOS_BASE_URL_);
  // console.log('process: ', process.env);
  // console.log('environment: ', environment);
  console.log('folderPath: ', folderPath);
  // http://localhost:3000/
  return replaceSvg(data).then((newData) => {
    // return JSON.parse(newData)
    return data
  })
}

const replaceSvg = async (data) => {
  // Transform json into string
  let textData = JSON.stringify(data); 
  // Get content between quotes
  let quotesRegex = /"(.*?)"/g; 
  // Get content that ends in .svg
  let svgRegex = /\.svg/g; 
  // Create copy of the original string
  let replacedText = textData;
  // Create empty array to store all matches
  let changedArray = [];
  // Save into array all .svg matches
  textData.match(quotesRegex).map(quote => { if (quote.match(svgRegex)) changedArray.push(quote) });
  // Save into variable json string after each svg replacement
  const results = await changedArray.map(async quote => {
    if (!quote.includes('path/to/')) {
      return replaceWithInline(quote).then(result => replacedText = replacedText.replace(quote, result))
    }
  })
  // After all changes have happened, return result
  return Promise.all(results).then(() => { 
    return replacedText
  })
}

// O fetch só funciona com uma url. Está dando problema no build local pq os arquivos svg estão locais
// Talvez usar fetch

const replaceWithInline = async (quote) => {
  // Remove quotes from string
  let fixedQuote = quote.replace(/"/g, '');
  // Get svg data with axios, remove quotes and line breaks and return it
  try {
    // let url = (npmCommand == 'start') ? axiosUrl : folderPath + '/static';
    // let url = axiosUrl;
    let url = folderPath + '/static';
    // let url = axiosUrl.substring(0, axiosUrl.length - 1);
    // let url = folderPath + '/static';
    // console.log('quote: ', url + fixedQuote);
    // https://github.com/nuxt/nuxt.js/issues/2006
    // let url = (fixedQuote.substring(0, 1) === '/') ? 'http://localhost:3000' : '';
    // const response = await axios.get(url + fixedQuote, {headers: { 'Access-Control-Allow-Origin': '*' }})
    // const response = await axios.get('./static' + fixedQuote, {headers: { 'Access-Control-Allow-Origin': '*' }})
    // const response = await fetch('./static' + fixedQuote)
    // console.log('r: ', response);
    const r = response.data;
    let returned = r.replace(/(\r\n|\n|\r)/g, '');
    let changedText = returned.replace(/"/g, '\\"');
    return '"' + changedText + '"'
  } catch(e) {
    // if (fixedQuote == '/search_input_banco.svg') {
    //   console.log('Axios error for: ', fixedQuote);
    //   console.log('Error: ', e);
    // }
    console.log('Axios error for: ', fixedQuote);
    // console.log('Error: ', e);
  }  
}
