import { Component } from '@angular/core';

import {MdUniqueSelectionDispatcher} from '@angular2-material/core';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';


@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent { }


@Component({
  moduleId: module.id,
  selector:   'material2-app-app',
  templateUrl: 'app.component.html',
  styleUrls:   ['app.component.css'],
  providers: [MdUniqueSelectionDispatcher],
  directives: [
    MD_TOOLBAR_DIRECTIVES,
  ],
})
export class Material2AppAppComponent {
}
