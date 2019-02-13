import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { AgmCoreModule } from '@agm/core';
import { HighlightDirective } from './directives/highlight.directive';
import { CountClicksDirective } from './directives/count-clicks.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { PlacesComponent } from './places/places.component';
import { ContactComponent } from './contact/contact.component';
import { PlacesService } from './services/places.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { CreateComponent } from './create/create.component';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
	{ path: "", component: PlacesComponent },
	{ path: "lugares", component: PlacesComponent },
	{ path: "detalle/:id", component: DetailComponent },
	{ path: "contacto", component: ContactComponent },
	{ path: "crear/nuevo", component: CreateComponent },
	{ path: "crear/:id", component: CreateComponent }
]

@NgModule({
	declarations: [
		AppComponent,
		HighlightDirective,
		CountClicksDirective,
		DetailComponent,
		PlacesComponent,
		ContactComponent,
		CreateComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyAphJlejUQ8ZPUBxwIlt8zwyVoEbhsjXeo'
		}),
		BrowserAnimationsModule,
		RouterModule.forRoot(appRoutes),
		AngularFireModule.initializeApp(environment.firebase),
		HttpModule
	],
	providers: [PlacesService, AngularFireDatabase],
	bootstrap: [AppComponent]
})
export class AppModule { }
