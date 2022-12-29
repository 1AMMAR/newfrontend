import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {StreamingComponent} from './components/streaming/streaming.component';
import {LoginComponent} from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import {AdminComponent} from './components/admin/admin.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {VideoViewComponent} from './components/video-view/video-view.component';
import {GalleryGroupModelComponent} from './components/gallery-group/gallery-group-model/gallery-group-model.component';
import {GalleryGroupVideoComponent} from './components/gallery-group/gallery-group-video/gallery-group-video.component';
import { ModelsWithVideosComponent } from './components/listing/models-with-videos/models-with-videos.component';
import { ModelsComponent } from './components/listing/models/models.component';
import { ModelVideosComponent } from './components/listing/model-videos/model-videos.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ModelImageUploadComponent } from './components/model-image-upload/model-image-upload.component';
import { ModeldetailsComponent } from './components/modeldetails/modeldetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StreamingComponent,
    LoginComponent,
    AdminComponent,
    UserProfileComponent,
    VideoViewComponent,
    GalleryGroupModelComponent,
    GalleryGroupVideoComponent,
    ModelsWithVideosComponent,
    ModelsComponent,
    ModelVideosComponent,
    PaginationComponent,
    ModelImageUploadComponent,
    ModeldetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      {path: 'streaming', component: StreamingComponent},
      {path: 'login', component: LoginComponent},
      {path: 'admin', component: AdminComponent},
      {path: 'profile', component: UserProfileComponent},
      {path: '**', redirectTo: '/streaming'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
