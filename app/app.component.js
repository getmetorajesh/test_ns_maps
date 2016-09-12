"use strict";
var core_1 = require('@angular/core');
var element_registry_1 = require("nativescript-angular/element-registry");
var application = require("application");
if (application.ios) {
    GMSServices.provideAPIKey("PUT_API_KEY_HERE");
}
element_registry_1.registerElement("MapView", function () { return require("nativescript-google-maps-sdk").MapView; });
var AppComponent = (function () {
    function AppComponent() {
        this.counter = 16;
        //Map events
        this.onMapReady = function (event) {
            console.log("Map Ready");
        };
    }
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTap = function () {
        this.counter--;
    };
    __decorate([
        core_1.ViewChild("MapView"), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "mapView", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n     <GridLayout>\n        <MapView (mapReady)=\"onMapReady($event)\"></MapView>\n    </GridLayout>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map