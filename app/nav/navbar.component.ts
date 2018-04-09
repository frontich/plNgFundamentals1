import { Component } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
        .nav.navbar-nav { font-size:15px; }
        #searchForm { margin-right:100px; }
        @media (max-width:1200px) { #searchForm {display:none}}
        li > a.active { color:#F97924 }
    `
    ]

})
export class NavBarComponent {

}

/**
 * interpolation vs
 * property binding
 * expressions
 * expression restrictions - can not use assignement operators =, +=, ++ etc
 *                         - can not use new Keyword to create new objects
 *                         - expression chaining with ;
 *                         - cant access anything on the global namespace (console.log)
 */
