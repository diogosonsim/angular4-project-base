import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {HomeComponent} from './home';


@NgModule({
    declarations: [HomeComponent],
    bootstrap: [HomeComponent],
    imports: [BrowserModule]
})
export class AppModule {
    constructor() {
        console.log('-->> AppModule <<--');
    }
}