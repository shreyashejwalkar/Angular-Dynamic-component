// An anchor directive to tell angular where to insert components

import { Directive, ViewContainerRef } from '@angular/core';

@Directive
({
  //selector use to apply the directive to the element
  selector: '[ad-host]',
})

//AdDirective: helper directive to mark valid insertion points in the template
export class AdDirective 
{
  // ViewContainerRef injection to gain access to the view container of the element that will host the dynamically added component.
  constructor(public viewContainerRef: ViewContainerRef) { }
}