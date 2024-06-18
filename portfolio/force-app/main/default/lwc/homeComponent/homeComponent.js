import { LightningElement } from 'lwc';

export default class HomeComponent extends LightningElement {
    openLinkedIn() {
        window.location.href = 'https://www.linkedin.com/in/suvimalkundu/';
    }

    openTrailhead() {
        window.location.href = 'https://trailblazer.me/id/suvimalkundu';
    }
}
