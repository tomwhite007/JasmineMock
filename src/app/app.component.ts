import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private test: TestService) {}

  title = 'test-testing-app';

  ngOnInit() {
    this.test.hello();
  }
}
