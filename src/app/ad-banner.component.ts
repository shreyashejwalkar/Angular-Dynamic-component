import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { AdDirective }                                                              from './ad.directive';
import { AdItem }                                                                   from './add-item';
import { AdComponent }                                                              from './ad/ad.component';

@Component
({
  selector: 'app-ad-banner',
  template: `
              <div class="ad-banner-example">
                <h3>Advertisements</h3>
                <!--dynamically load components using ad-host selector-->
                <ng-template ad-host></ng-template>
              </div>
            `
})

export class AdBannerComponent implements OnInit, OnDestroy 
{
  // AdItem objects as input, which ultimately comes from AdService. AdItem objects specify the type of component to load.
  @Input() ads: AdItem[];
  currentAdIndex = -1;

  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() 
  {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() 
  {
    clearInterval(this.interval);
  }

  loadComponent()
  {
    // sets the currentAdIndex by taking whatever it currently is plus one, dividing that by the length of the AdItem array
    // and uses remainder as the new currentAdIndex value
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;

    // uses currentAdIndex value to select an adItem from the array
    const adItem = this.ads[this.currentAdIndex];

    // ComponentFactoryResolver used to resolve a ComponentFactory for each specific component. The ComponentFactory then creates an instance of each component.
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    // viewContainerRef that exists on this specific instance of the component referrs to adHost and adHost is the directive tell Angular where to insert dynamic components.
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    // createComponent() method returns a reference to the loaded component.
    // Use that reference to interact with the component by assigning to its properties or calling its methods.
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  // In getAds() method, AdBannerComponent cycles through the array of AdItems and loads a new component every 3 seconds by calling loadComponent().
  getAds() 
  {
    this.interval = setInterval(() => { this.loadComponent();}, 3000);
  }
}