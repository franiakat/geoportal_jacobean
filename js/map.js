/*------------- Geoportal Functionality by Katarzyna Frania http://github.com/franiakat -------------*/
// Functionality contribution - OpenLayers3 Examples http://openlayers.org/en/latest/examples
// Geocoding tool contributing to http://github.com/jonataswalker/ol3-geocoder
// Layer Tree Functionality contributing to http://jmfitton.com/openlayers-3-layer-tree

// Page Animation 
$(document).ready(function () {
	$(".jumper").on("click",function( e ) {
		e.preventDefault();
		$("body, html").animate({
			scrollTop: $( $(this).attr('href')).offset().top
		}, 
        700);
	});
    
// Drag'n'Drop Default Style
	var defaultStyle = {
        'Point': new ol.style.Style({
          image: new ol.style.Circle({
            fill: new ol.style.Fill({
              color: 'rgba(255,255,0,0.5)'
            }),
            radius: 5,
            stroke: new ol.style.Stroke({
              color: '#ff0',
              width: 1
            })
          })
        }),
        'LineString': new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: '#f00',
            width: 3
          })
        }),
        'Polygon': new ol.style.Style({
          fill: new ol.style.Fill({
            color: 'rgba(0,255,255,0.5)'
          }),
          stroke: new ol.style.Stroke({
            color: '#0ff',
            width: 1
          })
        }),
        'MultiPoint': new ol.style.Style({
          image: new ol.style.Circle({
            fill: new ol.style.Fill({
              color: 'rgba(255,0,255,0.5)'
            }),
            radius: 5,
            stroke: new ol.style.Stroke({
              color: '#f0f',
              width: 1
            })
          })
        }),
        'MultiLineString': new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: '#0f0',
            width: 3
          })
        }),
        'MultiPolygon': new ol.style.Style({
          fill: new ol.style.Fill({
            color: 'rgba(0,0,255,0.5)'
          }),
          stroke: new ol.style.Stroke({
            color: '#00f',
            width: 1
          })
        })
      };

      var styleFunction = function(feature, resolution) {
        var featureStyleFunction = feature.getStyleFunction();
        if (featureStyleFunction) {
          return featureStyleFunction.call(feature, resolution);
        } else {
          return defaultStyle[feature.getGeometry().getType()];
        }
      };

      var dragAndDropInteraction = new ol.interaction.DragAndDrop({
        formatConstructors: [
          ol.format.GPX,
          ol.format.GeoJSON,
          ol.format.IGC,
          ol.format.KML,
          ol.format.TopoJSON
        ]
      });

/*----------------------------------------------------------
GEOSPATIAL DATA FOR JACOBEAN WAY IN POLAND
----------------------------------------------------------*/
    
// Styling geospatial data
// Tracks Style
	var tr1Style = new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#31165E',
			width: 3
		})
	});

	var tr2Style = new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#361B6A',
			width: 3
		})
	});

	var tr3Style = new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#58165E',
			width: 3
		})
	});

	var tr4Style = new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#EE62BF',
			width: 3
		})
	});	

	var tr5Style = new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#657C9D',
			width: 3
		})
	});	

	var tr6Style = new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#BB8DAA',
			width: 3
		})
	});

	var tr7Style = new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#A94564',
			width: 3
		})
	});

	var tr8Style = new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#7CA4CF',
			width: 3
		})
	});

	var tr9Style = new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#1E336C',
			width: 3
		})
	});

	var tr10Style = new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#613ED1',
			width: 3
		})
	});

	var tr11Style = new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#343B52',
			width: 3
		})
	});

	var tr12Style = new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#1E83D7',
			width: 3
		})
	});


	var tr13Style = new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#F888D4', //przy wro
			width: 3
		})
	});

	var tr14Style = new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#29466E',
			width: 3
		})
	});

	var tr15Style = new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#9B3C7E',
			width: 3
		})
	});

	var tr16Style = new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#668BA9',
			width: 3
		})
	});

	var tr17Style = new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#856BB9',
			width: 3
		})
	});

