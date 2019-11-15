
// Link to Mapbox
mapboxgl.accessToken = 'pk.eyJ1Ijoibm1hcmNoaTAiLCJhIjoiY2p6dTljeDhiMGRwcjNubnl2aXI0OThhYyJ9.4FdGkBJlOXMPRugyqiXrjg';
window.map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/nmarchi0/ck0yada9s02hp1cqhizxmwmlc",
  center: [17.54, 8.84],
  zoom: 2,
  maxZoom: 17.5,
  minZoom: 1,
  hash: true
});

// Fly to location buttons
function flyHandler(id, options) {
  var button = document.getElementById(id);
  if(!button) return;
  button.addEventListener('click', function() {
    map.flyTo({
      center: options.center,
      zoom: options.zoom || 10,
      bearing: options.bearing,
      pitch: options.pitch
    });
    if (options.speed) {
      setSpeed(options.speed);
    }
  });
}

flyHandler('sierra-leone', {
  center: [-13.25182, 8.44913],
  zoom: 12,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('nigeria', {
  center: [3.3528302631,6.4650446851],
  zoom: 12,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('liberia', {
  center: [-10.806036, 6.328368],
  zoom: 12,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('south-africa', {
  center: [18.6519186575,-34.0667541339],
  zoom: 12,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('kenya', {
  center: [36.7915,-1.2834],
  zoom: 12,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('zimbabwe', {
  center: [31.12492652, -17.92837714],
  zoom: 12,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('tanzania', {
  center: [39.2139383738,-6.8511294828],
  zoom: 12,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('ghana', {
  center: [-0.2295671004,5.5419797951],
  zoom: 12,
  bearing: 0,
  pitch: 0,
  speed: .2
});

flyHandler('venezuela', {
  center: [-66.81817, 10.47917],
  zoom: 13.35,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('haiti', {
  center: [-72.336652, 18.538995],
  zoom: 12,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('brasil', {
  center: [-43.2558354349,-22.9931642826],
  zoom: 12,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('nepal', {
  center: [85.344876, 27.699009],
  zoom: 12,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('philippines', {
  center: [120.9526113007,14.6548062731],
  zoom: 12,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('india', {
  center: [72.84803101,19.0365929141],
  zoom: 12,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('pakistan', {
  center: [66.9894659945,24.9345039855],
  zoom: 12,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('mozambique', {
  center: [34.86226,-19.82814],
  zoom: 13,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('cameroon', {
  center: [9.71976,4.03108],
  zoom: 12,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('dr-congo', {
  center: [15.36234,-4.42298],
  zoom: 12.36,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('ivory-coast', {
  center: [-5.04508,7.68848],
  zoom: 12.4,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('malawi', {
  center: [34.99562,-15.81003],
  zoom: 12.3,
  bearing: 0,
  pitch: 0,
  speed: .2
});

// Legend
var layers = ['High access', 'Moderate access', 'Low access', 'Limited access', 'Very limited access'];
var colors = ['#0571b0', '#92c5de', '#f4a582', '#d6604d', '#ca0020'];

for (i = 0; i < layers.length; i++) {
  var layer = layers[i];
  var color = colors[i];
  var item = document.createElement('div');
  var key = document.createElement('span');
  key.className = 'legend-key';
  key.style.backgroundColor = color;

  var value = document.createElement('span');
  value.innerHTML = layer;
  item.appendChild(key);
  item.appendChild(value);
  legend.appendChild(item);
}

// Interactive popups
var title = document.getElementById('location-title');
var description = document.getElementById('location-description');
var buttontext = document.getElementById('location-button');

var locations = [
  {"id": 1,
  "title": "Why street access",
  "description": "Streets connect each home or place of work to basic services. Without street access there is often no sanitation or clean water. There are also no addresses or routes for emergency responders, trash collectors, and buses.\n\nAround the world, over a million neighborhoods lack adequate access to such services. We are mapping them here, block by block. Here is an example in Port-au-Prince, Haiti.",
  "buttontext":"Continue explainer (2/8)",
  "camera": {
    center: [-72.34257, 18.52656],
    bearing: 0,
    pitch:0,
    zoom: 13.75,
    speed: .6
  }
},{"id": 2,
"title": "How this map can help",
"description": "Maps crowdsourced from OpenStreetMap make it possible to create new models of urban planning that are people-centric, built from local knowledge and enhanced with technology.\n\nIn the hands of communities and local governments this can become a powerful resource to support decision-making and action.",
"buttontext":"Continue explainer (3/8)",
"camera": {
  center: [-72.343405, 18.524463],
  bearing: 0,
  pitch:60,
  zoom: 16.2,
  speed:.3
}
},{"id": 3,
"title": "Exploring Nairobi",
"description": "Look at Nairobi, Kenya as an example. Like many cities, Nairobi has both already well-connected neighborhoods, and others that are critically underserviced.\n\nThese differences are apparent by comparing street access in each city block.",
"buttontext":"Continue explainer (4/8)",
"camera": {
  center: [36.82287, -1.28937],
  zoom: 12.61,
  pitch: 50,
  speed:.65,
  curve: 1.7
}
}, {
  "id": 4,
  "title": "Nairobi Central",
  "description": "Here is a typical street grid in downtown Nairobi. Notice how every building is adjacent to a street and can easily access it?\n\nThis pattern is typical of developed urban areas, with full access to opportunities and services.",
  "buttontext":"Continue explainer (5/8)",
  "camera": {
    center: [36.825969, -1.284919],
    bearing: -8.9,
    zoom: 16.5,
    speed: .4
  }
}, {
  "id": 5,
  "title": "Kibera",
  "description": "Kibera is a large informal settlement near the city center, it has long held the reputation of being one of Africa’s largest urban slums. The neighborhood is very dense; most services are only available to people in buildings along the few existing streets.\n\nA street network that expands public access can facilitate service delivery and create an open-ended process of neighborhood development.",
  "buttontext":"Continue explainer (6/8)",
  "camera": {
    center: [36.794268, -1.316134],
    bearing: 25.3,
    zoom: 16.5,
    speed: .4
  }
}, {
  "id": 6,
  "title": "Upgrading Kibera",
  "description": "Combining local knowledge, increasingly available mapping data, and network algorithms, it is possible to generate a GIS map that proposes a minimally disruptive street network, which grants universal access to all existing buildings.\n\nThe resulting street plan can then be improved through a process of community and local government engagement.",
  "buttontext":"Continue explainer (7/8)",
  "camera": {
    center: [36.794332, -1.316403],
    bearing: 26.1,
    pitch: 60,
    zoom: 17.3,
    speed: .05
  }
}, {
  "id": 7,
  "title": "About the project",
  "description": "The Million Neighborhoods initiative is a project of the Mansueto Institute for Urban Innovation and Research Computing Center at the University of Chicago, in collaboration with neighborhood organizations around the world. A special thanks to the global community of volunteers who make OpenStreetMap possible.\n\nFor more information about the project, visit miurban.uchicago.edu.",
  "buttontext":"Continue explainer (8/8)",
  "camera": {
    center: [17.988, 0.658],
    bearing: 60,
    pitch:50,
    zoom: 4,
    curve: 1.6,
    speed: .3
  }
}, {
  "id": 8,
  "title": "What the map shows",
  "description": "In fast-growing cities, some neighborhoods can become so densely packed that the movement of people and the construction of vital infrastructure becomes very difficult.\n\nThis map highlights neighborhoods with limited access to streets. Red areas show buildings that are very hard to access directly from the street, while blue areas display buildings with better street access.",
  "buttontext":"Interactive explainer",
  "camera": {
    center: [17.54, 8.84],
    bearing: 0,
    pitch:0,
    zoom: 2,
    speed: .3
  }
}];

function debounce(func, wait, immediate) {
  var timeout;
  return function executedFunction() {
    var context = this;
    var args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function playback(id, index) {
  var button = document.getElementById(id);
  if(!button) return;
  button.addEventListener('click', debounce(function() {
    title.textContent = locations[index].title;
    description.textContent = locations[index].description;
    buttontext.textContent = locations[index].buttontext;
    map.flyTo(locations[index].camera);
    index = ((index + 1) === locations.length) ? 0 : index + 1;}, 1000, 500)
  );
}

title.textContent = locations[locations.length -1].title;
description.textContent = locations[locations.length - 1].description;
buttontext.textContent = locations[locations.length - 1].buttontext;

playback('play-interactive',0)
