import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading = true;

  ngOnInit() {
    // Simulate loading time
    setTimeout(() => {
      this.loading = false;
      window.scrollTo(0, 0);
    }, 2500);
  }
}
