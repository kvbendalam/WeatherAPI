import { WeatherapiService } from './../weatherapi.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';


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
        "EmpID": 0,
        "Name": "Krishnavamsi Bendalam",
        "EmpCode": "AEYE0001",
        "Salary": 800000
      }
    ]

  }

  ngAfterViewInit(){
    setInterval( ()=>{
    console.log('Called Weather API');
    this.getData();
    this.sendData(this.weather);
    }, 100000)
  }

  getData(){
    this.weatherapi.getWeatherReport().subscribe(
      data =>{
        this.data = data;
        console.log(this.data);
      })
  } 

  sendData(weather:any){
    this.weatherapi.sendReport(weather).subscribe(data=>{
      this.result = data;
      console.log(this.result);
    })
  }

}
