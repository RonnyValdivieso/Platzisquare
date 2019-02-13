import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../services/places.service';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html'
})
export class DetailComponent {
	id = null;
	place:any = {};
	
	constructor(private route: ActivatedRoute, private placesService: PlacesService) {
		console.log(this.route.snapshot.params['id']);	// recibir parámetros
		console.log(this.route.snapshot.queryParams['action']);	// recibir parámetros tipo query
		this.id = this.route.snapshot.params['id'];
		this.place = this.placesService.findPlace(this.id);
	}
}