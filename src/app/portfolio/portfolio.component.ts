import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
// images = [
//   [
//       { id: 1, src: "../../assets/images/poert1.png", isActive: false },
//       { id: 2, src: "../../assets/images/port2.png", isActive: false },
//       { id: 3, src: "../../assets/images/port3.png", isActive: false }
//   ],
//   [
//       { id: 4, src: "../../assets/images/poert1.png", isActive: false },
//       { id: 5, src: "../../assets/images/port2.png", isActive: false },
//       { id: 6, src: "../../assets/images/port3.png", isActive: false }
//   ],
// ];
// toggleLayer(id: number, active: boolean) {
//   this.images.forEach(row => {
//       row.forEach(image => {
//           if (image.id === id) {
//               image.isActive = active;}
//             });
//         });
//     }

images = [
  [
    { id: 1, src: "../../assets/images/poert1.png", isActive: false },
    { id: 2, src: "../../assets/images/port2.png", isActive: false },
    { id: 3, src: "../../assets/images/port3.png", isActive: false }
  ],
  [
    { id: 4, src: "../../assets/images/poert1.png", isActive: false },
    { id: 5, src: "../../assets/images/port2.png", isActive: false },
    { id: 6, src: "../../assets/images/port3.png", isActive: false }
  ],
];

selectedImage: string | null = null;


toggleLayer(id: number, active: boolean) {
  this.images.forEach(row => {
    row.forEach(image => {
      if (image.id === id) {
        image.isActive = active;
        console.log(active)
        if (active) {
          this.selectedImage = image.src;
          console.log(image.src)
        } else {
          this.selectedImage = null;
        }
      }
    });
  });
}


  }






