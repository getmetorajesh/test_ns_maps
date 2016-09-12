import {Component, ElementRef, ViewChild} from '@angular/core';
import {registerElement} from "nativescript-angular/element-registry";
import * as application from "application";

declare var GMSServices:any

if(application.ios) {
  GMSServices.provideAPIKey("PUT_API_KEY_HERE");
}

registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);


@Component({
    selector: "my-app",
    template: `
     <GridLayout>
        <MapView (mapReady)="onMapReady($event)"></MapView>
    </GridLayout>
    `
})
export class AppComponent {
    @ViewChild("MapView") mapView: ElementRef;
    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }

     //Map events
    onMapReady = (event) => {
        console.log("Map Ready");
    };
    
    public onTap() {
        this.counter--;
    }
}
