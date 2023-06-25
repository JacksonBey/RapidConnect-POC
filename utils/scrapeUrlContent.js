const scrapeUrlContent = async (url) => {

  fetch('http://localhost:8000/scrape_and_store', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          url: url
      })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
    return data
  });

}

export default scrapeUrlContent;