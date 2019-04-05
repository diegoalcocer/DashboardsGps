import { Component, OnInit } from '@angular/core';

declare var google;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.showLocateUnitMap();
  }

  showLocateUnitMap() {
    google.charts.load('current', {
      'packages': ['table', 'map'],
      'mapsApiKey': 'AIzaSyBfs7bRRkuhrjIR5QxO7bkq4EnEp7VbSK4'
    });
    google.charts.setOnLoadCallback(drawMap);

    function drawMap () {

      const data = google.visualization.arrayToDataTable([
        ['Lat', 'Long', 'Name', 'Marker'],
        [38.926523,  -77.043718, 'Santiago Pesantez.', 'blue'],
        [38.91262 , -77.023779, 'Diego Alcocer', 'green'],
        [38.902038, -77.049372, 'Jorge Palma', 'blue'],
        [38.901224 , -77.030597, 'Donis A.', 'red'],
        [38.908384, -77.042463, 'Ivan Narvaez', 'green'],
        [38.892177, -77.060128, 'Oscar Santillan', 'red'],
        [38.89287, -77.040381, 'Pepe Lepu', 'blu'],
        [38.905962, -77.062397, 'Rvd. Marilyn Manson', 'red'],
        [38.899744, -77.030342, 'Lorena Bobbitt', 'green']
      ]);

      const options = {
        mapType: 'normal',
        zoomLevel: 13,
        showTooltip: true,
        showInfoWindow: true,
        useMapTypeControl: false,
        icons: {
          blue: {
            normal: 'http://icons.iconarchive.com/icons/antrepo/container-4-cargo-vans/48/DHL-Van-Front-icon.png',
            selected: 'http://icons.iconarchive.com/icons/antrepo/container-4-cargo-vans/48/DHL-Van-Back-icon.png'
          },
          green: {
            normal: 'http://icons.iconarchive.com/icons/antrepo/container-4-cargo-vans/48/FedEx-Van-Front-icon.png',
            selected: 'http://icons.iconarchive.com/icons/antrepo/container-4-cargo-vans/48/FedEx-Van-Back-icon.png'
          },
          red: {
            normal: 'http://icons.iconarchive.com/icons/antrepo/container-4-cargo-vans/48/UPS-Van-Front-icon.png',
            selected: 'http://icons.iconarchive.com/icons/antrepo/container-4-cargo-vans/48/UPS-Van-Back-icon.png'
          }
        }
      };

      const table = new google.visualization.Table(document.getElementById('table_div'));

      const view = new google.visualization.DataView(data);
      view.setColumns([2]);

      table.draw(view, {showRowNumber: false, width: '100%', height: '100%'});

      const map = new google.visualization.Map(document.getElementById('map_div'));

      google.visualization.events.addListener(table, 'select',
      function() {
        map.setSelection(table.getSelection());
      });

      google.visualization.events.addListener(map, 'select',
      function() {
        table.setSelection(map.getSelection());
      });


      map.draw(data, options);
    }

  }

  showTestMap() {
    google.charts.load('current', {
      'packages': ['geomap', 'gauge'],
      'mapsApiKey': 'AIzaSyBfs7bRRkuhrjIR5QxO7bkq4EnEp7VbSK4'
    });
    google.charts.setOnLoadCallback(drawRegionsMap);
    function drawRegionsMap() {
      const data = google.visualization.arrayToDataTable([
          ['Regions', 'Rank'],
          ['New York', 700],
          ['DC', 900],
          ['Virginia', 200],
          ['Maryland', 300],
          ['Texas', 500]
      ]);

       const options = {};
       options['region'] = 'US';
       options['resolution'] = 'provinces';
       options['zoomLevel'] = 13;

      const chart = new google.visualization.GeoChart(document.getElementById('map_div'));
      chart.draw(data, options);

      // Gauges
      const data2 = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Gas', 80],
        ['Electricity', 55],
        ['Temp', 68]
      ]);

      const options2 = {
        redFrom: 90, redTo: 100,
        yellowFrom: 75, yellowTo: 90,
        minorTicks: 5
      };

      const chart2 = new google.visualization.Gauge(document.getElementById('chart_div'));

      chart2.draw(data2, options2);
    }
  }

  showOptimizationMap() {

  }

  showGouges() {
    
  }
}
