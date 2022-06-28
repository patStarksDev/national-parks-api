
// modules
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

// parks
const natlParks = {
    'Alabama': [],
    'Alaska': [
        {
            park: 'Denali NP',
            state: 'Alaska',
            est: 1917,
        },
        {
            park: 'Gates of the Arctic NP',
            state: 'Alaska',
            est: 1980,
        },
        {
            park: 'Glacier Bay NP',
            state: 'Alaska',
            est: 1980,
        },
        {
            park: 'Katmai NP',
            state: 'Alaska',
            est: 1980,
        },
        {
            park: 'Kenai Fjords NP',
            state: 'Alaska',
            est: 1980,
        },
        {
            park: 'Kobuk Valley NP',
            state: 'Alaska',
            est: 1980,
        },
        {
            park: 'Lake Clark NP',
            state: 'Alaska',
            est: 1980,
        },
        {
            park: 'Wrangell-St. Elias NP',
            state: 'Alaska',
            est: 1980,
        },
    ],
    'American Samoa': [
        {
            park: 'American Samoa NP',
            state: 'American Samoa',
            est: 1988,
        },
    ],
    'Arizona': [
        {
            park: 'Grand Canyon NP',
            state: 'Arizona',
            est: 1919,
        },
        {
            park: 'Petrified Forest NP',
            state: 'Arizona',
            est: 1962,
        },
        {
            park: 'Saguaro NP',
            state: 'Arizona',
            est: 1994,
        },
    ],
    'Arkansas': [
        {
            park: 'Hot Springs NP',
            state: 'Arkansas',
            est: 1921,            
        },
    ],
    'California': [
        {
            park: 'Yosemite NP',
            state: 'California',
            est: 1890,            
        },
        {
            park: 'Sequoia NP',
            state: 'California',
            est: 1890,            
        },
        {
            park: 'Lassen Volcanic NP',
            state: 'California',
            est: 1916,            
        },
        {
            park: 'Kings Canyon NP',
            state: 'California',
            est: 1940,            
        },
        {
            park: 'Redwood NP',
            state: 'California',
            est: 1968,            
        },
        {
            park: 'Channel Islands NP',
            state: 'California',
            est: 1980,            
        },
        {
            park: 'Death Valley NP',
            state: 'California',
            est: 1994,            
        },
        {
            park: 'Joshua Tree NP',
            state: 'California',
            est: 1994,            
        },
        {
            park: 'Pinnacles NP',
            state: 'California',
            est: 2013,            
        },
    ],
    'Colorado': [
        {
            park: 'Mesa Verde NP',
            state: 'Colorado',
            est: 1906,
        },
        {
            park: 'Rocky Mountain NP',
            state: 'Colorado',
            est: 1915,
        },
        {
            park: 'Black Canyon of the Gunnison NP',
            state: 'Colorado',
            est: 1999,
        },
        {
            park: 'Great Sand Dunes NP',
            state: 'Colorado',
            est: 2004,
        },
    ],
    'Connecticut': [],
    'Delaware': [],
    'Florida': [
        {
            park: 'Everglades NP',
            state: 'Florida',
            est: 1934,
        },
        {
            park: 'Biscayne NP',
            state: 'Florida',
            est: 1980,
        },
        {
            park: 'Dry Tortugas NP',
            state: 'Florida',
            est: 1992,
        },
    ],
    'Georgia': [],
    'Hawaii': [
        {
            park: 'Hawai\'i Volcanoes NP',
            state: 'Hawaii',
            est: 1916,
        },
        {
            park: 'Haleakala NP',
            state: 'Hawaii',
            est: 1961,
        },
    ],
    'Idaho': [],
    'Illinois': [],
    'Indiana': [
        {
            park: 'Indiana Dunes NP',
            state: 'Indiana',
            est: 2019,
        },
    ],
    'Iowa': [],
    'Kansas': [],
    'Kentucky': [
        {
            park: 'Mammoth Cave NP',
            state: 'Kentucky',
            est: 1941,
        },
    ],
    'Louisiana': [],
    'Maine': [
        {
            park: 'Acadia NP',
            state: 'Maine',
            est: 1919,
        },
    ],
    'Maryland': [],
    'Massachusetts': [],
    'Michigan': [
        {
            park: 'Isle Royale NP',
            state: 'Michigan',
            est: 1940,
        },
    ],
    'Minnesota': [
        {
            park: 'Voyageurs NP',
            state: 'Minnesota',
            est: 1975
        },
    ],
    'Mississippi': [],
    'Missouri': [
        {
            park: 'Gateway Arch NP',
            state: 'Missouri',
            est: 2018
        },
    ],
    'Montana': [
        {
            park: 'Glacier NP',
            state: 'Montana',
            est: 1910
        },
    ],
    'Nebraska': [],
    'Nevada': [
        {
            park: 'Great Basin NP',
            state: 'Nevada',
            est: 1986
        },
    ],
    'New Hampshire': [],
    'New Jersey': [],
    'New Mexico': [
        {
            park: 'Carlsbad Caverns NP',
            state: 'North Mexico',
            est: 1930
        },
        {
            park: 'White Sands NP',
            state: 'North Mexico',
            est: 2019
        },
    ],
    'New York': [],
    'North Carolina': [
        {
            park: 'Great Smoky Mountains NP',
            state: 'North Carolina',
            est: 1934
        },
    ],
    'North Dakota': [
        {
            park: 'Theodore Roosevelt NP',
            state: 'North Dakota',
            est: 1978
        },
    ],
    'Ohio': [
        {
            park: 'Cuyahoga Valley NP',
            state: 'Ohio',
            est: 2000
        },
    ],
    'Oklahoma': [],
    'Oregon': [
        {
            park: 'Crater Lake NP',
            state: 'Oregon',
            est: 1902
        },
    ],
    'Pennsylvania': [],
    'Rhode Island': [],
    'South Carolina': [
        {
            park: 'Congaree NP',
            state: 'South Carolina',
            est: 2003
        },
    ],
    'South Dakota': [
        {
            park: 'Wind Cave NP',
            state: 'South Dakota',
            est: 1903
        },
        {
            park: 'Badlands NP',
            state: 'South Dakota',
            est: 1978
        },
    ],
    'Tennessee': [],
    'Texas': [
        {
            park: 'Big Bend NP',
            state: 'Texas',
            est: 1944
        },
        {
            park: 'Guadalupe Mountains NP',
            state: 'Texas',
            est: 1966
        },
    ],
    'U.S. Virgin Islands': [
        {
            park: 'Virgin Islands NP',
            state: 'U.S. Virgin Islands',
            est: 1956
        },
    ],
    'Utah': [
        {
            park: 'Zion NP',
            state: 'Utah',
            est: 1919
        },
        {
            park: 'Bryce Canyon NP',
            state: 'Utah',
            est: 1928
        },
        {
            park: 'Canyonlands NP',
            state: 'Utah',
            est: 1964
        },
        {
            park: 'Arches NP',
            state: 'Utah',
            est: 1971
        },
        {
            park: 'Capitol Reef NP',
            state: 'Utah',
            est: 1971
        },
    ],
    'Vermont': [],
    'Virginia': [
        {
            park: 'Shenandoah NP',
            state: 'Virginia',
            est: 1935
        },
    ],
    'Washington': [
        {
            park: 'Mount Ranier NP',
            state: 'Washington',
            est: 1899
        },
        {
            park: 'Olympic NP',
            state: 'Washington',
            est: 1938
        },
        {
            park: 'North Cascades NP',
            state: 'Washington',
            est: 1968
        },
    ],
    'West Virginia': [
        {
            park: 'New River Gorge NP',
            state: 'West Virginia',
            est: 2020
        },
    ],
    'Wisconsin': [],
    'Wyoming': [
        {
            park: 'Yellowstone NP',
            state: 'Wyoming',
            est: 1872
        },
        {
            park: 'Grand Teton NP',
            state: 'Wyoming',
            est: 1929
        },
    ],
    'Zero NPs': [
        {
            msg: 'There are zero national parks in ',
        },
    ],
    'Not a State': [
        {
            msg: 'Please enter a US state.',
        },
    ],

}

app.use(cors)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:state', (req, res) => {
    const state = (req.params.state).toLowerCase().split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')

    // state and np true
    if (natlParks[state] && (natlParks[state].length > 0)) {
        res.json(natlParks[state])
    // state true, np false
    } else if (natlParks[state] && (natlParks[state].length === 0)) {
        res.json(`${natlParks['Zero NPs'][0].msg}${state}.`)
    // state false
    } else {
        res.json(natlParks['Not a State'][0].msg)
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`is your server running on ${PORT} ? well you better go catch it !!`)
})

