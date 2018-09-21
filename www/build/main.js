webpackJsonp([0],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ext_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/*
  Generated class for the DbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DbProvider = /** @class */ (function () {
    function DbProvider(http, loader) {
        this.http = http;
        this.loader = loader;
        this.env = __WEBPACK_IMPORTED_MODULE_2__ext_config__["a" /* config */][location.origin].backend;
        var dt = new Date();
        this.dtNow = dt.getUTCFullYear() + "-" + ("0" + (dt.getUTCMonth().valueOf() + 2)).slice(-2) + "-" + dt.getUTCDate();
    }
    DbProvider.prototype.signUp = function (uData) {
        return __awaiter(this, void 0, void 0, function () {
            var hdr, rq;
            return __generator(this, function (_a) {
                hdr = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
                hdr.append('Content-Type', 'application/json');
                rq = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */];
                rq.headers = hdr;
                return [2 /*return*/, this.http.post(this.env + "/api.php?q=signup", uData, rq).toPromise()];
            });
        });
    };
    DbProvider.prototype.manAddEmp = function (uData) {
        return __awaiter(this, void 0, void 0, function () {
            var hdr, rq;
            return __generator(this, function (_a) {
                hdr = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
                hdr.append('Content-Type', 'application/json');
                rq = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */];
                rq.headers = hdr;
                return [2 /*return*/, this.http.post(this.env + "/api.php?q=manual_add_employee", { emp: uData }, rq).toPromise()];
            });
        });
    };
    DbProvider.prototype.newCompany = function (uData) {
        return __awaiter(this, void 0, void 0, function () {
            var hdr, rq;
            return __generator(this, function (_a) {
                hdr = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
                hdr.append('Content-Type', 'application/json');
                rq = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */];
                rq.headers = hdr;
                return [2 /*return*/, this.http.post(this.env + "/api.php?q=new_company", uData, rq).toPromise()];
            });
        });
    };
    DbProvider.prototype.checkTin = function (uData) {
        return __awaiter(this, void 0, void 0, function () {
            var hdr, rq;
            return __generator(this, function (_a) {
                hdr = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
                hdr.append('Content-Type', 'application/json');
                rq = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */];
                rq.headers = hdr;
                return [2 /*return*/, this.http.post(this.env + "/api.php?q=get_by_tin", uData, rq).toPromise()];
            });
        });
    };
    DbProvider.prototype.createNewLoan = function (uData) {
        var hdr = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        hdr.append('Content-Type', 'application/json');
        var rq = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */];
        rq.headers = hdr;
        return (this.http.post(this.env + "/api.php?q=applyloan", { loan: uData }, rq).toPromise());
    };
    DbProvider.prototype.addSchedofPayment = function (uData, loanID) {
        return __awaiter(this, void 0, void 0, function () {
            var hdr, rq;
            return __generator(this, function (_a) {
                hdr = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
                hdr.append('Content-Type', 'application/json');
                rq = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */];
                rq.headers = hdr;
                return [2 /*return*/, this.http.post(this.env + "/api.php?q=add_payment_sched", { paysched: uData, id: loanID }, rq).toPromise()];
            });
        });
    };
    DbProvider.prototype.getSchedofPayment = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var hdr, rq, load;
            return __generator(this, function (_a) {
                hdr = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
                hdr.append('Content-Type', 'application/json');
                rq = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */];
                rq.headers = hdr;
                load = this.loader.create({
                    spinner: 'crescent',
                    showBackdrop: true,
                    content: "Loading Data...",
                    dismissOnPageChange: true
                });
                load.present();
                return [2 /*return*/, this.http.post(this.env + "/api.php?q=get_payment_sched_by_id", { loanID: id }, rq)
                        .toPromise()
                        .then(function (res) {
                        var r = Array.from(res.json());
                        var x = r.map(function (a) {
                            var b = {
                                paymentDate: a['payDate'].split(" ")[0],
                                paymentNum: a['payCount'],
                                amt: a['payAmount'],
                                bal: a['balance']
                            };
                            return b;
                        });
                        load.dismiss();
                        return x;
                    })];
            });
        });
    };
    DbProvider.prototype.getSOAByDate = function (date1, date2, cid) {
        if (date1 === void 0) { date1 = '1971-01-01'; }
        if (date2 === void 0) { date2 = this.dtNow; }
        if (cid === void 0) { cid = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var hdr, rq, load, params;
            return __generator(this, function (_a) {
                hdr = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
                hdr.append('Content-Type', 'application/json');
                rq = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */];
                rq.headers = hdr;
                load = this.loader.create({
                    spinner: 'crescent',
                    showBackdrop: true,
                    content: "Loading Data...",
                    dismissOnPageChange: true
                });
                load.present();
                params = {
                    date1: date1,
                    date2: date2,
                    cid: cid
                };
                return [2 /*return*/, this.http.post(this.env + "/api.php?q=get_soa_by_date", { soa: params }, rq)
                        .toPromise()
                        .then(function (res) {
                        load.dismiss();
                        return Promise.resolve(res);
                    })];
            });
        });
    };
    DbProvider.prototype.getSOAPaySchedByDate = function (date, cid) {
        if (cid === void 0) { cid = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var hdr, rq, load, params;
            return __generator(this, function (_a) {
                hdr = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
                hdr.append('Content-Type', 'application/json');
                rq = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */];
                rq.headers = hdr;
                load = this.loader.create({
                    spinner: 'crescent',
                    showBackdrop: true,
                    content: "Loading Data...",
                    dismissOnPageChange: true
                });
                load.present();
                params = {
                    date: date,
                    cid: cid
                };
                return [2 /*return*/, this.http.post(this.env + "/api.php?q=get_soa_details_by_date", { soa: params }, rq)
                        .toPromise()
                        .then(function (res) {
                        load.dismiss();
                        return Promise.resolve(res);
                    })];
            });
        });
    };
    DbProvider.prototype.getLoansByStatus = function (stat) {
        var hdr = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        hdr.append('Content-Type', 'application/json');
        var rq = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */];
        rq.headers = hdr;
        return (this.http.post(this.env + "/api.php?q=hr_get_loan_by_status", { status: stat }, rq)
            .toPromise()
            .then(function (res) {
            //console.log(res.json());
            return res.json();
        })
            .catch(function (err) {
            console.warn(err);
            return {};
        }));
    };
    DbProvider.prototype.getEmpLoansByStatus = function (stat) {
        var hdr = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        hdr.append('Content-Type', 'application/json');
        var rq = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */];
        rq.headers = hdr;
        var masterId = JSON.parse(localStorage.userData).master_id;
        return (this.http.post(this.env + "/api.php?q=get_loan_by_status", { status: stat, id: masterId }, rq)
            .toPromise()
            .then(function (res) {
            //console.log(res.json());
            return res.json();
        })
            .catch(function (err) {
            console.warn(err);
            return {};
        }));
    };
    DbProvider.prototype.updateLoanStatus = function (stat, id) {
        var hdr = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        hdr.append('Content-Type', 'application/json');
        var rq = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */];
        rq.headers = hdr;
        return (this.http.post(this.env + "/api.php?q=update_loan_status", { status: stat, id: id }, rq)
            .toPromise()
            .then(function (res) {
            //console.log(res.text());
            return res.text();
        })
            .catch(function (err) {
            console.warn(err);
            return 0;
        }));
    };
    DbProvider.prototype.getCompanyByID = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var hdr, rq;
            return __generator(this, function (_a) {
                hdr = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
                hdr.append('Content-Type', 'application/json');
                rq = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */];
                rq.headers = hdr;
                return [2 /*return*/, (this.http.post(this.env + "/api.php?q=get_company_by_id", { cid: id }, rq)
                        .toPromise()
                        .then(function (res) {
                        //console.log(res.json());
                        return res.json();
                    })
                        .catch(function (err) {
                        console.warn(err);
                        return {};
                    }))];
            });
        });
    };
    DbProvider.prototype.checkUsernameIfExists = function (uname) {
        return __awaiter(this, void 0, void 0, function () {
            var hdr, rq;
            return __generator(this, function (_a) {
                hdr = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
                hdr.append('Content-Type', 'application/json');
                rq = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */];
                rq.headers = hdr;
                return [2 /*return*/, (this.http.post(this.env + "/api.php?q=check_user_exists", { uname: uname }, rq)
                        .toPromise()
                        .then(function (res) {
                        console.log(res.text());
                        if (res.text() == "") {
                            return true;
                        }
                        else {
                            return false;
                        }
                    })
                        .catch(function (err) {
                        console.warn(err);
                        return {};
                    }))];
            });
        });
    };
    DbProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */]])
    ], DbProvider);
    return DbProvider;
}());

//# sourceMappingURL=db.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupTinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_db_db__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ext_config__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Http, Headers, RequestOptions } from '@angular/http';


var SignupTinPage = /** @class */ (function () {
    function SignupTinPage(navCtrl, navParams, loader, db, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loader = loader;
        this.db = db;
        this.toast = toast;
        this.b = { day: '01', month: '01', year: 1971 };
        this.birth = new Date("1971-01-01").toISOString();
        this.isMobile = mobilecheck();
        this.tinValid = true;
        this.ccode = "";
        this.day = [];
        this.month = [];
        this.year = [];
        this.env = __WEBPACK_IMPORTED_MODULE_5__ext_config__["a" /* config */][location.origin].backend;
        this.months = { "01": "Jan", "02": "Feb", "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", "12": "Dec" };
        for (var i = 1; i <= 12; i++) {
            var st = (i < 10 ? "0" + i.toString() : i.toString());
            this.month.push(st);
        }
        for (var i = 1; i <= 31; i++) {
            var st = (i < 10 ? "0" + i.toString() : i.toString());
            this.day.push(st);
        }
        for (var i = 1920; i <= parseInt(new Date().getFullYear().toString()); i++) {
            var st = (i < 10 ? "0" + i.toString() : i.toString());
            this.year.push(st);
        }
    }
    SignupTinPage.prototype.ionViewDidLoad = function () {
        console.log(this.env, __WEBPACK_IMPORTED_MODULE_5__ext_config__["a" /* config */]);
    };
    SignupTinPage.prototype.verify = function () {
        var self = this;
        this.load = this.loader.create({
            spinner: 'crescent',
            showBackdrop: true,
            content: "Processing...",
            dismissOnPageChange: true
        });
        this.load.present();
        if (!this.isMobile)
            this.birthday = this.b;
        var brt = this.birthday.year + "-" + ("0" + this.birthday.month).slice(-2) + "-" + ("0" + this.birthday.day).slice(-2);
        //let uData = {tin:this.tin,ccode:this.ccode,birth:brt};
        var uData = { tin: this.tin, birth: brt };
        //this.http.post(`${this.env}/api.php?q=get_by_tin`,uData, rq).toPromise()
        this.db.checkTin(uData)
            .then(function (res) {
            var rs = res.json();
            if (rs[0]) {
                if (rs[0].hasOwnProperty('error')) {
                    var tst = self.toast.create({
                        message: "User has already signed up. Please login instead.",
                        cssClass: "fail",
                        duration: 3000,
                        dismissOnPageChange: true,
                        position: "top"
                    });
                    tst.present();
                }
                else {
                    self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__["a" /* SignUpPage */], { data: rs[0] }, { animate: true, direction: "top" });
                }
            }
            else {
                var tst = self.toast.create({
                    message: "Signup failed. Please check your credentials and try again.",
                    cssClass: "fail",
                    duration: 3000,
                    dismissOnPageChange: true,
                    position: "top"
                });
                tst.present();
            }
            self.load.dismiss();
        })
            .catch(function (err) {
            self.load.dismiss();
            console.warn(err);
            var tst = self.toast.create({
                message: "Signup failed. Please check your credentials and try again.",
                cssClass: "fail",
                duration: 3000,
                dismissOnPageChange: true,
                position: "top"
            });
            tst.present();
        });
    };
    SignupTinPage.prototype.ch = function (event) {
        var cls = Array.from(event.target.classList);
        this.tinValid = cls.includes("ng-invalid") && cls.includes("ng-dirty");
    };
    SignupTinPage.prototype.toHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], {}, { animate: true, direction: "forward" });
    };
    SignupTinPage.prototype.reorient = function ($event) {
        this.isMobile = mobilecheck();
    };
    SignupTinPage.prototype.ev = function (e) {
        this.birthday = e;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('tin'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SignupTinPage.prototype, "input_tin", void 0);
    SignupTinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup-tin',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\signup-tin\signup-tin.html"*/'<ion-content (window:resize)="reorient($event)">\n	<ion-fab top left *ngIf="!isMobile">\n		<button ion-fab (tap)="toHome()"></button>\n		<!--ion-fab-list side="right">\n		   <button ion-fab mini>Button</button>\n		   <button ion-fab mini>Button 2</button>\n		</ion-fab-list-->\n	 </ion-fab>\n\n	 <section class="main" [ngClass]="{\'mobile\':isMobile}">\n	 	<form name="employee-data">\n		 	<span class="header" *ngIf = "isMobile">\n		 		<button ion-button (tap)="toHome()"></button>\n		 	</span>\n	 		<h2>Enter your Details</h2>\n	 		<ion-row>\n	 			<p class="label">\n	 				Tax Identification Number (TIN)\n	 			</p>\n	 			<span class="content" [ngClass] = "{\'err\':tinValid}">\n	 				<input (keyup)="ch($event)" type="number" name="tin" [(ngModel)] = "tin" pattern="[0-9]{9,}" placeholder="000000000" min="0" minlength="9" required="true" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Birthday\n	 			</p>\n	 			<span class="content month">\n	 				<ion-datetime *ngIf="isMobile" name="month" (ionChange)="ev($event)" pickerFormat="MMM" displayFormat="MMM" [(ngModel)] = "birth"></ion-datetime>\n	 				<select *ngIf="!isMobile" name="month" [(ngModel)] = "b.month">\n	 					<option *ngFor = "let m of month; let i=index" [value]="m">{{months[m]}}</option>\n	 				</select>\n	 			</span>\n	 			<span class="content day">\n	 				<ion-datetime *ngIf="isMobile" name="day" (ionChange)="ev($event)" pickerFormat="DD" displayFormat="DD" [(ngModel)] = "birth"></ion-datetime>\n	 				<select *ngIf="!isMobile" name="day" [(ngModel)] = "b.day">\n	 					<option *ngFor = "let d of day; let i=index" [value]="d">{{d}}</option>\n	 				</select>\n	 			</span>\n	 			<span class="content year">\n	 				<ion-datetime *ngIf="isMobile" name="year" pickerFormat="YYYY" displayFormat="YYYY" [(ngModel)] = "birth"></ion-datetime>\n	 				<select *ngIf="!isMobile" name="year" [(ngModel)] = "b.year">\n	 					<option *ngFor = "let y of year; let i=index" [value]="y">{{y}}</option>\n	 				</select>\n	 			</span>\n	 		</ion-row>\n	 		<!--ion-row>\n	 			<p class="label">\n	 				Company Code\n	 			</p>\n	 			<span class="content" [ngClass] = "{\'err\':(ccode.length < 1)}">\n	 				<input type="text" name="ccode" [(ngModel)] = "ccode" placeholder="abc123" required="true" />\n	 			</span>\n	 		</ion-row-->\n	 		<ion-row>\n	 			<button ion-button (tap)="verify()" [disabled]="tinValid">Submit</button>\n	 		</ion-row>\n	 	</form>\n	 	<foot></foot>\n	 </section>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\signup-tin\signup-tin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], SignupTinPage);
    return SignupTinPage;
}());

//# sourceMappingURL=signup-tin.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loans_loans__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_db_db__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HrDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HrDashboardPage = /** @class */ (function () {
    function HrDashboardPage(navCtrl, navParams, menu, db, loader) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.db = db;
        this.loader = loader;
        this.deets = "<a href='/#/hr/loans'>Details&nbsp;&gt;</a>";
        this.deets2 = "2018";
        this.deets3 = "&nbsp;";
        this.credits = [];
        this.hdrTitles = {
            'LoanID': 'Transaction ID',
            'applicationDate': 'Date of Inception',
            'employeeName': 'Employee Name',
            'principal': 'Amount',
            'purpose': 'Purpose',
        };
        this.sampKeys = ["LoanID", "applicationDate", "employeeName", "principal", "purpose"];
        this.formats = {
            'principal': 'currency'
        };
    }
    HrDashboardPage.prototype.ionViewDidEnter = function () {
        var self = this;
        this.menu.close();
        localStorage.page = 'dashboard';
        var load = this.loader.create({
            spinner: 'crescent',
            dismissOnPageChange: true,
            showBackdrop: true,
            content: "Loading Data...",
            enableBackdropDismiss: false
        });
        load.present();
        this.db.getLoansByStatus(1).then(function (res) {
            return res;
        }).then(function (r) {
            self.db.getLoansByStatus(2).then(function (rs) {
                self.credits = r.concat(rs);
                load.dismiss().catch(function () { });
            });
        });
    };
    HrDashboardPage.prototype.ionViewWillLeave = function () {
    };
    HrDashboardPage.prototype.isMobile = function () {
        return localStorage.view == "mobile";
    };
    HrDashboardPage.prototype.toCreditSummary = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__loans_loans__["a" /* LoansPage */], {}, { animate: true, direction: "top" });
    };
    HrDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hr-dashboard',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\hr-dashboard\hr-dashboard.html"*/'<ion-content [ngClass]="{\'mobile\':isMobile()}">\n	<top-bar></top-bar>\n	<side-bar *ngIf = "!isMobile()" [highlights]="\'dashboard\'"></side-bar>\n\n	<section class="main-content">\n		<h2 class="c-code">Company Code: 002</h2>\n\n		<ion-row>\n			<ion-col col-4 class="module">\n				<submodule [title]="\'Total Amount of Active Employee Credit Portfolio\'" [footerD]="deets">\n					<b style="font-size:24px;display:table;margin:auto;">₱ 37,000.00</b>\n				</submodule>\n			</ion-col>\n			<ion-col col-4 class="module">\n				<submodule [title]="\'Total Times Credit Availed\'" [footerD]="deets2">\n					<p style="text-align:center;margin:0 auto 1vh">2</p>\n					<p style="text-align:center;font-weight:bold;">Total number of credit availments since company was signed up</p>\n				</submodule>\n			</ion-col>\n			<ion-col col-4 class="module">\n				<submodule [title]="\'Employee Summary\'" [footerD]="deets3">\n					<p style="text-align:center;font-weight:bolder;margin:0 auto 1vh">Total</p>\n					<p style="text-align:center;margin:0 auto 1vh">4</p>\n					<p style="text-align:center;font-weight:bolder;margin:0 auto 1vh">Signed up</p>\n					<p style="text-align:center;margin:0 auto">3</p>\n				</submodule>\n			</ion-col>\n		</ion-row>\n		<br/>\n		<ion-row>\n			<ion-col col-12>\n				<submodule [title]="\'Employee Credit Availment Summary\'">\n					<sortable-table *ngIf="credits.length > 0" [data]="credits" [headers]="sampKeys" [formats]="formats" [header_titles]="hdrTitles"></sortable-table>\n					<p class="no-data" *ngIf="credits.length == 0">\n						No data\n					</p>\n					<!--ion-row style="width:100%;" *ngIf="!isMobile">\n						<ion-row style="width:100%;">\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;" col-2>Transaction ID</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;" col-2>Date of Inception</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;" col-3>Employee Name</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;" col-2>Amount Availed</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;" col-3>Purpose</ion-col>\n						</ion-row>\n						<ion-row style="width:100%; box-shadow: 0 0 3px 0 #333" class="data" *ngFor = "let dt of credits; let i = index;">\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;" col-2>{{dt?.transID}}</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;" col-2>{{dt?.inceptionDate}}</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;" col-3>{{dt?.employeeName}}</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;" col-2>{{dt?.amt}}</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;" col-3>{{dt?.purpose}}</ion-col>\n						</ion-row>\n					</ion-row>\n					<ion-row style="width:100%;" *ngIf="isMobile">\n						<ion-row style="width:100%; box-shadow: 0 0 3px 0 #333" class="data" *ngFor = "let dt of credits; let i = index;">\n							<ion-row>\n								<ion-col>\n									<p class="label">Transaction ID</p>\n									{{dt?.transID}}\n								</ion-col>\n								<ion-col>\n									<p class="label">Date of Inception</p>\n									{{dt?.inceptionDate}}\n								</ion-col>\n								<ion-col col-5>\n									<p class="label">Employee Name</p>\n									{{dt?.employeeName}}\n								</ion-col>\n							</ion-row>\n							<ion-row>\n								<ion-col col-6>\n									<p class="label">Amount Availed</p>\n									{{dt?.amt}}\n								</ion-col>\n								<ion-col col-6>\n									<p class="label">Purpose</p>\n									{{dt?.purpose}}\n								</ion-col>\n							</ion-row>\n						</ion-row>\n					</ion-row-->\n				</submodule>\n			</ion-col>\n		</ion-row>\n		<foot></foot>\n		\n	</section>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\hr-dashboard\hr-dashboard.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_db_db__["a" /* DbProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], HrDashboardPage);
    return HrDashboardPage;
}());

//# sourceMappingURL=hr-dashboard.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisclosureStatementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms_modal_terms_modal__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DisclosureStatementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DisclosureStatementPage = /** @class */ (function () {
    function DisclosureStatementPage(navCtrl, navParams, view, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.modal = modal;
        this.loan = this.navParams.get('data');
        this.payments = this.navParams.get('payments');
        this.user = this.loan.userData;
        console.log(this.navParams.data);
    }
    DisclosureStatementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DisclosureStatementPage');
    };
    DisclosureStatementPage.prototype.close = function () {
        this.view.dismiss();
    };
    DisclosureStatementPage.prototype.isMobile = function () {
        return localStorage.view == "mobile";
    };
    DisclosureStatementPage.prototype.openTermsModal = function () {
        var mod = this.modal.create(__WEBPACK_IMPORTED_MODULE_2__terms_modal_terms_modal__["a" /* TermsModalPage */], {}, { cssClass: "whitemodal" });
        mod.present();
    };
    DisclosureStatementPage.prototype.print = function () {
        window.print();
    };
    DisclosureStatementPage.prototype._calculateAge = function (birthday) {
        var today = new Date();
        var birthDate = new Date(birthday);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };
    DisclosureStatementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-disclosure-statement',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\disclosure-statement\disclosure-statement.html"*/'<!--\n  Generated template for the DisclosureStatementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><ion-icon style="margin:0 1vw;" name="ios-information-circle-outline"></ion-icon>Disclosure Statement\n  	<!--ion-icon (tap)="close()" name="ios-close" style="float:right;"></ion-icon--></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<section class="content" [ngClass]="{\'mobile\':isMobile()}">\n		<span class="header">\n			<div class="title">\n				<ion-icon name="md-information-circle"></ion-icon>\n				BXB Disclosure and Payment Schedule\n			</div>\n\n			<button class="print" ion-button (tap)="print()">\n				<ion-icon name="md-print"></ion-icon>\n				Print\n			</button>\n		</span>\n\n		<div class="body">\n			<ion-row>\n				<ion-col class="bundle">\n					<ion-row>\n						<ion-col class="label">Principal</ion-col>\n						<ion-col class="data">{{loan?.principal | currency:\'PHP\':\'symbol-narrow\':\'1.2-2\'}}</ion-col>\n					</ion-row>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col class="bundle">\n					<ion-row>\n						<ion-col class="label">UDI</ion-col>\n						<ion-col class="data">{{loan?.loan.udi | currency:\'PHP\':\'symbol-narrow\':\'1.2-2\'}}</ion-col>\n					</ion-row>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col class="bundle">\n					<ion-row>\n						<ion-col class="label">Gross Cash Out</ion-col>\n						<ion-col class="data">{{loan?.principal | currency:\'PHP\':\'symbol-narrow\':\'1.2-2\'}}</ion-col>\n					</ion-row>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col class="bundle">\n					<ion-row>\n						<ion-col class="label">First Name</ion-col>\n						<ion-col class="data">{{user?.Name_First}}</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col class="label">Date</ion-col>\n						<ion-col class="data">{{loan?.applicationDate}}</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col class="label">Birthday</ion-col>\n						<ion-col class="data">{{user?.Birthday}}</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col class="label">Type</ion-col>\n						<ion-col class="data">{{user?.Type}}</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col class="label">Payroll Account No.</ion-col>\n						<ion-col class="data">{{user?.Payroll_Account}}</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col class="label">Term</ion-col>\n						<ion-col class="data">{{loan?.term}}</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col class="label">Transaction No.</ion-col>\n						<ion-col class="data">{{loan?.LoanID}}</ion-col>\n					</ion-row>\n				</ion-col>\n				<ion-col class="bundle">\n					<ion-row>\n						<ion-col class="label">Last Name</ion-col>\n						<ion-col class="data">{{user?.Name_Last}}</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col class="label">Company ID</ion-col>\n						<ion-col class="data">{{user?.master_id}}</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col class="label">Age</ion-col>\n						<ion-col class="data">{{_calculateAge(user?.Birthday)}}</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col class="label">Bank</ion-col>\n						<ion-col class="data">{{user?.Bank_Name}}</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col class="label">Type</ion-col>\n						<ion-col class="data">{{loan?.term}} Paydays</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col class="label">Rate</ion-col>\n						<ion-col class="data">{{loan?.interest*100 | number:\'1.0-2\'}} %</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col class="label">Member ID</ion-col>\n						<ion-col class="data">{{user?.master_id}}</ion-col>\n					</ion-row>\n				</ion-col>\n			</ion-row>\n		</div>\n\n		<!-- TO DO: Additional computations -->\n\n		<span class="header">\n			<div class="title">\n				<ion-icon name="md-calendar"></ion-icon>\n				Schedule of Payment\n			</div>\n		</span>\n\n		<div class="body">\n			<ion-row>\n				<ion-col class="bundle">\n					<ion-row>\n						<ion-col class="label">TOTAL</ion-col>\n						<ion-col class="data">{{loan?.loan.totalPayment | currency:\'PHP\':\'symbol-narrow\':\'1.2-2\' }}</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col col-3>\n							Date of Payment\n						</ion-col>\n						<ion-col col-3>\n							Number of Payment\n						</ion-col>\n						<ion-col col-3>\n							Amount\n						</ion-col>\n						<ion-col col-3>\n							Balance\n						</ion-col>\n					</ion-row>\n					<ion-row *ngFor = "let payment of payments; let i = index;">\n						<ion-col col-3>\n							{{payment?.paymentDate}}\n						</ion-col>\n						<ion-col col-3>\n							{{payment?.paymentNum}}\n						</ion-col>\n						<ion-col col-3>\n							{{payment?.amt | number : \'1.2-2\'}}\n						</ion-col>\n						<ion-col col-3>\n							{{payment?.bal | number : \'1.2-2\'}}\n						</ion-col>\n					</ion-row>\n				</ion-col>\n			</ion-row>\n		</div>\n\n		<p class="disclaimer">\n			To view the terms and conditions of this availment you may click <a class="link" (tap)="openTermsModal()">here</a>\n		</p>\n	</section>\n</ion-content>\n<ion-footer>\n	<button ion-button (tap)="close()">\n		<ion-icon name="ios-close-circle-outline"></ion-icon>\n		Close\n	</button>\n</ion-footer>'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\disclosure-statement\disclosure-statement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], DisclosureStatementPage);
    return DisclosureStatementPage;
}());

//# sourceMappingURL=disclosure-statement.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpDisclosureStatementModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms_modal_terms_modal__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmpDisclosureStatementModalPage = /** @class */ (function () {
    function EmpDisclosureStatementModalPage(navCtrl, navParams, view, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.modal = modal;
        this.isMobile = mobilecheck();
        this.loan = this.navParams.get('data');
        this.payments = this.navParams.get('payments');
        this.user = this.navParams.get('user');
        console.log(this.loan);
    }
    EmpDisclosureStatementModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DisclosureStatementPage');
        this.loan.totalDeductions = this.loan.processingFund + this.loan.collectionFund + this.loan.docFee;
        this.loan.netCashout = this.loan.amt - this.loan.totalDeductions;
    };
    EmpDisclosureStatementModalPage.prototype.close = function () {
        this.view.dismiss();
    };
    EmpDisclosureStatementModalPage.prototype.reorient = function ($event) {
        this.isMobile = mobilecheck();
    };
    EmpDisclosureStatementModalPage.prototype.openTermsModal = function () {
        var mod = this.modal.create(__WEBPACK_IMPORTED_MODULE_2__terms_modal_terms_modal__["a" /* TermsModalPage */], {}, { cssClass: "whitemodal" });
        mod.present();
    };
    EmpDisclosureStatementModalPage.prototype.print = function () {
        window.print();
    };
    EmpDisclosureStatementModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-emp-disclosure-statement-modal',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\emp-disclosure-statement-modal\emp-disclosure-statement-modal.html"*/'<!--\n  Generated template for the DisclosureStatementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><ion-icon style="margin:0 1vw;" name="ios-information-circle-outline"></ion-icon>Disclosure Statement\n  	<!--ion-icon (tap)="close()" name="ios-close" style="float:right;"></ion-icon--></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content (window:resize)="reorient($event)">\n\n	<section class="content" [ngClass]="{\'mobile\':isMobile}">\n		<span class="header">\n			<div class="title">\n				<ion-icon name="md-information-circle"></ion-icon>\n				BXB Disclosure and Payment Schedule\n			</div>\n\n			<button class="print" ion-button (tap)="print()">\n				<ion-icon name="md-print"></ion-icon>\n				Print\n			</button>\n		</span>\n\n		<div class="body">\n			<ion-row>\n				<ion-col class="bundle">\n					<ion-row>\n						<ion-col class="label">Principal</ion-col>\n						<ion-col class="data">{{loan?.amt | number:\'1.2-2\'}}</ion-col>\n					</ion-row>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col class="bundle">\n					<ion-row>\n						<ion-col class="label">Interest</ion-col>\n						<ion-col class="data">{{loan?.udi | number:\'1.2-2\'}}</ion-col>\n					</ion-row>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col class="bundle">\n					<ion-row>\n						<ion-col class="label">Gross Cash Out</ion-col>\n						<ion-col class="data">{{loan?.grossCashout | number:\'1.2-2\'}}</ion-col>\n					</ion-row>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col class="bundle">\n					<ion-row>\n						<ion-col style="font-weight:bolder" col-4>ADD</ion-col>\n						<ion-col style="font-weight:bolder" col-5>Less</ion-col>\n						<ion-col style="font-weight:bolder;white-space: nowrap;" col-3>Reference</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col col-4>&nbsp;</ion-col>\n						<ion-col col-5>Processing Fund\n							<p>{{loan?.processingFund | number:\'1.2-2\'}}</p>\n						</ion-col>\n						<ion-col col-3>&nbsp;</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col col-4>&nbsp;</ion-col>\n						<ion-col col-5>Collection Fund\n							<p>{{loan?.collectionFund | number:\'1.2-2\'}}</p>\n						</ion-col>\n						<ion-col col-3>&nbsp;</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col col-4>&nbsp;</ion-col>\n						<ion-col col-5>Doc. Fee\n							<p>{{loan?.docFee | number:\'1.2-2\'}}</p>\n						</ion-col>\n						<ion-col col-3>&nbsp;</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col col-4>&nbsp;</ion-col>\n						<ion-col col-5>Total Deductions\n							<p>{{loan?.totalDeductions | number:\'1.2-2\'}}</p>\n						</ion-col>\n						<ion-col col-3>&nbsp;</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col col-12><b class="label">NET CASH OUT</b>{{loan?.netCashout | number:\'1.2-2\'}}</ion-col>\n					</ion-row>\n				</ion-col>\n			</ion-row>\n		</div>\n\n		<!-- TO DO: Additional computations -->\n\n		<span class="header">\n			<div class="title">\n				<ion-icon name="md-calendar"></ion-icon>\n				Schedule of Payment\n			</div>\n		</span>\n\n		<div class="body">\n			<ion-row>\n				<ion-col class="bundle">\n					<ion-row>\n						<ion-col class="label">TOTAL</ion-col>\n						<ion-col class="data">{{loan?.totalPayment | currency:\'PHP\':\'symbol-narrow\':\'1.2-2\'}}</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col col-3>\n							Date of Payment\n						</ion-col>\n						<ion-col col-3>\n							Number of Payment\n						</ion-col>\n						<ion-col col-3>\n							Amount\n						</ion-col>\n						<ion-col col-3>\n							Balance\n						</ion-col>\n					</ion-row>\n					<ion-row *ngFor = "let payment of payments; let i = index;">\n						<ion-col col-3>\n							{{payment?.paymentDate}}\n						</ion-col>\n						<ion-col col-3>\n							{{payment?.paymentNum}}\n						</ion-col>\n						<ion-col col-3>\n							{{payment?.amt | number : \'1.2-2\'}}\n						</ion-col>\n						<ion-col col-3>\n							{{payment?.bal | number : \'1.2-2\'}}\n						</ion-col>\n					</ion-row>\n				</ion-col>\n			</ion-row>\n		</div>\n\n		<p class="disclaimer">\n			To view the terms and conditions of this availment you may click <a class="link" (tap)="openTermsModal()">here</a>\n		</p>\n	</section>\n</ion-content>\n<ion-footer>\n	<button ion-button (tap)="close()">\n		<ion-icon name="ios-close-circle-outline"></ion-icon>\n		Close\n	</button>\n</ion-footer>'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\emp-disclosure-statement-modal\emp-disclosure-statement-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], EmpDisclosureStatementModalPage);
    return EmpDisclosureStatementModalPage;
}());

//# sourceMappingURL=emp-disclosure-statement-modal.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loans_loans__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



;
var SuperDashboardPage = /** @class */ (function () {
    function SuperDashboardPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.deets = "<a href='/#/loans'>Details&nbsp;&gt;</a>";
        this.isMobile = mobilecheck();
        this.companies = [{
                companyName: "6805 Ayala Avenue Condominium Corporation",
                companyCode: "001",
                memberEmployees: 13,
                activeEmployees: 12,
                totalCreditAvailment: 16,
                principalOutstanding: 69141.67,
                maxPortfolio: 177356.02,
                riskRatio: 38.98,
                membershipYears: 0
            }, {
                companyName: "BXB Employee Solutions Corp",
                companyCode: "002",
                memberEmployees: 5,
                activeEmployees: 4,
                totalCreditAvailment: 4,
                principalOutstanding: 97000,
                maxPortfolio: 200000,
                riskRatio: 48.5,
                membershipYears: 0
            }, {
                companyName: "Thirty One Digital Media Solutions Inc.",
                companyCode: "31D",
                memberEmployees: 26,
                activeEmployees: 9,
                totalCreditAvailment: 6,
                principalOutstanding: 64000.00,
                maxPortfolio: 311000.00,
                riskRatio: 20.58,
                membershipYears: 0
            }, {
                companyName: "test company",
                companyCode: "test1",
                memberEmployees: 26,
                activeEmployees: 0,
                totalCreditAvailment: 0,
                principalOutstanding: 0.00,
                maxPortfolio: 0.00,
                riskRatio: 0.00,
                membershipYears: 0
            }, {
                companyName: "Mermida's Company",
                companyCode: "123",
                memberEmployees: 5,
                activeEmployees: 1,
                totalCreditAvailment: 0,
                principalOutstanding: 0.00,
                maxPortfolio: 50000.00,
                riskRatio: 0.00,
                membershipYears: 0
            }];
        this.hdrTitlesC = {
            companyName: "Company Name",
            companyCode: "Company Code",
            memberEmployees: "Member Employees",
            activeEmployees: "Active Employees",
            totalCreditAvailment: "Total Credit Availment",
            principalOutstanding: "Total Principal Outstanding",
            maxPortfolio: "Company Maximum Portfolio",
            riskRatio: "Risk Ratio",
            membershipYears: "Years of Membership"
        };
        this.sampKeysC = Object.keys(this.companies[0]);
        this.formatsC = {
            'principalOutstanding': 'number',
            'maxPortfolio': 'number',
            'riskRatio': 'number'
        };
        this.bxbPortfolio = {
            numberOfCompanies: 6,
            totalCreditAvailment: 102000,
            companiesByIndustry: 0,
            companiesByExposure: 0,
            actualCompanyExposure: 240141.67,
            nplRatio: 0,
            npl: 0,
            borrowersByGender: 0
        };
    }
    SuperDashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SuperDashboardPage');
    };
    SuperDashboardPage.prototype.ionViewDidEnter = function () {
        this.menu.close();
        localStorage.page = 'dashboard';
    };
    SuperDashboardPage.prototype.ionViewWillLeave = function () {
    };
    SuperDashboardPage.prototype.reorient = function ($event) {
        this.isMobile = mobilecheck();
    };
    SuperDashboardPage.prototype.toCreditSummary = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__loans_loans__["a" /* LoansPage */], {}, { animate: true, direction: "top" });
    };
    SuperDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-super-dashboard',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\super-dashboard\super-dashboard.html"*/'<ion-content (window:resize)="reorient($event)" [ngClass]="{\'mobile\':isMobile}">\n	<top-bar></top-bar>\n	<side-bar *ngIf = "!isMobile" [highlights]="\'dashboard\'"></side-bar>\n\n	<section class="main-content">\n\n		<ion-row>\n			<ion-col col-6 class="module">\n				<submodule [title]="\'Credit Availments for Approval\'" [footerD]="deets">\n					<p style="font-size:24px;display:table;margin:auto;color:red">1 <b style="color:gray;">pending</b>\n					</p>\n				</submodule>\n			</ion-col>\n		</ion-row>\n		<br/>\n		<ion-row>\n			<ion-col col-12>\n				<submodule [title]="\'Companies Summary\'">\n\n					<sortable-table [data]="companies" [headers]="sampKeysC" [formats]="formatsC" [header_titles]="hdrTitlesC"></sortable-table>\n					<!--ion-row style="width:100%;" *ngIf="!isMobile">\n						<ion-row style="width:100%;">\n							<ion-col col-2 style="text-align: center;font-weight:bold;padding:1.5rem;">Company Name</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">Company Code</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">Member Employees</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">Active Employees</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">Total Credit Availment</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">Total Principal Outstanding</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">Company Maximum Portfolio</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">Risk Ratio</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">Years of Membership</ion-col>\n						</ion-row>\n						<ion-row style="width:100%;" class="data" *ngFor = "let c of companies; let i = index;">\n							<ion-col col-2 style="text-align: center;font-weight:bold;padding:1.5rem;">{{c?.companyName}}</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">{{c?.companyCode}}</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">{{c?.memberEmployees}}</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">{{c?.activeEmployees}}</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">{{c?.totalCreditAvailment}}</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">{{c?.principalOutstanding}}</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">{{c?.maxPortfolio}}</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">{{c?.riskRatio}}</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">{{c?.membershipYears}}</ion-col>\n						</ion-row>\n					</ion-row-->\n				</submodule>\n			</ion-col>\n		</ion-row>\n		<br/>\n		<ion-row>\n			<ion-col col-12>\n				<submodule [title]="\'BxB Credit Portfolio Summary\'">\n					<ion-row style="width:100%;" *ngIf="!isMobile">\n						<ion-row style="width:100%;">\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">TOTAL NUMBER OF COMPANIES</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">TOTAL CREDIT AVAILMENT</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">COMPANIES BY INDUSTRY</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">COMPANIES BY EXPOSURE</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">ACTUAL COMPANY EXPOSURE</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">NPL RATIO</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">NPL</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">BORROWERS BY GENDER</ion-col>\n						</ion-row>\n						<ion-row style="width:100%; box-shadow: 0 0 3px 0 #333" class="data">\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">{{bxbPortfolio?.numberOfCompanies}}</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">{{bxbPortfolio?.totalCreditAvailment}}</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">{{bxbPortfolio?.companiesByIndustry}}</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">{{bxbPortfolio?.companiesByExposure}}</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">{{bxbPortfolio?.actualCompanyExposure}}</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">{{bxbPortfolio?.nplRatio}}</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">{{bxbPortfolio?.npl}}</ion-col>\n							<ion-col style="text-align: center;font-weight:bold;padding:1.5rem;">{{bxbPortfolio?.borrowersByGender}}</ion-col>\n						</ion-row>\n					</ion-row>\n				</submodule>\n			</ion-col>\n		</ion-row>\n		\n		<foot></foot>\n	</section>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\super-dashboard\super-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], SuperDashboardPage);
    return SuperDashboardPage;
}());

