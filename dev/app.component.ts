import { Component } from 'angular2/core';
import { ContactListComponent } from "./contacts/contactList.component";

@Component({
    selector: 'my-app',
    template: `
    <contact-List></contact-List>
    `,
    directives:[ContactListComponent]
    
})
export class AppComponent {
    
}