// Hostels
    var styleHostels = new ol.style.Style({
		image: new ol.style.Circle({
    		fill: new ol.style.Fill({
				color: 'rgba(255,170,0,0.5)'    			
    		}),
    		radius: 4,
    		stroke: new ol.style.Stroke({
    			color: '#FFBF15',
    			width: 2	
    		})
		})
	});


// Adding geospatial vector data to The Map  
// Tracks
	var tracks = new ol.layer.Group({
		name: 'SZLAKI',
		layers: [
			new ol.layer.Vector({
				name: 'Droga Pomorska',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/droga_pomorska.geojson',
				}),
				style: tr1Style
			}),
			new ol.layer.Vector({
				name: 'Droga Beskidzka',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/droga_beskidzka.geojson',
				}),
				style: tr2Style
			}),			
			new ol.layer.Vector({
				name: 'Droga Dolnośląska',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/droga_dolnoslaska.geojson',
				}),
				style: tr3Style
			}),	
			new ol.layer.Vector({
				name: 'Droga Jasnogórska',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/droga_jasnogorska.geojson',
				}),
				style: tr4Style
			}),
			new ol.layer.Vector({
				name: 'Droga Kłodzka',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/droga_klodzka.geojson',
				}),
				style: tr5Style
			}),			
			new ol.layer.Vector({
				name: 'Droga Lubelska',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/droga_lubelska.geojson',
				}),
				style: tr6Style
			}),
			new ol.layer.Vector({
				name: 'Droga Lubuska',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/droga_lubuska.geojson',
				}),
				style: tr7Style
			}),
			new ol.layer.Vector({
				name: 'Droga Małopolska',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/droga_malopolska.geojson',
				}),
				style: tr8Style
			}),
			new ol.layer.Vector({
				name: 'Droga Mazowiecka',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/droga_mazowiecka.geojson',
				}),
				style: tr9Style
			}),
			new ol.layer.Vector({
				name: 'Droga Nadwarciańska',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/droga_nadwarcianska.geojson',
				}),
				style: tr10Style
			}),
			new ol.layer.Vector({
				name: 'Droga Nyska',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/droga_nyska.geojson',
				}),
				style: tr11Style
			}),
			new ol.layer.Vector({
				name: 'Droga Polska',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/droga_polska.geojson',
				}),
				style: tr12Style
			}),
			new ol.layer.Vector({
				name: 'Droga Ślężańska',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/droga_slezanska.geojson',
				}),
				style: tr13Style
			}),
			new ol.layer.Vector({
				name: 'Droga Sudecka',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/droga_sudecka.geojson',
				}),
				style: tr14Style
			}),
			new ol.layer.Vector({
				name: 'Droga Via Regia',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/droga_viaregia.geojson',
				}),
				style: tr15Style
			}),
			new ol.layer.Vector({
				name: 'Droga Warszawska',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/droga_warszawska.geojson',
				}),
				style: tr16Style
			}),
			new ol.layer.Vector({
				name: 'Droga Wielkopolska',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/droga_wielkopolska.geojson',
				}),
				style: tr17Style
			}),
		]
	});

