export default async function sanitizeText(data) {
  return await replaceText(data).then(newData => {
    return JSON.parse(newData)
  })
}

const replaceText = async (data) => {
  // if (!data) console.log('Houve um erro para pegar dados da api (provavelmente CORS)');
  // Transform json into string
  let textData = JSON.stringify(data); 
  // Get content between quotes
  let quotesRegex = /"(.*?)"/g; 
  // Get content that has html tags
  let basicHtmlRegex = /\\r\\n/g; 
  // Create copy of the original string
  let replacedText = textData;
  // Create empty array to store all matches
  let matchesArray = [];
  // Save into array all matches
  textData.match(quotesRegex).map(quote => { 
    if (quote.match(basicHtmlRegex)) matchesArray.push(quote) 
  });

  // Save into variable full json string after each match replacement
  const results = await matchesArray.map(async matchedString => {
    return removeHtmlTags(matchedString)
      .then(result => fixLineBreaks(result))
      .then(result => replacedText = replacedText.replace(matchedString, result))
  })

  // After all changes return data
  return Promise.all(results).then(() => { 
    return replacedText
  })
}

// Remove quotes, <p></p> and <span></span> tags
const removeHtmlTags = async (text) => {
  let fixedQuote = text.replace(/"/g, '');
  let noParagraphsText = fixedQuote.replace(/<\/?p[^>]*>/g, '');
  let noSpans = noParagraphsText.replace(/<\/?span[^>]*>/g, '');
  return noSpans
}

// Replace white spaces, line breaks and remove line ends
const fixLineBreaks = (text) => {
  let text2 = text.replace(/&nbsp;/g, '');
  let text3 = text2.replace(/\\r\\n\\r\\n/g, '<br>');
  let finishedText = text3.replace(/\\r\\n/g, '');
  return '"' + finishedText + '"'
}
