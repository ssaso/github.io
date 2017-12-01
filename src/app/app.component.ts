import { Component } from '@angular/core';
// import { Adal4Service } from 'adal-angular4';

//Adal Configuration
const config = {
    tenant: 'nebb.com',
    clientId: '1b9c22cd-a453-4844-987e-d960923a480f',
    redirectUri: window.location.origin + '/',
    postLogoutRedirectUri: window.location.origin + '/'
}

const config2 = {
    instance: 'https://login.microsoftonline.com/',
    tenant: 'rpascloud.onmicrosoft.com',
    clientId: '46ec03aa-5f70-4119-8b05-8283f4ff06b5',
    extraQueryParameter: 'nux=1'
}

@Component({
    selector: 'aa4-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Adal Angular 4';

    // constructor(private service: Adal4Service) {
    //     this.service.init(config);
    // }

}
