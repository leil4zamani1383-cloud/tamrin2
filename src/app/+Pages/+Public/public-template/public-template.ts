import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-public-template',
  imports: [RouterOutlet, RouterLinkWithHref,FormsModule],
  templateUrl: './public-template.html',
  styleUrl: './public-template.scss',
})
export class PublicTemplate {

}
