import { HTTP_INTERCEPTORS , HttpClientModule } from "@angular/common/http";
import { NgModule }                             from "@angular/core";
import { FormsModule , ReactiveFormsModule }    from "@angular/forms";
import { BrowserModule }                        from "@angular/platform-browser";
import { BrowserAnimationsModule }              from "@angular/platform-browser/animations";
import { MenubarModule }                        from "primeng/menubar";
import { DropdownModule , ToolbarModule }       from "primeng/primeng";
import { TableModule }                          from "primeng/table";

import { AppComponent }   from "./app.component";
import { MyInterceptor }  from "./interceptors/my.interceptor";
import { BuilderService } from "./service/builder.service";
import { GuitarService }  from "./service/guitar.service";
import { TypeService }    from "./service/type.service";
import { WoodService }    from "./service/wood.service";

@NgModule ( {
  declarations : [ AppComponent ] ,
  imports      : [ BrowserModule , FormsModule , ReactiveFormsModule , HttpClientModule , BrowserModule , BrowserAnimationsModule ,TableModule,MenubarModule,DropdownModule,ToolbarModule] ,
  providers    : [ GuitarService ,
                   TypeService ,
                   BuilderService ,
                   WoodService ,
                   { provide  : HTTP_INTERCEPTORS ,
                     useClass : MyInterceptor ,
                     multi    : true
                   } , ] ,
  bootstrap    : [ AppComponent ]
} )
export class AppModule {
}
