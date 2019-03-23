'use strict';

const e = React.createElement;

class SoapMan extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { liked: false };
  }

  render() {
    return e('h2', {"className": "name hideInfo"}, TitleString(this.props.soapID))
  }
}

class SoapMaker extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { liked: false };
  }

  render() {
    return e('label', {"className": "maker hideInfo"}, TitleString(this.props.soapMaker))
  }
}

class SoapScent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e('label', {"className": "scent hideInfo"}, TitleString(this.props.soapScent))
  }
}

class SoapImg extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { liked: false };
  }

  render() {
    return e('img', {"src": "images/" + this.props.soapID + ".jpg"})
  }
}


// Find all DOM containers, and render Like buttons into them.
//const rawData = fs.readFileSync('.json"');
//const soapData = JSON.parse(rawData); 
let soapData = {
	"hallows": {
		"Maker": "Barrister and Mann",
		"Scent": "vetiver, oakmoss, black pepper, cocoa, labdanum, and cedar",
		"Available": true
	},
	"bay_rum": {
		"Maker": "Barrister and Mann",
		"Scent": "black strap rum with West Indie bay, sweet orange, cinnamon, and benzoin",
		"Available": true
	},
	"night_music": {
		"Maker": "Barrister and Mann",
		"Scent": "vanilla, bergamot, musk, iris, strawberry",
		"Available": true
	},
	"42": {
		"Maker": "Barrister and Mann",
		"Scent": "petunias, ambergris, tea, pan-galatic gargle blaster",
		"Available": true
	},
	"roam": {
		"Maker": "Barrister and Mann",
		"Scent": "tobacco, thyme, grass, damp earth, wood smoke",
		"Available": true
	},
	"beaudelaire": {
		"Maker": "Barrister and Mann",
		"Scent": "fern, mousse de saxe, ylang ylang, sandlewood",
		"Available": true
	},
	"cologne_russe": {
		"Maker": "Barrister and Mann",
		"Scent": "lemon, bergamot, petitgrain, herbs, violet, rose, bay, and amber ",
		"Available": true
	},
	"rhapsody": {
		"Maker": "Barrister and Mann",
		"Scent": "blossom, citrus, herbs",
		"Available": true
	},
	"midnight_stag": {
		"Maker": "Chisled Face",
		"Scent": "russian leather, motor oil, hoppes #9, birch tar, oakmoss, gasoline, smoke, cedar, cade, bergamont, vanilla",
		"Available": true
	},
	"puzzle": {
		"Maker": "L&L Grooming",
		"Scent": "neroli, cedar, rosewood, tonka bean, blood orange",
		"Available": true
	}
}

document.querySelectorAll('.soap_tile_container')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.

    const soapID = domContainer.dataset.soapid; 
    ReactDOM.render(
      [
        e(SoapImg, { soapID: soapID, soapMaker: soapData[soapID].Maker, soapScent: soapData[soapID].Scent}),
        e(SoapMan, { soapID: soapID, soapMaker: soapData[soapID].Maker, soapScent: soapData[soapID].Scent}),
        e(SoapMaker, { soapID: soapID, soapMaker: soapData[soapID].Maker, soapScent: soapData[soapID].Scent}),
        e(SoapScent, { soapID: soapID, soapMaker: soapData[soapID].Maker, soapScent : soapData[soapID].Scent})
      ],
      domContainer
    );
});

function TitleString(input) {
	if (input.includes('_')) {
		input = input.split('_').join(' ');

	}

	return input.replace(/(\w+)/g, lowerWord);
}

function lowerWord(match) {
  const ignoreList = [
  	'and',
    'west'
  ];
  
  if (!ignoreList.includes(match)) {
		return match[0].toUpperCase() + match.substring(1).toLowerCase();
  }
  
  return match.toLowerCase();
}