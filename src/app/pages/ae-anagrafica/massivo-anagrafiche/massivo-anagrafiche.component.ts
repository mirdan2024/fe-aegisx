import { Component } from "@angular/core";


@Component({
  selector: 'app-massivo-anagrafiche',
  templateUrl: './massivo-anagrafiche.component.html',
  styleUrls: ['./massivo-anagrafiche.component.scss']
})
export class MassivoAnagraficheComponent {
  files: any[] = []; // Per memorizzare i file caricati

  // Gestore evento di drop
  public dropped(files: any[]) {
    this.files = files;
    console.log(files);
  }

  // Gestore evento di file selezionato
  public fileOver(event: any) {
    console.log('File over', event);
  }

  // Gestore evento quando il file è uscito dalla zona di drop
  public fileLeave(event: any) {
    console.log('File left', event);
  }

  // Definisci il metodo onFileDrop per gestire l'evento
  onFileDrop(event: any[]) {
    // Log dei file ricevuti
    console.log(event);

    // Esegui altre operazioni sui file, come la lettura del contenuto CSV
    for (const droppedFile of event) {
      // Puoi gestire il file come preferisci
      if (droppedFile.fileEntry.isFile) {
        const file = droppedFile.fileEntry as FileSystemFileEntry;
        file.file((f) => {
          console.log('File dropped:', f);
          // Qui puoi fare ciò che vuoi con il file
        });
      }
    }
  }
}
