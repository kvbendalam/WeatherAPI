import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {
  API_URL ="http://api.openweathermap.org/data/2.5/weather?id=1269843&appid=c9911a176e6cf7e1ad698d24ed938843";
  POST_URL ="localhost:3000/employees";

  constructor(private http:HttpClient) { 
  }

  getWeatherReport(): Observable<any[]> {   
    const endpoint = this.API_URL ;
    return this.http.get<any>(endpoint,
        {
            headers: new HttpHeaders().set('Accept', 'aplication/json')
        });
  }

  sendReport(weather:any):Observable<any[]>{
    const endpoint = this.POST_URL;
    return this.http.post<any>(endpoint, weather,
    {
      headers:new HttpHeaders().set('Accept','application/json')
    })
  }

}


