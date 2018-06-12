import { Component }                            from "@angular/core";
import { FormBuilder , FormGroup , Validators } from "@angular/forms";
import { debounceTime , distinctUntilChanged }  from "rxjs/operators";
import { BuilderService }                       from "./service/builder.service";
import { Guitar , GuitarService }               from "./service/guitar.service";
import { TypeService }                          from "./service/type.service";
import { WoodService }                          from "./service/wood.service";

@Component ( {
  selector : "app-root" , templateUrl : "./app.component.html" , styleUrls : [ "./app.component.css" ]
} )
export class AppComponent {
  dataSet : Guitar[] = [];

  types : any[] = [];

  builders : any[] = [];

  woods : any[] = [];

  isVisible = false;

  isOkLoading = false;

  form : FormGroup;

  searchForm : FormGroup;

  title = "吉他管理系统";

  constructor ( private guitarService : GuitarService ,
                private typeService : TypeService ,
                private woodService : WoodService ,
                private builderService : BuilderService , ) {
  }

  ngOnInit () : void {

    this.reLoadGuitar ();
    const fb = new FormBuilder ();
    this.searchForm = fb.group ( {
      serialNumber : [ null ] , cellingPrice : [ null ] , floorPrice : [ null ] , builder : [ null ] , type : [ null ] , topWood : [ null ] , backWood : [ null ] , model : [] ,
    } );
    this.searchForm.valueChanges.pipe ( debounceTime ( 500 ) , distinctUntilChanged () ).subscribe ( value => {
      this.guitarService.searchGuitar ( value ).subscribe ( ( data : any ) => {
        this.dataSet = data;
      } );
    } );
    this.typeService.getAll ().subscribe ( ( data : any ) => {
      this.types.push ( { label : "无" , value : null } );
      for ( let i in data ) {
        this.types.push ( { label : data[ i ].value , value : data[ i ].value } );
      }
    } );
    this.builderService.getAll ().subscribe ( ( data : any ) => {
      this.builders.push ( { label : "无" , value : null } );
      for ( let i in data ) {
        this.builders.push ( { label : data[ i ].value , value : data[ i ].value } );
      }
    } );
    this.woodService.getAll ().subscribe ( ( data : any ) => {
      this.woods.push ( { label : "无" , value : null } );
      for ( let i in data ) {
        this.woods.push ( { label : data[ i ].value , value : data[ i ].value } );
      }
    } );
  }

  private reLoadGuitar () {
    this.guitarService.getAll ().subscribe ( ( data : any ) => {
      this.dataSet = data;
    } );
  }
}
