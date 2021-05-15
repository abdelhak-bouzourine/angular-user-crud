import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbThemeModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';
import { NbDummyAuthStrategy, NbAuthModule } from '@nebular/auth';
import { HomeComponent } from './components/home/home.component';
import { ConnectChartsComponent } from './components/connect-charts/connect-charts.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConnectChartsComponent,
    UsersComponent,
    UserComponent,
    AddUserComponent,
    ButtonComponent
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
