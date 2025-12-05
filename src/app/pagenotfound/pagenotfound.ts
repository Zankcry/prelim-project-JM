import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  imports: [RouterLink],
  templateUrl: './pagenotfound.html',
  styleUrls: ['./pagenotfound.css'],
})
export class Pagenotfound {
  code = '404';
  title = 'System Error: Area Not Unlocked';
  description = "The coordinates you are trying to reach do not exist in this timeline. It seems you've wandered into the Sea of Quanta.";

  // CTA labels
  returnHomeText = 'Return to Home';
  viewProductsText = 'View Products';

}
