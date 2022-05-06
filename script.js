// Notice there is no 'import' statement. 'mobilenet' and 'tf' is
  // available on the index-page because of the script tag above.
const img = document.getElementById('img')

mobilenet.load().then(model => {
    //Classify image
    model.classify(img).then(predictions => {
        console.log('Predictions: ' + predictions);
    })
})