# Sentiment analysis project

This project analyzes the inserted text and determines what emotion or feeling the text is trying to express. The [meaning cloud](https://www.meaningcloud.com/products/sentiment-analysis) API called sentiment-analysis is used 
the site is published at [lightuniverso.com](https://www.lightuniverso.com)

## Installation

get code from [github](https://github.com/edoradoda/fend.git), branch  refresh-2019.
Remember that once you clone, you will still need to install everything:

`cd` into your new folder `cd projects\evaluates-new-nlp` and run:
```bash
npm install
#run nodejs express
npm run startn 
# run webpack mode dev
npm run build-dev    
```

## Usage

> In the front interface: insert a text in the text field, select English or Spanish language and click on the Analyze button to receive the response of the analysis of the emotion expressed in the text. The result is displayed in Json format for now.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## testing
```bash
npm run test
```