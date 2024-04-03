import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../interface/HousingLocation';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


housingLocationList: HousingLocation[] = [];

constructor(private housingService: HousingService) {
  this.housingLocationList = this.housingService.getAllHousingLocations();
}
  // Componente Home é pai do componente HousingLocation
  // por isso utilizasse o Input no HousingLocation, este vai receber a informações contidas aqui no Comp. Home

}
