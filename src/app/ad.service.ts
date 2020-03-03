import { Injectable }           from '@angular/core';
import { HeroJobComponent }     from './hero-job/hero-job.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { AdItem }               from './add-item';

@Injectable()
export class AdService
{
  getAds()
  {
    return [
      new AdItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new AdItem(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new AdItem(HeroJobComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),

      new AdItem(HeroJobComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),
    ];
  }
}