//# sourceMappingURL=super-dashboard.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ext_config__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navCtrl, navParams, http, loader) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loader = loader;
        this.isMobile = mobilecheck();
        this.env = __WEBPACK_IMPORTED_MODULE_4__ext_config__["a" /* config */][location.origin].backend;
        this.ls = localStorage.lastSent;
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPasswordPage');
    };
    ForgotPasswordPage.prototype.forgotten = function () {
        var _this = this;
        var load = this.loader.create({
            spinner: 'crescent',
            showBackdrop: true,
            content: "Processing...",
            dismissOnPageChange: true
        });
        load.present();
        var hdr = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */];
        hdr.append('Content-Type', 'application/json');
        var rq = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */];
        rq.headers = hdr;
        this.http.post(this.env + "/api.php?q=forgotpassmail", { email: this.email }, rq)
            .toPromise()
            .then(function (res) {
            load.dismiss();
            if (res.status == 200) {
                _this.ls = Date.now();
                localStorage.lastSent = _this.ls;
            }
            else {
                console.warn(res.statusText);
            }
        })
            .catch(function (err) {
            load.dismiss();
            console.warn(err);
        });
    };
    ForgotPasswordPage.prototype.lastSent = function () {
        return (Date.now() >= parseInt(this.ls) + 60000);
    };
    ForgotPasswordPage.prototype.toHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], {}, { animate: true, direction: "forward" });
    };
    ForgotPasswordPage.prototype.reorient = function ($event) {
        this.isMobile = mobilecheck();
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\forgot-password\forgot-password.html"*/'<ion-content (window:resize)="reorient($event)">\n	<ion-fab top left *ngIf="!isMobile">\n		<button ion-fab (tap)="toHome()"></button>\n		<!--ion-fab-list side="right">\n		   <button ion-fab mini>Button</button>\n		   <button ion-fab mini>Button 2</button>\n		</ion-fab-list-->\n	 </ion-fab>\n\n	 <section class="main" [ngClass]="{\'mobile\':isMobile}">\n	 	<form name="employee-data">\n		 	<span class="header" *ngIf = "isMobile">\n		 		<button ion-button (tap)="toHome()"></button>\n		 	</span>\n	 		<h2>Forgot Password</h2>\n	 		<ion-row>\n	 			<p class="label">\n	 				Email\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="email" [(ngModel)] = "email" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<button ion-button (tap)="forgotten()" [disabled] = "!lastSent()">Submit</button>\n	 		</ion-row>\n	 	</form>\n	 	<foot></foot>\n	 </section>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\forgot-password\forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 130;

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLinkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AccountLinkComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AccountLinkComponent = /** @class */ (function () {
    function AccountLinkComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    AccountLinkComponent.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AccountLinkComponent.prototype.goToProfile = function () {
        window.location.href = location.origin + "/#/edit-profile";
    };
    AccountLinkComponent.prototype.logout = function () {
        localStorage.removeItem('accountType');
        localStorage.removeItem('userData');
        this.viewCtrl.dismiss();
        //this.nav.setRoot(LoginPage,{},{animate:true, direction:"forward"});
        window.location.href = location.origin + "/";
    };
    AccountLinkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'account-link',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\components\account-link\account-link.html"*/'<!-- Generated template for the AccountLinkComponent component -->\n<section class="content">\n	<nav>\n		<a class="link" (tap)="goToProfile()">Profile</a>\n		<a class="link" (tap)="logout()">Logout</a>\n	</nav>\n</section>'/*ion-inline-end:"C:\wamp64\www\bxb\src\components\account-link\account-link.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], AccountLinkComponent);
    return AccountLinkComponent;
}());

//# sourceMappingURL=account-link.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the SortableTableComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SortableTableComponent = /** @class */ (function () {
    function SortableTableComponent(cdr) {
        this.cdr = cdr;
        this.acts = [];
        this.t = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */];
        this.h_ctr = [];
        this.sorting = '';
        this.sort_type = false;
        this.expanded = 0;
        this.searched = [];
    }
    SortableTableComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        this.searched = this.data;
        this.cdr.detectChanges();
        this.hdr.forEach(function (i, g) {
            if (parseInt(g.toString()) > 1)
                self.h_ctr.push(g);
        });
    };
    SortableTableComponent.prototype.ngOnChanges = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.searched = this.data;
    };
    SortableTableComponent.prototype.search = function ($event) {
        var _this = this;
        this.expanded = 0;
        var val = $event.target.value.toLowerCase();
        if (val.trim() == "") {
            this.searched = this.data;
        }
        else {
            var lns = this.data.filter(function (a) {
                var cc = _this.hdr.some(function (e, ind) {
                    if (e.indexOf(".") > 0 && _this.nesting(a, e).toString().toLowerCase().indexOf(val) > -1) {
                        return true;
                    }
                    else if (!a.hasOwnProperty(e))
                        return false;
                    if (a[e].toString().toLowerCase().indexOf(val) > -1) {
                        return true;
                    }
                });
                if (cc)
                    return a;
            });
            this.searched = lns;
        }
    };
    SortableTableComponent.prototype.sorter = function (a, e) {
        var _this = this;
        if (e == this.sorting) {
            this.sort_type = !this.sort_type;
        }
        else {
            this.sort_type = false;
        }
        this.sorting = e;
        if (this.frm.hasOwnProperty(e) && this.frm[e] == "nested") {
            if (this.sort_type) {
                return a.sort(function (a, b) {
                    if (_this.nesting(a, e).toString().toLowerCase() < _this.nesting(b, e).toString().toLowerCase())
                        return -1;
                    if (_this.nesting(a, e).toString().toLowerCase() > _this.nesting(b, e).toString().toLowerCase())
                        return 1;
                    return 0;
                });
            }
            else {
                return a.sort(function (a, b) {
                    if (_this.nesting(a, e).toString().toLowerCase() < _this.nesting(b, e).toString().toLowerCase())
                        return 1;
                    if (_this.nesting(a, e).toString().toLowerCase() > _this.nesting(b, e).toString().toLowerCase())
                        return -1;
                    return 0;
                });
            }
        }
        else if (!isNaN(a[0][e] * 1)) {
            if (this.sort_type) {
                return a.sort(function (a, b) {
                    var ax = a[e] * 1;
                    var bx = b[e] * 1;
                    if (ax < bx)
                        return -1;
                    if (ax > bx)
                        return 1;
                    return 0;
                });
            }
            else {
                return a.sort(function (a, b) {
                    var ax = a[e] * 1;
                    var bx = b[e] * 1;
                    if (ax < bx)
                        return 1;
                    if (ax > bx)
                        return -1;
                    return 0;
                });
            }
        }
        else {
            if (this.sort_type) {
                return a.sort(function (a, b) {
                    if (a[e].toString().toLowerCase() < b[e].toString().toLowerCase())
                        return -1;
                    if (a[e].toString().toLowerCase() > b[e].toString().toLowerCase())
                        return 1;
                    return 0;
                });
            }
            else {
                return a.sort(function (a, b) {
                    if (a[e].toString().toLowerCase() < b[e].toString().toLowerCase())
                        return 1;
                    if (a[e].toString().toLowerCase() > b[e].toString().toLowerCase())
                        return -1;
                    return 0;
                });
            }
        }
    };
    SortableTableComponent.prototype.expand = function (i) {
        if (this.expanded == i + 1) {
            this.expanded = 0;
        }
        else {
            this.expanded = i + 1;
        }
    };
    SortableTableComponent.prototype.nesting = function (data, nested) {
        var dt = nested.split(".");
        return data[dt[0]][dt[1]];
    };
    SortableTableComponent.prototype.toJson = function (data) {
        return JSON.stringify(data);
    };
    SortableTableComponent.prototype.emitter = function (i, e) {
        this.t.emit({ index: i, val: e });
    };
    SortableTableComponent.prototype.isMobile = function () {
        return localStorage.view == "mobile";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('data'),
        __metadata("design:type", Array)
    ], SortableTableComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('headers'),
        __metadata("design:type", Array)
    ], SortableTableComponent.prototype, "hdr", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('formats'),
        __metadata("design:type", Array)
    ], SortableTableComponent.prototype, "frm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('fn'),
        __metadata("design:type", Array)
    ], SortableTableComponent.prototype, "fn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('header_titles'),
        __metadata("design:type", Object)
    ], SortableTableComponent.prototype, "hdrTitles", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('actions'),
        __metadata("design:type", Array)
    ], SortableTableComponent.prototype, "acts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])('t'),
        __metadata("design:type", Object)
    ], SortableTableComponent.prototype, "t", void 0);
    SortableTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sortable-table',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\components\sortable-table\sortable-table.html"*/'<span class="search">\n	<ion-icon name="ios-search"></ion-icon>\n	<input type="text" (keyup)="search($event)" placeholder="Search any fields"/>\n</span>\n<ion-grid class="table" id="srt-desktop">\n	<ion-row justify-content-center class="thead header">\n		<ion-col *ngFor="let hd of hdr; let i = index;" (tap)="sorter(searched,hd)" [ngClass]="{\'sorting\':(sorting==hd),\'asc\':sort_type}">\n			{{hdrTitles[hd]}}\n			<ion-icon class="dropdown" name="md-arrow-dropdown"></ion-icon>\n			<ion-icon class="dropup" name="md-arrow-dropup"></ion-icon>\n		</ion-col>\n		<ion-col *ngIf="acts.length > 0">\n			&nbsp;\n		</ion-col>\n		<!--ion-col (tap)="sorter(searched?.pending,\'transID\',false)">\n			Transaction ID\n		</ion-col>\n		<ion-col (tap)="sorter(searched?.pending,\'inceptionDate\',false)">\n			Date of Inception\n		</ion-col>\n		<ion-col (tap)="sorter(searched?.pending,\'creditAvailNumber\',false)">\n			Credit Availment Number\n		</ion-col>\n		<ion-col (tap)="sorter(searched?.pending,\'rate\',false)">\n			Rate\n		</ion-col>\n		<ion-col (tap)="sorter(searched?.pending,\'term\',false)">\n			Term\n		</ion-col>\n		<ion-col (tap)="sorter(searched?.pending,\'amt\',false)">\n			Amount\n		</ion-col>\n		<ion-col (tap)="sorter(searched?.pending,\'purpose\',false)">\n			Purpose\n		</ion-col>\n		<ion-col (tap)="sorter(searched?.pending,\'repaid\',false)">\n			% Repaid\n		</ion-col-->\n	</ion-row>\n	<ion-row justify-content-center class="data" *ngFor = "let rowData of searched | paginate:{ itemsPerPage:10, currentPage: p}; let i = index">\n		<ion-col *ngFor = "let dt of hdr;">\n			<div class="{{dt}}" *ngIf="frm[dt]==\'number\'">{{rowData[dt] | number:\'1.0-2\'}}</div>\n			<div class="{{dt}}" *ngIf="frm[dt]==\'currency\'">{{rowData[dt] | currency:\'PHP\':\'symbol-narrow\':\'1.2-2\'}}</div>\n			<div class="{{dt}}" *ngIf="frm[dt]==\'percent\'">{{(rowData[dt] * 100) | number:\'1.1-2\'}} %</div>\n			<div class="{{dt}}" *ngIf="frm[dt]==\'nested\'">{{nesting(rowData,dt)}}</div>\n			<div class="{{dt}}" *ngIf="frm[dt]==\'textDecorated\'"><b class=\'decorated {{rowData[dt]}}\'>{{rowData[dt]}}</b></div>\n			<div class="{{dt}}" *ngIf="frm[dt]==\'textEvent\'" (tap)="emitter(rowData[dt],toJson(rowData))"><b class=\'decorated clickable {{rowData[dt]}}\'>{{rowData[dt]}}</b></div>\n			<div class="{{dt}}" *ngIf="!frm[dt]">{{rowData[dt]}}</div>\n		</ion-col>\n		<ion-col *ngIf="acts.length > 0">\n			<ion-icon *ngFor = "let a of acts;let nd = index;" id="{{a?.class}}-{{i}}" name="{{a?.icon}}" (tap)="emitter(nd,toJson(rowData))"></ion-icon>\n		</ion-col>\n		<!--ion-col >\n			{{rowData?.transID}}\n		</ion-col>\n		<ion-col >\n			{{rowData?.inceptionDate}}\n		</ion-col>\n		<ion-col >\n			{{rowData?.creditAvailNumber}}\n		</ion-col>\n		<ion-col >\n			{{(rowData?.rate * 100) | number:\'1.1-2\'}} %\n		</ion-col>\n		<ion-col >\n			{{rowData?.term}}\n		</ion-col>\n		<ion-col >\n			{{rowData?.amt | currency:\'PHP\':\'symbol-narrow\':\'1.2-2\'}}\n		</ion-col>\n		<ion-col>\n			{{rowData?.purpose}}\n		</ion-col>\n		<ion-col>\n			{{(rowData?.repaid * 100) | number:\'1.1-2\'}} %\n		</ion-col-->\n	</ion-row>\n	<pagination-controls (pageChange)="p = $event"></pagination-controls>\n</ion-grid>\n<ion-grid class="table" id="srt-mobile">\n	<ion-row style="width:100%;">\n		<ion-col col-12 style="width:100%; box-shadow: 0 0 3px 0 #333" class="data" *ngFor = "let rowData of searched | paginate:{ itemsPerPage:10, currentPage: p}; let i = index;">\n			<ion-row>\n				<ion-col>\n					<p class="label">{{hdrTitles[hdr[0]]}}</p>\n					{{ (frm[hdr[0]]==\'nested\' ? nesting(rowData,hdr[0]) : rowData[hdr[0]]) }}\n				</ion-col>\n				<ion-col>\n					<p class="label">{{hdrTitles[hdr[1]]}}</p>\n					{{ (frm[hdr[1]]==\'nested\' ? nesting(rowData,hdr[1]) : rowData[hdr[1]]) }}\n				</ion-col>\n				<ion-col col-2>\n					<button ion-button (tap)="expand(i)">View</button>\n				</ion-col>\n			</ion-row>\n			<div class="expandable" [ngClass]="{\'expanded\':expanded == (i+1)}">\n				<span class="item" *ngFor="let ind of h_ctr">\n					<p class="title">{{hdrTitles[hdr[ind]]}}</p>\n					<div class="{{hdr[ind]}}" *ngIf="frm[hdr[ind]]==\'number\'">{{rowData[hdr[ind]] | number:\'1.0-2\'}}</div>\n					<div class="{{hdr[ind]}}" *ngIf="frm[hdr[ind]]==\'currency\'">{{rowData[hdr[ind]] | currency:\'PHP\':\'symbol-narrow\':\'1.2-2\'}}</div>\n					<div class="{{hdr[ind]}}" *ngIf="frm[hdr[ind]]==\'percent\'">{{(rowData[hdr[ind]] * 100) | number:\'1.1-2\'}} %</div>\n					<div class="{{hdr[ind]}}" *ngIf="frm[hdr[ind]]==\'nested\'">{{nesting(rowData,hdr[ind])}}</div>\n					<div class="{{hdr[ind]}}" *ngIf="frm[hdr[ind]]==\'textDecorated\'"><b class=\'decorated {{rowData[hdr[ind]]}}\'>{{rowData[hdr[ind]]}}</b></div>\n					<div class="{{hdr[ind]}}" *ngIf="frm[hdr[ind]]==\'textEvent\'" (tap)="emitter(rowData[hdr[ind]],toJson(rowData))"><b class=\'decorated {{rowData[hdr[ind]]}}\'>{{rowData[hdr[ind]]}}</b></div>\n					<div class="{{hdr[ind]}}" *ngIf="!frm[hdr[ind]]">{{rowData[hdr[ind]]}}</div>\n				</span>\n				<span class="item" *ngIf="acts.length > 0">\n					<ion-icon *ngFor = "let a of acts;let nd = index;" id="{{a?.class}}-{{i}}" name="{{a?.icon}}" (tap)="emitter(nd,toJson(rowData))"></ion-icon>\n				</span>\n				<!--span class="item">\n					<p class="title">Rate</p>\n					{{(rowData?.rate * 100) | number:\'1.1-2\'}} %\n				</span>\n				<span class="item">\n					<p class="title">Term</p>\n					{{rowData?.term}}\n				</span>\n				<span class="item">\n					<p class="title">Amount</p>\n					{{rowData?.amt | currency:\'PHP\':\'symbol-narrow\':\'1.2-2\'}}\n				</span>\n				<span class="item">\n					<p class="title">Purpose</p>\n					{{rowData?.purpose}}\n				</span>\n				<span class="item">\n					<p class="title">Repaid</p>\n					{{(rowData?.repaid * 100) | number:\'1.1-2\'}} %\n				</span-->\n			</div>\n		</ion-col>\n	</ion-row>\n	<pagination-controls (pageChange)="p = $event"></pagination-controls>\n</ion-grid>'/*ion-inline-end:"C:\wamp64\www\bxb\src\components\sortable-table\sortable-table.html"*/,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], SortableTableComponent);
    return SortableTableComponent;
}());

//# sourceMappingURL=sortable-table.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_verification_detail_verification__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ext_mob_prefixes__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ext_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_app_app__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_db_db__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SignUpPage = /** @class */ (function () {
    function SignUpPage(navCtrl, navParams, sanitizer, modal, loader, db, appProvider, alert, toast, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.modal = modal;
        this.loader = loader;
        this.db = db;
        this.appProvider = appProvider;
        this.alert = alert;
        this.toast = toast;
        this.http = http;
        this.userData = {
            firstName: "",
            middleName: "",
            lastName: "",
            userName: "",
            email: "",
            companyCode: "",
            employeeId: "",
            payrollAccount: "",
            password: "",
            mobile: ""
        };
        this.confirmPass = '';
        this.prefixes = this.sanitizer.bypassSecurityTrustHtml(__WEBPACK_IMPORTED_MODULE_5__ext_mob_prefixes__["a" /* intlPrefixes */]);
        this.isMobile = mobilecheck();
        this.agreement = false;
        this.prefix = '63';
        this.env = __WEBPACK_IMPORTED_MODULE_6__ext_config__["a" /* config */][location.origin].backend;
        this.usernameAvailable = true;
        this.dt = this.navParams.get('data');
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage.prototype.ionViewWillLeave = function () {
        if (this.mdl) {
            this.mdl.dismiss();
        }
    };
    SignUpPage.prototype.initData = function (data) {
        this.userData = {
            firstName: data.Name_First,
            middleName: data.Name_Middle,
            lastName: data.Name_Last,
            userName: "",
            email: "",
            companyCode: data.company_name,
            employeeId: data.master_id,
            payrollAccount: data.Payroll_Account,
            password: "",
            mobile: ""
        };
        this.ccode = data.company_name;
    };
    SignUpPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        var self = this;
        this.prev.nativeElement.src = "../../assets/imgs/tmp-img.png";
        this.mdl = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__detail_verification_detail_verification__["a" /* DetailVerificationPage */], {
            data: {
                firstName: this.dt.Name_First,
                middleName: this.dt.Name_Middle,
                lastName: this.dt.Name_Last,
                companyCode: this.dt.company_name,
                employeeId: this.dt.master_id,
                payrollAccount: this.dt.Payroll_Account
            }
        }, { cssClass: 'whitemodal', enableBackdropDismiss: false });
        this.mdl.present();
        setTimeout(function () {
            if (self.dt)
                self.initData(_this.dt);
        }, 1000);
    };
    SignUpPage.prototype.toHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */], {}, { animate: true, direction: "forward" });
    };
    SignUpPage.prototype.reorient = function ($event) {
        this.isMobile = mobilecheck();
    };
    SignUpPage.prototype.takePic = function ($event) {
        var self = this;
        var fd = new FormData();
        if ($event.target.files && $event.target.files[0]) {
            //self.uploadFile($event.target.files[0]);
            console.log($event.target.files[0]);
            fd.append('file', $event.target.files[0]);
            var nurl = URL.createObjectURL($event.target.files[0]);
            self.prev.nativeElement.src = nurl;
        }
        var hdr = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */];
        //hdr.append('Content-Type','multipart/form-data');
        var rq = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */];
        rq.headers = hdr;
        this.http.post('http://localhost/bxb-test-php/image_uploader.php', fd, rq)
            .toPromise()
            .then(console.log)
            .catch(console.info);
    };
    SignUpPage.prototype.startReg = function () {
        if (this.stat(this.userData) || !this.usernameAvailable)
            return false;
        var self = this;
        var load = this.loader.create({
            spinner: 'crescent',
            dismissOnPageChange: true,
            showBackdrop: true,
            content: "Processing...",
            enableBackdropDismiss: false
        });
        load.present();
        var otp = self.appProvider.generateOTP();
        self.appProvider.sendOTPmsg(otp, parseInt(self.userData.mobile.toString().slice(-10))).then(function (res) {
            console.log(res);
            load.dismiss();
            self.otpValidate();
        }).catch(console.warn);
    };
    SignUpPage.prototype.otpValidate = function (iv) {
        if (iv === void 0) { iv = false; }
        var self = this;
        var al = this.alert.create({
            enableBackdropDismiss: false,
            title: 'Confirmation',
            inputs: [
                {
                    type: 'text',
                    placeholder: "Enter OTP",
                    name: "otp"
                }
            ],
            buttons: [
                {
                    text: 'Proceed',
                    handler: function (data) {
                        if (self.appProvider.checkOtp(data.otp)) {
                            self.submitReg();
                        }
                        else {
                            self.otpValidate(true);
                        }
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        if (iv) {
            al.setTitle("Invalid OTP code!");
        }
        al.present();
    };
    SignUpPage.prototype.submitReg = function () {
        var self = this;
        var load = this.loader.create({
            spinner: 'crescent',
            dismissOnPageChange: true,
            showBackdrop: true,
            content: "Please wait...",
            enableBackdropDismiss: false
        });
        load.present();
        var uData = {
            login: this.userData.userName,
            password: this.userData.password,
            mobile: this.prefix + this.userData.mobile,
            email: this.userData.email,
            id: this.userData.employeeId
        };
        //this.http.post(`${this.env}/api.php?q=signup`,uData, rq).toPromise()
        this.db.signUp(uData)
            .then(function (res) {
            load.dismiss();
            console.log(res.text());
            var tst = self.toast.create({
                message: 'Account Created.',
                duration: 3000,
                position: 'top',
                cssClass: "success"
            });
            tst.onDidDismiss(function (data) {
                self.toHome();
            });
            tst.present();
        })
            .catch(function (err) {
            load.dismiss();
            var tst = self.toast.create({
                message: 'An error occurred. Please try again later.',
                duration: 3000,
                position: 'top',
                cssClass: "fail"
            });
            tst.present();
            console.warn(err);
        });
    };
    SignUpPage.prototype.goToTerms = function () {
        window.open(window.location.origin + "/#/terms");
        //this.navCtrl.setRoot(TermsPage,{},{animate:true, direction:"forward"});
    };
    SignUpPage.prototype.stat = function (event) {
        //console.log(this.userData);
        if (this.userData.userName == '' || this.userData.email == '' || this.userData.mobile.toString().length < 10 || this.userData.password == '' || this.userData.password != this.confirmPass || !this.agreement) {
            return true;
        }
        else {
            return false;
        }
    };
    SignUpPage.prototype.checkUname = function (event) {
        var _this = this;
        console.log(event.target.value);
        var load = this.loader.create({
            spinner: 'crescent',
            dismissOnPageChange: true,
            showBackdrop: true,
            content: "Checking username availability...",
            enableBackdropDismiss: false
        });
        load.present();
        this.db.checkUsernameIfExists(event.target.value).then(function (res) {
            load.dismiss();
            _this.usernameAvailable = res;
        }).catch(console.warn);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('prev'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], SignUpPage.prototype, "prev", void 0);
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\sign-up\sign-up.html"*/'<ion-content (window:resize)="reorient($event)">\n	<ion-fab top left *ngIf="!isMobile">\n		<button ion-fab (tap)="toHome()"></button>\n		<!--ion-fab-list side="right">\n		   <button ion-fab mini>Button</button>\n		   <button ion-fab mini>Button 2</button>\n		</ion-fab-list-->\n	 </ion-fab>\n\n	 <section class="main" [ngClass]="{\'mobile\':isMobile}">\n	 	<form name="employee-data">\n		 	<span class="header" *ngIf = "isMobile">\n		 		<button ion-button (tap)="toHome()"></button>\n		 	</span>\n\n		 	<div class="uploader">\n				<input type="file" accept="image/*" (change)="takePic($event)">\n				<ion-avatar item-start>\n					<img #prev/>\n				</ion-avatar>\n		 	</div>\n	 		<p>Complete Information Below</p>\n	 		<ion-row>\n	 			<p class="label">\n	 				Username\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="userName" [(ngModel)] = "userData.userName" (change)="checkUname($event)"/>\n	 			</span>\n	 			<p class="error" *ngIf="!usernameAvailable">\n	 				Username not available!\n	 			</p>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Email\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="email" [(ngModel)] = "userData.email" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row class="bot">\n	 			<p class="label">\n	 				Mobile\n	 			</p>\n	 			<span class="content">\n		 			<select [innerHTML] = "prefixes" name="prefix" [(ngModel)]="prefix"></select>\n		 			<input class="short" type="number" name="mobile" [(ngModel)] = "userData.mobile" />\n		 		</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Password\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="password" [(ngModel)] = "userData.password" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Confirm Password\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="confirmPass" [(ngModel)] = "confirmPass" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row class="center">\n	 			<span>\n	 				<ion-checkbox (ionChange)="stat($event)" name="agreeTerms" [(ngModel)]="agreement"></ion-checkbox>\n	 				<p>I have read and understood the <a class="link" (tap)="goToTerms()">terms and conditions</a>.</p>\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<button ion-button (tap)="startReg()" [disabled]="stat(userData) || !usernameAvailable">Create Account</button>\n	 		</ion-row>\n	 		<!--ion-row>\n	 			<p class="label">\n	 				First Name\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="firstName" [(ngModel)] = "userData.firstName" [value] = "userData.firstName" readonly="true" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Middle Name\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="middleName" [(ngModel)] = "userData.middleName" [value] = "userData.middleName"  readonly="true"/>\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Last Name\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="lastName" [(ngModel)] = "userData.lastName" [value] = "userData.lastName"  readonly="true"/>\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Company Code\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="companyCode" [(ngModel)] = "userData.companyCode"  readonly="true"/>\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Employee ID\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="employeeId" [(ngModel)] = "userData.employeeId" [value] = "userData.employeeId"  readonly="true"/>\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Payroll Account\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="payrollAccount" [(ngModel)] = "userData.payrollAccount" [value] = "userData.payrollAccount" readonly="true" />\n	 			</span>\n	 		</ion-row-->\n	 	</form>\n\n	 	<foot></foot>\n	 </section>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9__providers_db_db__["a" /* DbProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__providers_db_db__["a" /* DbProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__providers_app_app__["a" /* AppProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_app_app__["a" /* AppProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */]) === "function" && _l || Object])
    ], SignUpPage);
    return SignUpPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailVerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailVerificationPage = /** @class */ (function () {
    function DetailVerificationPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.isMobile = mobilecheck();
        this.userData = {};
        this.valid = false;
        this.userData = this.navParams.get('data');
    }
    DetailVerificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailVerificationPage');
    };
    DetailVerificationPage.prototype.close = function () {
        this.view.dismiss();
    };
    DetailVerificationPage.prototype.reorient = function ($event) {
        this.isMobile = mobilecheck();
    };
    DetailVerificationPage.prototype.toHome = function () {
        window.location.href = location.origin + "/#/login";
    };
    DetailVerificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-verification',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\detail-verification\detail-verification.html"*/'<ion-content (window:resize)="reorient($event)">\n	<ion-fab top left *ngIf="!isMobile">\n		<button ion-fab (tap)="toHome()"></button>\n		<!--ion-fab-list side="right">\n		   <button ion-fab mini>Button</button>\n		   <button ion-fab mini>Button 2</button>\n		</ion-fab-list-->\n	 </ion-fab>\n\n	 <section class="main" [ngClass]="{\'mobile\':isMobile}">\n	 	<form name="employee-data">\n		 	<span class="header" *ngIf = "isMobile">\n		 		<button ion-button (tap)="toHome()"></button>\n		 	</span>\n\n	 		<p>Verify your Information</p>\n	 		\n	 		<ion-row>\n			 	<p class="notice">\n			 		Kindly notify your HR if the details shown in this form are incorrect. Otherwise, click the proceed button below.\n			 	</p>\n			 </ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				First Name\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="firstName" [(ngModel)] = "userData.firstName" [value] = "userData.firstName" readonly="true" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Middle Name\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="middleName" [(ngModel)] = "userData.middleName" [value] = "userData.middleName"  readonly="true"/>\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Last Name\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="lastName" [(ngModel)] = "userData.lastName" [value] = "userData.lastName"  readonly="true"/>\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Company Code\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="companyCode" [(ngModel)] = "userData.companyCode"  readonly="true"/>\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Employee ID\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="employeeId" [(ngModel)] = "userData.employeeId" [value] = "userData.employeeId"  readonly="true"/>\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Payroll Account\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="payrollAccount" [(ngModel)] = "userData.payrollAccount" [value] = "userData.payrollAccount" readonly="true" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row class="center">\n	 			<span>\n	 				<ion-checkbox name="valid" [(ngModel)]="valid"></ion-checkbox>\n	 				<p>The details shown above are correct</p>\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<button ion-button (tap)="close()" [disabled]="!valid">Proceed</button>\n	 		</ion-row>\n	 	</form>\n	 </section>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\detail-verification\detail-verification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], DetailVerificationPage);
    return DetailVerificationPage;
}());

