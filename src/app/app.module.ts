import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { CourseComponent } from './course/course.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './login/auth.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CourseIntroductionComponent } from './course-introduction/course-introduction.component';
import { CourseInspectionComponent } from './course-inspection/course-inspection.component';
import { CoursecCollisionsComponent } from './coursec-collisions/coursec-collisions.component';
import { ListEndComponent } from './list-end/list-end.component';
import { TutorialComponent } from './tutorial/tutorial.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'list', component: ListComponent  },
  {path: 'course', component: CourseComponent },
  {path: 'course/introduction', component: CourseIntroductionComponent},
  {path: 'course/inspection', component: CourseInspectionComponent},
  {path: 'course/collisions', component: CoursecCollisionsComponent},
  {path: 'conclusion', component: ListEndComponent},
  {path: 'tutorial', component: TutorialComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    CourseComponent,    
    FooterComponent, 
    CourseIntroductionComponent, 
    CourseInspectionComponent, 
    CoursecCollisionsComponent, 
    ListEndComponent, 
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
