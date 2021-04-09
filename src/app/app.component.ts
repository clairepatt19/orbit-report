import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Orbit Report';
  sourceList: Satellite[];
  // displayList: Satellite[];
  
  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;
            for(let i=0;i<fetchedSatellites.length;i++){
              this.sourceList.push(new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type,fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType,
                 fetchedSatellites[i].operational)); 
               }
          // make a copy of the sourceList to be shown to the user
          //  this.displayList = this.sourceList.slice(0);
       }.bind(this));
    }.bind(this));
  }
}