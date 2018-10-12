import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EducationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-education',
  templateUrl: 'education.html',
})
export class EducationPage {

	modId:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.modId = this.navParams.get('id') || 1;
  }

  multipleChoice = [
	  {
	  	q:"You're in third place right now in a race. What place are you when you pass the person in second place?",
	  	a:"b",
	  	c:{
	  		"a":"1st",
	  		"b":"2nd",
	  		"c":"3rd",
	  		"d":"None of the above"
	  	},
	  	s:""

	  },
	  {
	  	q:"How many months have 28 days?",
	  	a:"c",
	  	c:{
	  		"a":"2",
	  		"b":"1",
	  		"c":"All of them",
	  		"d":"Depends if there's a leap year or not"
	  	},
	  	s:""
	  },
	  {
	  	q:"How many 0.5cm slices of bread can you cut from a whole bread that's 25cm long?",
	  	a:"d",
	  	c:{
	  		"a":"1",
	  		"b":"25",
	  		"c":"39",
	  		"d":"None of the above"
	  	},
	  	s:""
	  },
	  {
	  	q:"Divide thirty by half and add ten",
	  	a:"c",
	  	c:{
	  		"a":"40.5",
	  		"b":"50",
	  		"c":"70",
	  		"d":"None of the above"
	  	},
	  	s:""
	  },
	  {
	  	q:"A farmer has seventeen sheep, but all of them but eight die. How many sheep are still standing?",
	  	a:"a",
	  	c:{
	  		"a":"8",
	  		"b":"9",
	  		"c":"25",
	  		"d":"35"
	  	},
	  	s:""
	  },
	  {
	  	q:"The prize of a candy eating contest is as follows: 5kg of candy = 5 gold tokens, 2kg of candy = 2 gold tokens, any other amount of candy = 1 gold token. Dwight eats 6kg of candies. What does he get?",
	  	a:"d",
	  	c:{
	  		"a":"5 gold tokens",
	  		"b":"1 gold token",
	  		"c":"6 gold tokens",
	  		"d":"Diabetes"
	  	},
	  	s:""
	  },
	  {
	  	q:"Which of the following is a computer keyboard button?",
	  	a:"a",
	  	c:{
	  		"a":"Break",
	  		"b":"Stun",
	  		"c":"Self-destruct",
	  		"d":"Nuke"
	  	},
	  	s:""
	  },
	  {
	  	q:"Which of the following is a Beatle's song?",
	  	a:"b",
	  	c:{
	  		"a":"Gundam Style",
	  		"b":"Let it Be",
	  		"c":"Toccata and Fugue in S",
	  		"d":"Flight of the Hippopotamus"
	  	},
	  	s:""
	  },
	  {
	  	q:"Which event happened in the 14th century?",
	  	a:"a",
	  	c:{
	  		"a":"Renaissance",
	  		"b":"World War Z",
	  		"c":"Godzilla attack",
	  		"d":"Ice Age"
	  	},
	  	s:""
	  },
	  {
	  	q:"Which movie was directed by Spielberg?",
	  	a:"b",
	  	c:{
	  		"a":"Sharknado",
	  		"b":"Jaws",
	  		"c":"Aliens",
	  		"d":"Sharks on a Train"
	  	},
	  	s:""
	  }
  ];

  trueOrFalse = [
  	{
	  	q:"Is this true or not?",
	  	a:1,
	  	c:{
	  		0:"False",
	  		1:"True"
	  	},
	  	s:""
	},
	{
	  	q:"You will answer this question correctly.",
	  	a:1,
	  	c:{
	  		0:"False",
	  		1:"True"
	  	},
	  	s:""
	},
	{
	  	q:"The pen is mightier than the sword.",
	  	a:1,
	  	c:{
	  		0:"False",
	  		1:"True"
	  	},
	  	s:""
	},
	{
	  	q:"Time is blind.",
	  	a:1,
	  	c:{
	  		0:"False",
	  		1:"True"
	  	},
	  	s:""
	},
	{
	  	q:"A man must judge a book by its content.",
	  	a:1,
	  	c:{
	  		0:"False",
	  		1:"True"
	  	},
	  	s:""
	}
  ];


  matching = [
	{
		q:"Item 1",
		a:""
	},
	{
		q:"Item 2",
		a:""
	},
	{
		q:"Item 3",
		a:""
	},
	{
		q:"Item 4",
		a:""
	}
  ]

  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationPage');
  	localStorage.page = 'education';
  }

  isMobile(){
  	return localStorage.view == "mobile";
  }

  getChoiceKey(i){
  	switch (i) {
  		case 0:
  			return 'a';
  		case 1:
  			return 'b';
  		case 2:
  			return 'c';
  		case 3:
  			return 'd';
  		
  		default:
  			// code...
  			break;
  	}
  	return ;

  }

  setAnswer(index:number,j){
  	this.multipleChoice[index].s = j;
  }

  drag(e){
  	//console.log(e);
    e.dataTransfer.setData("text", e.target.id);
  }

  drop(e,i){
  	console.log('drop to ',e.target);
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    let inp = e.target.getElementsByTagName("input")[0] || e.target;
    //console.log(data,inp);
    //inp.value = document.getElementById(data).innerText;
    this.matching[i].a = document.getElementById(data).innerText;
  }

  allowDrop(e){
    e.preventDefault();
  }

}