//# sourceMappingURL=detail-verification.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_loans_employee_loans__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terms_modal_terms_modal__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__emp_disclosure_statement_modal_emp_disclosure_statement_modal__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_db_db__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app_app__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ext_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_cookie_service__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EmployeeDashboardPage = /** @class */ (function () {
    function EmployeeDashboardPage(navCtrl, navParams, menu, modal, db, alert, loader, toast, appProvider, cookie) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.modal = modal;
        this.db = db;
        this.alert = alert;
        this.loader = loader;
        this.toast = toast;
        this.appProvider = appProvider;
        this.cookie = cookie;
        this.outstandingCredit = 0;
        this.availableCredit = 50000;
        this.creditToUse = 1000;
        this.min = 1000;
        this.paydays = 1;
        this.maxPaydays = 24;
        this.interestRate = 0.0125;
        this.processingFeeRate = 0.035;
        this.collectionFeeRate = 0.015;
        this.docFeeRate = 0.0075;
        this.deductionPerPayDay = ((this.paydays * this.interestRate * this.creditToUse) + this.creditToUse) / this.paydays;
        this.purposeList = ['', 'Debt Consolidation', 'Credit Card Payoff', 'Help a Person', 'Emergency Fund', 'Medical Expenses', 'Major Purchase', 'Vacation', 'Others'];
        this.purpose = '';
        this.dates = [];
        this.env = __WEBPACK_IMPORTED_MODULE_7__ext_config__["a" /* config */][location.origin].backend;
        this.userData = JSON.parse(localStorage.userData);
        this.submitFlag = false;
    }
    EmployeeDashboardPage.prototype.ionViewDidEnter = function () {
        this.menu.close();
        localStorage.page = 'dashboard';
    };
    EmployeeDashboardPage.prototype.ionViewWillLeave = function () {
    };
    EmployeeDashboardPage.prototype.isMobile = function () {
        return localStorage.view == "mobile";
    };
    EmployeeDashboardPage.prototype.toCreditSummary = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__employee_loans_employee_loans__["a" /* EmployeeLoansPage */], {}, { animate: true, direction: "top" });
    };
    EmployeeDashboardPage.prototype.checkCredit = function (val) {
        this.creditToUse += val;
        if (this.creditToUse <= 0)
            this.creditToUse = 0;
        if (this.creditToUse >= this.availableCredit)
            this.creditToUse = this.availableCredit;
        this.deductionPerPayDay = ((this.paydays * this.interestRate * this.creditToUse) + this.creditToUse) / this.paydays;
        this.getDates();
    };
    EmployeeDashboardPage.prototype.checkPaydays = function (val) {
        this.paydays += val;
        if (this.paydays <= 1)
            this.paydays = 1;
        if (this.paydays >= this.maxPaydays)
            this.paydays = this.maxPaydays;
        this.getDates();
    };
    EmployeeDashboardPage.prototype.contAdd = function (b, val) {
        if (val === void 0) { val = 500; }
        var self = this;
        if (b) {
            this.intervalPress = setInterval(function () {
                self.checkCredit(val);
            }, 100);
        }
        else {
            clearInterval(this.intervalPress);
        }
    };
    EmployeeDashboardPage.prototype.dayAdd = function (b, val) {
        if (val === void 0) { val = 1; }
        var self = this;
        if (b) {
            this.intervalPress = setInterval(function () {
                self.checkPaydays(val);
            }, 100);
        }
        else {
            clearInterval(this.intervalPress);
        }
    };
    EmployeeDashboardPage.prototype.launchBreakdown = function (noDisplay) {
        var _this = this;
        if (noDisplay === void 0) { noDisplay = false; }
        this.appProvider.generateOTP();
        this.checkCredit(0);
        this.loan = {
            amt: this.creditToUse,
            udi: this.paydays * this.interestRate * this.creditToUse,
            grossCashout: this.creditToUse,
            processingFund: this.creditToUse * this.processingFeeRate,
            collectionFund: this.creditToUse * this.collectionFeeRate,
            docFee: this.creditToUse * this.docFeeRate,
            totalDeductions: 0,
            netCashout: 0,
            totalPayment: (this.paydays * this.interestRate * this.creditToUse) + this.creditToUse
        };
        this.getDates().then(function (dt) {
            if (!noDisplay) {
                var md = _this.modal.create(__WEBPACK_IMPORTED_MODULE_4__emp_disclosure_statement_modal_emp_disclosure_statement_modal__["a" /* EmpDisclosureStatementModalPage */], { data: _this.loan, payments: dt }, { 'cssClass': 'whitemodal' });
                md.present();
            }
        });
    };
    EmployeeDashboardPage.prototype.getDates = function () {
        this.dates = [];
        var fd = new Date();
        var mn = fd.getMonth();
        var yr = fd.getFullYear();
        var initDay;
        if (fd.getDate() > 15) {
            initDay = 15;
            mn += 2;
            if (mn >= 13) {
                ++yr;
                mn = 1;
            }
        }
        else {
            if (mn == 2) {
                initDay = 28;
                if (yr % 4 == 0) {
                    initDay = 29;
                }
            }
            else {
                initDay = 30;
            }
            ++mn;
            if (mn >= 13) {
                ++yr;
                mn = 1;
            }
        }
        for (var i = 0; i < this.paydays; i++) {
            var dt = yr + "-" + ('0' + mn).slice(-2) + "-" + initDay;
            this.dates.push({ paymentDate: dt, paymentNum: (i + 1), amt: this.deductionPerPayDay, bal: ((this.paydays * this.interestRate * this.creditToUse) + this.creditToUse) - (this.deductionPerPayDay * (i + 1)) });
            if (initDay != 15) {
                initDay = 15;
                ++mn;
                if (mn >= 13) {
                    ++yr;
                    mn = 1;
                }
            }
            else {
                if (mn == 2) {
                    initDay = 28;
                    if (yr % 4 == 0) {
                        initDay = 29;
                    }
                }
                else {
                    initDay = 30;
                }
            }
        }
        console.log(this.dates);
        return Promise.resolve(this.dates);
    };
    EmployeeDashboardPage.prototype.addDays = function (date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };
    /**
    @master_id int,
    @principal float,
    @interest float,
    @paydays int,
    @purpose varchar(1000),
    @applicationDate datetime,
    @processFund float,
    @collectionFund float,
    @documentFee float **/
    EmployeeDashboardPage.prototype.viewTerms = function () {
        var _this = this;
        var trms = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__terms_modal_terms_modal__["a" /* TermsModalPage */], { int: true });
        var self = this;
        trms.onDidDismiss(function (trip) {
            if (trip == "proceed") {
                var load_1 = _this.loader.create({
                    spinner: 'crescent',
                    dismissOnPageChange: true,
                    showBackdrop: true,
                    content: "Processing...",
                    enableBackdropDismiss: false
                });
                load_1.present();
                var otp = self.appProvider.generateOTP();
                self.appProvider.sendOTPmsg(otp, _this.userData.mobile.slice(-10)).then(function (res) {
                    console.log(res);
                    load_1.dismiss();
                    self.addLoan();
                }).catch(console.warn);
            }
        });
        trms.present();
    };
    EmployeeDashboardPage.prototype.addLoan = function (iv) {
        if (iv === void 0) { iv = false; }
        var self = this;
        var al = this.alert.create({
            enableBackdropDismiss: false,
            title: 'Confirmation',
            inputs: [
                {
                    type: 'text',
                    placeholder: "Enter OTP",
                    name: "otp"
                }
            ],
            buttons: [
                {
                    text: 'Proceed',
                    handler: function (data) {
                        if (self.appProvider.checkOtp(data.otp)) {
                            self.submitFlag = true;
                            self.createNewLoan();
                            self.appProvider.sendLoanApproval(self.loan.amt, self.userData.mobile.slice(-10))
                                .then(console.info)
                                .catch(console.warn);
                        }
                        else {
                            self.addLoan(true);
                        }
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        if (iv) {
            al.setTitle("Invalid OTP code!");
        }
        al.present();
    };
    /*
    let otp = self.appProvider.generateOTP();
    self.appProvider.sendOTPmsg(otp,9988560026).then(res=>{
      console.log(res);
    }).catch(console.warn);
    */
    EmployeeDashboardPage.prototype.createNewLoan = function () {
        var self = this;
        var load = this.loader.create({
            spinner: 'crescent',
            dismissOnPageChange: true,
            showBackdrop: true,
            content: "Processing...",
            enableBackdropDismiss: false
        });
        load.present();
        this.launchBreakdown(true);
        var uData = {
            id: this.userData.master_id,
            principal: this.loan.amt,
            interest: this.interestRate * 2,
            paydays: this.paydays,
            purpose: this.purpose,
            processFund: this.loan.processingFund,
            collectionFund: this.loan.collectionFund,
            documentFee: this.loan.docFee
        };
        this.db.createNewLoan(uData)
            .then(function (res) {
            load.dismiss();
            var tst = self.toast.create({
                message: 'Loan has been submitted for approval.',
                duration: 3000,
                position: 'top',
                cssClass: "success"
            });
            tst.onDidDismiss(function (data) {
                self.toCreditSummary();
            });
            tst.present();
            console.info(res);
        })
            .catch(function (err) {
            load.dismiss();
            var tst = self.toast.create({
                message: 'An error occurred.',
                duration: 3000,
                position: 'top',
                cssClass: "fail"
            });
            tst.onDidDismiss(function (data) {
                self.toCreditSummary();
            });
            tst.present();
            console.warn(err);
        });
    };
    EmployeeDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-employee-dashboard',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\employee-dashboard\employee-dashboard.html"*/'<ion-content [ngClass]="{\'mobile\':isMobile()}">\n	<top-bar></top-bar>\n	<side-bar *ngIf = "!isMobile()" [highlights]="\'dashboard\'"></side-bar>\n\n	<section class="main-content">\n		<ion-row>\n			<ion-col col-6>\n				<div class="credit-box">\n					<span>\n						<p>Outstanding Credit</p>\n						<b class="outstanding">\n							{{outstandingCredit | currency:\'PHP\':\'symbol-narrow\':\'1.2-2\'}}\n						</b>\n					</span>\n					<span id="outstanding-bar" class="bar">\n						<div [style.width.%]="outstandingCredit*100/50000"></div>\n					</span>\n				</div>\n			</ion-col>\n\n			<ion-col col-6>\n				<div class="credit-box">\n					<span>\n						<p>Available Credit</p>\n						<b class="available">\n							{{availableCredit | currency:\'PHP\':\'symbol-narrow\':\'1.2-2\'}}\n						</b>\n					</span>\n					<span id="available-bar" class="bar">\n						<div [style.width.%]="availableCredit*100/50000"></div>\n					</span>\n				</div>\n			</ion-col>\n		</ion-row>\n\n		<h2>Use your Credit Line</h2>\n		<div class="slider-form">\n			<div class="credit-form">\n				<ion-row>\n					<ion-col col-9>\n						How much credit do you wish to use?\n					</ion-col>\n					<ion-col col-3>\n						<input type="number" min="1000" maxlength="6" [max]="availableCredit" step="500" [(ngModel)]="creditToUse" [disabled]="isMobile()" (change)="checkCredit(0)" />\n					</ion-col>\n				</ion-row>\n				<ion-row class="range-1">\n					<ion-col col-1>\n						<ion-icon name="ios-remove-circle-outline" (tap)="checkCredit(-500)" (mousedown)="contAdd(true,-500)"  (mouseup)="contAdd(false)"></ion-icon>\n					</ion-col>\n					<ion-col col-10>\n						<ion-item>\n						  <ion-range min="1000" [max]="availableCredit" step="500" snaps="true" [(ngModel)]="creditToUse">\n						  </ion-range>\n						</ion-item>\n					</ion-col>\n					<ion-col col-1>\n						<ion-icon name="ios-add-circle-outline" (tap)="checkCredit(500)" (mousedown)="contAdd(true,500)"  (mouseup)="contAdd(false)"></ion-icon>\n					</ion-col>\n				</ion-row>\n				<p class="small">Minimum of {{min | currency:\'PHP\':\'symbol-narrow\':\'1.0\'}}</p>\n			</div>\n		</div>\n		<br/>\n		<br/>\n		<div class="slider-form">\n			<div class="credit-form">\n				<ion-row>\n					<ion-col col-9>\n						Over how many paydays do you wish to repay the credit?\n					</ion-col>\n					<ion-col col-3>\n						<input type="number" min="1" maxlength="6" [max]="maxPaydays" step="1" [(ngModel)]="paydays" [disabled]="isMobile()" (change)="getDates()"/>\n					</ion-col>\n				</ion-row>\n				<ion-row class="range-1">\n					<ion-col col-1>\n						<ion-icon name="ios-remove-circle-outline" (tap)="checkPaydays(-1)" (mousedown)="dayAdd(true,-1)"  (mouseup)="dayAdd(false)"></ion-icon>\n					</ion-col>\n					<ion-col col-10>\n						<ion-item>\n						  <ion-range min="1" [max]="maxPaydays" [(ngModel)]="paydays">\n						  </ion-range>\n						</ion-item>\n					</ion-col>\n					<ion-col col-1>\n						<ion-icon name="ios-add-circle-outline" (tap)="checkPaydays(1)" (mousedown)="dayAdd(true,1)"  (mouseup)="dayAdd(false)"></ion-icon>\n					</ion-col>\n				</ion-row>\n			</div>\n		</div>\n\n		<div class="usage">\n			<p>What will you use it for?</p>\n			<ion-row>\n				<ion-col col-4>\n					<select [(ngModel)]="purpose" name="purpose">\n						<option [value]="p" *ngFor="let p of purposeList;">{{p}}</option>\n					</select>\n				</ion-col>\n				<ion-col>\n					<p class="label">Amount Availed</p>\n					<span><b>Php {{creditToUse | number : \'1.2-2\'}}</b> <ion-icon name="md-add"></ion-icon></span>\n				</ion-col>\n				<ion-col>\n					<p class="label">Total Interest</p>\n					<span><b>Php {{paydays * interestRate * creditToUse | number : \'1.2-2\'}}</b> <img src="../assets/imgs/equal-icon.png"/></span>\n				</ion-col>\n				<ion-col>\n					<p class="label">Total Repayment</p>\n					<span><b>Php {{(paydays * interestRate * creditToUse) + creditToUse | number : \'1.2-2\'}}</b></span>\n				</ion-col>\n				<ion-col>\n					<p class="label">Deduction per payday</p>\n					<span><b>Php {{((paydays * interestRate * creditToUse) + creditToUse)/paydays | number : \'1.2-2\'}}</b></span>\n				</ion-col>\n				<ion-col col-1 (tap)="launchBreakdown()">\n					<ion-icon name="md-information-circle"></ion-icon>\n					<p *ngIf="isMobile()">View Breakdown</p>\n				</ion-col>\n			</ion-row>\n		</div>\n		<button ion-button (tap)="viewTerms()" [disabled]="purpose.trim() == \'\' || submitFlag">Confirm</button>\n		<foot></foot>\n	</section>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\employee-dashboard\employee-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__providers_app_app__["a" /* AppProvider */], __WEBPACK_IMPORTED_MODULE_8_ngx_cookie_service__["a" /* CookieService */]])
    ], EmployeeDashboardPage);
    return EmployeeDashboardPage;
}());

//# sourceMappingURL=employee-dashboard.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeLoansPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emp_disclosure_statement_modal_emp_disclosure_statement_modal__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preterm_application_modal_preterm_application_modal__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_db_db__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_loan_loan__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the EmployeeLoansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmployeeLoansPage = /** @class */ (function () {
    /*{
        firstName:"Per",
        middleName:"Sohn",
        lastName:"McPherson",
        userName: "beexby",
        email: "user@email.com",
        companyCode: "CC2",
        employeeId: "BX17445Z",
        payrollAccount: "ABC1294FAS-15-AF1125",
        password: "Passerby",
        mobile: "9189101112"
    };*/
    function EmployeeLoansPage(navCtrl, navParams, menu, modal, db, loader) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.modal = modal;
        this.db = db;
        this.loader = loader;
        this.outstandingCredit = 0;
        this.availableCredit = 50000;
        this.loanStatus = 'pending';
        this.expanded = 0;
        this.loans = {
            'pending': [],
            'approved': [],
            'cancel': [],
            'completed': []
        };
        this.hdrTitles = {
            'LoanID': 'Transaction ID',
            'applicationDate': 'Date of Inception',
            'master_id': 'Credit Availment Number',
            'interest': 'Rate',
            'term': 'Term',
            'principal': 'Amount',
            'purpose': 'Purpose',
            'repaid': '% Repaid'
        };
        this.sampKeys = ['LoanID', 'applicationDate', 'master_id', 'interest', 'term', 'principal', 'purpose', 'repaid'];
        this.formats = {
            'principal': 'currency',
            'interest': 'percent',
            'term': 'number',
            'repaid': 'percent'
        };
        this.payments = [
            {
                "paymentDate": "06-15-2018",
                "paymentNum": 1,
                "amt": 8400,
                "bal": 25200
            },
            {
                "paymentDate": "06-30-2018",
                "paymentNum": 2,
                "amt": 8400,
                "bal": 16800
            },
            {
                "paymentDate": "07-15-2018",
                "paymentNum": 3,
                "amt": 8400,
                "bal": 8400
            },
            {
                "paymentDate": "07-30-2018",
                "paymentNum": 4,
                "amt": 8400,
                "bal": 0
            }
        ];
        this.userData = JSON.parse(localStorage.userData);
        this.actions = [
            {
                "icon": "md-information-circle",
                "class": "display-disclosure"
            }
        ];
        this.actionsApproved = [
            {
                "icon": "md-information-circle",
                "class": "display-disclosure"
            },
            {
                "icon": "md-warning",
                "class": "preterm-loan"
            }
        ];
    }
    EmployeeLoansPage.prototype.ionViewDidLoad = function () {
        var self = this;
        var load = this.loader.create({
            spinner: 'crescent',
            dismissOnPageChange: true,
            showBackdrop: true,
            content: "Loading Pending loans",
            enableBackdropDismiss: false
        });
        load.present();
        var pr1 = this.db.getEmpLoansByStatus(1).then(function (rs) {
            self.loans.pending = rs;
            load.setContent('Loading Active loans');
            return Promise.resolve(rs);
        });
        var pr2 = this.db.getEmpLoansByStatus(2).then(function (rs) {
            self.loans.approved = rs;
            load.setContent('Loading Completed loans');
            return Promise.resolve(rs);
        });
        var pr3 = this.db.getEmpLoansByStatus(4).then(function (rs) {
            self.loans.cancel = rs;
            load.setContent('Compiling');
            return Promise.resolve(rs);
        });
        Promise.all([pr1, pr2, pr3]).then(function () {
            load.dismiss().catch(function () { });
        });
    };
    EmployeeLoansPage.prototype.ionViewDidEnter = function () {
        this.menu.close();
        localStorage.page = 'creditsum';
    };
    EmployeeLoansPage.prototype.isMobile = function () {
        return localStorage.view == "mobile";
    };
    EmployeeLoansPage.prototype.segmentChanged = function ($event) {
        //console.info($event);
    };
    EmployeeLoansPage.prototype.doAction = function (e) {
        //this.ln.p = e.val.
        console.log(e.val);
        var ev = JSON.parse(e.val);
        this.ln.p = ev.principal;
        this.ln.t = ev.numberPaydays;
        this.ln.sdate = ev.applicationDate;
        this.ln.getLoan();
        this.showModal(e, true);
    };
    EmployeeLoansPage.prototype.doActiveAction = function (i) {
        console.log(i);
        var ev = JSON.parse(i.val);
        this.ln.p = ev.principal;
        this.ln.t = ev.numberPaydays;
        this.ln.sdate = ev.applicationDate;
        if (i.index == 0) {
            this.showModal(i);
        }
        else if (i.index == 1) {
            this.showPretermForm(i);
        }
    };
    EmployeeLoansPage.prototype.showPretermForm = function (i) {
        var ind = JSON.parse(i.val);
        var usr = { name: this.userData.Name_First + " " + this.userData.Name_Last, empID: this.userData.master_id };
        var loan = { principal: ind.principal, id: ind.LoanID, interest: ind.interest };
        this.mod = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__preterm_application_modal_preterm_application_modal__["a" /* PretermApplicationModalPage */], { user: usr, loan: loan }, { cssClass: "whitemodal xs " + (this.isMobile() ? "mobile" : "") });
        this.mod.present();
    };
    /*
      showModal(i){
        this.userData.firstName = this.userData.Name_First;
        this.userData.lastName = this.userData.Name_Last;
        this.userData.age = this._calculateAge(this.userData.Birthday);
        this.mod = this.modal.create(DisclosureStatementPage,{data:this.loans.pending[i], payments:this.payments, user:this.userData},{cssClass:`whitemodal ${this.isMobile() ? "mobile" : ""}`});
        this.mod.present();
      }
    */
    EmployeeLoansPage.prototype.showModal = function (i, fe) {
        var _this = this;
        if (fe === void 0) { fe = false; }
        var ind = JSON.parse(i.val);
        var self = this;
        var lndta = this.ln.getLoan();
        console.log(lndta);
        ind.loan = lndta;
        if (fe) {
            this.ln.getDates(ind.applicationDate).then(function (dt) {
                self.mod = _this.modal.create(__WEBPACK_IMPORTED_MODULE_2__emp_disclosure_statement_modal_emp_disclosure_statement_modal__["a" /* EmpDisclosureStatementModalPage */], { data: ind.loan, payments: dt, user: self.userData }, { cssClass: "whitemodal " + (self.isMobile() ? "mobile" : "") });
                self.mod.present();
            });
        }
        else {
            this.db.getSchedofPayment(ind['LoanID']).then(function (res) {
                console.log(res);
                self.mod = self.modal.create(__WEBPACK_IMPORTED_MODULE_2__emp_disclosure_statement_modal_emp_disclosure_statement_modal__["a" /* EmpDisclosureStatementModalPage */], { data: ind.loan, payments: res, user: self.userData }, { cssClass: "whitemodal " + (self.isMobile() ? "mobile" : "") });
                self.mod.present();
            }).catch(console.warn);
        }
    };
    EmployeeLoansPage.prototype.expand = function (i) {
        if (this.expanded == i + 1) {
            this.expanded = 0;
        }
        else {
            this.expanded = i + 1;
        }
    };
    EmployeeLoansPage.prototype._calculateAge = function (birthday) {
        var today = new Date();
        var birthDate = new Date(birthday);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };
    EmployeeLoansPage.prototype.sorter = function (a, e, t) {
        if (t) {
            return a.sort(function (a, b) {
                if (a[e] < b[e])
                    return -1;
                if (a[e] > b[e])
                    return 1;
                return 0;
            });
        }
        else {
            return a.sort(function (a, b) {
                if (a[e] < b[e])
                    return 1;
                if (a[e] > b[e])
                    return -1;
                return 0;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('p_loan'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__components_loan_loan__["a" /* LoanComponent */])
    ], EmployeeLoansPage.prototype, "ln", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('p_term'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__components_loan_loan__["a" /* LoanComponent */])
    ], EmployeeLoansPage.prototype, "pt", void 0);
    EmployeeLoansPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-employee-loans',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\employee-loans\employee-loans.html"*/'<ion-content [ngClass]="{\'mobile\':isMobile()}">\n	<top-bar></top-bar>\n	<side-bar *ngIf = "!isMobile()" [highlights]="\'dashboard\'"></side-bar>\n\n	<section class="main-content">\n		<ion-row>\n			<ion-col col-6>\n				<div class="credit-box">\n					<span>\n						<p>Outstanding Credit</p>\n						<b class="outstanding">\n							{{outstandingCredit | currency:\'PHP\':\'symbol-narrow\':\'1.2-2\'}}\n						</b>\n					</span>\n					<span id="outstanding-bar" class="bar">\n						<div [style.width.%]="outstandingCredit*100/50000"></div>\n					</span>\n				</div>\n			</ion-col>\n\n			<ion-col col-6>\n				<div class="credit-box">\n					<span>\n						<p>Available Credit</p>\n						<b class="available">\n							{{availableCredit | currency:\'PHP\':\'symbol-narrow\':\'1.2-2\'}}\n						</b>\n					</span>\n					<span id="available-bar" class="bar">\n						<div [style.width.%]="availableCredit*100/50000"></div>\n					</span>\n				</div>\n			</ion-col>\n		</ion-row>\n\n		<!-- start of loans -->\n		<ion-row>\n			<ion-col col-12>\n				<loan #p_loan></loan>\n				<preterm #p_term></preterm>\n				<submodule [title]="\'Portfolio Loans/Loan Status\'">\n					\n					<ion-segment [(ngModel)]="loanStatus" color="primary" (ionChange)="segmentChanged($event)">\n						<ion-segment-button value="pending">\n							Pending\n					    </ion-segment-button>\n					    <ion-segment-button value="approved">\n					    	Approved\n					    </ion-segment-button>\n						<ion-segment-button value="cancel">\n							Cancel\n					    </ion-segment-button>\n					    <ion-segment-button value="completed">\n					    	Completed\n					    </ion-segment-button>\n					</ion-segment>\n\n					<div [ngSwitch]="loanStatus" class=\'segmentable\'>\n						<div *ngSwitchCase = "\'pending\'">\n							<sortable-table *ngIf="loans.pending.length > 0" [data]="loans?.pending" [headers]="sampKeys" [formats]="formats" [header_titles]="hdrTitles" [actions]="actions" (t)="doAction($event)"></sortable-table>\n							<p class="no-data" *ngIf="loans.pending.length == 0">\n								No data\n							</p>\n							\n						</div>\n						<div *ngSwitchCase = "\'approved\'">\n							<!--span class="search">\n								<ion-icon name="ios-search"></ion-icon>\n								<input type="text" (ionInput)="search($event)" placeholder="Search any fields"/>\n							</span-->\n							<sortable-table *ngIf="loans.approved.length > 0" [data]="loans?.approved" [headers]="sampKeys" [formats]="formats" [header_titles]="hdrTitles" [actions]="actionsApproved" (t)="doActiveAction($event)"></sortable-table>\n							<p class="no-data" *ngIf="loans.approved.length == 0">\n								No data\n							</p>\n							\n						</div>\n\n						<!-- end of approved -->\n\n						<div *ngSwitchCase = "\'cancel\'">\n							<!--span class="search">\n								<ion-icon name="ios-search"></ion-icon>\n								<input type="text" (ionInput)="search($event)" placeholder="Search any fields"/>\n							</span-->\n							<sortable-table *ngIf="loans.cancel.length > 0"[data]="loans?.cancel" [headers]="sampKeys" [formats]="formats" [header_titles]="hdrTitles"></sortable-table>\n							<p class="no-data" *ngIf="loans.cancel.length == 0">\n								No data\n							</p>\n						</div>\n\n						<!-- end of approved -->\n\n						<div *ngSwitchCase = "\'completed\'">\n							<!--span class="search">\n								<ion-icon name="ios-search"></ion-icon>\n								<input type="text" (ionInput)="search($event)" placeholder="Search any fields"/>\n							</span-->\n							<sortable-table *ngIf="loans.completed.length > 0" [data]="loans?.completed" [headers]="sampKeys" [formats]="formats" [header_titles]="hdrTitles"></sortable-table>\n							<p class="no-data" *ngIf="loans.completed.length == 0">\n								No data\n							</p>\n						</div>\n					</div>\n				</submodule>\n			</ion-col>\n		</ion-row>\n\n		<video class="ifrproportion w-100" controls="" autoplay="">\n        	<source src="https://d2mls9zgtvu807.cloudfront.net/videos/brickbybrick_intro.mp4?Expires=1534990294&Signature=fNEyoiGBpnD2JcCj-AYz2LDdl3dKXWo47rQlay54DhNOHxHqxIkkmCXaH0y~ssy3P6YfNB6kuZfd0KLNicEzbIQffV4uA-ds9uww63oiKNzKDt3biDCoauPOkzQxHJ6RuDHn5apiYE7bB8abEtTNysLZiunKeUzfzAYug-Jrvgjgd2GptY6Bh~vBfa7rBiGj-Sn5nIF~NiSEkdIahRXJ79v4MhrQwbJcAhU6jQtTxW4lRq70rK-3xmxaR-hC1xGVZKIdokR~Y4W~gAkZBPzxNp0oZZe67lpugzLjtA0GbNuBsnnVIsZr9BRvcXv-cHvt0pZVJR3dxWqcaU624Vgw3w__&Key-Pair-Id=APKAIR235UJVCMWQ3CUQ" type="video/mp4">\n        </video>\n		<foot></foot>\n	</section>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\employee-loans\employee-loans.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_db_db__["a" /* DbProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], EmployeeLoansPage);
    return EmployeeLoansPage;
}());

//# sourceMappingURL=employee-loans.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PretermApplicationModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_db_db__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PretermApplicationModalPage = /** @class */ (function () {
    function PretermApplicationModalPage(navCtrl, navParams, view, modal, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.modal = modal;
        this.db = db;
        this.isMobile = mobilecheck();
        this.user = { name: 'Ray Santos', empID: '123' };
        this.loan = { principal: 25000, id: 1 };
        this.loanFee = 750;
        this.due = 26062.46;
        this.paySched = [];
        if (this.navParams.get('user')) {
            this.user = this.navParams.get('user');
        }
        if (this.navParams.get('loan')) {
            this.loan = this.navParams.get('loan');
        }
    }
    PretermApplicationModalPage.prototype.ionViewDidLoad = function () {
    };
    PretermApplicationModalPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.db.getSchedofPayment(this.loan.id).then(function (res) {
            _this.paySched = res;
            console.log(_this);
        }).catch(console.warn);
    };
    PretermApplicationModalPage.prototype.reorient = function ($event) {
        this.isMobile = mobilecheck();
    };
    PretermApplicationModalPage.prototype.print = function () {
        window.print();
    };
    PretermApplicationModalPage.prototype.close = function () {
        this.view.dismiss();
    };
    PretermApplicationModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-preterm-application-modal',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\preterm-application-modal\preterm-application-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title><ion-icon style="margin:0 1vw;" name="ios-information-circle-outline"></ion-icon>Preterm Application\n  	<!--ion-icon (tap)="close()" name="ios-close" style="float:right;"></ion-icon--></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content (window:resize)="reorient($event)">\n\n	<section class="content" [ngClass]="{\'mobile\':isMobile}">\n		<span class="header">\n			<div class="title">\n				<ion-icon name="md-information-circle"></ion-icon>\n				BXB Preterm\n			</div>\n\n		</span>\n\n		<div class="body">\n			<ion-row>\n				<ion-col class="bundle">\n					<ion-row>\n						<ion-col class="label">Name</ion-col>\n						<ion-col class="data">{{user?.name}}</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col class="label">Employee ID</ion-col>\n						<ion-col class="data">{{user?.empID}}</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col class="label">Principal</ion-col>\n						<ion-col class="data">{{loan?.principal | number:\'1.0-2\'}}</ion-col>\n					</ion-row>\n				</ion-col>\n				<ion-col class="bundle">\n					<ion-row>\n						<ion-col class="label">Preterm Fee</ion-col>\n						<ion-col class="data">{{loanFee | number:\'1.0-2\'}}</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col class="label">Amount Due</ion-col>\n						<ion-col class="data">{{due | number: \'1.0-2\'}}</ion-col>\n					</ion-row>\n					\n				</ion-col>\n			</ion-row>\n		</div>\n	</section>\n	\n</ion-content>\n<ion-footer>\n	<button ion-button (tap)="close()">\n		<ion-icon name="ios-close-circle-outline"></ion-icon>\n		Close\n	</button>\n</ion-footer>'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\preterm-application-modal\preterm-application-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_db_db__["a" /* DbProvider */]])
    ], PretermApplicationModalPage);
    return PretermApplicationModalPage;
}());

//# sourceMappingURL=preterm-application-modal.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_info_modal_employee_info_modal__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_employee_edit_employee__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_employee_add_employee__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_drag_scroll__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmployeesPage = /** @class */ (function () {
    function EmployeesPage(navCtrl, navParams, menu, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.modal = modal;
        this.activeEmployees = [
            {
                "companyID": "18-002",
                "firstName": "George Miguel",
                "lastName": "Winternitz",
                "usedCredit": 37000,
                "unusedCredit": 13000,
                "creditLine": 50000,
                "netSalary": 250000,
                "grossSalary": 250000
            }, {
                "companyID": "11-123-3",
                "firstName": "Blue Terdst 3",
                "lastName": "Third",
                "usedCredit": 0,
                "unusedCredit": 50000,
                "creditLine": 50000,
                "netSalary": 50000,
                "grossSalary": 70000
            }
        ];
        this.hdrTitlesA = {
            'companyID': 'Company ID',
            'firstName': 'First Name',
            'lastName': 'Last Name',
            'usedCredit': 'Used Credit',
            'unusedCredit': 'Unused Credit',
            'creditLine': 'Credit Line',
            'netSalary': 'Net Salary',
            'grossSalary': 'Gross Salary'
        };
        this.sampKeysA = Object.keys(this.activeEmployees[0]);
        this.formatsA = {
            'usedCredit': 'currency',
            'unusedCredit': 'currency',
            'creditLine': 'currency',
            'netSalary': 'currency',
            'grossSalary': 'currency'
        };
        this.employees = [
            {
                "companyID": "18-003",
                "firstName": "Amanda",
                "lastName": "Winternitz",
                "email": "na@na",
                "netSalary": 250000,
                "grossSalary": 250000
            },
            {
                "companyID": "18-006",
                "firstName": "Ray",
                "lastName": "Santos",
                "email": "aa@na",
                "netSalary": 30000,
                "grossSalary": 80000
            },
            {
                "companyID": "18-010",
                "firstName": "Winter",
                "lastName": "Nitz",
                "email": "wn@na",
                "netSalary": 40000,
                "grossSalary": 50000
            },
            {
                "companyID": "11-123-2",
                "firstName": "Blue Test 2",
                "lastName": "Second",
                "email": "blue.endaya@gmail.com",
                "netSalary": 50000,
                "grossSalary": 70000
            }
        ];
        this.hdrTitlesE = {
            'companyID': 'Company ID',
            'firstName': 'First Name',
            'lastName': 'Last Name',
            'email': 'Email',
            'netSalary': 'Net Salary',
            'grossSalary': 'Gross Salary'
        };
        this.sampKeysE = Object.keys(this.employees[0]);
        this.formatsE = {
            'netSalary': 'currency',
            'grossSalary': 'currency'
        };
        this.flaggedEmployees = [
            {
                "companyID": "11-123-2",
                "firstName": "Blue Test 2",
                "lastName": "Second",
                "email": "blue.endaya@gmail.com",
                "netSalary": 50000,
                "grossSalary": 70000
            }
        ];
        this.hdrTitlesF = {
            'companyID': 'Company ID',
            'firstName': 'First Name',
            'lastName': 'Last Name',
            'email': 'Email',
            'netSalary': 'Net Salary',
            'grossSalary': 'Gross Salary'
        };
        this.sampKeysF = Object.keys(this.flaggedEmployees[0]);
        this.formatsF = {
            'netSalary': 'currency',
            'grossSalary': 'currency'
        };
        this.pendingMembers = [];
        this.isMobile = mobilecheck();
    }
    EmployeesPage.prototype.ionViewDidEnter = function () {
        this.menu.close();
        localStorage.page = 'employees';
    };
    EmployeesPage.prototype.ionViewWillLeave = function () {
    };
    EmployeesPage.prototype.reorient = function ($event) {
        this.isMobile = mobilecheck();
    };
    EmployeesPage.prototype.showModal = function (i) {
        this.mod = this.modal.create(__WEBPACK_IMPORTED_MODULE_2__employee_info_modal_employee_info_modal__["a" /* EmployeeInfoModalPage */], { data: i }, { cssClass: "whitemodal sm " + (this.isMobile ? "mobile" : "") });
        this.mod.present();
    };
    EmployeesPage.prototype.ngAfterViewInit = function () {
        this.ds.forEach(function (i) {
            i.snapOffset = 85;
            i.scrollbarHidden = true;
        });
    };
    EmployeesPage.prototype.editEmp = function (dt) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__edit_employee_edit_employee__["a" /* EditEmployeePage */], { data: dt }, { animate: true, direction: "top" });
    };
    EmployeesPage.prototype.addNew = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__add_employee_add_employee__["a" /* AddEmployeePage */], {}, { animate: true, direction: "top" });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_5_ngx_drag_scroll__["a" /* DragScrollComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], EmployeesPage.prototype, "ds", void 0);
    EmployeesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-employees',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\employees\employees.html"*/'<ion-content (window:resize)="reorient($event)" [ngClass]="{\'mobile\':isMobile}">\n	<top-bar></top-bar>\n	<side-bar *ngIf = "!isMobile" [highlights]="\'employees\'"></side-bar>\n\n	<section class="main-content">\n\n		<ion-row>\n			<ion-col col-12>\n				<p class="header-top">\n					Employees\n				</p>\n\n				<div class="nav">\n					<ion-row>\n						<ion-col col-6>\n							&nbsp;\n						</ion-col>\n						<ion-col col-6>\n							<button ion-button class="add-employee" (tap)="addNew()">\n								<ion-icon name="md-add-circle">\n								</ion-icon>\n								Add New\n							</button>\n						</ion-col>\n					</ion-row>\n				</div>\n\n			</ion-col>\n		</ion-row>\n\n		<ion-row>\n			<ion-col col-12>\n				<submodule [title]="\'Active Members\'" *ngIf="activeEmployees.length > 0">\n					<sortable-table [data]="activeEmployees" [headers]="sampKeysA" [formats]="formatsA" [header_titles]="hdrTitlesA"></sortable-table>\n					\n				</submodule>\n			</ion-col>\n		</ion-row>\n		<!-- end active members -->\n\n		<ion-row>\n			<ion-col col-12>\n				<submodule [title]="\'Members\'"  *ngIf="employees.length > 0">\n					<sortable-table [data]="employees" [headers]="sampKeysE" [formats]="formatsE" [header_titles]="hdrTitlesE"></sortable-table>\n					\n				</submodule>\n			</ion-col>\n		</ion-row> \n		<!-- end members -->\n\n		<ion-row>\n			<ion-col col-12>\n				<submodule [title]="\'Pending Member Registration\'" *ngIf="pendingMembers.length > 0">\n					<sortable-table [data]="pendingMembers" [headers]="sampKeysP" [formats]="formatsP" [header_titles]="hdrTitlesP"></sortable-table>\n					\n				</submodule>\n			</ion-col>\n		</ion-row> \n		<!-- end pending members -->\n\n		<ion-row>\n			<ion-col col-12>\n				<submodule [title]="\'Flagged Members\'" *ngIf="flaggedEmployees.length > 0">\n					<sortable-table [data]="flaggedEmployees" [headers]="sampKeysF" [formats]="formatsF" [header_titles]="hdrTitlesF"></sortable-table>\n					\n				</submodule>\n			</ion-col>\n		</ion-row> \n		<!-- end flagged members -->\n		<foot></foot>\n	</section>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\employees\employees.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], EmployeesPage);
    return EmployeesPage;
}());

//# sourceMappingURL=employees.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEmployeePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ext_mob_prefixes__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditEmployeePage = /** @class */ (function () {
    function EditEmployeePage(navCtrl, navParams, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.isMobile = mobilecheck();
        this.userData = {
            firstName: "",
            middleName: "",
            lastName: "",
            userName: "",
            email: "",
            companyCode: "",
            employeeId: "",
            payrollAccount: "",
            password: "",
            mobile: ""
        };
        this.prefixes = this.sanitizer.bypassSecurityTrustHtml(__WEBPACK_IMPORTED_MODULE_2__ext_mob_prefixes__["a" /* intlPrefixes */]);
        this.prefix = '63';
        console.log(this.navParams.data);
        this.userData = this.navParams.get('data');
    }
    EditEmployeePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditEmployeePage');
    };
    EditEmployeePage.prototype.reorient = function ($event) {
        this.isMobile = mobilecheck();
    };
    EditEmployeePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-employee',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\edit-employee\edit-employee.html"*/'<ion-content (window:resize)="reorient($event)" [ngClass]="{\'mobile\':isMobile}">\n	<top-bar></top-bar>\n	<side-bar *ngIf = "!isMobile" [highlights]="\'dashboard\'"></side-bar>\n\n	 <section class="main">\n	 	<form name="employee-data">\n	 		<h2>Edit Employee Account</h2>\n	 		<ion-row>\n	 			<p class="label">\n	 				First Name\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="firstName" [(ngModel)] = "userData.firstName" [value] = "userData.firstName" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Middle Name\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="middleName" [(ngModel)] = "userData.middleName" [value] = "userData.middleName" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Last Name\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="lastName" [(ngModel)] = "userData.lastName" [value] = "userData.lastName" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Employee ID\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="employeeId" [(ngModel)] = "userData.employeeId" [value] = "userData.employeeId" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Email\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="email" [(ngModel)] = "userData.email" [value] = "userData.email" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Password\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="password" [(ngModel)] = "userData.password" [value] = "userData.password" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row class="bot">\n	 			<p class="label">\n	 				Mobile\n	 			</p>\n	 			<span class="content">\n		 			<select [innerHTML] = "prefixes" name="prefix" [(ngModel)]="prefix"></select>\n		 			<input class="short" type="number" name="mobile" [(ngModel)] = "userData.mobile" [value] = "userData.mobile" />\n		 		</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Date Hired\n	 			</p>\n	 			<span class="content">\n	 				<input type="date" name="hiredDate" [(ngModel)] = "userData.hiredDate" [value] = "" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Gender\n	 			</p>\n	 			<span class="content">\n		 			<select name="gender" [(ngModel)]="userData.gender">\n		 				<option value="male">Male</option>\n		 				<option value="female">Female</option>\n		 			</select>\n		 		</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Birthdate\n	 			</p>\n	 			<span class="content">\n	 				<input type="date" name="birthday" [(ngModel)] = "userData.birthday" [value] = "" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Position\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="position" [(ngModel)] = "userData.position" [value] = "position" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Entity\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="entity" [(ngModel)] = "userData.entity" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Type\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="type" [(ngModel)] = "userData.type" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Division\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="division" [(ngModel)] = "userData.division" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Net Salary\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="netSalary" [(ngModel)] = "userData.netSalary" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Gross Salary\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="grossSalary" [(ngModel)] = "userData.grossSalary" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Payroll Account\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="payrollAccount" [(ngModel)] = "userData.payrollAccount" [value] = "userData.payrollAccount" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Bank Name\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="bankName" [(ngModel)] = "userData.bankName" [value] = "userData.bankName" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Vacation Leave\n	 			</p>\n	 			<span class="content">\n	 				<input type="number" name="vacationLeave" [(ngModel)] = "userData.vacationLeave" [value] = "userData.vacationLeave" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Sick Leave\n	 			</p>\n	 			<span class="content">\n	 				<input type="number" name="sickLeave" [(ngModel)] = "userData.sickLeave" [value] = "userData.sickLeave" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Maternity Leaves\n	 			</p>\n	 			<span class="content">\n	 				<input type="number" name="maternityLeave" [(ngModel)] = "userData.maternityLeave" [value] = "userData.maternityLeave" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Paternity Leaves\n	 			</p>\n	 			<span class="content">\n	 				<input type="number" name="paternityLeave" [(ngModel)] = "userData.paternityLeave" [value] = "userData.paternityLeave" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<button ion-button (tap)="submitReg()">Update Account</button>\n	 		</ion-row>\n	 	</form>\n\n	 </section>\n	 <foot></foot>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\edit-employee\edit-employee.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], EditEmployeePage);
    return EditEmployeePage;
}());

