import { WeatherapiService } from './../weatherapi.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Weather } from './../weather'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  data:any = [];
  parser:any= [];
  result:any;
  weather:any = [];
  nodeData:any = [];

  constructor(private weatherapi:WeatherapiService) { }

  ngOnInit(){
    this.getData();

  //  this.weather = [
  //     {
  //       "EmpID": 0,
  //       "Name": "KdfasdB",
  //       "EmpCode": "AEYsdfE0001",
  //       "Salary": 80000,
  //     }
  //   ]
  }

  ngAfterViewInit(){
    setInterval( ()=>{
    console.log('Called Weather API');
    this.getData();
    this.getWeatherfromDB();
    }, 300000)
  }

  getData(){
    this.weatherapi.getWeatherReport().subscribe(
      data =>{
        this.data = data;
        this.parser = data;
        console.log(this.data.name);

        var name = this.data.name;
        var pressure = this.data.main.pressure;
        var temp = this.data.main.temp;

        this.weather={
          "EmpID": 0, "Name":name, "EmpCode": pressure,"Salary": temp,
        }
        this.weatherapi.httpPostExample(this.weather);
      })
      
      this.getWeatherfromDB();
  } 

  getWeatherfromDB(){
    this.weatherapi.getWeatherfromDB().subscribe(
      data =>{
        this.nodeData = data;
        console.log(this.nodeData);
      })
  }

}