// Hostels
	var hotels = new ol.layer.Group({
		name:'NOCLEGI',
		layers: [
			new ol.layer.Vector({
				name: 'Noclegi Droga Pomorska',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/hostels/pomorska_nocleg.geojson', 
				}),
				style:styleHostels
			}),
			new ol.layer.Vector({
				name: 'Noclegi Droga Beskidzka',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/hostels/beskidzka_nocleg.geojson', 
				}),
				style:styleHostels
			}),		
			new ol.layer.Vector({
				name: 'Noclegi Droga Jasnogórska',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/hostels/jasnogorska_nocleg.geojson', 
				}),
				style:styleHostels
			}),	
			new ol.layer.Vector({
				name: 'Noclegi Droga Kłodzka',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/hostels/klodzka_nocleg.geojson', 
				}),
				style:styleHostels
			}),	
			new ol.layer.Vector({
				name: 'Noclegi Droga Lubelska',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/hostels/lubelska_nocleg.geojson', 
				}),
				style:styleHostels
			}),	
			new ol.layer.Vector({
				name: 'Noclegi Droga Lubuska',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/hostels/lubuska_nocleg.geojson', 
				}),
				style:styleHostels,
			}),
			new ol.layer.Vector({
				name: 'Noclegi Droga Małopolska',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/hostels/malopolska_nocleg.geojson', 
				}),
				style:styleHostels,
			}),
			new ol.layer.Vector({
				name: 'Noclegi Droga Mazowiecka',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/hostels/mazowiecka_nocleg.geojson', 
				}),
				style:styleHostels,
			}),			
			new ol.layer.Vector({
				name: 'Noclegi Droga Nadwarciańska',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/hostels/nadwarcianska_nocleg.geojson', 
				}),
				style:styleHostels,
			}),
			new ol.layer.Vector({
				name: 'Noclegi Droga Nyska',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/hostels/nyska_nocleg.geojson', 
				}),
				style:styleHostels,
			}),
			new ol.layer.Vector({
				name: 'Noclegi Droga Ślężańska',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/hostels/slezanska_nocleg.geojson', 
				}),
				style:styleHostels,
			}),
			new ol.layer.Vector({
				name: 'Noclegi Droga Sudecka',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/hostels/sudecka_nocleg.geojson', 
				}),
				style:styleHostels,
			}),
			new ol.layer.Vector({
				name: 'Noclegi Via Regia',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/hostels/via_regia_nocleg.geojson', 
				}),
				style:styleHostels,
			}),
			new ol.layer.Vector({
				name: 'Noclegi Droga Wielkopolska',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/hostels/wielkopolska_nocleg.geojson', 
				}),
				style:styleHostels,
			}),
			new ol.layer.Vector({
				name: 'Noclegi Droga Podlaska',
				source: new ol.source.Vector({
					format: new ol.format.GeoJSON(),
					url: 'geodata/hostels/podlaska_nocleg.geojson', 
				}),
				style:styleHostels,
			}),
		]
	});
    
// Churches - Adding and styling geospatial vector data
	var getText = function(feature, resolution) {
    	var text = feature.get('Name');
    	var snippet = feature.get('Snippet');
    	var maxResolutionT = 300;
    	var maxResolutionS = 150;
    	
    	if (resolution > maxResolutionT){
    		text='';
    	}  
    	else if (resolution < maxResolutionT){
    		if (resolution < maxResolutionS){
    			text = text + '\n' + snippet;
    		}
    		return text;
    	}
 	};

	var createTextStyle = function(feature, resolution) {
  		return new ol.style.Text({
    		textAlign: 'center',
    		textBaseline: 'middle',
    		font: '13px Raleway',
    		offsetY: +35,
    		text: getText(feature, resolution),
    		fill: new ol.style.Fill({color: '#31165E'}),
    		stroke: new ol.style.Stroke({color: '#31165E', width: 0.7})
  		});
	};

// Point Style for Churches
	var createPointStyleFeature = function(){
		return function (feature, resolution){
			var styleForChurches = new ol.style.Style({
				image: new ol.style.Icon({
    				anchor: [0.5, 0],
    				anchorXUnits: 'fraction',
    				anchorYUnits: 'pixels',
    				opacity: 0.6,
    				src: 'img/chapelblue.png', 
    				scale: 0.27
				}),
				text: createTextStyle(feature, resolution)
			});
			return [styleForChurches];
		};
	};

// Adding vector layers: Churches
	var church = new ol.layer.Vector({
		source: new ol.source.Vector({
			format: new ol.format.GeoJSON(),
			url: 'geodata/koscioly_jakub.geojson',
		}),
		name:'KOŚCIOŁY ŚW. JAKUBA',
		style: createPointStyleFeature()
	});

