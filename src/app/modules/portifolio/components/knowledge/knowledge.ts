import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
//Interface
import { IKnowledge } from '../../interfaces/knowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [CommonModule],
  templateUrl: './knowledge.html',
  styleUrl: './knowledge.scss',
})
export class Knowledge {
  public arrayKnowledge = signal<IKnowledge[]>([
    { 
      src: 'icon/knowledge/html.svg',
      alt: 'HTML5 Logo',
      width: '22px',
      height: '24px'
    },
    { 
      src: 'icon/knowledge/css3.svg',
      alt: 'CSS3 Logo',
      width: '22px',
      height: '24px'
    },
    { 
      src: 'icon/knowledge/javascript.svg',
      alt: 'JavaScript Logo',
      width: '22px',
      height: '24px'
    },
    { 
      src: 'icon/knowledge/typescript.svg',
      alt: 'TypeScript Logo',
      width: '22px',
      height: '24px'
    },
    { 
      src: 'icon/knowledge/angular.svg',
      alt: 'Angular Logo',
      width: '22px',
      height: '24px'
    },
    { 
      src: 'icon/knowledge/java.svg',
      alt: 'Java Logo',
      width: '22px',
      height: '24px'
    },
    { 
      src: 'icon/knowledge/spring-boot.svg',
      alt: 'Spring Boot Logo',
      width: '22px',
      height: '24px'
    },
  ])
}
