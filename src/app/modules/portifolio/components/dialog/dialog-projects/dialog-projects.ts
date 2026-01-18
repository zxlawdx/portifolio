import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, signal } from '@angular/core';
import { IProjects } from '../../../interfaces/projects.interface';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { DialogProjectsData } from '../../../interfaces/dialogprojects.interface';

@Component({
  selector: 'app-dialog-projects',
  imports: [CommonModule, MatDialogContent, MatDialogTitle],
  templateUrl: './dialog-projects.html',
  styleUrl: './dialog-projects.scss',
})
export class DialogProjects implements OnInit{
  constructor(
  private _dialogRef: MatDialogRef<DialogProjects>,
  @Inject(MAT_DIALOG_DATA) private _data: DialogProjectsData
) {}

public project = signal<IProjects | null>(null);
public projects = signal<IProjects[]>([]);

ngOnInit(): void {
  this.project.set(this._data.project);
  this.projects.set(this._data.projects);
}

  public closeModal(){
    return this._dialogRef.close();
  }

  


}