// Permalink
    if (window.location.hash !== '') {
        // try to restore center, zoom-level and rotation from the URL
        var hash = window.location.hash.replace('#map=', '');
        var parts = hash.split('/');
        if (parts.length === 4) {
          	zoom = parseInt(parts[0], 10);
        	center = [
            	parseFloat(parts[1]),
            	parseFloat(parts[2])
          	];
          	rotation = parseFloat(parts[3]);
        }
      }

    
/*----------------------------------------------------------
The Map Declaration and Functionality
----------------------------------------------------------*/
// Setting the View
	var view = new ol.View({
       	center: ol.proj.fromLonLat([19.41, 52]),
      	zoom: 6
    });
    
// Adding base maps to the Map
    var base = new ol.layer.Group({
    	name: 'MAPY BAZOWE',
    	layers: [ 
    		new ol.layer.Tile({
       			source: new ol.source.Stamen({
       				layer: 'toner'
       			}),
       			name: 'Stamen Toner',
       			visible: false
    		}),

    		new ol.layer.Tile({
       			source: new ol.source.Stamen({
       				layer: 'terrain'
       			}),
       			name: 'Stamen Terrain',
       			visible: false
    		}),

    		new ol.layer.Tile({
       			source: new ol.source.Stamen({
       				layer: 'watercolor'		
       			}),
       			name: 'Stamen Watercolor',
       			visible: false
    		}),
     
    		new ol.layer.Tile({
       			source: new ol.source.Stamen({
       				layer: 'terrain-labels'		
       			}),
       			name: 'Stamen Nazwy',
       			visible: false
    		}),
    		new ol.layer.Tile({
       			source: new ol.source.OSM({
       				layer:'OpenStreetMap'
       			}),
       			name: 'OpenStreetMap',
       			visible: true
    		})    		
    	]
    });  		   
    
// Creating container for the Geospatial Layers' Popup
    var container = document.getElementById('popup');
    var content = document.getElementById('popup-content');
    var closer = document.getElementById('popup-closer');
	var overlay = new ol.Overlay(/** @type {olx.OverlayOptions} */ ({
        element: container,
        autoPan: true,
        autoPanAnimation: {
        	duration: 250
    	}
    }));

/* Add a click handler to hide the Popup
@return {boolean} Don't follow the href */
    closer.onclick = function() {
        overlay.setPosition(undefined);
        closer.blur();
        return false;
    };
    
// Creating of the Map
	var map = new ol.Map({
		target: 'map',
		renderer:'canvas',
    	view: view,
		layers: [base, hotels, tracks, church],  	
		overlays: [overlay],
		controls: ol.control.defaults().extend([
			new ol.control.FullScreen(),
			new ol.control.Zoom(),
			new ol.control.Attribution(),
			new ol.control.ZoomSlider(),
			new ol.control.ScaleLine(),
			new ol.control.OverviewMap(),
			new ol.control.MousePosition({
				coordinateFormat: ol.coordinate.createStringXY(4),	
				projection: 'EPSG:4326'
			})
		]),
		interactions: ol.interaction.defaults().extend([dragAndDropInteraction])
   	});  
    
// Information Popup for Vector Layers
	map.on('singleclick', function(evt) {
		overlay.setPosition(evt.coordinate);
		var feature = map.forEachFeatureAtPixel(evt.pixel, 
			function(feature, layer) {
        		return feature;
    		}
    	);

		if (feature) {
			if (feature.get('Telefon')==undefined && feature.get('Snippet')==undefined ) {
					content.innerHTML = '<p>Nazwa:</p>' + '</p>' + '<b>' + feature.get('Name') + '</b>' + '<br>';
			}
			else if(feature.get('Telefon')==undefined ){
				content.innerHTML = '<p>Nazwa:</p>' + '</p>' +
				'<b>'+feature.get('Name') + '</b>' + '<br>' +
				'<p>Inne informacje: </p>' +
				'<b>'+feature.get('Snippet') +'</b>';
			}
			else {
				content.innerHTML = '<p>Nazwa:</p>' + '</p>' +
				'<b>'+feature.get('Name') +'</b>' +'<br>' +
				'<p>Inne informacje: </p>' +
				'<b>'+ feature.get('Snippet') + '</b>' + '<br>' + '<b>' + feature.get('Telefon') + '</b>';
			}
		}
		else {
			var coordinate = evt.coordinate;
        	var hdms = ol.coordinate.toStringHDMS(ol.proj.transform(coordinate, 'EPSG:3857', 'EPSG:4326'));
        	content.innerHTML = '<p>Kliknąłeś tutaj!:</p><code>' + hdms +'</code>';
		}
	});  
    