//# sourceMappingURL=edit-employee.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEmployeePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employees_employees__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ext_mob_prefixes__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_db_db__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddEmployeePage = /** @class */ (function () {
    function AddEmployeePage(navCtrl, navParams, sanitizer, alert, menu, db, loader, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.alert = alert;
        this.menu = menu;
        this.db = db;
        this.loader = loader;
        this.toast = toast;
        this.userData = {
            firstName: "",
            middleName: "",
            lastName: "",
            tin: "",
            company: "",
            gender: "",
            email: "",
            hiredDate: "",
            password: "",
            mobile: "",
            birthday: "",
            position: "",
            entity: "",
            type: "",
            division: "",
            netSalary: "",
            grossSalary: "",
            bankName: "",
            vacationLeave: 0,
            sickLeave: 0,
            maternityLeave: 0,
            paternityLeave: 0,
            companyId: 1
        };
        this.confirmPass = '';
        this.prefixes = this.sanitizer.bypassSecurityTrustHtml(__WEBPACK_IMPORTED_MODULE_5__ext_mob_prefixes__["a" /* intlPrefixes */]);
        this.isMobile = mobilecheck();
        this.prefix = '63';
    }
    AddEmployeePage.prototype.ionViewDidLoad = function () {
        this.menu.close();
        localStorage.page = 'employees';
    };
    AddEmployeePage.prototype.ngAfterViewInit = function () {
        this.prev.nativeElement.src = "../../assets/imgs/tmp-img.png";
    };
    AddEmployeePage.prototype.toHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */], {}, { animate: true, direction: "forward" });
    };
    AddEmployeePage.prototype.reorient = function ($event) {
        this.isMobile = mobilecheck();
    };
    AddEmployeePage.prototype.submitReg = function () {
        var _this = this;
        this.userData.mobile = this.prefix + this.userData.mobile;
        var self = this;
        var uData = this.userData;
        var load = this.loader.create({
            spinner: 'crescent',
            dismissOnPageChange: true,
            showBackdrop: true,
            content: "Processing...",
            enableBackdropDismiss: false
        });
        load.present();
        this.db.manAddEmp(uData).then(function (res) {
            load.dismiss();
            if (res.text() === "true") {
                var toast = _this.toast.create({
                    message: 'Employee has been added',
                    duration: 3000,
                    position: 'top',
                    cssClass: "success"
                });
                toast.onDidDismiss(function (d) {
                    self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__employees_employees__["a" /* EmployeesPage */], {}, { animate: true, direction: "forward" });
                });
                toast.present();
            }
            else {
                var toast = _this.toast.create({
                    message: 'An error occurred. Please try again later.',
                    duration: 3000,
                    position: 'top',
                    cssClass: "fail"
                });
                toast.present();
            }
        }).catch(function (err) {
            load.dismiss();
            var toast = _this.toast.create({
                message: 'An error occurred. Please try again later.',
                duration: 3000,
                position: 'top',
                cssClass: "fail"
            });
            toast.present();
            console.warn(err);
        });
    };
    AddEmployeePage.prototype.readyForSubmit = function () {
        var u = this.userData;
        return (u.firstName != "" &&
            u.middleName != "" &&
            u.lastName != "" &&
            u.tin.toString().length >= 9 &&
            u.company != "" &&
            u.gender != "" &&
            u.email != "" &&
            u.hiredDate != "" &&
            u.mobile.toString().length >= 10 &&
            u.birthday != "" &&
            u.position != "" &&
            u.entity != "" &&
            u.type != "" &&
            u.division != "" &&
            u.netSalary > 0 &&
            u.grossSalary > 0 &&
            u.bankName != "");
    };
    AddEmployeePage.prototype.goToTerms = function () {
        window.open(window.location.origin + "/#/terms");
        //this.navCtrl.setRoot(TermsPage,{},{animate:true, direction:"forward"});
    };
    AddEmployeePage.prototype.stat = function (event) {
        console.log(this);
    };
    AddEmployeePage.prototype.takePic = function ($event) {
        var self = this;
        if ($event.target.files && $event.target.files[0]) {
            //self.uploadFile($event.target.files[0]);
            console.log($event.target.files[0]);
            var nurl = URL.createObjectURL($event.target.files[0]);
            self.prev.nativeElement.src = nurl;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('prev'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddEmployeePage.prototype, "prev", void 0);
    AddEmployeePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-employee',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\add-employee\add-employee.html"*/'<ion-content (window:resize)="reorient($event)" [ngClass]="{\'mobile\':isMobile}">\n	<top-bar></top-bar>\n	<side-bar *ngIf = "!isMobile" [highlights]="\'dashboard\'"></side-bar>\n\n	 <section class="main">\n	 	<form name="employee-data">\n	 		<h2>Add New Account</h2>\n		 	<div class="uploader">\n				<input type="file" accept="image/*" (change)="takePic($event)">\n				<ion-avatar item-start>\n					<img #prev/>\n				</ion-avatar>\n		 	</div>\n	 		<ion-row>\n	 			<p class="label">\n	 				First Name\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="firstName" [(ngModel)] = "userData.firstName" [value] = "userData.firstName" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Middle Name\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="middleName" [(ngModel)] = "userData.middleName" [value] = "userData.middleName" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Last Name\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="lastName" [(ngModel)] = "userData.lastName" [value] = "userData.lastName" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				TIN\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="tin" [(ngModel)] = "userData.tin" [value] = "userData.tin" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Company\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="company" [(ngModel)] = "userData.company" [value] = "userData.company" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Email\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="email" [(ngModel)] = "userData.email" [value] = "userData.email" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row class="bot">\n	 			<p class="label">\n	 				Mobile\n	 			</p>\n	 			<span class="content">\n		 			<select [innerHTML] = "prefixes" name="prefix" [(ngModel)]="prefix"></select>\n		 			<input class="short" type="number" name="mobile" [(ngModel)] = "userData.mobile" [value] = "userData.mobile" />\n		 		</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Date Hired\n	 			</p>\n	 			<span class="content">\n	 				<input type="date" name="hiredDate" [(ngModel)] = "userData.hiredDate" [value] = "" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Gender\n	 			</p>\n	 			<span class="content">\n		 			<select name="gender" [(ngModel)]="userData.gender">\n		 				<option value="male">Male</option>\n		 				<option value="female">Female</option>\n		 			</select>\n		 		</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Birthdate\n	 			</p>\n	 			<span class="content">\n	 				<input type="date" name="birthday" [(ngModel)] = "userData.birthday" [value] = "" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Position\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="position" [(ngModel)] = "userData.position" [value] = "position" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Entity\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="entity" [(ngModel)] = "userData.entity" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Type\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="type" [(ngModel)] = "userData.type" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Division\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="division" [(ngModel)] = "userData.division" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Net Salary\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="netSalary" [(ngModel)] = "userData.netSalary" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Gross Salary\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="grossSalary" [(ngModel)] = "userData.grossSalary" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Payroll Account\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="payrollAccount" [(ngModel)] = "userData.payrollAccount" [value] = "userData.payrollAccount" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Bank Name\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="bankName" [(ngModel)] = "userData.bankName" [value] = "userData.bankName" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Vacation Leave\n	 			</p>\n	 			<span class="content">\n	 				<input type="number" name="vacationLeave" min="0" step="1" [(ngModel)] = "userData.vacationLeave" [value] = "userData.vacationLeave" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Sick Leave\n	 			</p>\n	 			<span class="content">\n	 				<input type="number" name="sickLeave" min="0" step="1" [(ngModel)] = "userData.sickLeave" [value] = "userData.sickLeave" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Maternity Leaves\n	 			</p>\n	 			<span class="content">\n	 				<input type="number" name="maternityLeave" min="0" step="1"  [(ngModel)] = "userData.maternityLeave" [value] = "userData.maternityLeave" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Paternity Leaves\n	 			</p>\n	 			<span class="content">\n	 				<input type="number" name="paternityLeave" min="0" step="1"  [(ngModel)] = "userData.paternityLeave" [value] = "userData.paternityLeave" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<button ion-button (tap)="submitReg()" [disabled] = "!readyForSubmit()">Create Account</button>\n	 		</ion-row>\n	 	</form>\n	 \n	 	<foot></foot>\n	 </section>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\add-employee\add-employee.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], AddEmployeePage);
    return AddEmployeePage;
}());

//# sourceMappingURL=add-employee.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompaniesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_info_modal_employee_info_modal__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_drag_scroll__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_db_db__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__statement_of_account_statement_of_account__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_hr_add_hr__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CompaniesPage = /** @class */ (function () {
    function CompaniesPage(navCtrl, navParams, menu, modal, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.modal = modal;
        this.db = db;
        this.pendingMembers = [];
        this.isMobile = mobilecheck();
        this.cmpny = [
            {
                companyName: "6805 Ayala Avenue Condominium Corporation",
                companyCode: "001",
                totalEmployees: 13,
                activeAvailments: 102000,
                companyID: 1
            },
            {
                companyName: "BXB Employee Solutions Corp",
                companyCode: "002",
                totalEmployees: 5,
                activeAvailments: 114000,
                companyID: 2
            },
            {
                companyName: "Thirty One Digital Media Solutions Inc.",
                companyCode: "31D",
                totalEmployees: 26,
                activeAvailments: 64000,
                companyID: 3
            },
            {
                companyName: "test company",
                companyCode: "test1",
                totalEmployees: 26,
                activeAvailments: 0,
                companyID: 4
            },
            {
                companyName: "Mermida's Company",
                companyCode: "123",
                totalEmployees: 5,
                activeAvailments: 0,
                companyID: 5
            },
            {
                companyName: "Baked Studios",
                companyCode: "Baked",
                totalEmployees: 4,
                activeAvailments: 0,
                companyID: 6
            },
            {
                companyName: "Richelle Company",
                companyCode: "12345",
                totalEmployees: 5,
                activeAvailments: 0,
                companyID: 7
            }
        ];
    }
    CompaniesPage.prototype.ionViewDidEnter = function () {
        this.menu.close();
        localStorage.page = 'companies';
    };
    CompaniesPage.prototype.ionViewWillLeave = function () {
    };
    CompaniesPage.prototype.reorient = function ($event) {
        this.isMobile = mobilecheck();
    };
    CompaniesPage.prototype.showModal = function (i) {
        this.mod = this.modal.create(__WEBPACK_IMPORTED_MODULE_2__employee_info_modal_employee_info_modal__["a" /* EmployeeInfoModalPage */], { data: i }, { cssClass: "whitemodal sm " + (this.isMobile ? "mobile" : "") });
        this.mod.present();
    };
    CompaniesPage.prototype.showSOA = function (i) {
        this.mod = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__statement_of_account_statement_of_account__["a" /* StatementOfAccountPage */], { data: i }, { cssClass: "whitemodal  " + (this.isMobile ? "mobile" : "") });
        this.mod.present();
    };
    CompaniesPage.prototype.ngAfterViewInit = function () {
        this.ds.forEach(function (i) {
            i.snapOffset = 85;
            i.scrollbarHidden = true;
        });
    };
    CompaniesPage.prototype.addHR = function (cid) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__add_hr_add_hr__["a" /* AddHrPage */], { cid: cid }, { animate: true, direction: "top" });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_3_ngx_drag_scroll__["a" /* DragScrollComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], CompaniesPage.prototype, "ds", void 0);
    CompaniesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-companies',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\companies\companies.html"*/'<ion-content (window:resize)="reorient($event)" [ngClass]="{\'mobile\':isMobile}">\n	<top-bar></top-bar>\n	<side-bar *ngIf = "!isMobile" [highlights]="\'companies\'"></side-bar>\n\n	<section class="main-content">\n\n		<ion-row>\n			<ion-col col-12>\n				<submodule [title]="\'Companies\'" [searchbar]="true">\n					<drag-scroll #ds1 class="table-container" [drag-scroll-y-disabled]="true" >\n						<table>\n						<tr style="width:100%;" class="header">\n							<td>\n								Company Name\n							</td>\n							<td>\n								Company Code\n							</td>\n							<td>\n								Total Number Employees Members\n							</td>\n							<td>\n								Active Availments\n							</td>\n							<td>\n								&nbsp;\n							</td>\n						</tr>\n						<tr style="width:100%" class="dne" *ngIf="cmpny.length <= 0">\n							<td>\n								No Companies Listed\n							</td>\n						</tr>\n						<tr style="width:100%;" class="data" *ngFor = "let c of cmpny; let i = index">\n							<td>\n								{{c?.companyName}}\n							</td>\n							<td>\n								{{c?.companyCode}}\n							</td>\n							<td>\n								{{c?.totalEmployees}}\n							</td>\n							<td>\n								{{c?.activeAvailments | number:\'1.0-2\'}}\n							</td>\n							<td class="actions">\n								<a class="link" (tap)="showSOA()">View SOA</a>\n								<a class="link">Employees</a>\n								<a class="link">Edit</a>\n								<a class="link" (tap)="addHR(c?.companyID)">Add HR</a>\n								<a class="link">Hold</a>\n								<a class="link">Delete</a>\n							</td>\n						</tr>\n						</table>\n					</drag-scroll>\n				</submodule>\n				<button ion-button class="add-company" (tap)="addNew()">\n					<ion-icon name="md-add-circle">\n					</ion-icon>\n					Add New\n				</button>\n			</ion-col>\n		</ion-row>\n		<!-- end active members -->\n		<foot></foot>\n	</section>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\companies\companies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_db_db__["a" /* DbProvider */]])
    ], CompaniesPage);
    return CompaniesPage;
}());

//# sourceMappingURL=companies.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddHrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_db_db__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddHrPage = /** @class */ (function () {
    function AddHrPage(navCtrl, navParams, sanitizer, alert, menu, db, loader, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.alert = alert;
        this.menu = menu;
        this.db = db;
        this.loader = loader;
        this.toast = toast;
        this.hrData = {
            login: '',
            password: '',
            companyId: 0
        };
        this.confirmPass = '';
        this.isMobile = mobilecheck();
        this.prefix = '63';
        this.hrData.companyId = this.navParams.get('cid') || 1;
    }
    AddHrPage.prototype.ionViewDidLoad = function () {
        this.menu.close();
        localStorage.page = 'companies';
    };
    AddHrPage.prototype.ngAfterViewInit = function () {
    };
    AddHrPage.prototype.toHome = function () {
        //this.navCtrl.setRoot(LoginPage,{},{animate:true, direction:"forward"});
    };
    AddHrPage.prototype.reorient = function ($event) {
        this.isMobile = mobilecheck();
    };
    AddHrPage.prototype.submitReg = function () {
        var self = this;
        var uData = this.hrData;
        console.log(uData);
        /*let load = this.loader.create({
              spinner: 'crescent',
              dismissOnPageChange: true,
              showBackdrop: true,
              content: `Processing...`,
              enableBackdropDismiss:false
          });
        load.present();
    
        this.db.manAddEmp(uData).then(res=>{
          load.dismiss();
          if(res.text() === "true"){
            let toast = this.toast.create({
              message: 'Employee has been added',
              duration: 3000,
              position: 'top',
              cssClass:`success`
            });
            toast.onDidDismiss(d=>{
              self.navCtrl.setRoot(EmployeesPage,{},{animate:true, direction:"forward"});
            });
            toast.present();
          }else{
            let toast = this.toast.create({
              message: 'An error occurred. Please try again later.',
              duration: 3000,
              position: 'top',
              cssClass:`fail`
            });
            toast.present();
          }
        }).catch(err=>{
          load.dismiss();
          let toast = this.toast.create({
            message: 'An error occurred. Please try again later.',
            duration: 3000,
            position: 'top',
            cssClass:`fail`
          });
          toast.present();
          console.warn(err);
        });*/
    };
    AddHrPage.prototype.readyForSubmit = function () {
        var u = this.hrData;
        return (u.login != "" &&
            u.pass != "" &&
            u.pass == this.confirmPass &&
            u.companyId > 0);
    };
    AddHrPage.prototype.goToTerms = function () {
        window.open(window.location.origin + "/#/terms");
        //this.navCtrl.setRoot(TermsPage,{},{animate:true, direction:"forward"});
    };
    AddHrPage.prototype.stat = function (event) {
        console.log(this);
    };
    AddHrPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-hr',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\add-hr\add-hr.html"*/'<ion-content (window:resize)="reorient($event)" [ngClass]="{\'mobile\':isMobile}">\n	<top-bar></top-bar>\n	<side-bar *ngIf = "!isMobile" [highlights]="\'dashboard\'"></side-bar>\n\n	 <section class="main">\n	 	<form name="employee-data">\n	 		<h2>Create Company HR</h2>\n	 		<ion-row>\n	 			<p class="label">\n	 				Company Login\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="login" [(ngModel)] = "hrData.login"/>\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Password\n	 			</p>\n	 			<span class="content">\n	 				<input type="password" name="pass" [(ngModel)] = "hrData.pass" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Confirm Password\n	 			</p>\n	 			<span class="content">\n	 				<input type="password" name="confirmPass" [(ngModel)] = "confirmPass" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<button ion-button (tap)="submitReg()" [disabled] = "!readyForSubmit()">Create Account</button>\n	 		</ion-row>\n	 	</form>\n	 \n	 	<foot></foot>\n	 </section>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\add-hr\add-hr.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], AddHrPage);
    return AddHrPage;
}());

//# sourceMappingURL=add-hr.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(251);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_account_link_account_link__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sign_up_sign_up__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_tin_signup_tin__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_forgot_password_forgot_password__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_terms_terms__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_privacy_policy_privacy_policy__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_loans_loans__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_activity_log_activity_log__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_admin_login_admin_login__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_employee_dashboard_employee_dashboard__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_edit_profile_edit_profile__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_employee_loans_employee_loans__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_employees_employees__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_hr_dashboard_hr_dashboard__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_add_employee_add_employee__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_edit_employee_edit_employee__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_soa_soa__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_upload_csv_upload_csv__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_super_dashboard_super_dashboard__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_admin_credit_admin_credit__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_companies_companies__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_statement_of_account_statement_of_account__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_flagging_flagging__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_preterm_preterm__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_add_company_add_company__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_statements_statements__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_add_hr_add_hr__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_disclosure_statement_disclosure_statement__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_emp_disclosure_statement_modal_emp_disclosure_statement_modal__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_employee_info_modal_employee_info_modal__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_terms_modal_terms_modal__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_detail_verification_detail_verification__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_preterm_application_modal_preterm_application_modal__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ngx_drag_scroll__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_ngx_pagination__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_db_db__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_app_app__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_ngx_cookie_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_media_media__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/* shared pages */











/* employee pages */



//import { CDashboardPage } from '../pages/c-dashboard/c-dashboard';
/* hr pages */






/* superuser pages */









/* modals */













var pages = [
    __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
    __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
    __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
    __WEBPACK_IMPORTED_MODULE_10__pages_sign_up_sign_up__["a" /* SignUpPage */],
    __WEBPACK_IMPORTED_MODULE_12__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
    __WEBPACK_IMPORTED_MODULE_22__pages_hr_dashboard_hr_dashboard__["a" /* HrDashboardPage */],
    __WEBPACK_IMPORTED_MODULE_13__pages_terms_terms__["a" /* TermsPage */],
    __WEBPACK_IMPORTED_MODULE_6__components_account_link_account_link__["a" /* AccountLinkComponent */],
    __WEBPACK_IMPORTED_MODULE_15__pages_loans_loans__["a" /* LoansPage */],
    __WEBPACK_IMPORTED_MODULE_11__pages_signup_tin_signup_tin__["a" /* SignupTinPage */],
    __WEBPACK_IMPORTED_MODULE_36__pages_disclosure_statement_disclosure_statement__["a" /* DisclosureStatementPage */],
    __WEBPACK_IMPORTED_MODULE_21__pages_employees_employees__["a" /* EmployeesPage */],
    __WEBPACK_IMPORTED_MODULE_23__pages_add_employee_add_employee__["a" /* AddEmployeePage */],
    __WEBPACK_IMPORTED_MODULE_38__pages_employee_info_modal_employee_info_modal__["a" /* EmployeeInfoModalPage */],
    __WEBPACK_IMPORTED_MODULE_39__pages_terms_modal_terms_modal__["a" /* TermsModalPage */],
    __WEBPACK_IMPORTED_MODULE_40__pages_detail_verification_detail_verification__["a" /* DetailVerificationPage */],
    __WEBPACK_IMPORTED_MODULE_14__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */],
    __WEBPACK_IMPORTED_MODULE_24__pages_edit_employee_edit_employee__["a" /* EditEmployeePage */],
    __WEBPACK_IMPORTED_MODULE_27__pages_super_dashboard_super_dashboard__["a" /* SuperDashboardPage */],
    __WEBPACK_IMPORTED_MODULE_18__pages_employee_dashboard_employee_dashboard__["a" /* EmployeeDashboardPage */],
    __WEBPACK_IMPORTED_MODULE_37__pages_emp_disclosure_statement_modal_emp_disclosure_statement_modal__["a" /* EmpDisclosureStatementModalPage */],
    __WEBPACK_IMPORTED_MODULE_19__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
    __WEBPACK_IMPORTED_MODULE_20__pages_employee_loans_employee_loans__["a" /* EmployeeLoansPage */],
    __WEBPACK_IMPORTED_MODULE_28__pages_admin_credit_admin_credit__["a" /* AdminCreditPage */],
    __WEBPACK_IMPORTED_MODULE_29__pages_companies_companies__["a" /* CompaniesPage */],
    __WEBPACK_IMPORTED_MODULE_30__pages_statement_of_account_statement_of_account__["a" /* StatementOfAccountPage */],
    __WEBPACK_IMPORTED_MODULE_31__pages_flagging_flagging__["a" /* FlaggingPage */],
    __WEBPACK_IMPORTED_MODULE_32__pages_preterm_preterm__["a" /* PretermPage */],
    __WEBPACK_IMPORTED_MODULE_33__pages_add_company_add_company__["a" /* AddCompanyPage */],
    __WEBPACK_IMPORTED_MODULE_34__pages_statements_statements__["a" /* StatementsPage */],
    __WEBPACK_IMPORTED_MODULE_25__pages_soa_soa__["a" /* SoaPage */],
    __WEBPACK_IMPORTED_MODULE_16__pages_activity_log_activity_log__["a" /* ActivityLogPage */],
    __WEBPACK_IMPORTED_MODULE_26__pages_upload_csv_upload_csv__["a" /* UploadCsvPage */],
    __WEBPACK_IMPORTED_MODULE_41__pages_preterm_application_modal_preterm_application_modal__["a" /* PretermApplicationModalPage */],
    __WEBPACK_IMPORTED_MODULE_35__pages_add_hr_add_hr__["a" /* AddHrPage */],
    __WEBPACK_IMPORTED_MODULE_17__pages_admin_login_admin_login__["a" /* AdminLoginPage */]
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: pages,
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_42__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_43_ngx_drag_scroll__["b" /* DragScrollModule */],
                __WEBPACK_IMPORTED_MODULE_44_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */], name: 'Home', segment: 'home' },
                        { component: __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */], name: 'LoginPage', segment: 'login/:company/portal' },
                        { component: __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */], name: 'LoginPage', segment: 'login' },
                        { component: __WEBPACK_IMPORTED_MODULE_10__pages_sign_up_sign_up__["a" /* SignUpPage */], name: 'SignUpPage', segment: 'sign-up' },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */], name: 'ForgotPasswordPage', segment: 'forgot' },
                        { component: __WEBPACK_IMPORTED_MODULE_22__pages_hr_dashboard_hr_dashboard__["a" /* HrDashboardPage */], name: 'HrDashboardPage', segment: 'hr-dashboard' },
                        { component: __WEBPACK_IMPORTED_MODULE_13__pages_terms_terms__["a" /* TermsPage */], name: 'TermsPage', segment: 'terms' },
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_loans_loans__["a" /* LoansPage */], name: 'LoansPage', segment: 'hr/loans' },
                        { component: __WEBPACK_IMPORTED_MODULE_11__pages_signup_tin_signup_tin__["a" /* SignupTinPage */], name: 'SignupTinPage', segment: 'tin' },
                        { component: __WEBPACK_IMPORTED_MODULE_36__pages_disclosure_statement_disclosure_statement__["a" /* DisclosureStatementPage */], name: 'DisclosureStatementPage', segment: 'ds' },
                        { component: __WEBPACK_IMPORTED_MODULE_21__pages_employees_employees__["a" /* EmployeesPage */], name: 'EmployeesPage', segment: 'employees' },
                        { component: __WEBPACK_IMPORTED_MODULE_23__pages_add_employee_add_employee__["a" /* AddEmployeePage */], name: 'AddEmployeePage', segment: 'add-employee' },
                        { component: __WEBPACK_IMPORTED_MODULE_38__pages_employee_info_modal_employee_info_modal__["a" /* EmployeeInfoModalPage */], name: 'EmployeeInfoModalPage', segment: 'modal-employee-info' },
                        { component: __WEBPACK_IMPORTED_MODULE_39__pages_terms_modal_terms_modal__["a" /* TermsModalPage */], name: 'TermsModalPage', segment: 'modal-terms' },
                        { component: __WEBPACK_IMPORTED_MODULE_40__pages_detail_verification_detail_verification__["a" /* DetailVerificationPage */], name: 'DetailVerificationPage', segment: 'verify-info' },
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */], name: 'PrivacyPolicyPage', segment: 'privacy-policy' },
                        { component: __WEBPACK_IMPORTED_MODULE_24__pages_edit_employee_edit_employee__["a" /* EditEmployeePage */], name: 'EditEmployeePage', segment: 'edit-employee' },
                        { component: __WEBPACK_IMPORTED_MODULE_27__pages_super_dashboard_super_dashboard__["a" /* SuperDashboardPage */], name: 'SuperDashboardPage', segment: 'management/dashboard' },
                        { component: __WEBPACK_IMPORTED_MODULE_18__pages_employee_dashboard_employee_dashboard__["a" /* EmployeeDashboardPage */], name: 'EmployeeDashboardPage', segment: 'employee-dashboard' },
                        { component: __WEBPACK_IMPORTED_MODULE_37__pages_emp_disclosure_statement_modal_emp_disclosure_statement_modal__["a" /* EmpDisclosureStatementModalPage */], name: 'EmpDisclosureStatementModalPage', segment: 'eds' },
                        { component: __WEBPACK_IMPORTED_MODULE_19__pages_edit_profile_edit_profile__["a" /* EditProfilePage */], name: 'EditProfilePage', segment: 'edit-profile' },
                        { component: __WEBPACK_IMPORTED_MODULE_20__pages_employee_loans_employee_loans__["a" /* EmployeeLoansPage */], name: 'EmployeeLoansPage', segment: 'loanstatus' },
                        { component: __WEBPACK_IMPORTED_MODULE_28__pages_admin_credit_admin_credit__["a" /* AdminCreditPage */], name: 'AdminCreditPage', segment: 'management/loans' },
                        { component: __WEBPACK_IMPORTED_MODULE_29__pages_companies_companies__["a" /* CompaniesPage */], name: 'CompaniesPage', segment: 'management/companies' },
                        { component: __WEBPACK_IMPORTED_MODULE_30__pages_statement_of_account_statement_of_account__["a" /* StatementOfAccountPage */], name: 'StatementOfAccountPage', segment: 'modal-soa' },
                        { component: __WEBPACK_IMPORTED_MODULE_31__pages_flagging_flagging__["a" /* FlaggingPage */], name: 'FlaggingPage', segment: 'management/flagging' },
                        { component: __WEBPACK_IMPORTED_MODULE_32__pages_preterm_preterm__["a" /* PretermPage */], name: 'PretermPage', segment: 'management/preterm' },
                        { component: __WEBPACK_IMPORTED_MODULE_33__pages_add_company_add_company__["a" /* AddCompanyPage */], name: 'AddCompanyPage', segment: 'add-company' },
                        { component: __WEBPACK_IMPORTED_MODULE_34__pages_statements_statements__["a" /* StatementsPage */], name: 'StatementsPage', segment: 'management/soa' },
                        { component: __WEBPACK_IMPORTED_MODULE_25__pages_soa_soa__["a" /* SoaPage */], name: 'SoaPage', segment: 'statement-of-account' },
                        { component: __WEBPACK_IMPORTED_MODULE_16__pages_activity_log_activity_log__["a" /* ActivityLogPage */], name: 'ActivityLogPage', segment: 'activitylog' },
                        { component: __WEBPACK_IMPORTED_MODULE_26__pages_upload_csv_upload_csv__["a" /* UploadCsvPage */], name: 'UploadCsvPage', segment: 'upload-csv' },
                        { component: __WEBPACK_IMPORTED_MODULE_41__pages_preterm_application_modal_preterm_application_modal__["a" /* PretermApplicationModalPage */], name: 'PretermApplicationModalPage', segment: 'preterm-modal' },
                        { component: __WEBPACK_IMPORTED_MODULE_35__pages_add_hr_add_hr__["a" /* AddHrPage */], name: 'AddHrPage', segment: 'add-hr' },
                        { component: __WEBPACK_IMPORTED_MODULE_17__pages_admin_login_admin_login__["a" /* AdminLoginPage */], name: 'AdminLoginPage', segment: 'admin-login' },
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: pages,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_47_ngx_cookie_service__["a" /* CookieService */],
                __WEBPACK_IMPORTED_MODULE_45__providers_db_db__["a" /* DbProvider */],
                __WEBPACK_IMPORTED_MODULE_46__providers_app_app__["a" /* AppProvider */],
                __WEBPACK_IMPORTED_MODULE_48__providers_media_media__["a" /* MediaProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    "http://localhost:8100": {
        "backend": "http://localhost/bxb-test-php",
    },
    "https://bxb-app.azurewebsites.net": {
        "backend": "https://bxb-backend-php.azurewebsites.net"
    },
    "https://test.bxbesc.com": {
        "backend": "https://bxb-backend-php.azurewebsites.net"
    }
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__side_bar_side_bar_module__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__top_bar_top_bar_module__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foot_foot_module__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__submodule_submodule_module__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_title_header_title_module__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sortable_table_sortable_table_module__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loan_loan_module__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__preterm_preterm_module__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_2__top_bar_top_bar_module__["a" /* TopBarComponentModule */],
                __WEBPACK_IMPORTED_MODULE_1__side_bar_side_bar_module__["a" /* SideBarComponentModule */],
                __WEBPACK_IMPORTED_MODULE_3__foot_foot_module__["a" /* FootComponentModule */],
                __WEBPACK_IMPORTED_MODULE_4__submodule_submodule_module__["a" /* SubmoduleComponentModule */],
                __WEBPACK_IMPORTED_MODULE_5__header_title_header_title_module__["a" /* HeaderTitleComponentModule */],
                __WEBPACK_IMPORTED_MODULE_6__sortable_table_sortable_table_module__["a" /* SortableTableComponentModule */],
                __WEBPACK_IMPORTED_MODULE_7__loan_loan_module__["a" /* LoanComponentModule */],
                __WEBPACK_IMPORTED_MODULE_8__preterm_preterm_module__["a" /* PretermComponentModule */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__side_bar__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SideBarComponentModule = /** @class */ (function () {
    function SideBarComponentModule() {
    }
    SideBarComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["d" /* IonicModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__side_bar__["a" /* SideBarComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__side_bar__["a" /* SideBarComponent */]
            ]
        })
    ], SideBarComponentModule);
    return SideBarComponentModule;
}());

