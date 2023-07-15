import { Component } from '@angular/core';

@Component({
  selector: 'app-practicets',
  templateUrl: './practicets.component.html',
  styleUrls: ['./practicets.component.scss']
})
export class PracticetsComponent {
  public message:string="background color to orange";
  public message1:string="change border into black";
  public message2:string="change image into div";
  public bgcolor="white";
  public divBorder="";
  public divImage="";
 public change(){
  alert(this.message);
  this.bgcolor="orange";

 }
 public bchange(){
  alert(this.message1);
  this.divBorder="4px solid black";
 }
 public ichange(){
  alert(this.message2);
  this.divImage="url('assets/images/log1.jpg')";
  this.divImage(1)="url('assets/images/log1.jpg')";
 }
}
