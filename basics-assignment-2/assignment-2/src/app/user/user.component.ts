import { Component } from "@angular/core";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})

export class UserComponent{
    userName: string = '';
    isEmpty: boolean = false;

    onEnableButton(){
        return this.isEmpty = (this.userName.length > 0) ? true : false;
    }

    onResetUser(){
        this.userName = '';
    }
}

