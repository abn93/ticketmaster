import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../../services/api.services";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit{

  events: any[] = [];
  listArtistsNames: any[] = [];
  selectedArtist = "";

  constructor(private apiService: EventsService) {}
  ngOnInit(): void {
    this.loadEvents()
  }

  loadEvents(): void {
    this.apiService.getEventsByAttractions().subscribe((response) => {
      this.events = response._embedded.attractions;
      this.extractArtistNames()
      // console.log('Attractions:', this.events);
    });
  }

   extractArtistNames(): void {
    this.listArtistsNames = this.events.map(attractions => attractions.name);
    // console.log('Nomes dos Artistas:', this.listArtistsNames);
  }

  onArtistSelected(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedArtist = selectElement.value;
    // console.log('Artista Selecionado:', this.selectedArtist);
  }
}
