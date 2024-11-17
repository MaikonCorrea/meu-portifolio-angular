import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';


@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.css'
})
export class KnowledgeComponent {
  public arrayKnowledge  = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'icone de HTML5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'icone de CSS3'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'icone de JavaScript'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'icone de Node.js'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'icone de Angular'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'icone de SasS'
    }
  ])

}
