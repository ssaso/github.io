import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';

import { products } from '../products';
import { Adal4Service, Adal4HTTPService } from 'adal-angular4';

import { Observable } from 'rxjs/Rx';
import { CategoriesService } from '../northwind.service';

import { State } from '@progress/kendo-data-query';

import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';

@Component({
    selector: 'aa4-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public view: Observable<GridDataResult>;
    public state: State = {
        skip: 0,
        take: 5
    };

    constructor(private service: Adal4Service, private http: Adal4HTTPService, private categories: CategoriesService) {
        this.view = categories;
        this.categories.query(this.state);
    }

    public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.categories.query(state);
    }


    title = 'Home comp';
    private gridData: any[] = products;
    onButtonClick() {
        this.title = 'Kendowww button';
    }

    //Check authentication on component load
    ngOnInit() {
        //Handle callback if this is a redirect from Azure
        this.service.handleWindowCallback();

        //Check if the user is authenticated. If not, call the login() method
        if (!this.service.userInfo.authenticated) {
            this.service.login();
        }
        //Log the user information to the console
        console.log('username ' + this.service.userInfo.username);

        console.log('authenticated: ' + this.service.userInfo.authenticated);

        // console.log('name: ' + this.service.userInfo.profile.name);

        console.log('token: ' + this.service.userInfo.token);

        console.log(this.service.userInfo.profile);

    }

    public logout() {
        this.service.logOut();
    }

}