//# sourceMappingURL=side-bar.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the SideBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SideBarComponent = /** @class */ (function () {
    function SideBarComponent() {
        this.hl = 'dashboard';
        this.mob = false;
        this.accountType = localStorage.accountType;
    }
    SideBarComponent.prototype.ngAfterViewInit = function () {
    };
    SideBarComponent.prototype.gethl = function () {
        if (typeof localStorage.page == "string" && localStorage.page.length > 0) {
            this.hl = localStorage.page;
        }
        return this.hl;
    };
    SideBarComponent.prototype.getAccountType = function () {
        if (typeof localStorage.accountType == "string" && localStorage.accountType.length > 0) {
            this.accountType = localStorage.accountType;
        }
        return this.accountType;
    };
    SideBarComponent.prototype.goToLink = function (lnk) {
        window.location.href = lnk;
    };
    SideBarComponent.prototype.logout = function () {
        localStorage.removeItem('accountType');
        localStorage.removeItem('userData');
        this.goToLink('/');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('highlights'),
        __metadata("design:type", String)
    ], SideBarComponent.prototype, "hl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('mobile'),
        __metadata("design:type", Boolean)
    ], SideBarComponent.prototype, "mob", void 0);
    SideBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'side-bar',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\components\side-bar\side-bar.html"*/'<!-- Generated template for the SideBarComponent component -->\n<section class="content">\n	<img src="../assets/imgs/bxb-logo-circle.svg"/>\n  <nav>\n  	<!--p class="title">Menu</p-->\n  	<ion-item [ngClass]="{\'selected\':gethl()==\'myprofile\'}" *ngIf="mob">\n  		<a class="link" href="/#/edit-profile">\n        	<b>My Profile</b>\n    	</a>\n  	</ion-item>\n  	<ion-item [ngClass]="{\'selected\':gethl()==\'dashboard\'}">\n  		<a class="link" href=\'/#/hr-dashboard\' *ngIf="getAccountType() == \'hr\'">\n        <svg enable-background="new 0 0 433.5 433.5" version="1.1" viewBox="0 0 433.5 433.5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">\n            <path d="M153,382.5h127.5v-153H153V382.5z M0,382.5h127.5V51H0V382.5z M306,382.5h127.5v-153H306V382.5z M153,51v153h280.5V51H153    z"></path>\n          </svg>\n          <b>Dashboard</b>\n      </a>\n      <a class="link" href=\'/#/management/dashboard\' *ngIf="getAccountType() == \'super\'">\n        <svg enable-background="new 0 0 433.5 433.5" version="1.1" viewBox="0 0 433.5 433.5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">\n            <path d="M153,382.5h127.5v-153H153V382.5z M0,382.5h127.5V51H0V382.5z M306,382.5h127.5v-153H306V382.5z M153,51v153h280.5V51H153    z"></path>\n          </svg>\n          <b>Dashboard</b>\n      </a>\n      <a class="link" href=\'/#/employee-dashboard\' *ngIf="getAccountType() == \'employee\'">\n        <svg enable-background="new 0 0 433.5 433.5" version="1.1" viewBox="0 0 433.5 433.5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">\n            <path d="M153,382.5h127.5v-153H153V382.5z M0,382.5h127.5V51H0V382.5z M306,382.5h127.5v-153H306V382.5z M153,51v153h280.5V51H153    z"></path>\n          </svg>\n          <b>Dashboard</b>\n      </a>\n    </ion-item>\n    <ion-item [ngClass]="{\'selected\':gethl()==\'uploadcsv\'}" *ngIf="accountType == \'hr\'">\n      <a class="link" href=\'/#/upload-csv\'>\n        <ion-icon name="cloud-upload"></ion-icon>\n        <b>Upload CSV</b>\n      </a>\n    </ion-item>\n    <!--ion-item [ngClass]="{\'selected\':gethl()==\'education\'}" *ngIf="accountType == \'employee\'">\n      <a class="link" href=\'/#/education\'>\n  			<ion-icon name="md-book"></ion-icon>\n        <b>Financial Education</b>\n    	</a>\n  	</ion-item-->\n  	<ion-item [ngClass]="{\'selected\':gethl()==\'creditsum\'}">\n      <a class="link" href=\'/#/management/loans\' *ngIf="getAccountType() == \'super\'">\n        <svg enable-background="new 0 0 433.5 433.5" version="1.1" viewBox="0 0 433.5 433.5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">\n            <path d="m0 255h51v-51h-51v51zm0 102h51v-51h-51v51zm0-204h51v-51h-51v51zm102 102h357v-51h-357v51zm0 102h357v-51h-357v51zm0-255v51h357v-51h-357z"></path>\n          </svg>\n          <b>Credit Summary</b>\n      </a>\n      <a class="link" href=\'/#/hr/loans\' *ngIf="getAccountType() == \'hr\'">\n        <svg enable-background="new 0 0 433.5 433.5" version="1.1" viewBox="0 0 433.5 433.5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">\n            <path d="m0 255h51v-51h-51v51zm0 102h51v-51h-51v51zm0-204h51v-51h-51v51zm102 102h357v-51h-357v51zm0 102h357v-51h-357v51zm0-255v51h357v-51h-357z"></path>\n          </svg>\n          <b>Credit Summary</b>\n      </a>\n  		<a class="link" href=\'/#/loanstatus\' *ngIf="getAccountType() == \'employee\'">\n  			<svg enable-background="new 0 0 433.5 433.5" version="1.1" viewBox="0 0 433.5 433.5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">\n        		<path d="m0 255h51v-51h-51v51zm0 102h51v-51h-51v51zm0-204h51v-51h-51v51zm102 102h357v-51h-357v51zm0 102h357v-51h-357v51zm0-255v51h357v-51h-357z"></path>\n        	</svg>\n        	<b>Credit Summary</b>\n    	</a>\n  	</ion-item>\n    <ion-item [ngClass]="{\'selected\':gethl()==\'companies\'}" *ngIf="accountType == \'super\'">\n      <a class="link" href=\'/#/management/companies\'>\n        <ion-icon name="ios-clipboard-outline"></ion-icon>\n        <b>Companies</b>        \n      </a>\n    </ion-item>\n    <ion-item class="sub" *ngIf="accountType == \'super\'">\n      <a class="link" (tap)="goToLink(\'/#/add-company\')">\n        Add New\n      </a>\n    </ion-item>\n    <ion-item class="sub" *ngIf="accountType == \'super\'">\n      <a class="link" (tap)="goToLink(\'/#/deleted-companies\')">\n        Deleted\n      </a>\n    </ion-item>\n  	<ion-item [ngClass]="{\'selected\':gethl()==\'employees\'}" *ngIf="accountType == \'hr\'">\n  		<a class="link" href=\'/#/employees\'>\n  			<ion-icon name="md-person"></ion-icon>\n        	<b>Employees</b>\n    	</a>\n  	</ion-item>\n  	<ion-item class="sub" *ngIf="accountType == \'hr\'">\n  		<a class="link">\n  			All\n  		</a>\n  	</ion-item>\n  	<ion-item class="sub" *ngIf="accountType == \'hr\'">\n  		<a class="link" (tap)="goToLink(\'/#/add-employee\')">\n  			Add Employees\n  		</a>\n  	</ion-item>\n    <ion-item [ngClass]="{\'selected\':hl==\'soa\'}" *ngIf="accountType == \'hr\'">\n      <a class="link" href=\'/#/statement-of-account\'>\n        <ion-icon name="md-desktop"></ion-icon>\n          <b>Statement of Account</b>\n      </a>\n    </ion-item>\n    <ion-item [ngClass]="{\'selected\':hl==\'logs\'}" *ngIf="accountType != \'employee\'">\n      <a class="link" href=\'/#/activitylog\'>\n        <ion-icon name="ios-desktop"></ion-icon>\n          <b>Activity Log</b>\n      </a>\n    </ion-item>\n    <ion-item [ngClass]="{\'selected\':hl==\'controller\'}" *ngIf="accountType == \'super\'">\n      <a class="link">\n        <ion-icon name="ios-list-box"></ion-icon>\n          <b>Super Controller</b>\n      </a>\n    </ion-item>\n    <ion-item [ngClass]="{\'selected\':hl==\'soa\'}" *ngIf="accountType == \'super\'">\n      <a class="link" href=\'/#/management/soa\'>\n        <ion-icon name="md-alert"></ion-icon>\n          <b>View Statements</b>\n      </a>\n    </ion-item>\n    <ion-item [ngClass]="{\'selected\':hl==\'flagging\'}" *ngIf="accountType == \'super\'">\n      <a class="link" href=\'/#/management/flagging\'>\n        <ion-icon name="md-flag"></ion-icon>\n          <b>Flagging</b>\n      </a>\n    </ion-item>\n  	<ion-item [ngClass]="{\'selected\':hl==\'preterm\'}" *ngIf="accountType == \'super\'">\n  		<a class="link" href=\'/#/management/preterm\'>\n  			<ion-icon name="md-card"></ion-icon>\n        	<b>Pretermination</b>\n    	</a>\n  	</ion-item>\n  	<ion-item *ngIf="mob">\n  		<a class="link" (tap)="logout()">\n        	<b>Logout</b>\n    	</a>\n  	</ion-item>\n  </nav>\n</section>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\components\side-bar\side-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SideBarComponent);
    return SideBarComponent;
}());

//# sourceMappingURL=side-bar.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopBarComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__top_bar__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TopBarComponentModule = /** @class */ (function () {
    function TopBarComponentModule() {
    }
    TopBarComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["d" /* IonicModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__top_bar__["a" /* TopBarComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__top_bar__["a" /* TopBarComponent */]
            ]
        })
    ], TopBarComponentModule);
    return TopBarComponentModule;
}());

//# sourceMappingURL=top-bar.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_link_account_link__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TopBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TopBarComponent = /** @class */ (function () {
    function TopBarComponent(pop, menu) {
        this.pop = pop;
        this.menu = menu;
    }
    TopBarComponent.prototype.isMobile = function () {
        return localStorage.view == "mobile";
    };
    TopBarComponent.prototype.ngAfterViewInit = function () {
        this.pic.nativeElement.src = "../../assets/imgs/tmp-img.png";
    };
    TopBarComponent.prototype.presentMyAcc = function (event) {
        if (this.isMobile()) {
            this.menu.open();
        }
        else {
            var popover = this.pop.create(__WEBPACK_IMPORTED_MODULE_2__account_link_account_link__["a" /* AccountLinkComponent */], {}, { cssClass: 'top-45' });
            popover.present({
                ev: event
            });
        }
    };
    TopBarComponent.prototype.presentNotifs = function (event) {
        var popover = this.pop.create(__WEBPACK_IMPORTED_MODULE_2__account_link_account_link__["a" /* AccountLinkComponent */], {}, { cssClass: (this.isMobile() ? 'mobile' : 'top-45') });
        popover.present({
            ev: event
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pic'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TopBarComponent.prototype, "pic", void 0);
    TopBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'top-bar',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\components\top-bar\top-bar.html"*/'<!-- Generated template for the TopBarComponent component -->\n<section class="content"  [ngClass]="{\'mobile\':isMobile()}">\n	<div class="nav">\n		<ion-row>\n			<ion-col col-4>\n				<!--span class="searchBar">\n					<input type="text" (ionInput)="search($event)" placeholder="Search"/>\n					<ion-icon name="ios-search"></ion-icon>\n				</span-->\n			</ion-col>\n			<ion-col col-8>\n				<span class="notifs">\n					<button ion-button class="notification" (tap)="presentNotifs($event)">\n						<div class="img-cnt">\n							<img src="../../assets/imgs/notifbell.png"/>\n						</div>\n						<ion-icon name="md-arrow-dropdown"></ion-icon>\n					</button>\n				</span>\n				<img #pic class="profilePic" (tap)="presentMyAcc($event)"/>\n			</ion-col>\n		</ion-row>\n	</div>\n</section>'/*ion-inline-end:"C:\wamp64\www\bxb\src\components\top-bar\top-bar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], TopBarComponent);
    return TopBarComponent;
}());

//# sourceMappingURL=top-bar.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foot__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FootComponentModule = /** @class */ (function () {
    function FootComponentModule() {
    }
    FootComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["d" /* IonicModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__foot__["a" /* FootComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__foot__["a" /* FootComponent */]
            ]
        })
    ], FootComponentModule);
    return FootComponentModule;
}());

//# sourceMappingURL=foot.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the FootComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FootComponent = /** @class */ (function () {
    function FootComponent() {
        this.compact = true;
    }
    FootComponent.prototype.ngAfterViewInit = function () {
        //console.info(this.compact);
    };
    FootComponent.prototype.toHome = function () {
        window.location.href = "/";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('compact'),
        __metadata("design:type", Boolean)
    ], FootComponent.prototype, "compact", void 0);
    FootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'foot',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\components\foot\foot.html"*/'<!-- Generated template for the FootComponent component -->\n\n<section class="footer" [ngClass]="{\'compact\':compact}">\n	<span>\n		<img src="../../assets/imgs/bxb-logo-dark.png" (tap)="toHome()"/>\n	</span>\n	<nav class="links">\n		<p class="copyright">&copy; 2018 BRICK BY BRICK, ALL RIGHTS RESERVED</p>\n		<p class="link"><a href=\'/#/terms\'>Terms &amp; Conditions</a></p>\n		<p class="link"><a href=\'/#/privacy-policy\'>Privacy Policy</a></p>\n	</nav>\n</section>'/*ion-inline-end:"C:\wamp64\www\bxb\src\components\foot\foot.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FootComponent);
    return FootComponent;
}());

//# sourceMappingURL=foot.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmoduleComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__submodule__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SubmoduleComponentModule = /** @class */ (function () {
    function SubmoduleComponentModule() {
    }
    SubmoduleComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["d" /* IonicModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__submodule__["a" /* SubmoduleComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__submodule__["a" /* SubmoduleComponent */]
            ]
        })
    ], SubmoduleComponentModule);
    return SubmoduleComponentModule;
}());

//# sourceMappingURL=submodule.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmoduleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the SubmoduleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SubmoduleComponent = /** @class */ (function () {
    function SubmoduleComponent() {
        this.footerDetails = false;
        this.searchbar = false;
    }
    SubmoduleComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('title'),
        __metadata("design:type", String)
    ], SubmoduleComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('footerD'),
        __metadata("design:type", Object)
    ], SubmoduleComponent.prototype, "footerDetails", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('searchbar'),
        __metadata("design:type", Boolean)
    ], SubmoduleComponent.prototype, "searchbar", void 0);
    SubmoduleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'submodule',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\components\submodule\submodule.html"*/'<!-- Generated template for the SubmoduleComponent component -->\n<section class="body">\n	<p class="title">{{title}}</p>\n	<div class="search-container" *ngIf="searchbar">\n		<span class="search">\n			<ion-icon name="ios-search"></ion-icon>\n			<input type="text" (keyup)="search($event)" placeholder="Search any fields"/>\n		</span>\n	</div>\n	<div class="container">\n		<div class="main-content">\n			<ng-content>\n\n			</ng-content>\n		</div>\n		<div class="footer" *ngIf="footerDetails" [innerHTML]="footerDetails">\n		</div>\n	</div>\n</section>'/*ion-inline-end:"C:\wamp64\www\bxb\src\components\submodule\submodule.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SubmoduleComponent);
    return SubmoduleComponent;
}());

//# sourceMappingURL=submodule.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderTitleComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_title__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HeaderTitleComponentModule = /** @class */ (function () {
    function HeaderTitleComponentModule() {
    }
    HeaderTitleComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["d" /* IonicModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__header_title__["a" /* HeaderTitleComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__header_title__["a" /* HeaderTitleComponent */]
            ]
        })
    ], HeaderTitleComponentModule);
    return HeaderTitleComponentModule;
}());

//# sourceMappingURL=header-title.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderTitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the HeaderTitleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HeaderTitleComponent = /** @class */ (function () {
    function HeaderTitleComponent() {
        console.log('Hello HeaderTitleComponent Component');
        this.text = 'Hello World';
    }
    HeaderTitleComponent.prototype.toHome = function () {
        window.location.href = '/';
    };
    HeaderTitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'header-title',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\components\header-title\header-title.html"*/'<!-- Generated template for the HeaderTitleComponent component -->\n<header (tap)="toHome()">\n	<img src="../assets/imgs/bxb-logo.png"/>\n</header>'/*ion-inline-end:"C:\wamp64\www\bxb\src\components\header-title\header-title.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HeaderTitleComponent);
    return HeaderTitleComponent;
}());

//# sourceMappingURL=header-title.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableTableComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sortable_table__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_pagination__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SortableTableComponentModule = /** @class */ (function () {
    function SortableTableComponentModule() {
    }
    SortableTableComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["d" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_pagination__["a" /* NgxPaginationModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__sortable_table__["a" /* SortableTableComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__sortable_table__["a" /* SortableTableComponent */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_pagination__["a" /* NgxPaginationModule */]
            ]
        })
    ], SortableTableComponentModule);
    return SortableTableComponentModule;
}());

//# sourceMappingURL=sortable-table.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loan__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoanComponentModule = /** @class */ (function () {
    function LoanComponentModule() {
    }
    LoanComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["d" /* IonicModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__loan__["a" /* LoanComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__loan__["a" /* LoanComponent */]
            ]
        })
    ], LoanComponentModule);
    return LoanComponentModule;
}());

//# sourceMappingURL=loan.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PretermComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__preterm__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PretermComponentModule = /** @class */ (function () {
    function PretermComponentModule() {
    }
    PretermComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["d" /* IonicModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__preterm__["a" /* PretermComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__preterm__["a" /* PretermComponent */]
            ]
        })
    ], PretermComponentModule);
    return PretermComponentModule;
}());

//# sourceMappingURL=preterm.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PretermComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PretermComponent = /** @class */ (function () {
    function PretermComponent() {
        this.p = 1000;
        this.t = 1; //term 
        this.r = 0.025;
        this.type = '';
        this.now = new Date();
        this.deductionPerPayDay = ((this.t * this.r * this.p) + this.p) / this.t;
        console.log(this);
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('principal'),
        __metadata("design:type", Number)
    ], PretermComponent.prototype, "p", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('paydays'),
        __metadata("design:type", Number)
    ], PretermComponent.prototype, "t", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('rate'),
        __metadata("design:type", Number)
    ], PretermComponent.prototype, "r", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('type'),
        __metadata("design:type", Object)
    ], PretermComponent.prototype, "type", void 0);
    PretermComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'preterm',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\components\preterm\preterm.html"*/'<!-- Generated template for the PretermComponent component -->'/*ion-inline-end:"C:\wamp64\www\bxb\src\components\preterm\preterm.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PretermComponent);
    return PretermComponent;
}());

//# sourceMappingURL=preterm.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menu) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.isMobile = mobilecheck();
        this.node = document.querySelector('body');
        var self = this;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            self.mcheck();
            window.onresize = function () {
                self.mcheck();
            };
        });
    }
    MyApp.prototype.reorient = function ($event) {
        this.isMobile = mobilecheck();
    };
    MyApp.prototype.mcheck = function () {
        if (mobilecheck()) {
            localStorage.view = 'mobile';
            this.node.className += " mobile-view";
        }
        else {
            localStorage.view = 'desktop';
            this.node.className = this.node.className.replace(/[\s]mobile-view/g, "");
        }
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\wamp64\www\bxb\src\app\app.html"*/'<ion-menu [content]="mycontent" side="left" type="push" [enabled]="isMobile" swipeEnabled="true">\n	<side-bar [mobile]="isMobile"></side-bar>\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage" (window:resize)="reorient($event)"></ion-nav>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isMobile = mobilecheck();
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
    };
    TermsPage.prototype.reorient = function ($event) {
        this.isMobile = mobilecheck();
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\terms\terms.html"*/'<ion-content [ngClass]="{\'mobile\':isMobile}" (window:resize)="reorient($event)">\n	<header-title></header-title>\n	<section class="content">\n		<h1 class="termcenter seco">Terms of Use</h1>\n		<p class="termsp">This is a contract. By using this website you agree to be bound by these terms. Please review these Terms of Use before using this site or accessing any data on the BXB Lending platform. If you do not agree to these terms without limitation or exclusion, you should exit this site. </p>\n		<div id="termss">\n			<ol>\n				<li>Acceptance of Terms Through Use.</li>\n				<p>BXB makes the Employee loan application process available on the website and via mobile applications subject to the following terms and conditions of use  (the “Terms of Use”)\n				</p>\n				<p>\n		            These Terms of Use also apply to any updates, enhancements and new features and products. By using this website, you represent to BXB that you have read, understood, and agree to all terms, conditions, and notices contained or referenced in these Terms of Use and on the website and agree to follow all applicable laws and regulations.\n		        </p>\n		        <li>Changes in these Terms of Use. </li>\n\n		        <p>BXB may modify these Terms of Use from time to time by posting modified Terms of Use on the website. Your continued use of the website will constitute agreement to such modifications. At the time of any material modifications, BXB will change the “Last Updated” date below. Please review these Terms of Use from time to time so that you are apprised of any changes.\n		        </p>\n\n		        <li>Registration &amp; Use. </li>\n		        <p>By registering with this website and when your employer provides the requested data during the application process, you understand and agree that you have established a business relationship and or contractual obligation between you and BXB.</p>\n		        <li>Consent</li>\n		        <p>BY REGISTERING ON THIS WEBSITE AND PROVIDING REQUESTED INFORMATION, YOU AGREE THAT BXB QUALIFIES YOUR EILIGIBILITY FOR AN EMPLOYEE LOAN BASED ON DATA SUPPLIED FROM YOUR EMPLOYER AND DIRECTLY BY YOU. You further agree that BXB may offer you eligible loan products.</p>\n		        <p>Since BXB platform operated only on the Internet, and when you choose to participate on our platform as borrower, it is necessary for you to consent to transact business with is online and or electronically. </p>\n		    </ol>\n		</div>\n	</section>\n\n    <foot [compact]="false"></foot>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\terms\terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivacyPolicyPage = /** @class */ (function () {
    function PrivacyPolicyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isMobile = mobilecheck();
    }
    PrivacyPolicyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrivacyPolicyPage');
    };
    PrivacyPolicyPage.prototype.reorient = function ($event) {
        this.isMobile = mobilecheck();
    };
    PrivacyPolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-privacy-policy',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\privacy-policy\privacy-policy.html"*/'<ion-content [ngClass]="{\'mobile\':isMobile}" (window:resize)="reorient($event)">\n	<header-title></header-title>\n	<section class="content">\n		<h1 class="termcenter seco">Privacy Statement</h1>\n		<ol>\n			<li>\n				<h2>Introduction</h2>\n				<p>BXB is committed to safeguarding customer information. In order to better serve your needs now and in the future, we may ask you to provide us with certain information. We understand that you may be concerned about what we will do with such information – particularly any personal or financial information. We agree that you have a right to know how we will utilize the personal information you provide to us. Therefore, we have adopted this Privacy Policy to govern the use and handling of your personal information.</p>\n			</li>\n			<li>\n				<h2>Applicability</h2>\n				<p>This Privacy Policy governs our use of personal information about you.</p>\n				<p>Types of Information</p>\n				<p>We collect nonpublic personal information about you from the following sources:</p>\n				<ol>\n					<li>\n						Information we receive from you on the BXB loan application web site\n					</li>\n					<li>\n						Information we receive from your employer via periodic payroll information; and\n					</li>\n					<li>\n						Information we receive from your employer from eligibility file extracts\n					</li>\n				</ol>\n			</li>\n			<li>\n				<h2>Use of Information</h2>\n				<p>We request certain information from your employer to continually qualify your eligibility for the BXB Employee loan program. Only active employees, who meet specific income and employment tenure thresholds, are eligible for BXB loan offerings and the data received from your employer’s payroll system is required to independently verify this eligibility. We do not receive or store such specific information from your employer, such as social security number or bank account information, which would potentially compromise your online security.</p>\n				<p>This payroll information is received from your employer on an ongoing basis in order to accurately assess your eligibility for BXB loan offerings at any point in time. Information received directly from you is further used to authenticate your identity.</p>\n			</li>\n			<li>\n				<h2>Former Customers</h2>\n				<p>Even if you are no longer our customer, our Privacy Policy will continue to apply to you.</p>\n			</li>\n			<li>\n				<h2>Confidentiality and Security</h2>\n				<p>We will use our best efforts to ensure that no unauthorized parties have access to any of your information. We restrict access to nonpublic personal information about you to those individuals and entities who need to know that information to provide products or services to you. We will use our best efforts to train and oversee our employees and agents to ensure that your information will be handled responsibly. We currently maintain physical, electronic, and procedural safeguards that comply with data privacy laws to guard your nonpublic personal information.</p>\n			</li>\n			<li>\n				<h2>Information Obtained Through Our Internet Site</h2>\n				<p>BXB is sensitive to privacy issues on the Internet. We believe it is important you know how we treat the information about you we receive on the Internet. In general, you can visit the BXB Internet site without telling us who you are or revealing any information about yourself. Our Internet servers collect the domain names, not the e-mail addresses, of visitors. This information is aggregated to measure the number of visits, average time spent on the site, pages viewed and similar information. BXB uses this information to measure the use of our site and to develop ideas to improve the content of our site.</p>\n				<p>Should you choose to apply for a BXB loan, we will first assess your eligibility by authenticating your employment. You will be required to sign up in our website and after completing the application several pieces of personally identifiable information will be forwarded to us by your employer containing an automated list of information for us to look up and verify your employment status and income/tenure eligibility.</p>\n				<p>Once you are fully qualified as eligible and your identification is confirmed, you will be offered one or more qualifying BXB Loan Offers. Upon selecting your desired loan product, BXB will store your personal information.</p>\n			</li>\n			<li>\n				<h2>Safeguards and Measures</h2>\n				<p>To protect your personal information from unauthorized access and use, we use security measures that comply with the Data Privacy Law. These measure include computer safeguards and secured files and buildings. Moreover, we take a defensive, in-depth approach to implementing rigorous physical, administrative, and technical safeguards to ensure your information is safe from unauthorized access or misuse.</p>\n			</li>\n			<li>\n				<h2>Methods of protecting your personal information</h2>\n				<ol>\n					<li>Encryption & Website Certificates</li>\n					<li>Session time-outs</li>\n					<li>Passwords</li>\n					<li>Identity theft Protection</li>\n				</ol>\n			</li>\n		</ol>\n	</section>\n\n    <foot [compact]="false"></foot>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\privacy-policy\privacy-policy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PrivacyPolicyPage);
    return PrivacyPolicyPage;
}());

//# sourceMappingURL=privacy-policy.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityLogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityLogPage = /** @class */ (function () {
    function ActivityLogPage(navCtrl, navParams, menu, /*private db: DbProvider, private loader: LoadingController,*/ modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.modal = modal;
        this.logs = [
            {
                timestamp: 'April 12, 2018 12:04',
                user: '6805 Ayala Avenue Condominium Corporation',
                userType: 'Company',
                event: 'uploaded csv file',
                ipAddress: '10.0.0.44'
            },
            {
                timestamp: 'April 13, 2018 07:04',
                user: 'BXB Employee Solutions Corp',
                userType: 'Company',
                event: 'uploaded csv file',
                ipAddress: '10.0.0.44'
            },
            {
                timestamp: 'April 14, 2018 01:04',
                user: 'George Miguel',
                userType: 'Employee',
                event: 'request for loan',
                ipAddress: '10.0.0.44'
            },
            {
                timestamp: 'April 14, 2018 01:04',
                user: 'George Miguel',
                userType: 'Employee',
                event: 'request for loan',
                ipAddress: '10.0.0.57'
            },
            {
                timestamp: 'April 15, 2018 01:04',
                user: 'George Miguel',
                userType: 'Employee',
                event: 'request for loan',
                ipAddress: '10.0.0.57'
            },
            {
                timestamp: 'April 27, 2018 02:04',
                user: 'Argie Dwight',
                userType: 'Employee',
                event: 'request for loan',
                ipAddress: '10.0.0.57'
            },
            {
                timestamp: 'April 27, 2018 03:04',
                user: 'Argie Dwight',
                userType: 'Employee',
                event: 'request for loan',
                ipAddress: '10.0.0.44'
            },
            {
                timestamp: 'April 27, 2018 05:04',
                user: 'George Miguel',
                userType: 'Employee',
                event: 'request for loan',
                ipAddress: '10.0.0.44'
            },
            {
                timestamp: 'April 27, 2018 05:04',
                user: 'George Miguel',
                userType: 'Employee',
                event: 'request for loan',
                ipAddress: '10.0.0.44'
            },
            {
                timestamp: 'May 03, 2018 06:05',
                user: 'Fercibal',
                userType: 'Employee',
                event: 'request for loan',
                ipAddress: '10.0.0.57'
            },
            {
                timestamp: 'May 03, 2018 06:05',
                user: 'Maria Jacqueline',
                userType: 'Employee',
                event: 'request for loan',
                ipAddress: '10.0.0.57'
            },
            {
                timestamp: 'May 03, 2018 07:05',
                user: 'Fercibal',
                userType: 'Employee',
                event: 'request for loan',
                ipAddress: '10.0.0.57'
            },
            {
                timestamp: 'May 03, 2018 08:05',
                user: 'Maria Jacqueline',
                userType: 'Employee',
                event: 'request for loan',
                ipAddress: '10.0.0.57'
            }
        ];
        this.hdrTitles = {
            'timestamp': 'Timestamp',
            'user': 'User',
            'userType': 'User Type',
            'event': 'Event',
            'ipAddress': 'IP Address'
        };
        this.sampKeys = ["timestamp", "user", "userType", "event", "ipAddress"];
        this.formats = {};
        this.actions = [];
    }
    ActivityLogPage.prototype.ionViewDidEnter = function () {
        this.menu.close();
        localStorage.page = 'logs';
    };
    ActivityLogPage.prototype.ionViewWillLeave = function () {
    };
    ActivityLogPage.prototype.isMobile = function () {
        return localStorage.view == "mobile";
    };
    ActivityLogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activity-log',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\activity-log\activity-log.html"*/'<ion-content [ngClass]="{\'mobile\':isMobile()}">\n	<top-bar></top-bar>\n	<side-bar *ngIf = "!isMobile()" [highlights]="\'logs\'"></side-bar>\n\n	<section class="main-content">\n		<ion-row>\n			<ion-col col-12>\n				<submodule [title]="\'Activity Logs\'">\n					<sortable-table *ngIf="logs.length > 0" [data]="logs" [headers]="sampKeys" [header_titles]="hdrTitles" [formats]="formats"></sortable-table>\n					<p class="no-data" *ngIf="logs.length == 0">\n						No data\n					</p>					\n				</submodule>\n			</ion-col>\n		</ion-row>\n		<foot></foot>\n		\n	</section>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\activity-log\activity-log.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], ActivityLogPage);
    return ActivityLogPage;
}());

//# sourceMappingURL=activity-log.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_tin_signup_tin__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hr_dashboard_hr_dashboard__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__super_dashboard_super_dashboard__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ext_config__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


//import { SignUpPage } from '../sign-up/sign-up';






;
var AdminLoginPage = /** @class */ (function () {
    function AdminLoginPage(navCtrl, navParams, menu, http, toast, loader) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.http = http;
        this.toast = toast;
        this.loader = loader;
        this.userData = { username: "", pass: "" };
        this.isMobile = mobilecheck();
        this.env = __WEBPACK_IMPORTED_MODULE_7__ext_config__["a" /* config */][location.origin].backend;
        this.cp = "";
        this.bgImg = "url('../../assets/imgs/login-bg.png')";
        console.log(this.env);
    }
    AdminLoginPage.prototype.ionViewDidEnter = function () {
        this.menu.close();
        localStorage.page = 'admin-login';
        if (typeof localStorage.accountType == "string" && typeof localStorage.userData == "string") {
            switch (localStorage.accountType) {
                case "hr":
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__hr_dashboard_hr_dashboard__["a" /* HrDashboardPage */], {}, { animate: true, direction: "forward" });
                    // code...
                    break;
                default:
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__super_dashboard_super_dashboard__["a" /* SuperDashboardPage */], {}, { animate: true, direction: "forward" });
                    // code...
                    break;
            }
        }
    };
    AdminLoginPage.prototype.toReg = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__signup_tin_signup_tin__["a" /* SignupTinPage */], {}, { animate: true, direction: "forward" });
    };
    AdminLoginPage.prototype.login = function () {
        var _this = this;
        /* backdoor */
        if (this.userData.username == "super" && this.userData.pass == "pass") {
            localStorage.userData = [];
            localStorage.accountType = 'super';
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__super_dashboard_super_dashboard__["a" /* SuperDashboardPage */], {}, { animate: true, direction: "forward" });
            return;
        }
        else if (this.userData.username == "hr" && this.userData.pass == "pass") {
            localStorage.userData = [];
            localStorage.accountType = 'hr';
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__hr_dashboard_hr_dashboard__["a" /* HrDashboardPage */], {}, { animate: true, direction: "forward" });
            return;
        }
        var self = this;
        var uData = this.userData;
        var hdr = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */];
        hdr.append('Content-Type', 'application/json');
        var rq = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */];
        rq.headers = hdr;
        var load = this.loader.create({
            spinner: 'crescent',
            dismissOnPageChange: true,
            showBackdrop: true,
            content: "Please wait...",
            enableBackdropDismiss: false
        });
        load.present();
        this.http.post(this.env + "/api.php?q=login", uData, rq)
            .toPromise()
            .then(function (res) {
            /*load.dismiss();
            let txt = res.text().toLowerCase().replace(/[^A-Za-z]/g,'');
            let stat = (txt == "usersuccessfullyloggedin" ? "success" : "fail");
            if(stat == "success"){
                self.navCtrl.setRoot(HrDashboardPage,{},{animate:true, direction:"forward"});
            }else{
                this.launchToast(res.text(),stat);
            }  				*/
            load.dismiss();
            var uDt = res.json();
            if (!uDt.hasOwnProperty('master_id')) {
                _this.launchToast('Invalid login', 'fail');
            }
            else {
                localStorage.accountType = 'hr';
                self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__hr_dashboard_hr_dashboard__["a" /* HrDashboardPage */], {}, { animate: true, direction: "forward" });
            }
            //id = id[0].master_id;
            //this.http.post()
        })
            .catch(function (err) {
            load.dismiss();
            _this.launchToast('Invalid login', 'fail');
            console.warn(err);
        });
    };
    AdminLoginPage.prototype.launchToast = function (msg, status) {
        if (status === void 0) { status = 1; }
        var toast = this.toast.create({
            message: msg,
            duration: 3000,
            position: 'top',
            cssClass: "" + status
        });
        toast.present();
        return toast;
    };
    AdminLoginPage.prototype.toForget = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password__["a" /* ForgotPasswordPage */], {}, { animate: true, direction: "forward" });
    };
    AdminLoginPage.prototype.reorient = function () {
        this.isMobile = mobilecheck();
    };
    AdminLoginPage.prototype.testApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var hdr, rq;
            return __generator(this, function (_a) {
                hdr = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */];
                hdr.append('Content-Type', 'application/json');
                rq = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */];
                rq.headers = hdr;
                this.http.post("https://bxb-backend-php.azurewebsites.net/api.php?q=test", {}, rq).toPromise()
                    .then(console.log)
                    .catch(console.info);
                return [2 /*return*/];
            });
        });
    };
    AdminLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-login',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\admin-login\admin-login.html"*/'\n<ion-content>\n	<section class="main-content" [ngClass]="{\'mobile\':isMobile}" [ngStyle]="{\'background-image\':bgImg}">\n		<header>\n			<img src="../../assets/imgs/bxb-white-logo-2.svg" (tap)="testApi()"/>\n		</header>\n\n		<div class="main">\n			<ion-row>\n				<ion-col>\n					<input type="text" [(ngModel)] = "userData.username" name="login" placeholder="Email or Username" (keyup.enter)="login()"/>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col>\n					<input type="password" [(ngModel)] = "userData.pass" name="pass" placeholder="Password"  (keyup.enter)="login()"/>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col>\n					<button ion-button (tap)="login()">Login</button>\n				</ion-col>\n			</ion-row>\n			<span class="links">\n				<button ion-button (tap)="toForget()">Forgot password?</button>\n			</span>\n		</div>\n	</section>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\admin-login\admin-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], AdminLoginPage);
    return AdminLoginPage;
}());

//# sourceMappingURL=admin-login.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ext_mob_prefixes__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EditEmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, navParams, sanitizer, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.menu = menu;
        this.userData = {
            firstName: "",
            middleName: "",
            lastName: "",
            userName: "",
            email: "",
            companyCode: "",
            employeeId: "",
            payrollAccount: "",
            password: "",
            mobile: ""
        };
        this.prefixes = this.sanitizer.bypassSecurityTrustHtml(__WEBPACK_IMPORTED_MODULE_2__ext_mob_prefixes__["a" /* intlPrefixes */]);
        this.prefix = '63';
    }
    EditProfilePage.prototype.ionViewDidEnter = function () {
        localStorage.page = '';
        this.menu.close();
    };
    EditProfilePage.prototype.ionViewDidLoad = function () {
        try {
            this.locData = JSON.parse(localStorage.userData);
            this.userData.firstName = this.locData.Name_First;
            this.userData.middleName = this.locData.Name_Middle;
            this.userData.lastName = this.locData.Name_Last;
            this.userData.email = this.locData.email;
            this.userData.mobile = this.locData.mobile.slice(-10);
            //this.userData.password = this.locData.Password;
        }
        catch (e) {
            console.warn(e);
        }
    };
    EditProfilePage.prototype.isMobile = function () {
        return localStorage.view == "mobile";
    };
    EditProfilePage.prototype.ngAfterViewInit = function () {
        this.prev.nativeElement.src = "../../assets/imgs/tmp-img.png";
    };
    EditProfilePage.prototype.takePic = function ($event) {
        var self = this;
        if ($event.target.files && $event.target.files[0]) {
            //self.uploadFile($event.target.files[0]);
            console.log($event.target.files[0]);
            var nurl = URL.createObjectURL($event.target.files[0]);
            self.prev.nativeElement.src = nurl;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('prev'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], EditProfilePage.prototype, "prev", void 0);
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\edit-profile\edit-profile.html"*/'<ion-content [ngClass]="{\'mobile\':isMobile()}">\n	<top-bar></top-bar>\n	<side-bar *ngIf = "!isMobile()" [highlights]="\'myprofile\'"></side-bar>\n\n	 <section class="main">\n	 	<form name="employee-data">\n		 	<div class="uploader">\n				<input type="file" accept="image/*" (change)="takePic($event)">\n				<ion-avatar item-start>\n					<img #prev/>\n				</ion-avatar>\n		 	</div>\n	 		<h2>Edit Profile</h2>\n	 		<ion-row>\n	 			<p class="label">\n	 				First Name\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="firstName" [(ngModel)] = "userData.firstName" [value] = "userData.firstName" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Middle Name\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="middleName" [(ngModel)] = "userData.middleName" [value] = "userData.middleName" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Last Name\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="lastName" [(ngModel)] = "userData.lastName" [value] = "userData.lastName" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Email\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="email" [(ngModel)] = "userData.email" [value] = "userData.email" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Password\n	 			</p>\n	 			<span class="content">\n	 				<input type="password" name="password" [(ngModel)] = "userData.password" [value] = "userData.password" placeholder="Optional" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row class="bot">\n	 			<p class="label">\n	 				Mobile\n	 			</p>\n	 			<span class="content">\n		 			<select [innerHTML] = "prefixes" name="prefix" [(ngModel)]="prefix"></select>\n		 			<input class="short" type="number" name="mobile" [(ngModel)] = "userData.mobile" [value] = "userData.mobile" />\n		 		</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<button ion-button (tap)="submitReg()">Update Account</button>\n	 		</ion-row>\n	 	</form>\n		<foot></foot>\n\n	 </section>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\edit-profile\edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loans_loans__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__statement_of_account_statement_of_account__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SoaPage = /** @class */ (function () {
    function SoaPage(navCtrl, navParams, menu, /*private db: DbProvider, private loader: LoadingController,*/ modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.modal = modal;
        this.soas = [
            {
                pdf: 'PDF',
                billPeriod: '07-30-2018',
                amt: 14929.16,
                soaNo: '2018835',
                refNo: '240665CHQ',
                status: 'paid'
            },
            {
                pdf: 'PDF',
                billPeriod: '07-15-2018',
                amt: 16739.57,
                soaNo: '2018834',
                refNo: '240642CHQ',
                status: 'paid'
            },
            {
                pdf: 'PDF',
                billPeriod: '08-30-2018',
                amt: 479.16,
                soaNo: '2018847',
                refNo: '',
                status: 'not paid'
            }
        ];
        this.hdrTitles = {
            'pdf': 'PDF',
            'billPeriod': 'Statement Date',
            'amt': 'Amount Due',
            'soaNo': 'SOA Ref #',
            'refNo': 'Ref #',
            'status': 'Status'
        };
        this.sampKeys = ["pdf", "billPeriod", "amt", "soaNo", "refNo", "status"];
        this.formats = {
            'amt': 'currency',
            'status': 'textDecorated'
        };
        this.actions = [
            {
                "icon": "md-information-circle",
                "class": "display-disclosure"
            }
        ];
    }
    SoaPage.prototype.ionViewDidEnter = function () {
        this.menu.close();
        localStorage.page = 'soa';
    };
    SoaPage.prototype.ionViewWillLeave = function () {
    };
    SoaPage.prototype.isMobile = function () {
        return localStorage.view == "mobile";
    };
    SoaPage.prototype.toCreditSummary = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__loans_loans__["a" /* LoansPage */], {}, { animate: true, direction: "top" });
    };
    SoaPage.prototype.doAction = function (i) {
        this.showSOA(JSON.parse(i.val));
    };
    SoaPage.prototype.showSOA = function (i) {
        this.mod = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__statement_of_account_statement_of_account__["a" /* StatementOfAccountPage */], { data: i }, { cssClass: "whitemodal  " + (this.isMobile ? "mobile" : "") });
        this.mod.present();
    };
    SoaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-soa',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\soa\soa.html"*/'<ion-content [ngClass]="{\'mobile\':isMobile()}">\n	<top-bar></top-bar>\n	<side-bar *ngIf = "!isMobile()" [highlights]="\'soa\'"></side-bar>\n\n	<section class="main-content">\n		<ion-row>\n			<ion-col col-12>\n				<submodule [title]="\'Statement of Account\'">\n					<sortable-table *ngIf="soas.length > 0" [data]="soas" [headers]="sampKeys" [formats]="formats" [header_titles]="hdrTitles" [actions]="actions" (t)="doAction($event)"></sortable-table>\n					<p class="no-data" *ngIf="soas.length == 0">\n						No data\n					</p>					\n				</submodule>\n			</ion-col>\n		</ion-row>\n		<foot></foot>\n		\n	</section>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\soa\soa.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], SoaPage);
    return SoaPage;
}());

