import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemChatComponent } from '../item-chat/item-chat.component';
import { ItemStoriesComponent } from '../item-stories/item-stories.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    ItemChatComponent,
    ItemStoriesComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ItemChatComponent,
    ItemStoriesComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
