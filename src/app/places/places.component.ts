import { Component } from '@angular/core';
import { PlacesService } from '../services/places.service';

@Component({
	selector: 'app-places',
	templateUrl: './places.component.html'
})
export class PlacesComponent {

	lat: number = -2.1696823;
	lng: number = -79.9206098;
	places: any = null;
	alert: boolean = true;

	constructor(private placesService: PlacesService) {
		placesService.getPlaces()
			.subscribe((data:any) => {
				this.places = data;
				let me = this;
				this.places = Object.keys(this.places).map(function(key) { return me.places[key] });
				this.alert = true;
			}, error => {
				this.alert = false;
			});
	}
}