//# sourceMappingURL=soa.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadCsvPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_app__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var UploadCsvPage = /** @class */ (function () {
    function UploadCsvPage(navCtrl, navParams, menu, app, loader, modal, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.app = app;
        this.loader = loader;
        this.modal = modal;
        this.http = http;
        this.hdr = [];
        this.bdy = [];
        this.headerRows = 0;
        this.uploadRdy = false;
    }
    UploadCsvPage.prototype.ionViewDidEnter = function () {
        this.menu.close();
        localStorage.page = 'uploadcsv';
    };
    UploadCsvPage.prototype.setupCSV = function ($event) {
        var self = this;
        var file = $event.target.files[0];
        if (!file)
            return;
        var fd = new FormData();
        fd.append('file', file);
        var hdr = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */];
        //hdr.append('Content-Type','multipart/form-data');
        var rq = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */];
        rq.headers = hdr;
        this.http.post('http://localhost/bxb-test-php/image_uploader.php', fd, rq)
            .toPromise()
            .then(console.log)
            .catch(console.info);
    };
    UploadCsvPage.prototype.see = function (e) {
        var file = e.target.files[0];
        if (!file)
            return;
        var self = this;
        var rdr = new FileReader();
        rdr.readAsText(file);
        rdr.onload = function (ef) {
            var csv = rdr.result.toString();
            var acsv = csv.split("\n");
            self.hdr = acsv[0].split(",");
            self.headerRows = self.hdr.length;
            acsv.splice(0, 1);
            self.bdy = acsv;
            self.checkValidity(self.bdy)
                .then(function (i) {
                self.uploadRdy = i;
            })
                .catch(console.warn);
        };
    };
    UploadCsvPage.prototype.sendToBack = function () {
        this.app.uploadCSV(this.bdy)
            .then(function (res) {
            console.log(res.json());
            //return res.json();
        })
            .catch(function (err) {
            console.warn(err);
            return {};
        });
    };
    UploadCsvPage.prototype.checkValidity = function (d) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var i;
            return __generator(this, function (_a) {
                i = d.every(function (v, i) {
                    var dt = v.split(",");
                    console.log(_this.hdr[i], dt[i]);
                    return dt.length == _this.headerRows;
                });
                return [2 /*return*/, i];
            });
        });
    };
    UploadCsvPage.prototype.ionViewWillLeave = function () {
    };
    UploadCsvPage.prototype.isMobile = function () {
        return localStorage.view == "mobile";
    };
    UploadCsvPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upload-csv',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\upload-csv\upload-csv.html"*/'<ion-content [ngClass]="{\'mobile\':isMobile()}">\n	<top-bar></top-bar>\n	<side-bar *ngIf = "!isMobile()" [highlights]="\'uploadcsv\'"></side-bar>\n\n	<section class="main-content">\n		<div class="body">\n\n			<input type="file" name="csv" (change)="see($event)" accept=".csv,.xls,.xlsx"/>\n\n			<button ion-button name="submit" [disabled]="!uploadRdy" (tap)="sendToBack()">\n				Upload\n			</button>\n		</div>\n\n		<foot></foot>		\n	</section>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\upload-csv\upload-csv.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__providers_app_app__["a" /* AppProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], UploadCsvPage);
    return UploadCsvPage;
}());

//# sourceMappingURL=upload-csv.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCreditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_info_modal_employee_info_modal__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__disclosure_statement_disclosure_statement__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_app__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_db_db__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_loan_loan__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_sortable_table_sortable_table__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { DragScrollComponent } from 'ngx-drag-scroll';





var AdminCreditPage = /** @class */ (function () {
    function AdminCreditPage(navCtrl, navParams, menu, modal, db, app, loader, alert, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.modal = modal;
        this.db = db;
        this.app = app;
        this.loader = loader;
        this.alert = alert;
        this.toast = toast;
        this.pendingMembers = [];
        this.loans = {
            "pending": [],
            'completedLoans': [],
            'activeLoans': [],
            npLoans: [
                {
                    company: "Thirty One Digital Media Solutions Inc.",
                    totalCreditAvailment: 3,
                    amt: 11941.66,
                    companyID: 1
                },
                {
                    company: "BXB Employee Solutions Corp",
                    totalCreditAvailment: 1,
                    amt: 17758.32,
                    companyID: 2
                },
                {
                    company: "6805 Ayala Avenue Condominium Corporation",
                    totalCreditAvailment: 16,
                    amt: 31668.73,
                    companyID: 3
                }
            ]
        };
        this.hdrTitles = {
            'userData.Name_First': 'First Name',
            'userData.Name_Last': 'Last Name',
            'LoanID': 'Loan Identification',
            'userData.Company': 'Company',
            'term': 'Terms',
            'processFund': 'Net',
            'principal': 'Amount',
            'userData.Payroll_Account': 'Payroll Acct',
            'userData.Bank_Name': 'Bank',
            'purpose': 'Purpose'
        };
        this.sampKeys = ['userData.Name_First', 'userData.Name_Last', 'LoanID', 'userData.Company', 'term', 'processFund', 'principal', 'userData.Payroll_Account', 'userData.Bank_Name', 'purpose'];
        this.formats = {
            'principal': 'currency',
            'processFund': 'currency',
            'term': 'number',
            'userData.Name_First': 'nested',
            'userData.Name_Last': 'nested',
            'userData.Payroll_Account': 'nested',
            'userData.Bank_Name': 'nested',
            'userData.Company': 'nested'
        };
        this.actions = [
            {
                "icon": "md-information-circle",
                "class": "display-disclosure"
            },
            {
                "icon": "md-checkmark-circle-outline",
                "class": "approve-loan"
            }
        ];
        this.act_actions = [
            {
                "icon": "md-information-circle",
                "class": "display-disclosure"
            },
            {
                "icon": "ios-close-circle",
                "class": "npl"
            }
        ];
        this.payments = [
            {
                "paymentDate": "06-15-2018",
                "paymentNum": 1,
                "amt": 8400,
                "bal": 25200
            },
            {
                "paymentDate": "06-30-2018",
                "paymentNum": 2,
                "amt": 8400,
                "bal": 16800
            },
            {
                "paymentDate": "07-15-2018",
                "paymentNum": 3,
                "amt": 8400,
                "bal": 8400
            },
            {
                "paymentDate": "07-30-2018",
                "paymentNum": 4,
                "amt": 8400,
                "bal": 0
            }
        ];
    }
    AdminCreditPage.prototype.ionViewDidEnter = function () {
        this.menu.close();
        localStorage.page = 'creditsum';
        this.initLoans();
    };
    AdminCreditPage.prototype.initLoans = function () {
        var self = this;
        var load = this.loader.create({
            spinner: 'crescent',
            dismissOnPageChange: true,
            showBackdrop: true,
            content: "Loading Pending loans",
            enableBackdropDismiss: false
        });
        load.present();
        var pr1 = this.db.getLoansByStatus(1).then(function (rs) {
            self.loans.pending = rs.map(function (a) {
                var x = a;
                var ln = self.app.getLoanValues(a.principal, a.term);
                x.processFund = ln.netCashout;
                return x;
            });
            load.setContent('Loading Active loans');
            console.log(self.loans.pending);
            return rs;
        });
        var pr2 = this.db.getLoansByStatus(2).then(function (rs) {
            self.loans.activeLoans = rs.map(function (a) {
                var x = a;
                var ln = self.app.getLoanValues(a.principal, a.term);
                x.processFund = ln.netCashout;
                return x;
            });
            load.setContent('Compiling');
            console.log(self.loans.activeLoans);
            return rs;
        });
        Promise.all([pr1, pr2]).then(function () {
            load.dismiss().catch(function () { });
        });
    };
    AdminCreditPage.prototype.isMobile = function () {
        return localStorage.view == "mobile";
    };
    AdminCreditPage.prototype.showModal = function (i) {
        this.mod = this.modal.create(__WEBPACK_IMPORTED_MODULE_2__employee_info_modal_employee_info_modal__["a" /* EmployeeInfoModalPage */], { data: i }, { cssClass: "whitemodal sm " + (this.isMobile() ? "mobile" : "") });
        this.mod.present();
    };
    AdminCreditPage.prototype.ngAfterViewInit = function () {
        /*	this.ds.forEach(i=>{
              i.snapOffset = 85;
              i.scrollbarHidden = true;
          });*/
    };
    AdminCreditPage.prototype.resize = function (e) {
        console.log(e);
        this.srt.forEach(function (v, i) {
            v.isMobile();
        });
    };
    AdminCreditPage.prototype.doAction = function (i) {
        if (i.index == 0) {
            this.showDisclosureModal(JSON.parse(i.val), true);
        }
        else if (i.index == 1) {
            this.showApproveAlert(JSON.parse(i.val));
        }
    };
    AdminCreditPage.prototype.doActiveAction = function (i) {
        if (i.index == 0) {
            this.showDisclosureModal(JSON.parse(i.val));
        }
        else if (i.index == 1) {
            this.showNPLAlert(JSON.parse(i.val)['LoanID']);
        }
    };
    /*showDisclosureModal(i){
      this.p_loan.p = i.principal;
      this.p_loan.t = i.term;
      let dtt = this.p_loan.getDates();
      console.log(this.p_loan);
      this.mod = this.modal.create(DisclosureStatementPage,{data:i, payments:this.payments, user:i['userData']},{cssClass:`whitemodal ${this.isMobile() ? "mobile" : ""}`});
      this.mod.present();
    }*/
    AdminCreditPage.prototype.showDisclosureModal = function (i, fe) {
        var _this = this;
        if (fe === void 0) { fe = false; }
        console.log(i);
        var ind = i;
        var self = this;
        this.p_loan.p = ind.principal;
        this.p_loan.t = ind.numberPaydays;
        this.p_loan.sdate = ind.applicationDate;
        var lndta = this.p_loan.getLoan();
        ind.loan = lndta;
        /** USES FRONTEND COMPUTATION **/
        if (fe) {
            this.p_loan.p = ind.principal;
            this.p_loan.t = ind.numberPaydays;
            this.p_loan.sdate = ind.applicationDate;
            var lndta_1 = this.p_loan.getLoan();
            ind.loan = lndta_1;
            this.p_loan.getDates(ind.applicationDate).then(function (dt) {
                self.mod = _this.modal.create(__WEBPACK_IMPORTED_MODULE_3__disclosure_statement_disclosure_statement__["a" /* DisclosureStatementPage */], { data: ind, payments: dt, user: ind.userData }, { cssClass: "whitemodal " + (self.isMobile() ? "mobile" : "") });
                self.mod.present();
            });
        }
        else {
            this.db.getSchedofPayment(i['LoanID']).then(function (res) {
                console.log(res);
                self.mod = self.modal.create(__WEBPACK_IMPORTED_MODULE_3__disclosure_statement_disclosure_statement__["a" /* DisclosureStatementPage */], { data: ind, payments: res, user: ind.userData }, { cssClass: "whitemodal " + (self.isMobile() ? "mobile" : "") });
                self.mod.present();
            }).catch(console.warn);
        }
    };
    AdminCreditPage.prototype.showApproveAlert = function (id) {
        var _this = this;
        var self = this;
        console.log(id);
        var conf = this.alert.create({
            title: 'Reference No.',
            inputs: [
                {
                    name: 'refno',
                    placeholder: 'Reference Number'
                },
            ],
            buttons: [
                {
                    text: 'Close',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Proceed',
                    handler: function (data) {
                        var ld = self.loader.create({
                            spinner: 'crescent',
                            dismissOnPageChange: true,
                            showBackdrop: true,
                            content: "Processing...",
                            enableBackdropDismiss: false
                        });
                        ld.present();
                        self.db.updateLoanStatus(2, id['LoanID']).then(function (res) {
                            /* set up sched of payments */
                            var ind = id;
                            var self = _this;
                            self.p_loan.p = ind.principal;
                            self.p_loan.t = ind.numberPaydays;
                            self.p_loan.sdate = ind.applicationDate;
                            var lndta = self.p_loan.getLoan();
                            ind.loan = lndta;
                            self.p_loan.getDates(ind.applicationDate).then(function (dt) {
                                console.log(dt);
                                self.db.addSchedofPayment(dt, id['LoanID']).then(console.info).catch(console.warn);
                            }).catch(console.warn);
                            /* end of setup  */
                            self.app.sendLoanApproved(ind.userData.mobile)
                                .then(console.log)
                                .catch(console.info);
                            var toast = _this.toast.create({
                                message: 'Loan Approved',
                                duration: 3000,
                                position: 'top',
                                cssClass: "success"
                            });
                            toast.present();
                            ld.dismiss().catch(function () { });
                            self.initLoans();
                            console.log(res);
                        }).catch(function (err) {
                            var toast = _this.toast.create({
                                message: 'Loan Approval Failed',
                                duration: 3000,
                                position: 'top',
                                cssClass: "fail"
                            });
                            toast.present();
                            ld.dismiss().catch(function () { });
                            self.initLoans();
                            console.warn(err);
                        });
                    } // end of button handler
                } // end of button
            ]
        });
        conf.present();
    };
    AdminCreditPage.prototype.showNPLAlert = function (id) {
        var _this = this;
        var self = this;
        console.log(id);
        var conf = this.alert.create({
            title: 'Flag Loan',
            message: 'Are you sure you want to flag this loan?',
            buttons: [
                {
                    text: 'Close',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Proceed',
                    handler: function (data) {
                        var ld = self.loader.create({
                            spinner: 'crescent',
                            dismissOnPageChange: true,
                            showBackdrop: true,
                            content: "Processing...",
                            enableBackdropDismiss: false
                        });
                        ld.present();
                        self.db.updateLoanStatus(4, id).then(function (res) {
                            var toast = _this.toast.create({
                                message: 'Loan Cancelled',
                                duration: 3000,
                                position: 'top'
                            });
                            toast.present();
                            ld.dismiss().catch(function () { });
                            self.initLoans();
                            console.log(res);
                        }).catch(function (err) {
                            var toast = _this.toast.create({
                                message: 'Loan Cancellation Failed',
                                duration: 3000,
                                position: 'top',
                                cssClass: "fail"
                            });
                            toast.present();
                            ld.dismiss().catch(function () { });
                            self.initLoans();
                            console.warn(err);
                        });
                    }
                }
            ]
        });
        conf.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('p_loan'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__components_loan_loan__["a" /* LoanComponent */])
    ], AdminCreditPage.prototype, "p_loan", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_7__components_sortable_table_sortable_table__["a" /* SortableTableComponent */]),
        __metadata("design:type", Array)
    ], AdminCreditPage.prototype, "srt", void 0);
    AdminCreditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-credit',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\admin-credit\admin-credit.html"*/'<ion-content [ngClass]="{\'mobile\':isMobile()}" (window:resize)="resize($event)">\n	<top-bar></top-bar>\n	<side-bar *ngIf = "!isMobile()" [highlights]="\'creditsum\'"></side-bar>\n\n	<section class="main-content">\n\n\n		<ion-row>\n			<ion-col col-12>\n				<submodule [title]="\'Pending Applications\'">\n					<sortable-table *ngIf="loans?.pending.length > 0" [data]="loans?.pending" [headers]="sampKeys" [formats]="formats" [header_titles]="hdrTitles" [actions]="actions" (t)="doAction($event)"></sortable-table>\n					<loan #p_loan></loan>\n					<p class="no-data" *ngIf="loans.pending.length == 0">\n						No data\n					</p>\n					<!--drag-scroll #ds1 class="table-container" >\n\n						<table>\n						<tr style="width:100%;" class="header">\n							<td>\n								First Name\n							</td>\n							<td>\n								Last Name\n							</td>\n							<td>\n								Loan Identification\n							</td>\n							<td>\n								Company\n							</td>\n							<td>\n								Terms\n							</td>\n							<td>\n								Net\n							</td>\n							<td>\n								Amount\n							</td>\n							<td>\n								Payroll Acct\n							</td>\n							<td>\n								Bank\n							</td>\n							<td>\n								Purpose\n							</td>\n							<td>\n								&nbsp;\n							</td>\n						</tr>\n						<tr style="width:100%" class="dne" *ngIf="pendingLoans.length <= 0">\n							<td>\n								No Pending Loans\n							</td>\n						</tr>\n						<tr style="width:100%;" class="data" *ngFor = "let pl of pendingLoans; let i = index">\n							<td>\n								{{pl?.firstName}}\n							</td>\n							<td>\n								{{pl?.lastName}}\n							</td>\n							<td>\n								{{pl?.loanID}}\n							</td>\n							<td>\n								{{pl?.company}}\n							</td>\n							<td>\n								{{pl?.terms}}\n							</td>\n							<td>\n								{{pl?.net}}\n							</td>\n							<td>\n								{{pl?.amt}}\n							</td>\n							<td>\n								{{pl?.payroll}}\n							</td>\n							<td>\n								{{pl?.bank}}\n							</td>\n							<td>\n								{{pl?.purpose}}\n							</td>\n							<td style="text-align:center">\n								<ion-icon name="md-eye" (tap)="showModal(pendingLoans[i])"></ion-icon>\n							</td>\n						</tr>\n						</table>\n					<--/drag-scroll-->\n				</submodule>\n			</ion-col>\n		</ion-row>\n		<!-- end active members -->\n\n		<ion-row>\n			<ion-col col-12>\n				<submodule [title]="\'Active Applications\'">\n					<sortable-table *ngIf="loans?.activeLoans.length > 0" [data]="loans?.activeLoans" [headers]="sampKeys" [formats]="formats" [header_titles]="hdrTitles" [actions]="act_actions" (t)="doActiveAction($event)"></sortable-table>\n					<p class="no-data" *ngIf="loans.activeLoans.length == 0">\n						No data\n					</p>\n					<!--drag-scroll #ds2 class="table-container" --\n						<table>\n						<tr style="width:100%;" class="header">\n							<td>\n								First Name\n							</td>\n							<td>\n								Last Name\n							</td>\n							<td>\n								Loan Identification\n							</td>\n							<td>\n								Company\n							</td>\n							<td>\n								Terms\n							</td>\n							<td>\n								Net\n							</td>\n							<td>\n								Amount\n							</td>\n							<td>\n								Payroll Acct\n							</td>\n							<td>\n								Bank\n							</td>\n							<td>\n								Purpose\n							</td>\n							<td>\n								Ref No.\n							</td>\n							<td>\n								&nbsp;\n							</td>\n						</tr>\n						<tr style="width:100%;" class="dne" *ngIf="loans?.activeLoans.length <= 0">\n							<td>\n								No Active Loans\n							</td>\n						</tr>\n						<tr style="width:100%;" class="data" *ngFor = "let al of loans?.activeLoans; let i = index">							\n							<td>\n								{{al?.firstName}}\n							</td>\n							<td>\n								{{al?.lastName}}\n							</td>\n							<td>\n								{{al?.loanID}}\n							</td>\n							<td>\n								{{al?.company}}\n							</td>\n							<td>\n								{{al?.terms}}\n							</td>\n							<td>\n								{{al?.net}}\n							</td>\n							<td>\n								{{al?.amt}}\n							</td>\n							<td>\n								{{al?.payroll}}\n							</td>\n							<td>\n								{{al?.bank}}\n							</td>\n							<td>\n								{{al?.purpose}}\n							</td>\n							<td>\n								{{al?.refNum}}\n							</td>\n							<td style="text-align:center">\n								<ion-icon name="md-eye" (tap)="showModal(activeLoans[i])"></ion-icon>\n							</td>\n						</tr>\n						</table>\n					<--/drag-scroll-->\n				</submodule>\n			</ion-col>\n		</ion-row> \n		<!-- end members -->\n\n		<ion-row>\n			<ion-col col-12>\n				<submodule [title]="\'Completed Availments\'">\n					<sortable-table *ngIf="loans?.completedLoans.length > 0" [data]="loans?.completedLoans" [headers]="sampKeys" [formats]="formats" [header_titles]="hdrTitles" [actions]="actions" (t)="doAction($event)"></sortable-table>\n					<p class="no-data" *ngIf="loans.completedLoans.length == 0">\n						No data\n					</p>\n					<!--drag-scroll #ds3 class="table-container" --\n						<table>\n						<tr style="width:100%;" class="header">\n							<td>\n								First Name\n							</td>\n							<td>\n								Last Name\n							</td>\n							<td>\n								Loan Identification\n							</td>\n							<td>\n								Company\n							</td>\n							<td>\n								Terms\n							</td>\n							<td>\n								Net\n							</td>\n							<td>\n								Amount\n							</td>\n							<td>\n								Payroll Acct\n							</td>\n							<td>\n								Bank\n							</td>\n							<td>\n								Purpose\n							</td>\n							<td>\n								Ref No.\n							</td>\n							<td>\n								&nbsp;\n							</td>\n						</tr>\n						<tr style="width:100%;" class="dne"  *ngIf="loans?.completedLoans.length <= 0">\n							<td>\n								No Completed Loans\n							</td>\n						</tr>\n						<tr style="width:100%;" class="data" *ngFor = "let cl of loans?.completedLoans; let i = index">\n							<td>\n								{{cl?.firstName}}\n							</td>\n							<td>\n								{{cl?.lastName}}\n							</td>\n							<td>\n								{{cl?.loanID}}\n							</td>\n							<td>\n								{{cl?.company}}\n							</td>\n							<td>\n								{{cl?.terms}}\n							</td>\n							<td>\n								{{cl?.net}}\n							</td>\n							<td>\n								{{cl?.amt}}\n							</td>\n							<td>\n								{{cl?.payroll}}\n							</td>\n							<td>\n								{{cl?.bank}}\n							</td>\n							<td>\n								{{cl?.purpose}}\n							</td>\n							<td>\n								{{cl?.refNum}}\n							</td>\n							<td style="text-align:center">\n								<ion-icon name="md-eye" (tap)="showModal(completedLoans[i])"></ion-icon>\n							</td>\n						</tr>\n						</table>\n					<--/drag-scroll-->\n				</submodule>\n			</ion-col>\n		</ion-row> \n		<!-- end pending members -->\n\n		<ion-row>\n			<ion-col col-12>\n				<submodule [title]="\'Non-Performing Loan\'" [searchbar]="true">\n					<!--drag-scroll #ds4 class="table-container" -->\n						<table>\n						<tr style="width:100%;" class="header">\n							<td>\n								Company\n							</td>\n							<td>\n								Total Credit Availment\n							</td>\n							<td>\n								Amount\n							</td>\n							<td>\n								&nbsp;\n							</td>\n						</tr>\n						<tr style="width:100%;" class="dne" *ngIf="loans?.npLoans.length <= 0">\n							<td>\n								No Non-Performing Loans\n							</td>\n						</tr>\n						<tr style="width:100%;" class="data" *ngFor = "let npl of loans?.npLoans; let i = index">\n							<td>\n								{{npl?.company}}\n							</td>\n							<td>\n								{{npl?.totalCreditAvailment}}\n							</td>\n							<td>\n								{{npl?.amt}}\n							</td>\n							<td style="text-align:center">\n								<a class="link" (tap)="showModal(npLoans[i])">Details</a>\n							</td>\n						</tr>\n						</table>\n					<!--/drag-scroll-->\n				</submodule>\n			</ion-col>\n		</ion-row> \n		<!-- end flagged members -->\n		<foot></foot>\n	</section>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\admin-credit\admin-credit.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_db_db__["a" /* DbProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_app_app__["a" /* AppProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], AdminCreditPage);
    return AdminCreditPage;
}());

//# sourceMappingURL=admin-credit.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlaggingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loans_loans__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_db_db__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlaggingPage = /** @class */ (function () {
    function FlaggingPage(navCtrl, navParams, menu /*, private db: DbProvider, private loader: LoadingController*/) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu; /*, private db: DbProvider, private loader: LoadingController*/
        this.flagged = [
            {
                firstName: "Michaelle",
                lastName: "Benedicto",
                totalCreditAvailment: 0,
                company: "6805 Ayala Avenue Condominium Corporation",
                amt: 0,
                status: "Pending",
                reason: "AWOL",
                comment: "for testing only"
            },
            {
                firstName: "Armel",
                lastName: "Arancillo",
                totalCreditAvailment: 1,
                company: "6805 Ayala Avenue Condominium Corporation",
                amt: 12543.75,
                status: "Approved",
                reason: "Memo Given",
                comment: "for testing only"
            },
            {
                firstName: "Armel",
                lastName: "Arancillo",
                totalCreditAvailment: 1,
                company: "6805 Ayala Avenue Condominium Corporation",
                amt: 17721.50,
                status: "Approved",
                reason: "AWOL",
                comment: "Test Comment"
            }
        ];
        this.hdrTitles = {
            'firstName': 'First Name',
            'lastName': 'Last Name',
            'totalCreditAvailment': 'Total Credit Availment',
            'company': 'Company',
            'amt': 'Amount',
            'status': 'Status',
            'reason': 'Reason',
            'comment': 'Comment'
        };
        this.sampKeys = ["firstName", "lastName", "totalCreditAvailment", "company", "amt", "status", "reason", "comment"];
        this.formats = {
            'totalCreditAvailment': 'number',
            'amt': 'currency'
        };
    }
    FlaggingPage.prototype.ionViewDidEnter = function () {
        this.menu.close();
        localStorage.page = 'flagging';
        /*
        let load = this.loader.create({
          spinner: 'crescent',
          dismissOnPageChange: true,
          showBackdrop: true,
          content: `Loading Data...`,
          enableBackdropDismiss:false
        });
        load.present();
        this.db.getLoansByStatus(1).then(res=>{
            return res;
        }).then(r=>{
            self.db.getLoansByStatus(2).then(rs=>{
                self.credits = r.concat(rs);
                load.dismiss().catch(()=>{});
            })
        });*/
    };
    FlaggingPage.prototype.ionViewWillLeave = function () {
    };
    FlaggingPage.prototype.isMobile = function () {
        return localStorage.view == "mobile";
    };
    FlaggingPage.prototype.toCreditSummary = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__loans_loans__["a" /* LoansPage */], {}, { animate: true, direction: "top" });
    };
    FlaggingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-flagging',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\flagging\flagging.html"*/'<ion-content [ngClass]="{\'mobile\':isMobile()}">\n	<top-bar></top-bar>\n	<side-bar *ngIf = "!isMobile()" [highlights]="\'flagging\'"></side-bar>\n\n	<section class="main-content">\n		<ion-row>\n			<ion-col col-12>\n				<submodule [title]="\'Flagged Employees\'">\n					<sortable-table *ngIf="flagged.length > 0" [data]="flagged" [headers]="sampKeys" [formats]="formats" [header_titles]="hdrTitles"></sortable-table>\n					<p class="no-data" *ngIf="flagged.length == 0">\n						No data\n					</p>\n					\n				</submodule>\n			</ion-col>\n		</ion-row>\n		<foot></foot>\n		\n	</section>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\flagging\flagging.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_db_db__["a" /* DbProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */] /*, private db: DbProvider, private loader: LoadingController*/])
    ], FlaggingPage);
    return FlaggingPage;
}());

//# sourceMappingURL=flagging.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PretermPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loans_loans__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_db_db__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PretermPage = /** @class */ (function () {
    function PretermPage(navCtrl, navParams, menu /*, private db: DbProvider, private loader: LoadingController*/) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu; /*, private db: DbProvider, private loader: LoadingController*/
        this.preterm = [
            {
                firstName: "Michaelle",
                lastName: "Benedicto",
                loanIdentification: 28,
                company: "6805 Ayala Avenue Condominium Corporation",
                terms: 24,
                amt: 0,
                reason: "Flag",
                status: "Flag"
            },
            {
                firstName: "Armel",
                lastName: "Arancillo",
                loanIdentification: 29,
                company: "6805 Ayala Avenue Condominium Corporation",
                terms: 24,
                amt: 12543.75,
                reason: "Flag",
                status: "Flag"
            }
        ];
        this.hdrTitles = {
            'firstName': 'First Name',
            'lastName': 'Last Name',
            'loanIdentification': 'Loan Identification',
            'company': 'Company',
            'terms': 'Terms',
            'amt': 'Amount',
            'reason': 'Reason',
            'status': 'Status'
        };
        this.sampKeys = ["firstName", "lastName", "loanIdentification", "company", "terms", "amt", "reason", "status"];
        this.formats = {
            'loanIdentification': 'number',
            'terms': 'number',
            'amt': 'currency'
        };
    }
    PretermPage.prototype.ionViewDidEnter = function () {
        this.menu.close();
        localStorage.page = 'preterm';
        /*
        let load = this.loader.create({
          spinner: 'crescent',
          dismissOnPageChange: true,
          showBackdrop: true,
          content: `Loading Data...`,
          enableBackdropDismiss:false
        });
        load.present();
        this.db.getLoansByStatus(1).then(res=>{
            return res;
        }).then(r=>{
            self.db.getLoansByStatus(2).then(rs=>{
                self.credits = r.concat(rs);
                load.dismiss().catch(()=>{});
            })
        });*/
    };
    PretermPage.prototype.ionViewWillLeave = function () {
    };
    PretermPage.prototype.isMobile = function () {
        return localStorage.view == "mobile";
    };
    PretermPage.prototype.toCreditSummary = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__loans_loans__["a" /* LoansPage */], {}, { animate: true, direction: "top" });
    };
    PretermPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-preterm',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\preterm\preterm.html"*/'<ion-content [ngClass]="{\'mobile\':isMobile()}">\n	<top-bar></top-bar>\n	<side-bar *ngIf = "!isMobile()" [highlights]="\'preterm\'"></side-bar>\n\n	<section class="main-content">\n		<ion-row>\n			<ion-col col-12>\n				<submodule [title]="\'Preterm Applications\'">\n					<sortable-table *ngIf="preterm.length > 0" [data]="preterm" [headers]="sampKeys" [formats]="formats" [header_titles]="hdrTitles"></sortable-table>\n					<p class="no-data" *ngIf="preterm.length == 0">\n						No data\n					</p>\n					\n				</submodule>\n			</ion-col>\n		</ion-row>\n		<foot></foot>\n		\n	</section>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\preterm\preterm.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_db_db__["a" /* DbProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */] /*, private db: DbProvider, private loader: LoadingController*/])
    ], PretermPage);
    return PretermPage;
}());

