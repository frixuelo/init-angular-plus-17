import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3> Comentarios de los Simpson</h3>
    <img src='https://i.imgflip.com/2rfd59.png?a480528'  />
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam explicabo rem omnis facilis, 
    dignissimos obcaecati eligendi sapiente ipsum sint autem libero reiciendis fuga impedit quia consectetur 
    voluptatum perspiciatis tempora consequuntur.
    </p>
  `,
  styles: `
  img {
    width: 100%
    height: auto;
  }`,
})
export class CommentsComponent {

}
