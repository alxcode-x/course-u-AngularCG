import { Component } from '@angular/core';

@Component({
    selector: 'app-warning_alert',
    templateUrl: './warning-alert.component.html',
    styleUrls: ['./warning-alert.component.css']
})

export class WarningAlert{
    SentAlert(){
        alert("Warning!!");
    }
}