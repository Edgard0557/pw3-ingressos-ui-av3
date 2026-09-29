import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from '../../../../shared/components/container/container';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { SalaService } from '../../../../core/services/sala.service';
import { Observable, of } from 'rxjs';
import { Sala } from '../../../../core/models';


@Component({
  selector: 'app-sala-lista',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, ContainerComponent, RouterLink],
  templateUrl: './sala-lista.html',
  styleUrl: './sala-lista.css'
})
export class SalaListaComponent implements OnInit{

  salas: Observable<Sala> = of();
  private salaService = inject(SalaService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    
    const id = this.route.snapshot.params['id'];
    this.salas = this.salaService.buscarSalaporId(id);
  }
}
