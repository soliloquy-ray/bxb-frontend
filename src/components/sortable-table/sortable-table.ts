import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the SortableTableComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
declare var mobilecheck; //fn to check for screen type
@Component({
  selector: 'sortable-table',
  templateUrl: 'sortable-table.html'
})
export class SortableTableComponent {

  @Input('data') data: Array<any>;
  @Input('headers') hdr: Array<any>;
  @Input('formats') frm : Array<any>;
  @Input('fn') fn : Array<any>;
  @Input('header_titles') hdrTitles : any;
  h_ctr = [];
  sorting:string = '';
  sort_type:boolean = false;
  isMobile: boolean = mobilecheck();
  expanded = 0;
  constructor() {
    console.log('Hello SortableTableComponent Component');
  }

  ngAfterViewInit(){
  	console.log(this);
  	let self = this;
  	this.hdr.forEach((i,g)=>{
  		if(parseInt(g.toString()) > 1) self.h_ctr.push(g);
  	});
  }

  sorter(a:Array<any>,e):Array<any>{
  	if(e == this.sorting){
  		this.sort_type = !this.sort_type;
  	}else{
  		this.sort_type = false;
  	}
  	this.sorting = e;

  	if(typeof a[0][e] == "number"){
	  	if(this.sort_type){
	  		return a.sort((a,b)=>{
		  		if(a[e] < b[e]) return -1;
		  		if(a[e] > b[e]) return 1;
		  		return 0;
		  	});
		}else{
	  		return a.sort((a,b)=>{
		  		if(a[e] < b[e]) return 1;
		  		if(a[e] > b[e]) return -1;
		  		return 0;
		  	});
		}
  	}else{
	  	if(this.sort_type){
	  		return a.sort((a,b)=>{
		  		if(a[e].toString().toLowerCase() < b[e].toString().toLowerCase()) return -1;
		  		if(a[e].toString().toLowerCase() > b[e].toString().toLowerCase()) return 1;
		  		return 0;
		  	});
		}else{
	  		return a.sort((a,b)=>{
		  		if(a[e].toString().toLowerCase() < b[e].toString().toLowerCase()) return 1;
		  		if(a[e].toString().toLowerCase() > b[e].toString().toLowerCase()) return -1;
		  		return 0;
		  	});
		}
	}
  }


  expand(i){
  	if(this.expanded == i+1){
  		this.expanded = 0;
  	}else{
  		this.expanded = i+1;
  	}
  }


}
