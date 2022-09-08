import { Component } from '@angular/core';
import { TextToSpeechAdvanced } from '@awesome-cordova-plugins/text-to-speech-advanced/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  text = '';

  constructor(private speech: TextToSpeechAdvanced) {}

  speak() {
    this.speech.speak(this.text);
  }

  speakWithOptions() {
    this.speech.speak({
      text: this.text,
      identifier: 'com.apple.ttsbundle.Samantha-compact',
      rate: 0.75,
      pitch: 0.9,
      cancel: true
    });
  }

}
