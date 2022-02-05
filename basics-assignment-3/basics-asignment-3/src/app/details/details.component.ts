import { Component } from "@angular/core";

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})

export class DetailsComponent{
    text: string = "Any text";
    showText: boolean = true;
    logs: number[] = [];

    onToggle(){
        this.showText = !this.showText;
        this.logs.push(this.logs.length + 1);
    }
}