//# sourceMappingURL=preterm.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCompanyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__companies_companies__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ext_mob_prefixes__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_db_db__ = __webpack_require__(11);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddCompanyPage = /** @class */ (function () {
    function AddCompanyPage(navCtrl, navParams, sanitizer, alert, menu, db, toast, loader) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.alert = alert;
        this.menu = menu;
        this.db = db;
        this.toast = toast;
        this.loader = loader;
        this.companyData = {
            //companyCode:"",
            companyName: "",
            //tradeName:"",
            country: "",
            address: "",
            city: "",
            zip: ""
            //SECnum: "",
            //tin: "",
            //type: "",
            //industry: "",
            //minYear: "",
            //mobile: ""
        };
        this.companyRep = {
            //firstName:'',
            //lastName:'',
            mobile: '',
            phone: '',
        };
        this.bankDetails = {
            bankName: '',
            bankBranch: '',
            bankAddress: '',
            accountNumber: '',
            swiftCode: ''
        };
        this.controlPanel = {
            /*salaryCutoff1:'',
            salaryCutoff2:'',
            soaDate1:'',
            soaDate2:'',
            username:'',
            password:'',
            status:'active',
            netSalaryRule:0,*/
            minRate: 0,
            maxRate: 0,
            minLoan: 0,
            maxLoan: 0
        };
        this.bxbForm = {
            //idNumber: '',
            docSubmitted: false,
            //notes: '',
            docs: {
                secRegist: false,
                bir2307: false,
                finStat: false,
                gis: false
            }
        };
        this.confirmPass = '';
        this.prefixes = this.sanitizer.bypassSecurityTrustHtml(__WEBPACK_IMPORTED_MODULE_5__ext_mob_prefixes__["a" /* intlPrefixes */]);
        this.isMobile = mobilecheck();
        this.prefix = '63';
    }
    AddCompanyPage.prototype.ionViewDidLoad = function () {
        this.menu.close();
        localStorage.page = 'companies';
    };
    AddCompanyPage.prototype.ngAfterViewInit = function () {
        this.prev.nativeElement.src = "../../assets/imgs/tmp-img.png";
    };
    AddCompanyPage.prototype.toHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */], {}, { animate: true, direction: "forward" });
    };
    AddCompanyPage.prototype.reorient = function ($event) {
        this.isMobile = mobilecheck();
    };
    AddCompanyPage.prototype.submitReg = function () {
        var _this = this;
        var self = this;
        var load = this.loader.create({
            spinner: 'crescent',
            dismissOnPageChange: true,
            showBackdrop: true,
            content: "Processing...",
            enableBackdropDismiss: false
        });
        load.present();
        var dt = __assign({}, this.companyData, this.companyRep, this.bankDetails, this.controlPanel, this.bxbForm);
        this.db.newCompany(dt).then(function (res) {
            load.dismiss();
            if (res.text() === "true") {
                var toast = _this.toast.create({
                    message: 'Company has been created',
                    duration: 3000,
                    position: 'top',
                    cssClass: "success"
                });
                toast.onDidDismiss(function (d) {
                    self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__companies_companies__["a" /* CompaniesPage */], {}, { animate: true, direction: "forward" });
                });
                toast.present();
            }
            else {
                var toast = _this.toast.create({
                    message: 'An error occurred. Please try again later.',
                    duration: 3000,
                    position: 'top',
                    cssClass: "fail"
                });
                toast.present();
            }
        }).catch(function (err) {
            load.dismiss();
            var toast = _this.toast.create({
                message: 'An error occurred. Please try again later.',
                duration: 3000,
                position: 'top',
                cssClass: "fail"
            });
            toast.present();
            console.warn(err);
        });
    };
    AddCompanyPage.prototype.goToTerms = function () {
        window.open(window.location.origin + "/#/terms");
        //this.navCtrl.setRoot(TermsPage,{},{animate:true, direction:"forward"});
    };
    AddCompanyPage.prototype.stat = function (event) {
        console.log(this);
    };
    AddCompanyPage.prototype.takePic = function ($event) {
        var self = this;
        if ($event.target.files && $event.target.files[0]) {
            //self.uploadFile($event.target.files[0]);
            console.log($event.target.files[0]);
            var nurl = URL.createObjectURL($event.target.files[0]);
            self.prev.nativeElement.src = nurl;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('prev'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddCompanyPage.prototype, "prev", void 0);
    AddCompanyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-company',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\add-company\add-company.html"*/'<ion-content (window:resize)="reorient($event)" [ngClass]="{\'mobile\':isMobile}">\n	<top-bar></top-bar>\n	<side-bar *ngIf = "!isMobile" [highlights]="\'dashboard\'"></side-bar>\n\n	 <section class="main">\n	 	<form name="company-data">\n	 		<h2>Add New Company</h2>\n		 	<div class="uploader">\n				<input type="file" accept="image/*" (change)="takePic($event)">\n				<ion-avatar item-start>\n					<img #prev/>\n				</ion-avatar>\n		 	</div>\n\n		 	<span class="header">General Information</span>\n	 		<!--ion-row>\n	 			<p class="label">\n	 				Company Code\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="companyCode" [(ngModel)] = "companyData.companyCode"/>\n	 			</span>\n	 		</ion-row-->\n	 		<ion-row>\n	 			<p class="label">\n	 				Company Name\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="companyName" [(ngModel)] = "companyData.companyName" />\n	 			</span>\n	 		</ion-row>\n	 		<!--ion-row>\n	 			<p class="label">\n	 				Business / Trade Names\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="tradeName" [(ngModel)] = "companyData.tradeName"/>\n	 			</span>\n	 		</ion-row-->\n	 		<ion-row>\n	 			<p class="label">\n	 				Country\n	 			</p>\n	 			<span class="content">\n	 				<select name="country" [(ngModel)]="companyData.country">\n	 					<option value="Philippines" selected="true">Philippines</option>\n	 				</select>\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Principal Address\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="address" [(ngModel)] = "companyData.address"/>\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				City\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="address" [(ngModel)] = "companyData.city"/>\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Zip Code\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="zip" [(ngModel)] = "companyData.zip"/>\n	 			</span>\n	 		</ion-row>\n	 		<!--ion-row>\n	 			<p class="label">\n	 				SEC Registration No.\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="SECnum" [(ngModel)] = "companyData.SECnum"/>\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				TIN Number\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="tin" [(ngModel)] = "companyData.tin" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Company Type\n	 			</p>\n	 			<span class="content">\n	 				<ion-select name="type" [(ngModel)] = "companyData.type">\n	 					<ion-option value="corporation">Corporation</ion-option>\n	 					<ion-option value="limitedLiability">Limited Liability</ion-option>\n	 					<ion-option value="partnership">Partnership</ion-option>\n	 				</ion-select>\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Industry\n	 			</p>\n	 			<span class="content">\n	 				<ion-select name="industry" [(ngModel)] = "companyData.industry">\n                    	<ion-option value="Manufacturing">Manufacturing</ion-option>\n                    	<ion-option value="Retail">Retail</ion-option>\n                    	<ion-option value="Finance">Finance</ion-option>\n                    	<ion-option value="Public utility">Public utility</ion-option>\n                    	<ion-option value="Healthcare">Healthcare</ion-option>\n                    	<ion-option value="Energy">Energy</ion-option>\n                    	<ion-option value="Education">Education</ion-option>\n                    	<ion-option value="Media">Media</ion-option>\n                    	<ion-option value="Logistics">Logistics</ion-option>\n                    	<ion-option value="BPO">BPO</ion-option>\n                    	<ion-option value="Transport">Transport</ion-option>\n                    	<ion-option value="Shared services">Shared services</ion-option>\n                    	<ion-option value="Transportation">Transportation</ion-option>\n                    	<ion-option value="Telecomunication">Telecomunication</ion-option>    \n                    	<ion-option value="Construction">Construction</ion-option>    \n                    	<ion-option value="Real estate">Real estate</ion-option>    \n                    	<ion-option value="Mining">Mining</ion-option>    \n                    	<ion-option value="Information technology">Information technology</ion-option>    \n                    	<ion-option value="Food and beverage">Food &amp; beverage</ion-option>    \n                    	<ion-option value="Hospitality">Hospitality</ion-option>    \n                    	<ion-option value="Insurance">Insurance</ion-option>    \n                    	<ion-option value="Telecomunication">Telecomunication</ion-option>    \n                    	<ion-option value="Others">Others</ion-option>    \n                    </ion-select>\n	 			</span>\n	 		</ion-row-->\n	 		<!--ion-row>\n	 			<p class="label">\n	 				Minumum Year\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="minYear" [(ngModel)] = "companyData.minYear" />\n	 			</span>\n	 		</ion-row>\n\n	 		<!-- Authorized Representative ->\n		 	<span class="header">Authorized Representative</span>\n	 		<ion-row>\n	 			<p class="label">\n	 				First Name\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="firstName" [(ngModel)] = "companyRep.firstName" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Last Name\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="firstName" [(ngModel)] = "companyRep.firstName"/>\n	 			</span>\n	 		</ion-row-->\n\n		 	<span class="header">Contact Information</span>\n	 		<ion-row class="bot">\n	 			<p class="label">\n	 				Mobile\n	 			</p>\n	 			<span class="content">\n		 			<select [innerHTML] = "prefixes" name="prefix" [(ngModel)]="prefix"></select>\n		 			<input class="short" type="number" name="mobile" [(ngModel)] = "companyRep.mobile"/>\n		 		</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Landline\n	 			</p>\n	 			<span class="content">\n	 				<input type="number" name="phone" [(ngModel)] = "companyRep.phone" />\n	 			</span>\n	 		</ion-row>\n	 		<!--ion-row>\n	 			<p class="label">\n	 				Email\n	 			</p>\n	 			<span class="content">\n	 				<input type="email" name="email" [(ngModel)] = "companyRep.email" />\n	 			</span>\n	 		</ion-row-->\n\n		 	<span class="header">Bank Account Details</span>\n	 		<ion-row>\n	 			<p class="label">\n	 				Bank Name\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="bankName" [(ngModel)] = "bankDetails.bankName" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Bank Branch\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="bankBranch" [(ngModel)] = "bankDetails.bankBranch" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Bank Address\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="bankAddress" [(ngModel)] = "bankDetails.bankAddress" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Account Number\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="accountNumber" [(ngModel)] = "bankDetails.accountNumber" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Swift Code\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="swiftCode" [(ngModel)] = "bankDetails.swiftCode" />\n	 			</span>\n	 		</ion-row>\n\n		 	<span class="header">Company Control Panel</span>\n	 		<!--ion-row>\n	 			<p class="label">\n	 				Salary Cutoff 1\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="salaryCutoff1" [(ngModel)] = "controlPanel.salaryCutoff1" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Salary Cutoff 2\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="salaryCutoff2" [(ngModel)] = "controlPanel.salaryCutoff2" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Statement of Account Date 1\n	 			</p>\n	 			<span class="content">\n	 				<input type="number" name="soaDate1" [(ngModel)] = "controlPanel.soaDate1"/>\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Statement of Account Date 2\n	 			</p>\n	 			<span class="content">\n	 				<input type="number" name="soaDate2" [(ngModel)] = "controlPanel.soaDate2"/>\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Company Username\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="companyUsername" [(ngModel)] = "controlPanel.username"/>\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Company Password\n	 			</p>\n	 			<span class="content">\n	 				<input type="password" name="companyPassword" [(ngModel)] = "controlPanel.password"/>\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Status\n	 			</p>\n	 			<span class="content">\n	 				<ion-select name="companyStatus" [(ngModel)] = "controlPanel.status">\n	 					<ion-option value="active">Active</ion-option>\n	 					<ion-option value="inactive">Inactive</ion-option>\n	 					<ion-option value="probation">Probation</ion-option>\n	 				</ion-select>\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Net Salary Rule\n	 			</p>\n	 			<span class="content">\n	 				<input type="number" name="netSalaryRule" [(ngModel)] = "controlPanel.netSalaryRule" />\n	 			</span>\n	 		</ion-row-->\n	 		<ion-row>\n	 			<p class="label">\n	 				Minimum Loan\n	 			</p>\n	 			<span class="content">\n	 				<input type="number" step="500" min="0" name="minLoan" [(ngModel)] = "controlPanel.minLoan" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Max Loan\n	 			</p>\n	 			<span class="content">\n	 				<input type="number" step="500" min="0" name="maxLoan" [(ngModel)] = "controlPanel.maxLoan" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Minimum Rate\n	 			</p>\n	 			<span class="content">\n	 				<input type="number" min="0" step="0.005" name="minRate" [(ngModel)] = "controlPanel.minRate" />\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Max Rate\n	 			</p>\n	 			<span class="content">\n	 				<input type="number" min="0" step="0.005" name="maxRate" [(ngModel)] = "controlPanel.maxRate" />\n	 			</span>\n	 		</ion-row>\n\n		 	<span class="header">For BXB Only</span>\n	 		<!--ion-row>\n	 			<p class="label">\n	 				Intermediary ID No.\n	 			</p>\n	 			<span class="content">\n	 				<input type="text" name="idNumber" [(ngModel)] = "bxbForm.idNumber" />\n	 			</span>\n	 		</ion-row-->\n	 		<!--ion-row>\n	 			<p class="label">\n	 				Documentation Submitted\n	 			</p>\n	 			<span class="content nobg">\n					<ion-toggle [checked]="bxbForm.docSubmitted"></ion-toggle>\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<p class="label">\n	 				Notes\n	 			</p>\n	 			<span class="content">\n	 				<textarea name="notes" [(ngModel)] = "bxbForm.notes">\n	 				</textarea>\n	 			</span>\n	 		</ion-row-->\n	 		<ion-row class="center">\n	 			<span>\n	 				<ion-checkbox name="docSubmitted" [(ngModel)]="bxbForm.docSubmitted"></ion-checkbox>\n	 				<p>Documentation Submitted</p>\n	 			</span>\n	 		</ion-row>\n	 		<ion-row class="center" *ngIf="bxbForm.docSubmitted">\n	 			<p class="label">&nbsp;</p>\n	 			<span class="content nobg">\n		 			<ion-col>\n		 				<ion-checkbox name="secRegist" [(ngModel)]="bxbForm.docs.secRegist"></ion-checkbox>\n		 				SEC Registration\n		 			</ion-col>\n		 			<ion-col>\n		 				<ion-checkbox name="bir2307" [(ngModel)]="bxbForm.docs.bir2307"></ion-checkbox>\n		 				BIR Form 2307\n		 			</ion-col><br/>\n		 			<ion-col>\n		 				<ion-checkbox name="finstat" [(ngModel)]="bxbForm.docs.finStat"></ion-checkbox>\n		 				Financial Statement\n		 			</ion-col>\n		 			<ion-col>\n		 				<ion-checkbox name="infosheet" [(ngModel)]="bxbForm.docs.gis"></ion-checkbox>\n		 				General Information Sheet.\n		 			</ion-col>\n	 			</span>\n	 		</ion-row>\n	 		<ion-row>\n	 			<button ion-button (tap)="submitReg()">Create Account</button>\n	 		</ion-row>\n	 	</form>\n	 \n	 	<foot></foot>\n	 </section>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\add-company\add-company.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], AddCompanyPage);
    return AddCompanyPage;
}());

//# sourceMappingURL=add-company.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatementsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loans_loans__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_db_db__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__statement_of_account_statement_of_account__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StatementsPage = /** @class */ (function () {
    function StatementsPage(navCtrl, navParams, menu, db, loader, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.db = db;
        this.loader = loader;
        this.modal = modal;
        this.soas = [
            {
                pdf: 'PDF',
                company: '6805 Ayala Avenue Condominium Corporation',
                billPeriod: '07-30-2018',
                amt: 14929.16,
                soaNo: '2018835',
                refNo: '240665CHQ',
                companyAct: 'paid',
                mgtAct: 'confirm'
            },
            {
                pdf: 'PDF',
                company: '6805 Ayala Avenue Condominium Corporation',
                billPeriod: '07-15-2018',
                amt: 16739.57,
                soaNo: '2018834',
                refNo: '240642CHQ',
                companyAct: 'paid',
                mgtAct: 'confirmed'
            },
            {
                pdf: 'PDF',
                company: 'BXB Employee Solutions Corp',
                billPeriod: '08-30-2018',
                amt: 479.16,
                soaNo: '2018847',
                refNo: '',
                companyAct: 'not paid',
                mgtAct: 'confirm'
            }
        ];
        this.hdrTitles = {
            'pdf': 'PDF',
            'company': 'Name',
            'billPeriod': 'Billing Period',
            'amt': 'Amount Due',
            'soaNo': 'SOA Ref #',
            'refNo': 'Ref #',
            'companyAct': 'Company',
            'mgtAct': 'Management'
        };
        this.sampKeys = ["pdf", "company", "billPeriod", "amt", "soaNo", "refNo", "companyAct", "mgtAct"];
        this.formats = {
            'amt': 'currency',
            'companyAct': 'textDecorated',
            'mgtAct': 'textEvent'
        };
        this.actions = [
            {
                "icon": "md-information-circle",
                "class": "display-disclosure"
            }
        ];
    }
    StatementsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.menu.close();
        localStorage.page = 'soa';
        this.db.getSOAByDate().then(function (res) {
            _this.soas = res.json();
        }).catch(console.warn);
    };
    StatementsPage.prototype.ionViewWillLeave = function () {
    };
    StatementsPage.prototype.isMobile = function () {
        return localStorage.view == "mobile";
    };
    StatementsPage.prototype.toCreditSummary = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__loans_loans__["a" /* LoansPage */], {}, { animate: true, direction: "top" });
    };
    StatementsPage.prototype.doAction = function (i) {
        if (i.index.toString().toLowerCase() == "confirm") {
            console.log(i.val);
        }
        else {
            this.showSOA(JSON.parse(i.val));
        }
    };
    StatementsPage.prototype.showSOA = function (i) {
        this.mod = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__statement_of_account_statement_of_account__["a" /* StatementOfAccountPage */], { data: i }, { cssClass: "whitemodal  " + (this.isMobile ? "mobile" : "") });
        this.mod.present();
    };
    StatementsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-statements',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\statements\statements.html"*/'<ion-content [ngClass]="{\'mobile\':isMobile()}">\n	<top-bar></top-bar>\n	<side-bar *ngIf = "!isMobile()" [highlights]="\'soa\'"></side-bar>\n\n	<section class="main-content">\n		<ion-row>\n			<ion-col col-12>\n				<submodule [title]="\'Statement of Account\'">\n					<sortable-table *ngIf="soas.length > 0" [data]="soas" [headers]="sampKeys" [formats]="formats" [header_titles]="hdrTitles" [actions]="actions" (t)="doAction($event)"></sortable-table>\n					<p class="no-data" *ngIf="soas.length == 0">\n						No data\n					</p>					\n				</submodule>\n			</ion-col>\n		</ion-row>\n		<foot></foot>\n		\n	</section>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\statements\statements.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], StatementsPage);
    return StatementsPage;
}());

//# sourceMappingURL=statements.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MediaProvider = /** @class */ (function () {
    function MediaProvider(http) {
        this.http = http;
        console.log('Hello MediaProvider Provider');
    }
    MediaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MediaProvider);
    return MediaProvider;
}());

//# sourceMappingURL=media.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_tin_signup_tin__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hr_dashboard_hr_dashboard__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employee_dashboard_employee_dashboard__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__super_dashboard_super_dashboard__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_password_forgot_password__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ext_config__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


//import { SignUpPage } from '../sign-up/sign-up';







;
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, menu, http, toast, loader) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.http = http;
        this.toast = toast;
        this.loader = loader;
        this.userData = { username: "", pass: "" };
        this.isMobile = mobilecheck();
        this.env = __WEBPACK_IMPORTED_MODULE_8__ext_config__["a" /* config */][location.origin].backend;
        this.cp = "";
        this.bgs = {
            "bxb": {
                "bg": "url('../../assets/imgs/login-bg.png')",
                "logo": "../../assets/imgs/bxb-white-logo-2.svg",
                "style": "color:white;font-family:'Raleway';"
            },
            "bell": {
                "bg": "url('../../assets/imgs/tmp-img.png')",
                "logo": "../../assets/imgs/notifbell.png",
                "style": "color:black;font-family:'Roboto',sans-serif;"
            },
            "toyota": {
                "bg": "url('../../assets/test/toyota/bg.jpg')",
                "logo": "../../assets/test/toyota/logo.png",
                "style": "color:white;font-family:'Calibri';text-shadow:0px 0px 12px #000;"
            }
        };
        console.log(this.env);
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        this.menu.close();
        localStorage.page = 'login';
        if (typeof localStorage.accountType == "string" && typeof localStorage.userData == "string") {
            switch (localStorage.accountType) {
                case "employee":
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__employee_dashboard_employee_dashboard__["a" /* EmployeeDashboardPage */], {}, { animate: true, direction: "forward" });
                    // code...
                    break;
                case "hr":
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__hr_dashboard_hr_dashboard__["a" /* HrDashboardPage */], {}, { animate: true, direction: "forward" });
                    // code...
                    break;
                default:
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__super_dashboard_super_dashboard__["a" /* SuperDashboardPage */], {}, { animate: true, direction: "forward" });
                    // code...
                    break;
            }
        }
        this.assignStyle().then(function (c) {
            var sct = document.querySelector('section.main-content');
            sct.setAttribute('style', c['style']);
        });
    };
    LoginPage.prototype.assignStyle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var comps;
            return __generator(this, function (_a) {
                comps = this.navParams.get('company') || 'bxb';
                this.cp = this.bgs[comps];
                return [2 /*return*/, this.cp];
            });
        });
    };
    LoginPage.prototype.toReg = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__signup_tin_signup_tin__["a" /* SignupTinPage */], {}, { animate: true, direction: "forward" });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        /* backdoor */
        if (this.userData.username == "super" && this.userData.pass == "pass") {
            localStorage.userData = [];
            localStorage.accountType = 'super';
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__super_dashboard_super_dashboard__["a" /* SuperDashboardPage */], {}, { animate: true, direction: "forward" });
            return;
        }
        else if (this.userData.username == "hr" && this.userData.pass == "pass") {
            localStorage.userData = [];
            localStorage.accountType = 'hr';
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__hr_dashboard_hr_dashboard__["a" /* HrDashboardPage */], {}, { animate: true, direction: "forward" });
            return;
        }
        var self = this;
        var uData = this.userData;
        var hdr = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */];
        hdr.append('Content-Type', 'application/json');
        var rq = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */];
        rq.headers = hdr;
        var load = this.loader.create({
            spinner: 'crescent',
            dismissOnPageChange: true,
            showBackdrop: true,
            content: "Please wait...",
            enableBackdropDismiss: false
        });
        load.present();
        this.http.post(this.env + "/api.php?q=login", uData, rq)
            .toPromise()
            .then(function (res) {
            /*load.dismiss();
            let txt = res.text().toLowerCase().replace(/[^A-Za-z]/g,'');
            let stat = (txt == "usersuccessfullyloggedin" ? "success" : "fail");
            if(stat == "success"){
                self.navCtrl.setRoot(HrDashboardPage,{},{animate:true, direction:"forward"});
            }else{
                this.launchToast(res.text(),stat);
            }  				*/
            load.dismiss();
            var uDt = res.json();
            if (!uDt.hasOwnProperty('master_id')) {
                _this.launchToast('Invalid login', 'fail');
            }
            else {
                localStorage.userData = JSON.stringify(uDt);
                localStorage.accountType = 'employee';
                self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__employee_dashboard_employee_dashboard__["a" /* EmployeeDashboardPage */], {}, { animate: true, direction: "forward" });
            }
            //id = id[0].master_id;
            //this.http.post()
        })
            .catch(function (err) {
            load.dismiss();
            _this.launchToast('Invalid login', 'fail');
            console.warn(err);
        });
    };
    LoginPage.prototype.launchToast = function (msg, status) {
        if (status === void 0) { status = 1; }
        var toast = this.toast.create({
            message: msg,
            duration: 3000,
            position: 'top',
            cssClass: "" + status
        });
        toast.present();
        return toast;
    };
    LoginPage.prototype.toForget = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__forgot_password_forgot_password__["a" /* ForgotPasswordPage */], {}, { animate: true, direction: "forward" });
    };
    LoginPage.prototype.reorient = function () {
        this.isMobile = mobilecheck();
    };
    LoginPage.prototype.testApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var hdr, rq;
            return __generator(this, function (_a) {
                hdr = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */];
                hdr.append('Content-Type', 'application/json');
                rq = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */];
                rq.headers = hdr;
                this.http.post("https://bxb-backend-php.azurewebsites.net/api.php?q=test", {}, rq).toPromise()
                    .then(console.log)
                    .catch(console.info);
                return [2 /*return*/];
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n	<section class="main-content" [ngClass]="{\'mobile\':isMobile}" [ngStyle]="{\'background-image\':cp?.bg}">\n		<header>\n			<img src="{{cp?.logo}}" (tap)="testApi()"/>\n		</header>\n\n		<div class="main">\n			<ion-row>\n				<ion-col>\n					<input type="text" [(ngModel)] = "userData.username" name="login" placeholder="Email or Username" (keyup.enter)="login()"/>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col>\n					<input type="password" [(ngModel)] = "userData.pass" name="pass" placeholder="Password"  (keyup.enter)="login()"/>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col>\n					<button ion-button (tap)="login()">Login</button>\n				</ion-col>\n			</ion-row>\n			<span class="links">\n				<button ion-button (tap)="toReg()">Register your account here</button>\n			</span>\n			<span class="links">\n				<button ion-button (tap)="toForget()">Forgot password?</button>\n			</span>\n		</div>\n	</section>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoansPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__disclosure_statement_disclosure_statement__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_db_db__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_loan_loan__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/*interface pendingLoan {
    firstName,
    lastName,
    transID,
    inceptionDate,
    term,
    amt,
    purpose
};*/
var LoansPage = /** @class */ (function () {
    function LoansPage(navCtrl, navParams, menu, modal, db, loader) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.modal = modal;
        this.db = db;
        this.loader = loader;
        this.loanStatus = 'pending';
        this.loans = {
            'pending': [],
            'approved': [],
            'cancel': [],
            'completed': []
        };
        this.hdrTitles = {
            'userData.Name_First': 'First Name',
            'userData.Name_Last': 'Last Name',
            'LoanID': 'Transaction ID',
            'applicationDate': 'Date of Inception',
            'term': 'Term',
            'principal': 'Amount',
            'purpose': 'Purpose'
        };
        this.sampKeys = ['userData.Name_First', 'userData.Name_Last', 'LoanID', 'applicationDate', 'term', 'principal', 'purpose'];
        this.formats = {
            'principal': 'currency',
            'interest': 'percent',
            'term': 'number',
            'userData.Name_First': 'nested',
            'userData.Name_Last': 'nested'
        };
        this.actions = [
            {
                "icon": "md-information-circle",
                "class": "display-disclosure"
            }
        ];
        this.payments = [
            {
                "paymentDate": "06-15-2018",
                "paymentNum": 1,
                "amt": 8400,
                "bal": 25200
            },
            {
                "paymentDate": "06-30-2018",
                "paymentNum": 2,
                "amt": 8400,
                "bal": 16800
            },
            {
                "paymentDate": "07-15-2018",
                "paymentNum": 3,
                "amt": 8400,
                "bal": 8400
            },
            {
                "paymentDate": "07-30-2018",
                "paymentNum": 4,
                "amt": 8400,
                "bal": 0
            }
        ];
        this.searched = this.loans;
    }
    LoansPage.prototype.ionViewDidEnter = function () {
        var self = this;
        this.menu.close();
        localStorage.page = 'creditsum';
        var load = this.loader.create({
            spinner: 'crescent',
            dismissOnPageChange: true,
            showBackdrop: true,
            content: "Loading Data...",
            enableBackdropDismiss: false
        });
        load.present();
        var pr1 = this.db.getLoansByStatus(1).then(function (rs) {
            self.loans.pending = rs;
            return rs;
        });
        var pr2 = this.db.getLoansByStatus(2).then(function (rs) {
            self.loans.approved = rs;
            return rs;
        });
        var pr3 = this.db.getLoansByStatus(4).then(function (rs) {
            self.loans.cancel = rs;
            return rs;
        });
        Promise.all([pr1, pr2, pr3]).then(function () {
            load.dismiss();
        });
    };
    LoansPage.prototype.test = function (e, fe) {
        if (fe === void 0) { fe = false; }
        //this.ln.p = e.val.
        console.log(e.val);
        var ev = JSON.parse(e.val);
        this.ln.p = ev.principal;
        this.ln.t = ev.numberPaydays;
        this.ln.sdate = ev.applicationDate;
        this.ln.getLoan();
        this.showModal(e, fe);
    };
    /*getLoansByStatus(stat):Promise<any>{
      let hdr = new Headers;
      hdr.append('Content-Type','application/json');
      let rq = new RequestOptions;
      rq.headers = hdr;
  
      return (
          this.http.post(`${this.env}/api.php?q=hr_get_loan_by_status`,{status:stat}, rq)
              .toPromise()
              .then(res=>{
                  console.log(res.json());
                  return res.json();
              })
              .catch(err=>{
                  console.warn(err);
                  return {};
              })
      );
    }*/
    LoansPage.prototype.ionViewWillLeave = function () {
        try {
            this.mod.dismiss();
        }
        catch (e) {
            console.warn(e);
        }
    };
    LoansPage.prototype.isMobile = function () {
        return localStorage.view == "mobile";
    };
    LoansPage.prototype.segmentChanged = function ($event) {
        //console.info($event);
    };
    LoansPage.prototype.showModal = function (i, fe) {
        var _this = this;
        if (fe === void 0) { fe = false; }
        var ind = JSON.parse(i.val);
        var self = this;
        var lndta = this.ln.getLoan();
        console.log(lndta);
        ind.loan = lndta;
        if (fe) {
            this.ln.getDates(ind.applicationDate).then(function (dt) {
                self.mod = _this.modal.create(__WEBPACK_IMPORTED_MODULE_2__disclosure_statement_disclosure_statement__["a" /* DisclosureStatementPage */], { data: ind, payments: dt, user: ind.userData }, { cssClass: "whitemodal " + (self.isMobile() ? "mobile" : "") });
                self.mod.present();
            });
        }
        else {
            this.db.getSchedofPayment(ind['LoanID']).then(function (res) {
                console.log(res);
                self.mod = self.modal.create(__WEBPACK_IMPORTED_MODULE_2__disclosure_statement_disclosure_statement__["a" /* DisclosureStatementPage */], { data: ind, payments: res, user: ind.userData }, { cssClass: "whitemodal " + (self.isMobile() ? "mobile" : "") });
                self.mod.present();
            }).catch(console.warn);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('p_loan'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__components_loan_loan__["a" /* LoanComponent */])
    ], LoansPage.prototype, "ln", void 0);
    LoansPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loans',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\loans\loans.html"*/'<ion-content [ngClass]="{\'mobile\':isMobile()}">\n	<top-bar></top-bar>\n	<side-bar *ngIf = "!isMobile()" [highlights]="\'creditsum\'"></side-bar>\n\n	<section class="main-content">\n		<ion-row>\n			<ion-col col-12>\n				<loan #p_loan></loan>\n				<submodule [title]="\'Portfolio Loans/Loan Status\'">\n					\n					<ion-segment [(ngModel)]="loanStatus" color="primary" (ionChange)="segmentChanged($event)">\n						<ion-segment-button value="pending">\n							Pending\n					    </ion-segment-button>\n					    <ion-segment-button value="approved">\n					    	Approved\n					    </ion-segment-button>\n						<ion-segment-button value="cancel">\n							Cancel\n					    </ion-segment-button>\n					    <ion-segment-button value="completed">\n					    	Completed\n					    </ion-segment-button>\n					</ion-segment>\n\n					<div [ngSwitch]="loanStatus" class=\'segmentable\'>\n						<div *ngSwitchCase = "\'pending\'">\n							<sortable-table *ngIf="loans.pending.length > 0" [data]="loans?.pending" [headers]="sampKeys" [formats]="formats" [header_titles]="hdrTitles" [actions]="actions" (t)="test($event,true)"></sortable-table>\n							<p class="no-data" *ngIf="loans.pending.length == 0">\n								No data\n							</p>\n							<!--span class="search">\n								<ion-icon name="ios-search"></ion-icon>\n								<input type="text" (keyup)="search($event)" placeholder="Search any fields"/>\n							</span>\n							<ion-grid class="table" *ngIf="!isMobile">\n								<ion-row justify-content-center class="thead header">\n									<ion-col >\n										First Name\n									</ion-col>\n									<ion-col >\n										Last Name\n									</ion-col>\n									<ion-col col-2>\n										Transaction ID\n									</ion-col>\n									<ion-col >\n										Date of Inception\n									</ion-col>\n									<ion-col >\n										Term\n									</ion-col>\n									<ion-col >\n										Amount\n									</ion-col>\n									<ion-col col-2>\n										Purpose\n									</ion-col>\n								</ion-row>\n								<ion-row justify-content-center class="data" *ngFor = "let rowData of searched?.pending; let i = index">\n									<ion-col >\n										{{rowData?.firstName}}\n									</ion-col>\n									<ion-col >\n										{{rowData?.lastName}}\n									</ion-col>\n									<ion-col col-2>\n										{{rowData?.transID}}\n									</ion-col>\n									<ion-col >\n										{{rowData?.inceptionDate}}\n									</ion-col>\n									<ion-col >\n										{{rowData?.term}}\n									</ion-col>\n									<ion-col >\n										{{rowData?.amt | currency:\'PHP\':\'symbol-narrow\':\'1.2-2\'}}\n									</ion-col>\n									<ion-col col-2>\n										{{rowData?.purpose}}\n									</ion-col>\n								</ion-row>\n							</ion-grid>\n							<ion-grid class="table" *ngIf="isMobile">\n								<ion-row style="width:100%;">\n									<ion-col col-12 style="width:100%; box-shadow: 0 0 3px 0 #333" class="data" *ngFor = "let rowData of searched?.pending; let i = index;">\n										<ion-row>\n											<ion-col col-6>\n												<p class="label">Name</p>\n												{{rowData?.firstName}} {{rowData?.lastName}}\n											</ion-col>\n											<ion-col col-6>\n												<p class="label">Transaction ID</p>\n												{{rowData?.transID}}\n											</ion-col>\n										</ion-row>\n										<ion-row>\n											<ion-col col-6>\n												<p class="label">Date of Inception</p>\n												{{rowData?.inceptionDate}}\n											</ion-col>\n											<ion-col col-6>\n												<p class="label">Term</p>\n												{{rowData?.term}}\n											</ion-col>\n										</ion-row>\n										<ion-row>\n											<ion-col col-6>\n												<p class="label">Amount</p>\n												{{rowData?.amt | currency:\'PHP\':\'symbol-narrow\':\'1.2-2\'}}\n											</ion-col>\n											<ion-col  col-6>\n												<p class="label">Purpose</p>\n												{{rowData?.purpose}}\n											</ion-col>\n										</ion-row>\n									</ion-col>\n								</ion-row>\n							</ion-grid-->\n						</div>\n						<div *ngSwitchCase = "\'approved\'">\n							<sortable-table *ngIf="loans.approved.length > 0" [data]="loans?.approved" [headers]="sampKeys" [formats]="formats" [header_titles]="hdrTitles" [actions]="actions" (t)="test($event)"></sortable-table>\n							<p class="no-data" *ngIf="loans.approved.length == 0">\n								No data\n							</p>\n							\n						</div>\n						<div *ngSwitchCase = "\'cancel\'">\n							<sortable-table *ngIf="loans.cancel.length > 0" [data]="loans?.cancel" [headers]="sampKeys" [formats]="formats" [header_titles]="hdrTitles" [actions]="actions" (t)="test($event)"></sortable-table>\n							<p class="no-data" *ngIf="loans.cancel.length == 0">\n								No data\n							</p>\n							\n						</div>\n						<div *ngSwitchCase = "\'completed\'">\n							<sortable-table *ngIf="loans.completed.length > 0" [data]="loans?.completed" [headers]="sampKeys" [formats]="formats" [header_titles]="hdrTitles" [actions]="actions" (t)="test($event)"></sortable-table>\n							<p class="no-data" *ngIf="loans.completed.length == 0">\n								No data\n							</p>\n							\n						</div>\n					</div>\n				</submodule>\n			</ion-col>\n		</ion-row>\n		<foot></foot>\n	</section>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\loans\loans.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], LoansPage);
    return LoansPage;
}());

