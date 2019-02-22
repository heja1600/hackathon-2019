import { Component, OnInit } from '@angular/core';
import { VoiceService } from './voice-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [VoiceService]
})
export class MainComponent implements OnInit {
  hej = "hejdå";
  constructor(private vs: VoiceService) { }

  ngOnInit() {
  }
  func() {
    this.hej = 'hej';
  }
}
