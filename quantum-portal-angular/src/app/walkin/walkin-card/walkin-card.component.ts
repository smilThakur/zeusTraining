import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'walkin-card',
  templateUrl: './walkin-card.component.html',
  styleUrls: ['./walkin-card.component.scss']
})
export class WalkinCardComponent implements OnInit {

  constructor(private router: Router) { }



  @Input() expire: string = ""
  @Input() title: string = ""
  @Input() start_end_date: string[] = []
  @Input() venue: string = ""
  @Input() tag: string = ""
  @Input() roles: boolean[] = new Array(3).fill(false)
  @Input() id: number | null = null
  executeNavigation() {
    if (this.id != null) {
      this.router.navigate(['walkin', 'multiplejob'], { queryParams: { id: this.id } })
    }
  }
  ngOnInit(): void {
  }

}
