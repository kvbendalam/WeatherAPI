import { WeatherapiService } from './../weatherapi.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Weather } from './../weather'

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  data:any = [];
  result:any;
  weather:any = [];

  constructor(private weatherapi:WeatherapiService) { }

  ngOnInit(){
    this.getData();
    

   this.weather = [
      {
        "EmpID": 1,
        "Name": "KVB",
        "EmpCode": "AEYE0001",
        "Salary": 800000,
      }
    ]
  }

  ngAfterViewInit(){
    setInterval( ()=>{
    console.log('Called Weather API');
    this.getData();
    this.sendData(this.weather);
    }, 30000)
  }

  getData(){
    this.weatherapi.getWeatherReport().subscribe(
      data =>{
        this.data = data;
        console.log(this.data);
      })
      this.sendData(this.weather);
  } 

  sendData(weather:Weather){
    this.weatherapi.httpPostExample()
  }


  

}
