import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from  '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { InMemoryDataService }  from './in-memory-data.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientModule } from './client/client.module';
import { CompetitionModule } from './competition/competition.module';
import { ClassementModule } from './classement/classement.module';
import { MessageToHeadService } from './message-to-head.service';
import { FooterComponent } from './footer/footer.component';
import { ResultatModule } from './resultat/resultat.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { InfoEquipeComponent } from './info-equipe/info-equipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InfoEquipeComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ClassementModule,
    CompetitionModule,
    ClientModule,
    ResultatModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false,passThruUnknownUrl:true,put404:true, caseSensitiveSearch:true }
    ),
    ServiceWorkerModule.register('ngsw-worker.js', {scope:'/', enabled: environment.production }),
  ],
  providers: [MessageToHeadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
