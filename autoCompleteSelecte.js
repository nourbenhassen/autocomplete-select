import React, {useState} from 'react';

const Autocomplete = ({options}) => {
  const [focus, setFocus] = useState(false);
  const [text, setText] = useState("");
  
  const list = options.map( (item) => (<div key={item.value}>{item.value}</div>))
  
  
  const onChange = (e) => {
    setText(e.target.value)
  }
 
  function showOptions (options, text) {
    const listOptions = [];
    if (text==="") return list
    for (let i =0; i<options.length-1; i++) {
          if (listOptions.length === 5) break;
        for (let j=0; j<text.length; j++) {
            if (options[i].value[j].toLowerCase() !== text[j] ) break;
          if(j===text.length-1)listOptions.push(options[i].value)
        }

    }
    let listOptionsJSX = listOptions.map(listItem => (<div onMouseDown={() => setText(listItem)}> {listItem}</div>))
    return listOptionsJSX;
  }
  
	return (
    <>
    <input onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} value={text} onChange={onChange}/>
      {focus ? 
         showOptions(options, text) :
      null
      }
 </>
)
                          
};

//***You Shouldn't Need to Touch Anything Below This ***/
const options = [
	{ value: 'Amaranth' },
	{ value: 'Amber' },
	{ value: 'Amethyst' },
	{ value: 'Apricot' },
	{ value: 'Aquamarine' },
	{ value: 'Azure' },
	{ value: 'Baby blue' },
	{ value: 'Beige' },
	{ value: 'Black' },
	{ value: 'Blue' },
	{ value: 'Blue-green' },
	{ value: 'Blue-violet' },
	{ value: 'Blush' },
	{ value: 'Bronze' },
	{ value: 'Brown' },
	{ value: 'Burgundy' },
	{ value: 'Byzantium' },
	{ value: 'Carmine' },
	{ value: 'Cerise' },
	{ value: 'Cerulean' },
	{ value: 'Champagne' },
	{ value: 'Chartreuse green' },
	{ value: 'Chocolate' },
	{ value: 'Cobalt blue' },
	{ value: 'Coffee' },
	{ value: 'Copper' },
	{ value: 'Coral' },
	{ value: 'Crimson' },
	{ value: 'Cyan' },
	{ value: 'Desert sand' },
	{ value: 'Electric blue' },
	{ value: 'Emerald' },
	{ value: 'Erin' },
	{ value: 'Gold' },
	{ value: 'Gray' },
	{ value: 'Green' },
	{ value: 'Harlequin' },
	{ value: 'Indigo' },
	{ value: 'Ivory' },
	{ value: 'Jade' },
	{ value: 'Jungle green' },
	{ value: 'Lavender' },
	{ value: 'Lemon' },
	{ value: 'Lilac' },
	{ value: 'Lime' },
	{ value: 'Magenta' },
	{ value: 'Magenta rose' },
	{ value: 'Maroon' },
	{ value: 'Mauve' },
	{ value: 'Navy blue' },
	{ value: 'Ochre' },
	{ value: 'Olive' },
	{ value: 'Orange' },
	{ value: 'Orange-red' },
	{ value: 'Orchid' },
	{ value: 'Peach' },
	{ value: 'Pear' },
	{ value: 'Periwinkle' },
	{ value: 'Persian blue' },
	{ value: 'Pink' },
	{ value: 'Plum' },
	{ value: 'Prussian blue' },
	{ value: 'Puce' },
	{ value: 'Purple' },
	{ value: 'Raspberry' },
	{ value: 'Red' },
	{ value: 'Red-violet' },
	{ value: 'Rose' },
	{ value: 'Ruby' },
	{ value: 'Salmon' },
	{ value: 'Sangria' },
	{ value: 'Sapphire' },
	{ value: 'Scarlet' },
	{ value: 'Silver' },
	{ value: 'Slate gray' },
	{ value: 'Spring bud' },
	{ value: 'Spring green' },
	{ value: 'Tan' },
	{ value: 'Taupe' },
	{ value: 'Teal' },
	{ value: 'Turquoise' },
	{ value: 'Ultramarine' },
	{ value: 'Violet' },
	{ value: 'Viridian' },
	{ value: 'White' }
];
const App = () => {
	return (
		<div className='ui container form' style={{paddingTop: '25px'}}>
			<Autocomplete options={options} />
		</div>
	);
};

export default App;
export { Autocomplete, options };
