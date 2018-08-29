import { Component, Input, Output, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

/**
 * Generated class for the SortableTableComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sortable-table',
  templateUrl: 'sortable-table.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortableTableComponent {

  @Input('data') data: Array<any>;
  @Input('headers') hdr: Array<any>;
  @Input('formats') frm : Array<any>;
  @Input('fn') fn : Array<any>;
  @Input('header_titles') hdrTitles : any;
  @Input('actions') acts: Array<any> = [];
  @Output('t') t = new EventEmitter;
  h_ctr = [];
  sorting:string = '';
  sort_type:boolean = false;
  expanded = 0;
  searched: Array<any> = [];
  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit(){
  	let self = this;
  	this.searched = this.data;
  	this.cdr.detectChanges();
  	this.hdr.forEach((i,g)=>{
  		if(parseInt(g.toString()) > 1) self.h_ctr.push(g);
  	});
  }

	ngOnChanges(...args: any[]) {
        this.searched = this.data;
    }

  search($event){
  	this.expanded = 0;
  	let val = $event.target.value.toLowerCase();
  	if(val.trim() == ""){
  		this.searched = this.data;
  	}
  	else{
  		let lns = this.data.filter(a=>{
  			let cc = this.hdr.some((e,ind)=>{
  				if(e.indexOf(".") > 0 && this.nesting(a,e).toString().toLowerCase().indexOf(val) > -1){
  					return true;
  				}else if(!a.hasOwnProperty(e)) return false;
  				 
  				if(a[e].toString().toLowerCase().indexOf(val) > -1){
  					return true;
  				}
  			});
  			if(cc) return a;
  		});
  		this.searched = lns;
  	}

  }

  sorter(a:Array<any>,e):Array<any>{
  	if(e == this.sorting){
  		this.sort_type = !this.sort_type;
  	}else{
  		this.sort_type = false;
  	}
  	this.sorting = e;  	

  	if(this.frm.hasOwnProperty(e) && this.frm[e] == "nested"){
  		if(this.sort_type){
	  		return a.sort((a,b)=>{
		  		if(this.nesting(a,e).toString().toLowerCase() < this.nesting(b,e).toString().toLowerCase()) return -1;
		  		if(this.nesting(a,e).toString().toLowerCase() > this.nesting(b,e).toString().toLowerCase()) return 1;
		  		return 0;
		  	});
		}else{
	  		return a.sort((a,b)=>{
		  		if(this.nesting(a,e).toString().toLowerCase() < this.nesting(b,e).toString().toLowerCase()) return 1;
		  		if(this.nesting(a,e).toString().toLowerCase() > this.nesting(b,e).toString().toLowerCase()) return -1;
		  		return 0;
		  	});
		}
  	}
  	else if(!isNaN(a[0][e]*1)){
	  	if(this.sort_type){
	  		return a.sort((a,b)=>{
		  		let ax = a[e]*1;
		  		let bx = b[e]*1;
		  		if(ax < bx) return -1;
		  		if(ax > bx) return 1;
		  		return 0;
		  	});
		}else{
	  		return a.sort((a,b)=>{
		  		let ax = a[e]*1;
		  		let bx = b[e]*1;
		  		if(ax < bx) return 1;
		  		if(ax > bx) return -1;
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

  nesting(data,nested:string){
  	let dt = nested.split(".");
  	return data[dt[0]][dt[1]];
  }

  toJson(data){
  	return JSON.stringify(data);
  }

  emitter(i,e){
  	this.t.emit({index:i,val:e});
  }

  isMobile(){
  	return localStorage.view == "mobile";
  }

}