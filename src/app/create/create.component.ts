import { Component } from "@angular/core";
import { PlacesService } from "../services/places.service";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html'
})
export class CreateComponent {
	place:any = {};
	id:any = null;

	constructor(private placesService: PlacesService, private route: ActivatedRoute) {
		this.id = this.route.snapshot.params['id'] || '';

		if (this.id != '') {
			this.placesService.getPlace(this.id)
				.subscribe((data:any) => {
					this.place = data;
				});
		}
	}

	savePlace() {
		let address = this.place.street + ', ' + this.place.city + ', ' + this.place.country;
		this.placesService.getGeoData(address)
			.subscribe((result:any) => {
				console.log(result);
				this.place.lat = result.json().results[0].geometry.location.lat;
				this.place.lng = result.json().results[0].geometry.location.lng;
				
				if (this.id != '') {
					this.placesService.editPlace(this.place);
					alert('Negocio editado con éxito');
				} else {
					this.place.id = Date.now();
					this.placesService.savePlace(this.place);
					alert('Negocio guardado con éxito');
				}
				this.place = {};
			});
	}
}