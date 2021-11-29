import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import * as moment from 'moment'

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, AfterViewInit {
    @ViewChild('text', { static: false }) textElement: any
    @ViewChild('text1', { static: false }) textElement1: any
    @ViewChild('text2', { static: false }) textElement2: any
    @ViewChild('text3', { static: false }) textElement3: any

    constructor(private router: Router) {}

    ngOnInit() {}
    ngAfterViewInit() {
        this.showText(this.textElement.nativeElement, 'Hello', 0, 20)
        this.showText(
            this.textElement1.nativeElement,
            'My name is Chloe, ' +
                moment().diff('1990-07-04', 'years') +
                ' y.o web developer based in Montreal (Canada).',
            0,
            15,
            600
        )

        this.showText(
            this.textElement2.nativeElement,
            'I had fun developing this little angular app on my own during the last Christmas holidays.',
            0,
            15,
            2500
        )

        this.showText(
            this.textElement3.nativeElement,
            'If you want to help me maintain this project, you can find the repository on github, or you can contribute with paypal :).',
            0,
            10,
            5000
        )
    }

    showText = (target, message, index, interval, delay?) => {
        setTimeout(
            () => {
                if (index < message.length) {
                    target.append(message[index++])
                    setTimeout(() => {
                        this.showText(target, message, index, interval)
                    }, interval)
                }
            },
            delay ? delay : 0
        )
    }
    goTo(name) {
        this.router.navigate([name])
    }
    goToUrl(url): void {
        window.open(url, '_blank')
    }
}
