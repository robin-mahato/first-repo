import { Component } from '@angular/core';

@Component({
  selector: 'app-basicts',
  templateUrl: './basicts.component.html',
  styleUrls: ['./basicts.component.scss']
})
export class BasictsComponent {
  public name:string;
  public email="abc@.com"
public constructor(){
this.name="hgvj"

if(this.name){
  console.log(this.name)
}
else{
console.log("name is empty")
}



}
}