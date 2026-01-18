import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interfaces/projects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjects } from '../dialog/dialog-projects/dialog-projects';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, MatDialogModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'img/projects/grayview.png',
      alt: 'Photo Editor',
      title: 'Aplicativo de Visão Noturna',
      width: '100px',
      height: '51px',
      description: 'Aplicativo móvel que aplica um filtro de visão noturna em fotos. E possui ferramentas de edição',
      links:{
        name: "Conheça o projeto",
        url: "https://github.com/zxlawdx/Photo-Editor"
      }
      
    },
    {
      src: 'img/projects/serviceAPI.png',
      alt: 'api service desk',
      title: 'API para Service Desk',
      width: '100px',
      height: '51px',
      description: 'API RESTful desenvolvida em Java com Spring Boot para gerenciar um sistema de Service Desk.',
      links:{
        name: "Conheça o projeto",
        url: "https://github.com/zxlawdx/ServiceDeskAPI"
      }
      
    }
  ])

  public openDialog(project: IProjects) {
  this.#dialog.open(DialogProjects, {
    data: {
      project,
      projects: this.arrayProjects()
    },
    panelClass: EDialogPanelClass.PROJECTS
  });
}


  
}