// Layer Tree Switcher - get layer groups
	map.getLayerGroup().set('name', 'Warstwy');
  
// Export Map to PDF
	var exportPNGElement = document.getElementById('export-png');
    
      if ('download' in exportPNGElement) {
        exportPNGElement.addEventListener('click', function() {
          map.once('postcompose', function(event) {
            var canvas = event.context.canvas;
            exportPNGElement.href = canvas.toDataURL('image/png');
          });
          map.renderSync();
        }, false);
      } else {
        var info = document.getElementById('no-download');
        /**
         * display error message
         */
        info.style.display = '';
      }
    
// Drag'n'drop functionality
	dragAndDropInteraction.on('addfeatures', function(event) {
        var vectorSource = new ol.source.Vector({
          features: event.features
        });
        map.addLayer(new ol.layer.Vector({
          source: vectorSource,
          style: styleFunction
        }));
        map.getView().fit(
            vectorSource.getExtent(), /** @type {ol.Size} */ (map.getSize()));
      });

      var displayFeatureInfo = function(pixel) {
        var features = [];
        map.forEachFeatureAtPixel(pixel, function(feature) {
          features.push(feature);
        });
      };

      map.on('pointermove', function(evt) {
        if (evt.dragging) {
          return;
        }
        var pixel = map.getEventPixel(evt.originalEvent);
        displayFeatureInfo(pixel);
      });

      map.on('click', function(evt) {
        displayFeatureInfo(evt.pixel);
      });
    
 // Geocoding tool contributing to github.com/jonataswalker/ol3-geocoder
	var geocoder = new Geocoder('nominatim', {
  		provider: 'osm',
  		key: '__some_key__',
  		lang: 'pl', //en-US, fr-FR
  		placeholder: 'Szukaj adresu ...',
  		limit: 5,
  		keepOpen: true,
  		countrycodes : 'pl'
	});
	
	map.addControl(geocoder);

	geocoder.on('addresschosen', function(evt){
  		var feature = evt.feature,
      		coord = evt.coordinate,
      		address = evt.address;

  		content.innerHTML = '<p>'+ address.formatted +'</p>';
  		overlay.setPosition(coord);
	});
    
// Geolocation
	var geolocation = new ol.Geolocation({
    	projection: view.getProjection()
    });

    function el(id) {
    	return document.getElementById(id);
    };

    el('track').addEventListener('click', function() {
    	geolocation.setTracking(this.click);
    });
    
// Handle geolocation error
    geolocation.on('error', function(error) {
    	var info = document.getElementById('info');
    	info.innerHTML = error.message;
    	info.style.display = '';
    });

    var accuracyFeature = new ol.Feature();
    	geolocation.on('change:accuracyGeometry', function() {
    	accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
    });

    var positionFeature = new ol.Feature();
    positionFeature.setStyle(new ol.style.Style({
    	image: new ol.style.Circle({
    		radius: 10,
    		fill: new ol.style.Fill({
    			color: '#f00'
    	}),
         	stroke: new ol.style.Stroke({
        		color: '#fff',
        		width: 2
        	})
        })
    }));

    geolocation.on('change:position', function() {
    	var coordinates = geolocation.getPosition();
    	positionFeature.setGeometry(coordinates ?
    		new ol.geom.Point(coordinates) : null);
        map.getView().setZoom(12);
        map.getView().setCenter(coordinates);
    });

    new ol.layer.Vector({
    	map: map,
    	source: new ol.source.Vector({
    		features: [accuracyFeature, positionFeature]
    	})
    });
    
    
    
