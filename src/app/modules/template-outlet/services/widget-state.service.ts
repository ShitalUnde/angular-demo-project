import { Injectable } from '@angular/core';
import { WeatherData } from 'src/app/model/entity';

@Injectable({
  providedIn: 'root'
})
export class WidgetStateService {

  constructor() { }

  data:WeatherData = {
    temperature:20,
    windSpeed:5,
    skyCondition: 'sunny'
  }

  lastUpdatedDate = new Date()
}
