import { Component } from '@angular/core';

@Component({
  selector: 'app-basicts',
  templateUrl: './basicts.component.html',
  styleUrls: ['./basicts.component.scss'],
})
export class BasictsComponent {
  // public name: string;
  public color="green";
  public bgcolor="pink";
  public color1="green";
  public bgcolor1="pink";
  public text:string="pink";
 public changeColor(){
 this.color="yellow";
 this.bgcolor="orange";
 this.text="pink";
 }
 public moreColor(){
  this.color1="pink";
  this.bgcolor1="aqua";
  this.text="blue";
  
 }
 public changeText(){
  this.text="pink";
 
}
}
  // public constructor() {
    // this.name = 'hgvj';

    // if (this.name) {
      // console.log(this.name);
    // } else 
      // console.log('name is empty');
    
  // }
    
   
  // public valueChange() {
    // if(this.color)
  //  this.color="red";
   
    
  // }
// }
