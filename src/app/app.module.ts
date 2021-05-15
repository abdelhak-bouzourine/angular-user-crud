import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbThemeModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';
import { NbDummyAuthStrategy, NbAuthModule } from '@nebular/auth';
import { HomeComponent } from './home/home.component';
import { ConnectChartsComponent } from './connect-charts/connect-charts.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConnectChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbEvaIconsModule,
    HttpClientModule,
    NbIconModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbButtonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),

    NbAuthModule.forRoot({
      strategies: [
        NbDummyAuthStrategy.setup({
          name: 'email',
        }),
      ],
      forms: {},
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
