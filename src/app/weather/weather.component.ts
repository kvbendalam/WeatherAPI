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

  constructor(private weatherapi:WeatherapiService) { }

  ngOnInit(){
    this.getData();
  }

  ngAfterViewInit(){
    setInterval( ()=>{
    console.log('Called Weather API');
    this.getData();
    }, 300000)
  }

  getData(){
    this.weatherapi.getWeatherReport().subscribe(
      data =>{
        this.data = data;
        console.log(this.data);
      })
  } 

}
