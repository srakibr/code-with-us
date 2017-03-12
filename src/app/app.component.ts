import { Component } from '@angular/core';

@Component({
  selector: 'my-app', //to use me, do this in html <my-app>
  template: `
  <h1>{{name}}</h1>
  <p (hidden)="!region">{{name}} is in the {{region}} region.</p>
  <fieldset>
    <img [src]="image"/>
  </fieldset>
  <label [style.color]="color">Favorite Color</label>
  <button (click)="changeColor()">Toggle Color</button>
  <select (change)="colorChange($event.target.value)">
    <option>red</option>
    <option>blue</option>
    <option>green</option>
  </select>
  <button (click)="toggleAddressVisibility()">Show/Hide address</button>
  <div [hidden]="hideAddress">
    <div >
      <label>Street: </label>{{street}}
      <label>City: </label>{{city}}
    </div>
    
    <div>
      Region:<select (change)="regionChange($event.target.value)">
        <option>East</option>
        <option>North</option>
        <option>South</option>
        <option>West</option>
      </select>
      
    </div>
  </div>
  
  `,
})
export class AppComponent  { 
  name = 'Alex Smith'; 
  image = 'favicon.ico';
  color='red';
  street='112 kopa street';
  city='Dhaka';
  region='';
  hideAddress = false;
  changeColor(){
    this.color = this.color=='red'?'blue':'red';
  }

  colorChange(color:string){
    this.color = color;
  }

  toggleAddressVisibility(){
      this.hideAddress = !this.hideAddress;
  }

  regionChange(region:string){
      this.region = region;
  }
}
