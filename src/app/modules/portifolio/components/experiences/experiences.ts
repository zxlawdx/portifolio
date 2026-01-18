import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
//Interface
import { IExperiences } from '../../interfaces/experiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [CommonModule],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
})
export class Experiences {
  public arrayExperiences = signal<IExperiences[]>([
   {
    summary: {
        strong: "Desenvolvedor Back-end",
        p: "Experiências com Java e Spring Boot"
    },
    text: "<p>Atuação no desenvolvimento de APIs RESTful utilizando Java e Spring Boot</p> <p>integrando bancos de dados relacionais e não relacionais, além de implementar autenticação e autorização com JWT</p>"
   },
   {
    summary: {
        strong: "Desenvolvedor Front-end",
        p: "Experiências com Angular"
    },
    text: "<p>Atuação no desenvolvimento de interfaces de usuário responsivas utilizando Angular</p> <p>integrando com APIs RESTful e implementando componentes reutilizáveis.</p>"
   },
   {
    summary: {
        strong: "Desenvolvedor Full Stack",
        p: "Experiências com Java, Spring Boot, Angular e React"
    },
    text: "<p>Atuação no desenvolvimento completo de aplicações web utilizando Java</p> <p>Spring Boot para backend e Angular/React para frontend, integrando bancos de dados relacionais e não relacionais.</p>"
    }
  ])
}
