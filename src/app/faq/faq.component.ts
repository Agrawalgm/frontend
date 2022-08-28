import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }
  menuItems: any = [
    {
      label: "When will my interest rate change?",
       icon: 'The Interest Rate reset under EBLR may be done by the Bank from time to time as per Banks extant guidelines in force '
    },
    {
      label: "AbouIs EBLR a home loan new product?",
        icon: 'No. It is a new interest rate structure. All floating rate home loans will have interest rates linked to External Benchmark.'
    },
    {
      label: "What documents do I need to check if I am buying a resale property?",
       icon: 'The Interest Rate Clear and marketable Title, Sale Deed, Encumbrance Certificate, latest tax receipts, Occupancy Certificate, Building Plan Approvals and Possession Certificate.'
    },
    {
      label: "What is an EMI?",
       icon: 'EMI or Equated Monthly Instalment is a fixed amount paid by you to the bank on a specific date every month. The EMIs are fixed when you borrow money from the bank as a loan. EMIs are used to pay both interest and principal amount of a loan in a way that over a specific number of years, the loan amount is repaid to the bank alongwith interest.'
    },
    {
      label: "What is a home loan?",
       icon: 'Home loan is the money borrowed from a bank or a housing finance institution on interest for buying / constructing / upgrading a residential real estate property. '
    },
   
 ];
  ngOnInit(): void {
  }

}
