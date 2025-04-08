import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'ngx-massivo-anagrafiche',
  templateUrl: './massivo-anagrafiche.component.html',
  styleUrls: ['./massivo-anagrafiche.component.scss']
})
export class MassivoAnagraficheComponent {


  files: File[] = [];

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
