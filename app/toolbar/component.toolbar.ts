import {Component} from '@angular/core';
import {MdIcon} from '@angular2-material/icon/icon';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';


@Component({
  moduleId: module.id,
  selector:   'toolbar-app',
  templateUrl: 'component.toolbar.html',
  styleUrls:   ['component.toolbar.css'],
  directives: [MdToolbar, MdIcon]
})
export class Toolbar {
}