// Permalink
	var shouldUpdate = true;
    var view = map.getView();
    var updatePermalink = function() {
    	if (!shouldUpdate) {
          // do not update the URL when the view was changed in the 'popstate' handler
        	shouldUpdate = true;
        	return;
        }

        var center = view.getCenter();
        var hash = '#map=' +
            view.getZoom() + '/' +
            Math.round(center[0] * 100) / 100 + '/' +
            Math.round(center[1] * 100) / 100 + '/' +
            view.getRotation();
        var state = {
          zoom: view.getZoom(),
          center: view.getCenter(),
          rotation: view.getRotation()
        };
        window.history.pushState(state, 'map', hash);
    };

    map.on('moveend', updatePermalink);

    window.addEventListener('popstate', function(event) {
        if (event.state === null) {
        	return;
        }
        map.getView().setCenter(event.state.center);
        map.getView().setZoom(event.state.zoom);
        map.getView().setRotation(event.state.rotation);
        shouldUpdate = false;
    });
    
// Layer Tree - Switcher
    function buildLayerTree(layer) {
        var elem;
        var name = layer.get('name') ? layer.get('name') : "Group";
        var div = "<li data-layerid='" + name + "'>" +
        "<span><i class='glyphicon glyphicon-file'></i> " + layer.get('name') + "</span>" +
        "<i class='glyphicon glyphicon-check'></i> ";
        if (layer.getLayers) {
            var sublayersElem = ''; 
            var layers = layer.getLayers().getArray(),
            len = layers.length;
            for (var i = len - 1; i >= 0; i--) {
                sublayersElem += buildLayerTree(layers[i]);
            }
            elem = div + " <ul>" + sublayersElem + "</ul></li>";
        } else {
            elem = div + " </li>";
        }
        return elem;
    }

/* Initialize the tree from the map layers
@returns {undefined}*/
    function initializeTree() {

        var elem = buildLayerTree(map.getLayerGroup());
        $('#layertree').empty().append(elem);

        $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
        $('.tree li.parent_li > span').on('click', function(e) {
            var children = $(this).parent('li.parent_li').find(' > ul > li');
            if (children.is(":visible")) {
                children.hide('fast');
                $(this).attr('title', 'Expand this branch').find(' > i').addClass('glyphicon-plus').removeClass('glyphicon-minus');
            } else {
                children.show('fast');
                $(this).attr('title', 'Collapse this branch').find(' > i').addClass('glyphicon-minus').removeClass('glyphicon-plus');
            }
            e.stopPropagation();
        });
    }

/* Finds recursively the layer with the specified key and value.
@param {ol.layer.Base} layer
@param {String} key
@param {any} value
@returns {ol.layer.Base}*/
	function findBy(layer, key, value) {
        if (layer.get(key) === value) {
                return layer;
        }

// Find recursively if it is a group
        if (layer.getLayers) {
            var layers = layer.getLayers().getArray(),
                len = layers.length, result;
            for (var i = 0; i < len; i++) {
                result = findBy(layers[i], key, value);
                if (result) {
                    return result;
                }
            }
        }
        return null;
    }

    initializeTree();

// Handle visibility control
    $('i').on('click', function() {
        var layername = $(this).closest('li').data('layerid');
        var layer = findBy(map.getLayerGroup(), 'name', layername);
        layer.setVisible(!layer.getVisible());

        if (layer.getVisible()) {
            $(this).removeClass('glyphicon-unchecked').addClass('glyphicon-check');
        } else {
            $(this).removeClass('glyphicon-check').addClass('glyphicon-unchecked');
        }
    });

    elem = buildLayerTree(map.getLayerGroup()); 
	$('#js-layertree').empty().append(elem);

	var div = "<li data-layerid='" + name + "'>" + 	"<span><i class='glyphicon glyphicon-file'></i> " + layer.get('name') + "</span>" + "<i class='glyphicon glyphicon-check'></i> " + 	"<input style='width:80px;' class='opacity' type='text' value='' data-slider-min='0' data-slider-max='1' data-slider-step='0.1' data-slider-tooltip='hide'>";    
    
});