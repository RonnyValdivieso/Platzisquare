import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database/database';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class PlacesService {
	API_ENDPOINT = "https://platzisquare-1541107455632.firebaseio.com/";
	places:any = [
		{ id: 1, plan: 'Pagado', closeness: 1, distance: 1, active: true, name: "Florería la Gardenia", description: "Descripción de este negocio. Más adelante tendremos más información." },
		{ id: 2, plan: 'Gratuito', closeness: 1, distance: 1.8, active: true, name: "Donas la pasadita", description: "Descripción de este negocio. Más adelante tendremos más información." },
		{ id: 3, plan: 'Gratuito', closeness: 2, distance: 5, active: true, name: "Veterinaria Huellitas Felices", description: "Descripción de este negocio. Más adelante tendremos más información." },
		{ id: 4, plan: 'Gratuito', closeness: 3, distance: 10, active: false, name: "Sushi Sushiroll", description: "Descripción de este negocio. Más adelante tendremos más información." },
		{ id: 5, plan: 'Pagado', closeness: 3, distance: 35, active: true, name: "Hotel la Gracia", description: "Descripción de este negocio. Más adelante tendremos más información." },
		{ id: 6, plan: 'Gratuito', closeness: 3, distance: 120, active: true, name: "Zapatería el Clavo", description: "Descripción de este negocio. Más adelante tendremos más información." }
	];

	constructor(private afDB:AngularFireDatabase, private http: Http) {}

	public getPlaces() {
		// return this.places;
		return this.afDB.list('places/');
		// return this.http.get(this.API_ENDPOINT + '/.json')
		// 	.map((response) => {
		// 		const data = response.json().places;
		// 		return data;
		// 	});
	}

	public findPlace(id) {
		return this.places.filter((place) => { return place.id == id })[0] || null;
	}

	public savePlace(place) {
		this.afDB.database.ref('places/' + place.id).set(place);
		// const headers = new Headers({"Content-Type":"application/json"});
		// return this.http.post(this.API_ENDPOINT + '/places.json', place, {headers: headers});
	}

	public editPlace(place) {
		this.afDB.database.ref('places/' + place.id).set(place);
	}

	public getGeoData(address) {
		// return this.http.get('https://maps.google.com/maps/api/geocode/json?address=' + address + '&key=AIzaSyAphJlejUQ8ZPUBxwIlt8zwyVoEbhsjXeo');
		return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?&address=' + address + '&key=AIzaSyAphJlejUQ8ZPUBxwIlt8zwyVoEbhsjXeo');
	}

	public getPlace(id) {
		return this.afDB.object('places/' + id);
	}
}