//# sourceMappingURL=loans.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return intlPrefixes; });
var intlPrefixes = "<option data-countrycode=\"PH\" value=\"63\" selected>PH (+63)</option>";
/*
  <option disabled="disabled">Other Countries</option>
  <option data-countrycode="DZ" value="213">DZ (+213)</option>
  <option data-countrycode="AD" value="376">AD (+376)</option>
  <option data-countrycode="AO" value="244">AO (+244)</option>
  <option data-countrycode="AI" value="1264">AI (+1264)</option>
  <option data-countrycode="AG" value="1268">AG (+1268)</option>
  <option data-countrycode="AR" value="54">AR (+54)</option>
  <option data-countrycode="AM" value="374">AM (+374)</option>
  <option data-countrycode="AW" value="297">AW (+297)</option>
  <option data-countrycode="AU" value="61">AU (+61)</option>
  <option data-countrycode="AT" value="43">AT (+43)</option>
  <option data-countrycode="AZ" value="994">AZ (+994)</option>
  <option data-countrycode="BS" value="1242">BS (+1242)</option>
  <option data-countrycode="BH" value="973">BH (+973)</option>
  <option data-countrycode="BD" value="880">BD (+880)</option>
  <option data-countrycode="BB" value="1246">BB (+1246)</option>
  <option data-countrycode="BY" value="375">BY (+375)</option>
  <option data-countrycode="BE" value="32">BE (+32)</option>
  <option data-countrycode="BZ" value="501">BZ (+501)</option>
  <option data-countrycode="BJ" value="229">BJ (+229)</option>
  <option data-countrycode="BM" value="1441">BM (+1441)</option>
  <option data-countrycode="BT" value="975">BT (+975)</option>
  <option data-countrycode="BO" value="591">BO (+591)</option>
  <option data-countrycode="BA" value="387">BA (+387)</option>
  <option data-countrycode="BW" value="267">BW (+267)</option>
  <option data-countrycode="BR" value="55">BR (+55)</option>
  <option data-countrycode="BN" value="673">BN (+673)</option>
  <option data-countrycode="BG" value="359">BG (+359)</option>
  <option data-countrycode="BF" value="226">BF (+226)</option>
  <option data-countrycode="BI" value="257">BI (+257)</option>
  <option data-countrycode="KH" value="855">KH (+855)</option>
  <option data-countrycode="CM" value="237">CM (+237)</option>
  <option data-countrycode="CA" value="1">CA (+1)</option>
  <option data-countrycode="CV" value="238">CV (+238)</option>
  <option data-countrycode="KY" value="1345">KY (+1345)</option>
  <option data-countrycode="CF" value="236">CF (+236)</option>
  <option data-countrycode="CL" value="56">CL (+56)</option>
  <option data-countrycode="CN" value="86">CN (+86)</option>
  <option data-countrycode="CO" value="57">CO (+57)</option>
  <option data-countrycode="KM" value="269">KM (+269)</option>
  <option data-countrycode="CG" value="242">CG (+242)</option>
  <option data-countrycode="CK" value="682">CK (+682)</option>
  <option data-countrycode="CR" value="506">CR (+506)</option>
  <option data-countrycode="HR" value="385">HR (+385)</option>
  <!-- <option data-countryCode="CU" value="53">Cuba (+53)</option> -->
  <option data-countrycode="CY" value="90">CY (+90)</option>
  <option data-countrycode="CY" value="357">CY (+357)</option>
  <option data-countrycode="CZ" value="420">CZ (+420)</option>
  <option data-countrycode="DK" value="45">DK (+45)</option>
  <option data-countrycode="DJ" value="253">DJ (+253)</option>
  <option data-countrycode="DM" value="1809">DM (+1809)</option>
  <option data-countrycode="DO" value="1809">DO (+1809)</option>
  <option data-countrycode="EC" value="593">EC (+593)</option>
  <option data-countrycode="EG" value="20">EG (+20)</option>
  <option data-countrycode="SV" value="503">SV (+503)</option>
  <option data-countrycode="GQ" value="240">GQ (+240)</option>
  <option data-countrycode="ER" value="291">ER (+291)</option>
  <option data-countrycode="EE" value="372">EE (+372)</option>
  <option data-countrycode="ET" value="251">ET (+251)</option>
  <option data-countrycode="FK" value="500">FK (+500)</option>
  <option data-countrycode="FO" value="298">FO (+298)</option>
  <option data-countrycode="FJ" value="679">FJ (+679)</option>
  <option data-countrycode="FI" value="358">FI (+358)</option>
  <option data-countrycode="FR" value="33">FR (+33)</option>
  <option data-countrycode="GF" value="594">GF (+594)</option>
  <option data-countrycode="PF" value="689">PF (+689)</option>
  <option data-countrycode="GA" value="241">GA (+241)</option>
  <option data-countrycode="GM" value="220">GM (+220)</option>
  <option data-countrycode="GE" value="7880">GE (+7880)</option>
  <option data-countrycode="DE" value="49">DE (+49)</option>
  <option data-countrycode="GH" value="233">GH (+233)</option>
  <option data-countrycode="GI" value="350">GI (+350)</option>
  <option data-countrycode="GR" value="30">GR (+30)</option>
  <option data-countrycode="GL" value="299">GL (+299)</option>
  <option data-countrycode="GD" value="1473">GD (+1473)</option>
  <option data-countrycode="GP" value="590">GP (+590)</option>
  <option data-countrycode="GU" value="671">GU (+671)</option>
  <option data-countrycode="GT" value="502">GT (+502)</option>
  <option data-countrycode="GN" value="224">GN (+224)</option>
  <option data-countrycode="GW" value="245">GW (+245)</option>
  <option data-countrycode="GY" value="592">GY (+592)</option>
  <option data-countrycode="HT" value="509">HT (+509)</option>
  <option data-countrycode="HN" value="504">HN (+504)</option>
  <option data-countrycode="HK" value="852">HK (+852)</option>
  <option data-countrycode="HU" value="36">HU (+36)</option>
  <option data-countrycode="IS" value="354">IS (+354)</option>
  <option data-countrycode="IN" value="91">IN (+91)</option>
  <option data-countrycode="ID" value="62">ID (+62)</option>
  <option data-countrycode="IQ" value="964">IQ (+964)</option>
  <!-- <option data-countryCode="IR" value="98">Iran (+98)</option> -->
  <option data-countrycode="IE" value="353">IE (+353)</option>
  <option data-countrycode="IL" value="972">IL (+972)</option>
  <option data-countrycode="IT" value="39">IT (+39)</option>
  <option data-countrycode="JM" value="1876">JM (+1876)</option>
  <option data-countrycode="JP" value="81">JP (+81)</option>
  <option data-countrycode="JO" value="962">JO (+962)</option>
  <option data-countrycode="KZ" value="7">KZ (+7)</option>
  <option data-countrycode="KE" value="254">KE (+254)</option>
  <option data-countrycode="KI" value="686">KI (+686)</option>
  <!-- <option data-countryCode="KP" value="850">Korea - North (+850)</option> -->
  <option data-countrycode="KR" value="82">KR (+82)</option>
  <option data-countrycode="KW" value="965">KW (+965)</option>
  <option data-countrycode="KG" value="996">KG (+996)</option>
  <option data-countrycode="LA" value="856">LA (+856)</option>
  <option data-countrycode="LV" value="371">LV (+371)</option>
  <option data-countrycode="LB" value="961">LB (+961)</option>
  <option data-countrycode="LS" value="266">LS (+266)</option>
  <option data-countrycode="LR" value="231">LR (+231)</option>
  <option data-countrycode="LY" value="218">LY (+218)</option>
  <option data-countrycode="LI" value="417">LI (+417)</option>
  <option data-countrycode="LT" value="370">LT (+370)</option>
  <option data-countrycode="LU" value="352">LU (+352)</option>
  <option data-countrycode="MO" value="853">MO (+853)</option>
  <option data-countrycode="MK" value="389">MK (+389)</option>
  <option data-countrycode="MG" value="261">MG (+261)</option>
  <option data-countrycode="MW" value="265">MW (+265)</option>
  <option data-countrycode="MY" value="60">MY (+60)</option>
  <option data-countrycode="MV" value="960">MV (+960)</option>
  <option data-countrycode="ML" value="223">ML (+223)</option>
  <option data-countrycode="MT" value="356">MT (+356)</option>
  <option data-countrycode="MH" value="692">MH (+692)</option>
  <option data-countrycode="MQ" value="596">MQ (+596)</option>
  <option data-countrycode="MR" value="222">MR (+222)</option>
  <option data-countrycode="YT" value="269">YT (+269)</option>
  <option data-countrycode="MX" value="52">MX (+52)</option>
  <option data-countrycode="FM" value="691">FM (+691)</option>
  <option data-countrycode="MD" value="373">MD (+373)</option>
  <option data-countrycode="MC" value="377">MC (+377)</option>
  <option data-countrycode="MN" value="976">MN (+976)</option>
  <option data-countrycode="MS" value="1664">MS (+1664)</option>
  <option data-countrycode="MA" value="212">MA (+212)</option>
  <option data-countrycode="MZ" value="258">MZ (+258)</option>
  <option data-countrycode="MN" value="95">MN (+95)</option>
  <option data-countrycode="NA" value="264">NA (+264)</option>
  <option data-countrycode="NR" value="674">NR (+674)</option>
  <option data-countrycode="NP" value="977">NP (+977)</option>
  <option data-countrycode="NL" value="31">NL (+31)</option>
  <option data-countrycode="NC" value="687">NC (+687)</option>
  <option data-countrycode="NZ" value="64">NZ (+64)</option>
  <option data-countrycode="NI" value="505">NI (+505)</option>
  <option data-countrycode="NE" value="227">NE (+227)</option>
  <option data-countrycode="NG" value="234">NG (+234)</option>
  <option data-countrycode="NU" value="683">NU (+683)</option>
  <option data-countrycode="NF" value="672">NF (+672)</option>
  <option data-countrycode="NP" value="670">NP (+670)</option>
  <option data-countrycode="NO" value="47">NO (+47)</option>
  <option data-countrycode="OM" value="968">OM (+968)</option>
  <option data-countrycode="PK" value="92">PK (+92)</option>
  <option data-countrycode="PW" value="680">PW (+680)</option>
  <option data-countrycode="PA" value="507">PA (+507)</option>
  <option data-countrycode="PG" value="675">PG (+675)</option>
  <option data-countrycode="PY" value="595">PY (+595)</option>
  <option data-countrycode="PE" value="51">PE (+51)</option>
  <option data-countrycode="PL" value="48">PL (+48)</option>
  <option data-countrycode="PT" value="351">PT (+351)</option>
  <option data-countrycode="PR" value="1787">PR (+1787)</option>
  <option data-countrycode="QA" value="974">QA (+974)</option>
  <option data-countrycode="RE" value="262">RE (+262)</option>
  <option data-countrycode="RO" value="40">RO (+40)</option>
  <option data-countrycode="RU" value="7">RU (+7)</option>
  <option data-countrycode="RW" value="250">RW (+250)</option>
  <option data-countrycode="SM" value="378">SM (+378)</option>
  <option data-countrycode="ST" value="239">ST (+239)</option>
  <option data-countrycode="SA" value="966">SA (+966)</option>
  <option data-countrycode="SN" value="221">SN (+221)</option>
  <option data-countrycode="CS" value="381">CS (+381)</option>
  <option data-countrycode="SC" value="248">SC (+248)</option>
  <option data-countrycode="SL" value="232">SL (+232)</option>
  <option data-countrycode="SG" value="65">SG (+65)</option>
  <option data-countrycode="SK" value="421">SK (+421)</option>
  <option data-countrycode="SI" value="386">SI (+386)</option>
  <option data-countrycode="SB" value="677">SB (+677)</option>
  <option data-countrycode="SO" value="252">SO (+252)</option>
  <option data-countrycode="ZA" value="27">ZA (+27)</option>
  <option data-countrycode="ES" value="34">ES (+34)</option>
  <option data-countrycode="LK" value="94">LK (+94)</option>
  <option data-countrycode="SH" value="290">SH (+290)</option>
  <option data-countrycode="KN" value="1869">KN (+1869)</option>
  <option data-countrycode="SC" value="1758">SC (+1758)</option>
  <option data-countrycode="SR" value="597">SR (+597)</option>
  <option data-countrycode="SD" value="249">SD (+249)</option>
  <option data-countrycode="SZ" value="268">SZ (+268)</option>
  <option data-countrycode="SE" value="46">SE (+46)</option>
  <option data-countrycode="CH" value="41">CH (+41)</option>
  <!-- <option data-countryCode="SY" value="963">Syria (+963)</option> -->
  <option data-countrycode="TW" value="886">TW (+886)</option>
  <option data-countrycode="TJ" value="992">TJ (+992)</option>
  <option data-countrycode="TH" value="66">TH (+66)</option>
  <option data-countrycode="TG" value="228">TG (+228)</option>
  <option data-countrycode="TO" value="676">TO (+676)</option>
  <option data-countrycode="TT" value="1868">TT (+1868)</option>
  <option data-countrycode="TN" value="216">TN (+216)</option>
  <option data-countrycode="TR" value="90">TR (+90)</option>
  <option data-countrycode="TM" value="993">TM (+993)</option>
  <option data-countrycode="TC" value="1649">TC (+1649)</option>
  <option data-countrycode="TV" value="688">TV (+688)</option>
  <option data-countrycode="UG" value="256">UG (+256)</option>
  <option data-countrycode="GB" value="44">GB (+44)</option>
  <option data-countrycode="UA" value="380">UA (+380)</option>
  <option data-countrycode="AE" value="971">AE (+971)</option>
  <option data-countrycode="US" value="1">US (+1)</option>
  <option data-countrycode="UY" value="598">UY (+598)</option>
  <option data-countrycode="UZ" value="998">UZ (+998)</option>
  <option data-countrycode="VU" value="678">VU (+678)</option>
  <option data-countrycode="VA" value="379">VA (+379)</option>
  <option data-countrycode="VE" value="58">VE (+58)</option>
  <option data-countrycode="VN" value="84">VN (+84)</option>
  <option data-countrycode="VG" value="1">VG (+1)</option>
  <option data-countrycode="VI" value="1">VI (+1)</option>
  <option data-countrycode="WF" value="681">WF (+681)</option>
  <option data-countrycode="YE" value="969">YE (+969)</option>
  <option data-countrycode="YE" value="967">YE (+967)</option>
  <option data-countrycode="ZM" value="260">ZM (+260)</option>
  <option data-countrycode="ZW" value="263">ZW (+263)</option>`; */ 
//# sourceMappingURL=mob_prefixes.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ext_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/*
  Generated class for the AppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AppProvider = /** @class */ (function () {
    function AppProvider(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.env = __WEBPACK_IMPORTED_MODULE_2__ext_config__["a" /* config */][location.origin].backend;
    }
    AppProvider.prototype.generateOTP = function (max, min, age) {
        if (max === void 0) { max = 999999; }
        if (min === void 0) { min = 100000; }
        if (age === void 0) { age = 5; }
        var otp = (Math.random() * (max - min + 1)) << 0;
        this.genKeyHash();
        var exp = new Date();
        exp.setMinutes(exp.getMinutes() + age);
        this.cookie.set('bxo', this.encrypter(otp), exp);
        return this.encrypter(otp);
    };
    AppProvider.prototype.sendOTPmsg = function (otp, mobile) {
        if (this.cookie.get('bxo'))
            otp = this.cookie.get('bxo');
        var hdr = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */];
        hdr.append('Content-Type', 'application/json');
        var rq = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */];
        rq.headers = hdr;
        mobile = parseInt(mobile.toString().slice(-10));
        return (this.http.post(this.env + "/api.php?q=gen_otp", { mobile: mobile, otp: otp, h: this.cookie.get('bkhsh') }, rq).toPromise());
    };
    AppProvider.prototype.sendLoanApproval = function (amt, mobile) {
        var hdr = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */];
        hdr.append('Content-Type', 'application/json');
        var rq = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */];
        rq.headers = hdr;
        mobile = parseInt(mobile.toString().slice(-10));
        return (this.http.post(this.env + "/api.php?q=send_sms_loan_approval", { mobile: mobile, amt: amt }, rq).toPromise());
    };
    AppProvider.prototype.sendLoanApproved = function (mobile) {
        var hdr = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */];
        hdr.append('Content-Type', 'application/json');
        var rq = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */];
        rq.headers = hdr;
        mobile = parseInt(mobile.toString().slice(-10));
        return (this.http.post(this.env + "/api.php?q=send_sms_loan_approved", { mobile: mobile }, rq).toPromise());
    };
    AppProvider.prototype.genKeyHash = function () {
        var alph = "qwertyuiopasdfghjklzxcvbnm";
        var ln = alph.length - 1;
        var kh = "";
        for (var i = 0; i <= 9; i++) {
            var ind = Math.floor(Math.random() * ln);
            kh += alph[ind <= 0 ? 0 : ind];
            alph = alph.replace(alph[ind <= 0 ? 0 : ind], '');
            --ln;
        }
        this.cookie.set('bkhsh', this.garbager(kh));
    };
    AppProvider.prototype.garbager = function (v) {
        var val = Array.from(v);
        var inder = Math.ceil(Math.random() * 5);
        for (var i = 0; i < v.length; i++) {
            if (i % inder == 0) {
                for (var j = 0; j < i; j++) {
                    var ins = Math.ceil(Math.random() * 9).toString();
                    val.splice(i * j, 0, ins);
                }
            }
        }
        return val.join("");
    };
    AppProvider.prototype.encrypter = function (v) {
        var b = this.cookie.get('bkhsh').replace(/[0-9]/g, '');
        var val = v.toString();
        var str = "";
        for (var i = 0; i < val.length; i++) {
            str += b[val[i]];
        }
        return this.garbager(str);
    };
    AppProvider.prototype.decrypter = function (v) {
        var b = this.cookie.get('bkhsh').replace(/[0-9]/g, '');
        var val = v.replace(/[0-9]/g, '');
        var str = "";
        for (var i = 0; i < val.length; i++) {
            str += b.indexOf(val[i]);
        }
        return str;
    };
    AppProvider.prototype.checkOtp = function (otp) {
        return otp == this.decrypter(this.cookie.get('bxo'));
    };
    AppProvider.prototype.uploadCSV = function (fl) {
        return __awaiter(this, void 0, void 0, function () {
            var hdr, rq, json;
            return __generator(this, function (_a) {
                hdr = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */];
                hdr.append('Content-Type', 'application/json');
                rq = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */];
                rq.headers = hdr;
                json = JSON.stringify(fl);
                return [2 /*return*/, this.http.post(this.env + "/api.php?q=uploadcsv", { data: fl }, rq)
                        .toPromise()];
            });
        });
    };
    AppProvider.prototype.getLoanValues = function (p, t, r, processingFeeRate, collectionFeeRate, docFeeRate) {
        if (p === void 0) { p = 1000; }
        if (t === void 0) { t = 1; }
        if (r === void 0) { r = 0.025; }
        if (processingFeeRate === void 0) { processingFeeRate = 0.035; }
        if (collectionFeeRate === void 0) { collectionFeeRate = 0.015; }
        if (docFeeRate === void 0) { docFeeRate = 0.0075; }
        return {
            amt: Math.round(p),
            udi: t * r * p,
            grossCashout: Math.round(p),
            processingFund: p * processingFeeRate,
            collectionFund: p * collectionFeeRate,
            docFee: p * docFeeRate,
            totalDeductions: p * processingFeeRate + p * collectionFeeRate + p * docFeeRate,
            netCashout: Math.round(p) - (p * processingFeeRate + p * collectionFeeRate + p * docFeeRate),
            totalPayment: (t * r * p) + Math.round(p)
        };
    };
    AppProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], AppProvider);
    return AppProvider;
}());

//# sourceMappingURL=app.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the LoanComponent component.
 *
 * This should perform all computations based on
 * loan amount, t, and interest
 */
var LoanComponent = /** @class */ (function () {
    function LoanComponent() {
        this.p = 1000;
        this.t = 1; //term 
        this.r = 0.025;
        this.processingFeeRate = 0.035;
        this.collectionFeeRate = 0.015;
        this.docFeeRate = 0.0075;
        this.dates = [];
        this.sdate = Date.now();
        this.deductionPerPayDay = ((this.t * this.r * this.p) + this.p) / this.t;
    }
    LoanComponent.prototype.getLoan = function (noDisplay) {
        if (noDisplay === void 0) { noDisplay = false; }
        var r = this.r / 2;
        this.loan = {
            amt: Math.round(this.p),
            udi: this.t * r * this.p,
            grossCashout: Math.round(this.p),
            processingFund: this.p * this.processingFeeRate,
            collectionFund: this.p * this.collectionFeeRate,
            docFee: this.p * this.docFeeRate,
            totalDeductions: this.p * this.processingFeeRate + this.p * this.collectionFeeRate + this.p * this.docFeeRate,
            netCashout: Math.round(this.p) - (this.p * this.processingFeeRate + this.p * this.collectionFeeRate + this.p * this.docFeeRate),
            totalPayment: (this.t * r * this.p) + Math.round(this.p)
        };
        var intRate = Math.round(this.t) * r * Math.round(this.p);
        var deductible = intRate + Math.round(this.p);
        this.deductionPerPayDay = deductible / this.t;
        return this.loan;
    };
    LoanComponent.prototype.getDates = function (sdt) {
        this.getLoan();
        this.dates = [];
        var fd = sdt.split(/[^0-9]/g); //new Date(sdt);
        var mn = fd[0]; //fd.getMonth();
        var yr = fd[2]; //fd.getFullYear();
        var initDay;
        var r = this.r / 2;
        var p = Math.round(this.p);
        var dppd = this.deductionPerPayDay * 1;
        if (fd[1] /*fd.getDate()*/ > 15) {
            initDay = 15;
            ++mn;
            if (mn >= 13) {
                ++yr;
                mn = 1;
            }
        }
        else {
            if (mn == 2) {
                initDay = 28;
                if (yr % 4 == 0) {
                    initDay = 29;
                }
            }
            else {
                initDay = 30;
            }
            /*++mn;
            if(mn >= 13){
                ++yr;
                mn = 1;
            }*/
        }
        for (var i = 0; i < this.t; i++) {
            var dt = yr + "-" + ('0' + mn).slice(-2) + "-" + initDay;
            this.dates.push({ paymentDate: dt, paymentNum: (i + 1), amt: dppd, bal: ((this.t * r * p) + p) - (dppd * (i + 1)) });
            if (initDay != 15) {
                initDay = 15;
                ++mn;
                if (mn >= 13) {
                    ++yr;
                    mn = 1;
                }
            }
            else {
                if (mn == 2) {
                    initDay = 28;
                    if (yr % 4 == 0) {
                        initDay = 29;
                    }
                }
                else {
                    initDay = 30;
                }
            }
        }
        console.log(this.dates);
        return Promise.resolve(this.dates);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('principal'),
        __metadata("design:type", Number)
    ], LoanComponent.prototype, "p", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('paydays'),
        __metadata("design:type", Number)
    ], LoanComponent.prototype, "t", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('rate'),
        __metadata("design:type", Number)
    ], LoanComponent.prototype, "r", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('type'),
        __metadata("design:type", Object)
    ], LoanComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('processingFeeRate'),
        __metadata("design:type", Number)
    ], LoanComponent.prototype, "processingFeeRate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('collectionFeeRate'),
        __metadata("design:type", Number)
    ], LoanComponent.prototype, "collectionFeeRate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('docFeeRate'),
        __metadata("design:type", Number)
    ], LoanComponent.prototype, "docFeeRate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('sdate'),
        __metadata("design:type", Object)
    ], LoanComponent.prototype, "sdate", void 0);
    LoanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'loan',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\components\loan\loan.html"*/'<!-- Generated template for the LoanComponent component -->'/*ion-inline-end:"C:\wamp64\www\bxb\src\components\loan\loan.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LoanComponent);
    return LoanComponent;
}());

//# sourceMappingURL=loan.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TermsModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsModalPage = /** @class */ (function () {
    function TermsModalPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.interactive = false;
        this.interactive = this.navParams.get('int');
    }
    TermsModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsModalPage');
    };
    TermsModalPage.prototype.cancel = function () {
        this.view.dismiss('cancel');
    };
    TermsModalPage.prototype.proceed = function () {
        this.view.dismiss('proceed');
    };
    TermsModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms-modal',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\terms-modal\terms-modal.html"*/'<!--\n  Generated template for the TermsModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n    	BXB EMPLOYEE CREDIT FACILITY\n    	<ion-icon (tap)="cancel()" name="ios-close" style="float:right;"></ion-icon>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<p>\n		The following terms and conditions apply to my subscription to and availment of the Employee Credit Facility.\n	</p>\n\n	<p>\n		By acknowledging below, I hereby agree to the following:\n	</p>\n\n	<ol>\n		<li>\n\n			<p><b class="title">Definition of Terms.</b> The following terms shall be understood to mean:</p>\n			<ol>\n				<li><b class="title">Credit Facility</b> – the credit line offered to and made available for all qualified employees of the Member Company.</li>\n				<li><b class="title">Date of Origination</b> - the date on which my credit application is approved by BXB.</li>\n				<li><b class="title">Gross Monthly Salary</b> - the total monthly salary paid to the employee by the Member Company before any deductions, whether mandatory or voluntary in nature.</li>\n				<li><b class="title">Credit</b> - any amount credited to my payroll account as a result of my request and confirmation to draw from the Credit Facility which shall be payable in one (1) year.</li>\n				<li><b class="title">Credit Limit</b> – means the maximum amount I can avail at any one time, to be set exclusively by BXB based on my net and gross salary for the most recent calendar year. The Credit Limit shall be determined exclusively by BXB, and may, from time to time, be increased or decreased without need of prior notice to me.</li>\n				<li><b class="title">Member Company</b> – A company which has engaged the services of BXB for purposes of availing of the latter’s Credit Facility as a benefit for its employees.</li>\n				<li><b class="title">BXB May Platform</b> - the platform where employees may take out Credit and access financial education.</li>\n			</ol>\n		</li>\n		<li>\n\n			<p><b class="title">Warranties and Representations.</b>I hereby make the following representations and warranties, which representations and warranties shall be true and correct.\n			</p>\n		</li>\n		<li>\n\n			<p><b class="title">Eligibility Criteria.</b> This Credit Facility Agreement does not guarantee my enrollment to the program. I understand that to avail of the Credit Facility, I must:</p>\n			<ol>\n				<li>Be a regular employee of the Member Company for at least two (2) years;</li>\n				<li>Have no pending administrative or criminal cases;</li>\n				<li>Be at least 18 years old at the time of drawing from the Credit Facility and no more than 60 years old prior to the date of full repayment of the loan;</li>\n				<li>Have no pending application for retirement or not be due for retirement within the term of the loan;</li>\n				<li>Have a net take home pay of at least 30% of my Gross Monthly Salary; and</li>\n				<li>Not own more than 10% of the Member Company, if the latter is a corporation of partnership. Corporate officers and directors shall likewise be disqualified from availing of Credit from the Credit Facility.</li>\n			</ol>\n		</li>\n		<li>\n\n			<p><b class="title">Effectivity</b>. This Credit Facility Agreement shall be valid and effective as to me for as long as I meet all the eligibility criteria enumerated above. Upon my failure to meet the eligibility criteria or upon the occurrence of any of the following, the same shall immediately be suspended and any outstanding credit I may have shall immediately become due and demandable in full:</p>\n			<ol>\n\n				<li>Receipt of Information from my employer regarding termination of my employment;</li>\n				<li>Termination of the Credit Facility Agreement</li>\n				<li>Default</li>\n			</ol>\n		</li>\n		<li>\n			<p><b class="title">Credit Facility</b>.Provided that I observe the herein terms and conditions, and so long as subscription to the Program remains in force, I will be entitled to send a request to avail of credit via BXB MAY Platform from my devices or via any other specified means as BXB may allow in the future. The credit shall be subject to the following:</p>\n			<ol>\n				<li>Interest</li>\n				<li>Verification Process</li>\n				<li>Confirmation</li>\n				<li>Disbursement</li>\n				<li>Multiple Requests</li>\n			</ol>\n		</li>\n		<li>\n			<p><b class="title">Evidence of Credit</b>.The Credit shall be evidenced by my request and confirmation made via EMAIL and BXB MAY Employee Dashboard. BXB shall have the right to keep all proof of my credit availments. I acknowledge that the above evidence and the corresponding Statements of Account are valid and conclusive proof of all my transactions.</p>\n		</li>\n		<li>\n			<p><b class="title">Payments</b>.Payments of interest and the principal amount shall be due on each Salary Crediting Day after the date of my request and shall be subject to the following:</p>\n			<ol>\n\n				<li>\n					Salary Deduction. I hereby authorize my Employer to deduct from my salary, withhold, and remit to BXB on each payday, such amount as may be due on my credit application corresponding to the principal and interest until the same is fully paid.\n				</li>\n				<li>\n					Assignment and Transfer. I likewise assign, transfer, and convey to BXB, its successors and/or assigns, my salaries, wages, and other form of monetary compensation that may be credited to my payroll account, including, but not limited to, my separation pay, retirement benefit, convertible leaves, and other benefits to the full satisfaction of my obligations to BXB.\n				</li>\n				<li>\n					Priority of Claims. I undertake to first satisfy and fully pay the outstanding credit over any and all claims of my employer or other creditors.\n				</li>\n				<li>\n					Application of Payment. Any and all payments for my account under this Program shall be applied to the following items in succession:\n					<ol>\n						<li>Past due payments</li>\n						<li>Interest and Penalties</li>\n						<li>Principal</li>\n					</ol>\n				</li>\n			</ol>\n		</li>\n		<li>\n			<p><b class="title">Separation from Employment</b>. Upon my resignation, dismissal or separation from employment for whatever reason or absence without leave for more than five consecutive days, the whole outstanding credit shall be due and demandable. I hereby authorize the Member Company to retain any and all amounts due to me as termination, separation or gratuity pay or compensation for whatever nature to the extent of my obligation and remit the same to BXB. I hereby authorize the Member Company to disclose to BXB such personal information as may be necessary for BXB to further proceed against me in the event that my outstanding credit is not fully paid upon my separation, resignation or termination from employment.</p>\n		</li>\n		<li>\n			<p><b class="title">Governing Law</b>. This Agreement shall be governed in all respects by the laws of the Republic of the Philippines.</p>\n		</li>\n		<li>\n			<p><b class="title">Invalidity</b>.If any provision of this Agreement shall be invalid or unenforceable, the remaining provisions shall not be affected thereby, and every provision hereof shall be valid and enforceable to the fullest extent permitted by law.</p>\n		</li>\n</ol>\n</ion-content>\n<ion-footer *ngIf="interactive">\n	<button class="ok" (tap)="proceed()">Proceed</button>\n	<button class="cancel" (tap)="cancel()">Cancel</button>\n</ion-footer>'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\terms-modal\terms-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], TermsModalPage);
    return TermsModalPage;
}());

//# sourceMappingURL=terms-modal.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeInfoModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeInfoModalPage = /** @class */ (function () {
    function EmployeeInfoModalPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.userData = {
            memberID: "00202",
            name: "George Miguel Winternitz",
            gender: "M",
            age: 38,
            dateHired: "February 14, 2016",
            email: "gmwinternitz@gmail.com",
            mobile: "+639175342447",
            birthdate: "October 07, 1979",
            position: "CEO",
            entity: "NA",
            type: "NA",
            division: "NA",
            payrollAccount: 7190064572,
            VL: 0,
            SL: 0,
            ML: 0,
            PL: 0
        };
        this.isMobile = mobilecheck();
    }
    EmployeeInfoModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmployeeInfoModalPage');
    };
    EmployeeInfoModalPage.prototype.close = function () {
        this.view.dismiss();
    };
    EmployeeInfoModalPage.prototype.reorient = function ($event) {
        this.isMobile = mobilecheck();
    };
    EmployeeInfoModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-employee-info-modal',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\employee-info-modal\employee-info-modal.html"*/'<!--\n  Generated template for the EmployeeInfoModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><ion-icon style="margin:0 1vw;" name="md-information-circle"></ion-icon>Employee Information\n  	<!--ion-icon (tap)="close()" name="ios-close" style="float:right;"></ion-icon--></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<section class="main-content">\n		<p><b class="label">Member ID:</b> {{userData?.memberID}}</p>\n		<p><b class="label">Name:</b> {{userData?.name}}</p>\n		<p><b class="label">Gender:</b> {{userData?.gender}}</p>\n		<p><b class="label">Age:</b> {{userData?.age}}</p>\n		<p><b class="label">Date Hired:</b> {{userData?.dateHired}}</p>\n		<p><b class="label">Email:</b> {{userData?.email}}</p>\n		<p><b class="label">Mobile:</b> {{userData?.mobile}}</p>\n		<p><b class="label">Birthdate:</b> {{userData?.birthdate}}</p>\n		<p><b class="label">Position:</b> {{userData?.position}}</p>\n		<p><b class="label">Entity:</b> {{userData?.entity}}</p>\n		<p><b class="label">Type:</b> {{userData?.type}}</p>\n		<p><b class="label">Division:</b> {{userData?.division}}</p>\n		<p><b class="label">Payroll Acct:</b> {{userData?.payrollAccount}}</p>\n		<p><b class="label">Vl:</b> {{userData?.VL}}</p>\n		<p><b class="label">Sl:</b> {{userData?.SL}}</p>\n		<p><b class="label">Ml:</b> {{userData?.ML}}</p>\n		<p><b class="label">Pl:</b> {{userData?.PL}}</p>\n	</section>\n</ion-content>\n\n<ion-footer>\n	<button ion-button class="remove" (tap)="close()">\n		<ion-icon name="md-remove-circle"></ion-icon>\n		Remove\n	</button>\n	<button ion-button (tap)="close()">\n		<ion-icon name="ios-close-circle-outline"></ion-icon>\n		Close\n	</button>\n</ion-footer>'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\employee-info-modal\employee-info-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], EmployeeInfoModalPage);
    return EmployeeInfoModalPage;
}());

//# sourceMappingURL=employee-info-modal.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatementOfAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_db_db__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the StatementOfAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StatementOfAccountPage = /** @class */ (function () {
    function StatementOfAccountPage(navCtrl, navParams, view, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.db = db;
        this.currentBalance = [{
                "transDate": "2018-04-15",
                "creditAvailmentNumber": 4,
                "memberID": "00202",
                "firstName": "George Miguel",
                "lastName": "Winternitz",
                "seqNo": "9/12",
                "empID": "18-002",
                "transType": "Credit Availment",
                "repaymentAmt": 479.16,
                "status": "Active"
            }, {
                "transDate": "2018-08-07",
                "creditAvailmentNumber": 41,
                "memberID": "00252",
                "firstName": "Ray",
                "lastName": "Santos",
                "seqNo": "1/12",
                "empID": "123",
                "transType": "Credit Availment",
                "repaymentAmt": 2395.83,
                "status": "Active"
            },
        ];
        this.prevBalance = [{
                "transDate": "2018-04-15",
                "creditAvailmentNumber": 4,
                "firstName": "George Miguel",
                "lastName": "Winternitz",
                "seqNo": "7/12",
                "empID": "18-002",
                "transType": "Credit Availment",
                "repaymentAmt": 479.16,
                "status": "Active"
            }, {
                "transDate": "2018-04-27",
                "creditAvailmentNumber": 8,
                "firstName": "George Miguel",
                "lastName": "Winternitz",
                "seqNo": "4/4",
                "empID": "18-002",
                "transType": "Credit Availment",
                "repaymentAmt": 8400,
                "status": "Preterminated"
            }, {
                "transDate": "2018-04-15",
                "creditAvailmentNumber": 4,
                "firstName": "Ray",
                "lastName": "Santos",
                "seqNo": "8/12",
                "empID": "18-002",
                "transType": "Credit Availment",
                "repaymentAmt": 479.16,
                "status": "Active"
            }
        ];
        this.data = this.navParams.get('data');
        console.log(this.data);
    }
    StatementOfAccountPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad StatementOfAccountPage');
        var _this = this;
        this.db.getSOAPaySchedByDate(this.data.billPeriod).then(function (res) {
            _this.prevBalance = [];
            _this.currentBalance = res.json();
        }).catch(console.warn);
    };
    StatementOfAccountPage.prototype.print = function () {
        window.print();
    };
    StatementOfAccountPage.prototype.close = function () {
        this.view.dismiss();
    };
    StatementOfAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-statement-of-account',template:/*ion-inline-start:"C:\wamp64\www\bxb\src\pages\statement-of-account\statement-of-account.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n  	<ion-icon (tap)="close()" name="ios-close" style="float:right;"></ion-icon></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="printarea">\n	<section class="main-content">\n		<span class="header">\n			<img src="../assets/imgs/logo.png"/>\n		</span>\n		<ion-row>\n			<ion-col class="head" col-7>\n				STATEMENT OF ACCOUNT\n			</ion-col>\n			<ion-col class="head" col-2>\n				Company Code\n			</ion-col>\n			<ion-col col-3>\n				001\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col col-7>\n				SOA Ref# {{data?.soaNo}}\n			</ion-col>\n			<ion-col col-2>\n				Billing Period\n			</ion-col>\n			<ion-col col-3>\n				- {{data?.billPeriod}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col col-7>\n				{{data?.company}}	\n			</ion-col>\n			<ion-col col-2>\n				Due Date	\n			</ion-col>\n			<ion-col col-3>\n				{{data?.billPeriod}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col col-7>\n				6805 Ayala Avenue, Multinational Bancorp Building, Makati City Metro Manila	\n			</ion-col>\n			<ion-col col-2>\n				Amount Due	\n			</ion-col>\n			<ion-col col-3>\n				{{data?.amt | number:\'1.0-2\'}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col col-7>\n				&nbsp;\n			</ion-col>\n			<ion-col col-2>\n				Previous Balance\n			</ion-col>\n			<ion-col col-3>\n				0.00\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col col-7>\n				&nbsp;\n			</ion-col>\n			<ion-col col-2>\n				Total Amount Due\n			</ion-col>\n			<ion-col col-3>\n				{{data?.amt |  number:\'1.0-2\'}}\n			</ion-col>\n		</ion-row>\n		<hr class="blocker">\n		<p class="title">\n			CURRENT BALANCE\n		</p>\n\n		<ion-row>\n			<ion-col class="head">\n				Transaction Date\n			</ion-col>\n			<ion-col class="head">\n				Credit Availment Number\n			</ion-col>\n			<ion-col class="head">\n				Member ID\n			</ion-col>\n			<ion-col class="head">\n				First Name\n			</ion-col>\n			<ion-col class="head">\n				Last Name\n			</ion-col>\n			<ion-col class="head">\n				Seqno\n			</ion-col>\n			<ion-col class="head">\n				Employee ID\n			</ion-col>\n			<ion-col class="head">\n				Transaction Type\n			</ion-col>\n			<ion-col class="head">\n				Repayment Amount\n			</ion-col>\n			<ion-col class="head">\n				Status\n			</ion-col>\n		</ion-row>\n\n		<ion-row *ngFor = "let cb of currentBalance; let i = index">\n			<ion-col>\n				{{cb?.transDate}}\n			</ion-col>\n			<ion-col>\n				{{cb?.creditAvailmentNumber}}\n			</ion-col>\n			<ion-col>\n				{{cb?.memberID}}\n			</ion-col>\n			<ion-col>\n				{{cb?.firstName}}\n			</ion-col>\n			<ion-col>\n				{{cb?.lastName}}\n			</ion-col>\n			<ion-col>\n				{{cb?.seqNo}}\n			</ion-col>\n			<ion-col>\n				{{cb?.empID}}\n			</ion-col>\n			<ion-col>\n				{{cb?.transType}}\n			</ion-col>\n			<ion-col>\n				{{cb?.repaymentAmt | currency:\'PHP\':\'symbol-narrow\':\'1.0-2\'}}\n			</ion-col>\n			<ion-col>\n				{{cb?.status}}\n			</ion-col>\n		</ion-row>\n\n\n		<hr class="blocker">\n		<p class="title">\n			PREVIOUS BALANCE\n		</p>\n\n		<ion-row>\n			<ion-col class="head">\n				Transaction Date\n			</ion-col>\n			<ion-col class="head">\n				Credit Availment Number\n			</ion-col>\n			<ion-col class="head">\n				First Name\n			</ion-col>\n			<ion-col class="head">\n				Last Name\n			</ion-col>\n			<ion-col class="head">\n				Seqno\n			</ion-col>\n			<ion-col class="head">\n				Employee ID\n			</ion-col>\n			<ion-col class="head">\n				Transaction Type\n			</ion-col>\n			<ion-col class="head">\n				Repayment Amount\n			</ion-col>\n			<ion-col class="head">\n				Status\n			</ion-col>\n		</ion-row>\n\n		<ion-row *ngFor = "let pb of prevBalance; let i = index">\n			<ion-col>\n				{{pb?.transDate}}\n			</ion-col>\n			<ion-col>\n				{{pb?.creditAvailmentNumber}}\n			</ion-col>\n			<ion-col>\n				{{pb?.firstName}}\n			</ion-col>\n			<ion-col>\n				{{pb?.lastName}}\n			</ion-col>\n			<ion-col>\n				{{pb?.seqNo}}\n			</ion-col>\n			<ion-col>\n				{{pb?.empID}}\n			</ion-col>\n			<ion-col>\n				{{pb?.transType}}\n			</ion-col>\n			<ion-col>\n				{{pb?.repaymentAmt | currency:\'PHP\':\'symbol-narrow\':\'1.0-2\'}}\n			</ion-col>\n			<ion-col>\n				{{pb?.status}}\n			</ion-col>\n		</ion-row>\n		<p class="title strong">\n			END OF STATEMENT\n		</p>\n	</section>\n</ion-content>\n\n<ion-footer>\n	<button class="print" ion-button (tap)="print()">\n		<ion-icon name="md-print"></ion-icon>\n		Print\n	</button>\n	<button ion-button (tap)="close()">\n		<ion-icon name="ios-close-circle-outline"></ion-icon>\n		Close\n	</button>\n</ion-footer>'/*ion-inline-end:"C:\wamp64\www\bxb\src\pages\statement-of-account\statement-of-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_db_db__["a" /* DbProvider */]])
    ], StatementOfAccountPage);
    return StatementOfAccountPage;
}());

//# sourceMappingURL=statement-of-account.js.map

/***/ })

},[230]);
//# sourceMappingURL=main.js.map