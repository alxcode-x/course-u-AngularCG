import { Component } from "@angular/core";

@Component({
    selector: 'app-success_alert',
    templateUrl: './success-alert.component.html',
    styleUrls: ['./success-alert.component.css']
})

export class SuccessAlert{
    SendAlert(){
        alert("Success!!");
    }
}