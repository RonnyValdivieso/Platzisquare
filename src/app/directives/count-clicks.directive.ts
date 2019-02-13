import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
	selector: 'a[count-clicks]'
})

export class CountClicksDirective {
	clickN = 1;
	@HostBinding('style.opacity') opacity:number = .1;
	@HostListener('click', ['$event.target']) onclick(btn) {
		console.log('a', btn, "Número de clicks: ", this.clickN ++);
		this.opacity += .1;
	}
}