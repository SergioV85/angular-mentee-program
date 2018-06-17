import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { VideoCoursesListModule } from './video-courses-list/video-courses-list.module';
import { ToolboxModule } from './toolbox/toolbox.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    VideoCoursesListModule,
    ToolboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
