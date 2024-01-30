import './polyfills.server.mjs';
import{B as F,C as N,D as B,E as D,H as R,L as z,M as j,O as y,P as q,Q as I,a as w,b as S,c as m,d as E,e as k,f as x,g as u,h as M,i as v,j as n,k as e,l,m as f,n as T,o as _,p as t,q as b,r as O,s as c,z as P}from"./chunk-4ML5DHHJ.mjs";var A=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=m({type:i,selectors:[["app-header"]],standalone:!0,features:[c],decls:9,vars:0,consts:[["href","https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Honk&display=swap","rel","stylesheet"],["id","islandNameBorder"],["id","islandName"]],template:function(a,s){a&1&&(l(0,"link",0),n(1,"h1",1),t(2,"Island of "),n(3,"strong"),t(4,"TANITI"),e()(),n(5,"h1",2),t(6,"Island of "),n(7,"strong"),t(8,"TANITI"),e()())},styles:["#islandName[_ngcontent-%COMP%]{font-family:Dancing Script,cursive;color:#00014e;font-size:5em;position:fixed;top:0;left:0;right:0;text-align:center;margin:0;padding:10px;box-sizing:border-box}#islandNameBorder[_ngcontent-%COMP%]{font-family:Dancing Script,cursive;color:#ffd000;font-size:5em;position:fixed;top:-1px;left:5px;right:0;text-align:center;margin:0;padding:10px;box-sizing:border-box}"]});let o=i;return o})();var U=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=m({type:i,selectors:[["app-footer"]],standalone:!0,features:[c],decls:3,vars:0,consts:[[1,"background"]],template:function(a,s){a&1&&(n(0,"div",0)(1,"p"),t(2,"Contact: (000) 000-0000"),e()())},styles:[".background[_ngcontent-%COMP%]{position:absolute;bottom:0;height:5vh;width:100%;color:#fff;background-color:#00014e}"]});let o=i;return o})();var L=(()=>{let i=class i{constructor(){this.contentSource=new w,this.contentUpdates$=this.contentSource.asObservable()}updateContent(r){this.contentSource.next(r)}};i.\u0275fac=function(a){return new(a||i)},i.\u0275prov=S({token:i,factory:i.\u0275fac,providedIn:"root"});let o=i;return o})();function nt(o,i){if(o&1&&l(0,"img",4),o&2){let C=T();_("alt",C.currentContent.title),v("src",C.currentContent.imageUrl,k)}}var G=(()=>{let i=class i{constructor(r){this.contentService=r,this.currentContent={title:"",body:""},this.contentSubscription=this.contentService.contentUpdates$.subscribe(a=>{this.currentContent=a})}ngOnDestroy(){this.contentSubscription.unsubscribe()}};i.\u0275fac=function(a){return new(a||i)(u(L))},i.\u0275cmp=m({type:i,selectors:[["app-main-content"]],standalone:!0,features:[c],decls:6,vars:3,consts:[[1,"main-content"],[1,"content-title"],[1,"content-body"],[3,"src","alt",4,"ngIf"],[3,"src","alt"]],template:function(a,s){a&1&&(n(0,"div",0)(1,"h2",1),t(2),e(),n(3,"p",2),t(4),e(),M(5,nt,1,2,"img",3),e()),a&2&&(x(2),b(s.currentContent.title),x(2),b(s.currentContent.body),x(),v("ngIf",s.currentContent.imageUrl))},dependencies:[N,F],styles:[".main-content[_ngcontent-%COMP%]{overflow-y:auto;position:fixed;top:16vh;left:29vw;width:42vw;height:74vh;background-color:#00014e;text-align:center;line-height:50%;box-shadow:0 0 10px #ffc401}.main-content-text[_ngcontent-%COMP%]{display:inline-block;margin-top:20px}.content-title[_ngcontent-%COMP%]{font-size:24px;color:#333}.content-body[_ngcontent-%COMP%]{font-size:16px;padding:2px;color:#666}.main-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;border-radius:10px}"]});let o=i;return o})();var H=(()=>{let i=class i{constructor(r){this.router=r}onNavButtonClick(r){switch(r){case"Home Content":this.router.navigateByUrl("/home");break;case"Sightseeing Content":this.router.navigateByUrl("/sightseeing");break;case"Entertainment Content":this.router.navigateByUrl("/entertainment");break;case"Food Content":this.router.navigateByUrl("/food");break;case"Lodging Content":this.router.navigateByUrl("/lodging");break;case"Transportation Content":this.router.navigateByUrl("/transportation");break;case"General Question Content":this.router.navigateByUrl("/questions");break;default:this.router.navigateByUrl("/")}}toggleButtonClass(r){document.querySelectorAll(".nav-button").forEach(g=>g.classList.remove("clicked-button"));let s=r.target;for(;s!=null&&!s.classList.contains("nav-button");)s=s.parentElement;s&&s.classList.add("clicked-button")}};i.\u0275fac=function(a){return new(a||i)(u(y))},i.\u0275cmp=m({type:i,selectors:[["app-nav-bar"]],standalone:!0,features:[c],decls:15,vars:0,consts:[[1,"nav-bar"],[1,"nav-button",3,"click"],["src","assets/home.png","alt","Nav 1"],["src","assets/binocular.png","alt","Nav 2"],["src","assets/music.png","alt","Nav 3"],["src","assets/plate.png","alt","Nav 4"],["src","assets/bed.png","alt","Nav 5"],["src","assets/car.png","alt","Nav 6"],["src","assets/question.png","alt","Nav 7"]],template:function(a,s){a&1&&(n(0,"div",0)(1,"button",1),f("click",function(d){return s.toggleButtonClass(d),s.onNavButtonClick("Home Content")}),l(2,"img",2),e(),n(3,"button",1),f("click",function(d){return s.toggleButtonClass(d),s.onNavButtonClick("Sightseeing Content")}),l(4,"img",3),e(),n(5,"button",1),f("click",function(d){return s.toggleButtonClass(d),s.onNavButtonClick("Entertainment Content")}),l(6,"img",4),e(),n(7,"button",1),f("click",function(d){return s.toggleButtonClass(d),s.onNavButtonClick("Food Content")}),l(8,"img",5),e(),n(9,"button",1),f("click",function(d){return s.toggleButtonClass(d),s.onNavButtonClick("Lodging Content")}),l(10,"img",6),e(),n(11,"button",1),f("click",function(d){return s.toggleButtonClass(d),s.onNavButtonClick("Transportation Content")}),l(12,"img",7),e(),n(13,"button",1),f("click",function(d){return s.toggleButtonClass(d),s.onNavButtonClick("General Question Content")}),l(14,"img",8),e()())},styles:[".nav-bar[_ngcontent-%COMP%]{position:fixed;background-color:transparent;top:15vh;left:70vw;width:20vw;height:70vh;display:flex;flex-direction:column;align-items:center;justify-content:start}.nav-button[_ngcontent-%COMP%]{background-color:transparent;border:none;margin:12px 0;cursor:pointer;width:70px;height:70px;display:flex;justify-content:center;align-items:center}.nav-button[_ngcontent-%COMP%]:hover{background-color:#ffda44;transform:scale(1.1)}.button-text[_ngcontent-%COMP%]{opacity:0;margin-left:10px;transition:opacity .3s}.nav-button-container[_ngcontent-%COMP%]:hover   .button-text[_ngcontent-%COMP%]{opacity:1}.nav-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150%;height:auto;box-shadow:0 0 10px #ffc401;border-radius:45px}.clicked-button[_ngcontent-%COMP%]{border:6px solid rgb(255,196,1);border-radius:5px}"]});let o=i;return o})();var W=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=m({type:i,selectors:[["app-home"]],standalone:!0,features:[c],decls:11,vars:0,consts:[["href","https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap","rel","stylesheet"],[1,"home-content"],[1,"home-title"],[1,"home-body"],["src","assets/homeGallery.jpg","alt","Beautiful view of Taniti",1,"home-gallery"]],template:function(a,s){a&1&&(l(0,"link",0),n(1,"div",1)(2,"h2",2),t(3,"Welcome to Taniti"),e(),n(4,"p",3),t(5,"Taniti is a small, tropical island in the Pacific. While the island has an area of less than 500 square miles, the terrain is varied and includes both sandy and rocky beaches, a small but safe harbor, lush tropical rainforests, and a mountainous interior that includes a small, active volcano. Taniti has an indigenous population of about 20,000. Until a recent increase in tourism, most the Tanitian economy was dominated by fishing or agriculture."),e(),n(6,"p",3),t(7,"With its vibrant and diverse landscape, has emerged as a sought-after destination for tourists seeking both adventure and tranquility. Despite its modest size of under 500 square miles, Taniti's varied terrain offers an array of natural wonders. The island's beaches are a tapestry of contrasts, ranging from stretches of soft, white sands to rugged, rocky shores that challenge the adventurous. "),e(),n(8,"p",3),t(9,"Our website contains all of the essential details you need to plan your next vacation at Taniti!"),e(),l(10,"img",4),e())},styles:[".home-content[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;overflow-y:auto;position:fixed;top:18vh;left:30vw;width:40vw;height:70vh;background-color:#d1c79a;text-align:left;line-height:100%;box-shadow:0 0 20px #000}.home-content-text[_ngcontent-%COMP%]{display:inline-block;margin-top:20px}.home-title[_ngcontent-%COMP%]{padding:6px;font-size:54px;color:#000}.home-body[_ngcontent-%COMP%]{font-size:16px;padding:6px;color:#000}.home-gallery[_ngcontent-%COMP%]{display:block;width:40%;margin-top:50px;margin-left:auto;margin-right:auto}"]});let o=i;return o})();var Q=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=m({type:i,selectors:[["app-sightseeing"]],standalone:!0,features:[c],decls:35,vars:0,consts:[["href","https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap","rel","stylesheet"],[1,"sightseeing-content"],[1,"sightseeing-title"],[1,"sightseeing-body"],["src","assets/sightseeingGallery.jpg","alt","Sights of Taniti",1,"sightseeing-gallery"]],template:function(a,s){a&1&&(l(0,"link",0),n(1,"div",1)(2,"h2",2),t(3,"Sightseeing"),e(),n(4,"p",3)(5,"strong"),t(6,"Taniti City"),e(),t(7,", the heart of our island, is where most tourists find themselves captivated. It is renowned for its "),n(8,"em"),t(9,"distinctive native architecture"),e(),t(10," and the "),n(11,"em"),t(12,"pristine white, sandy beaches"),e(),t(13," that gracefully encircle Yellow Leaf Bay. For those seeking to explore beyond the city limits, Taniti offers a plethora of activities: "),e(),n(14,"ul")(15,"li")(16,"em"),t(17,"Boat"),e(),t(18," or "),n(19,"em"),t(20,"bus tours"),e(),t(21," for a comprehensive island experience"),e(),n(22,"li"),t(23,"Guided "),n(24,"em"),t(25,"hikes in the rainforest"),e(),t(26," \u2014 a journey through our natural wonder"),e(),n(27,"li"),t(28,"Excursions to the "),n(29,"em"),t(30,"active volcano"),e(),t(31," of Taniti, for the adventurous spirits"),e()(),n(32,"p",3),t(33," Each activity offers a unique way to experience the charm and beauty of Taniti. "),e(),l(34,"img",4),e())},styles:[".sightseeing-content[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;overflow-y:auto;position:fixed;top:18vh;left:30vw;width:40vw;height:70vh;background-color:#d1c79a;text-align:left;line-height:100%;box-shadow:0 0 20px #000}.sightseeing-content-text[_ngcontent-%COMP%]{display:inline-block;margin-top:20px}.sightseeing-title[_ngcontent-%COMP%]{padding:6px;font-size:54px;color:#000}.sightseeing-body[_ngcontent-%COMP%]{font-size:16px;padding:6px;color:#000}.sightseeing-gallery[_ngcontent-%COMP%]{display:block;width:40%;margin-top:50px;margin-left:auto;margin-right:auto}"]});let o=i;return o})();var V=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=m({type:i,selectors:[["app-entertainment"]],standalone:!0,features:[c],decls:69,vars:0,consts:[["href","https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap","rel","stylesheet"],[1,"entertainment-content"],[1,"entertainment-title"],[1,"entertainment-body"],["src","assets/entertainmentGallery.jpg","alt","Entertainment in Taniti",1,"entertainment-gallery"]],template:function(a,s){a&1&&(l(0,"link",0),n(1,"div",1)(2,"h2",2),t(3,"Entertainment"),e(),n(4,"p",3),t(5," Most people visit Taniti to enjoy its "),n(6,"strong"),t(7,"stunning beaches"),e(),t(8,", explore the "),n(9,"strong"),t(10,"lush rainforest"),e(),t(11,", and marvel at the "),n(12,"strong"),t(13,"active volcano"),e(),t(14,". However, Taniti offers a diverse range of activities to suit every interest. These include: "),e(),n(15,"ul")(16,"li"),t(17,"Exploring the local history at the "),n(18,"em"),t(19,"Museum of Tanitian History"),e()(),n(20,"li"),t(21,"Embarking on "),n(22,"em"),t(23,"chartered fishing tours"),e()(),n(24,"li"),t(25,"Experiencing the underwater world through "),n(26,"em"),t(27,"snorkeling adventures"),e()(),n(28,"li")(29,"em"),t(30,"Zip-lining"),e(),t(31," through the verdant rainforest canopy"),e(),n(32,"li"),t(33,"Relaxing in various pubs, including a local "),n(34,"em"),t(35,"microbrewery"),e()(),n(36,"li"),t(37,"Dancing the night away at a "),n(38,"em"),t(39,"trendy dance club"),e()(),n(40,"li"),t(41,"Catching a movie for a laid-back evening"),e(),n(42,"li"),t(43,"Taking to the skies with "),n(44,"em"),t(45,"helicopter rides"),e(),t(46," for breathtaking views"),e(),n(47,"li"),t(48,"Enjoying family fun at the local "),n(49,"em"),t(50,"arcade"),e()(),n(51,"li"),t(52,"Exploring "),n(53,"em"),t(54,"art galleries"),e(),t(55," for a touch of culture"),e(),n(56,"li"),t(57,"Engaging in a friendly game of "),n(58,"em"),t(59,"bowling"),e()()(),n(60,"p",3),t(61," Additionally, golf enthusiasts can look forward to the opening of a "),n(62,"strong"),t(63,"nine-hole golf course"),e(),t(64," next year. Many of these activities are centered around "),n(65,"strong"),t(66,"Merriton Landing"),e(),t(67,", a rapidly developing area on the north side of Yellow Leaf Bay. "),e(),l(68,"img",4),e())},styles:[".entertainment-content[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;overflow-y:auto;position:fixed;top:18vh;left:30vw;width:40vw;height:70vh;background-color:#d1c79a;text-align:left;line-height:100%;box-shadow:0 0 20px #000}.entertainment-content-text[_ngcontent-%COMP%]{display:inline-block;margin-top:20px}.entertainment-title[_ngcontent-%COMP%]{padding:6px;font-size:54px;color:#000}.entertainment-body[_ngcontent-%COMP%]{font-size:16px;padding:6px;color:#000}.entertainment-gallery[_ngcontent-%COMP%]{display:block;width:40%;margin-top:50px;margin-left:auto;margin-right:auto}"]});let o=i;return o})();var Y=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=m({type:i,selectors:[["app-food"]],standalone:!0,features:[c],decls:37,vars:0,consts:[["href","https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap","rel","stylesheet"],[1,"food-content"],[1,"food-title"],[1,"food-body"],["src","assets/foodGallery.jpg","alt","Food of Taniti",1,"food-gallery"]],template:function(a,s){a&1&&(l(0,"link",0),n(1,"div",1)(2,"h2",2),t(3,"Food"),e(),n(4,"p",3)(5,"strong"),t(6,"Restaurants:"),e(),t(7," Taniti boasts a diverse culinary scene with a total of "),n(8,"strong"),t(9,"10 restaurants"),e(),t(10,". Among these, five specialize in serving "),n(11,"em"),t(12,"local fish and rice"),e(),t(13," dishes that capture the essence of Tanitian cuisine. For those craving American flavors, there are three restaurants offering "),n(14,"em"),t(15,"American-style meals"),e(),t(16,". Additionally, Taniti caters to lovers of Asian flavors with two restaurants dedicated to "),n(17,"em"),t(18,"Pan-Asian cuisine"),e(),t(19,". "),e(),n(20,"p",3)(21,"strong"),t(22,"Grocery Stores:"),e(),t(23," When it comes to grocery shopping, Taniti has plenty of options. The island is home to "),n(24,"strong"),t(25,"two supermarkets"),e(),t(26," for a comprehensive shopping experience, alongside "),n(27,"strong"),t(28,"two smaller grocery stores"),e(),t(29," perfect for quick and convenient purchases. Moreover, for those late-night essentials or early morning cravings, there is a "),n(30,"strong"),t(31,"convenience store"),e(),t(32," that remains open "),n(33,"em"),t(34,"24 hours a day"),e(),t(35,". "),e(),l(36,"img",4),e())},styles:[".food-content[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;overflow-y:auto;position:fixed;top:18vh;left:30vw;width:40vw;height:70vh;background-color:#d1c79a;text-align:left;line-height:100%;box-shadow:0 0 20px #000}.food-content-text[_ngcontent-%COMP%]{display:inline-block;margin-top:20px}.food-title[_ngcontent-%COMP%]{padding:6px;font-size:54px;color:#000}.food-body[_ngcontent-%COMP%]{font-size:16px;padding:6px;color:#000}.food-gallery[_ngcontent-%COMP%]{display:block;width:40%;margin-top:50px;margin-left:auto;margin-right:auto}"]});let o=i;return o})();var $=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=m({type:i,selectors:[["app-lodging"]],standalone:!0,features:[c],decls:29,vars:0,consts:[["href","https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap","rel","stylesheet"],[1,"lodging-content"],[1,"lodging-title"],[1,"lodging-body"],["src","assets/lodgingGallery.jpg","alt","Lodging in Taniti",1,"lodging-gallery"]],template:function(a,s){a&1&&(l(0,"link",0),n(1,"div",1)(2,"h2",2),t(3,"Lodging"),e(),n(4,"p",3)(5,"strong"),t(6,"Lodging:"),e(),t(7," In Taniti, visitors can choose from a "),n(8,"em"),t(9,"wide variety of lodging options"),e(),t(10," that cater to different preferences and budgets. Options range from an "),n(11,"em"),t(12,"inexpensive hostel"),e(),t(13," for those seeking budget-friendly accommodation, to a luxurious "),n(14,"em"),t(15,"four-star resort"),e(),t(16," that offers top-notch amenities and services. Additionally, the island boasts numerous "),n(17,"em"),t(18,"small, family-owned hotels"),e(),t(19,", providing a cozy and personalized stay. The charm of Taniti is further enhanced by a growing number of "),n(20,"em"),t(21,"bed and breakfasts"),e(),t(22,", ideal for travelers looking for a homely and intimate experience. "),e(),n(23,"p",3),t(24," Visitors can rest assured knowing that all types of lodging in Taniti are "),n(25,"strong"),t(26,"strictly regulated and regularly inspected"),e(),t(27," by the Tanitian government, ensuring high standards of quality and safety for a pleasant and worry-free stay. "),e(),l(28,"img",4),e())},styles:[".lodging-content[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;overflow-y:auto;position:fixed;top:18vh;left:30vw;width:40vw;height:70vh;background-color:#d1c79a;text-align:left;line-height:100%;box-shadow:0 0 20px #000}.lodging-content-text[_ngcontent-%COMP%]{display:inline-block;margin-top:20px}.lodging-title[_ngcontent-%COMP%]{padding:6px;font-size:54px;color:#000}.lodging-body[_ngcontent-%COMP%]{font-size:16px;padding:6px;color:#000}.lodging-gallery[_ngcontent-%COMP%]{display:block;width:40%;margin-top:50px;margin-left:auto;margin-right:auto}"]});let o=i;return o})();var Z=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=m({type:i,selectors:[["app-transportation"]],standalone:!0,features:[c],decls:28,vars:0,consts:[["href","https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap","rel","stylesheet"],[1,"transportation-content"],[1,"transportation-title"],[1,"transportation-body"],["src","assets/transportationGallery.jpg","alt","Transportation",1,"transportation-gallery"]],template:function(a,s){a&1&&(l(0,"link",0),n(1,"div",1)(2,"h2",2),t(3,"Transportation"),e(),n(4,"p",3)(5,"strong"),t(6,"Transportation:"),e(),t(7," The majority of visitors arrive in Taniti by air, with a small number arriving aboard a cruise ship that docks in Yellow Leaf Bay once a week. The island is serviced by a small airport, equipped to handle small jets and propeller planes. Plans are currently underway to "),n(8,"em"),t(9,"expand the airport"),e(),t(10,", allowing for larger jets to land on Taniti within the next few years. "),e(),n(11,"p",3)(12,"strong"),t(13,"Ground Transportation:"),e(),t(14," For local travel, "),n(15,"em"),t(16,"public buses"),e(),t(17," operate in Taniti City from 5 a.m. to 11 p.m. daily, while "),n(18,"em"),t(19,"private buses"),e(),t(20," cover other parts of the island. Taxis are readily available within Taniti City. For those preferring more independence, "),n(21,"em"),t(22,"rental cars"),e(),t(23," can be obtained from an agency near the airport. Additionally, bikes complete with helmets (mandatory by law) can be rented from several vendors. Taniti City's flat terrain makes it "),n(24,"em"),t(25,"highly walkable"),e(),t(26,", and many tourists find the area around Merriton Landing particularly pedestrian-friendly, offering a delightful exploration experience on foot. "),e(),l(27,"img",4),e())},styles:[".transportation-content[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;overflow-y:auto;position:fixed;top:18vh;left:30vw;width:40vw;height:70vh;background-color:#d1c79a;text-align:left;line-height:100%;box-shadow:0 0 20px #000}.transportation-content-text[_ngcontent-%COMP%]{display:inline-block;margin-top:20px}.transportation-title[_ngcontent-%COMP%]{padding:6px;font-size:54px;color:#000}.transportation-body[_ngcontent-%COMP%]{font-size:16px;padding:6px;color:#000}.transportation-gallery[_ngcontent-%COMP%]{display:block;width:40%;margin-top:50px;margin-left:auto;margin-right:auto}"]});let o=i;return o})();var J=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=m({type:i,selectors:[["app-questions"]],standalone:!0,features:[c],decls:33,vars:0,consts:[["href","https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap","rel","stylesheet"],[1,"questions-content"],[1,"questions-title"],[1,"questions-body"],["src","assets/questionsGallery.jpg","alt","Taniti",1,"questions-gallery"]],template:function(a,s){a&1&&(l(0,"link",0),n(1,"div",1)(2,"h2",2),t(3,"Frequently Asked Questions"),e(),n(4,"p",3)(5,"strong"),t(6,"Power Outlets:"),e(),t(7," The power outlets in Taniti are 120 volts, which is the same as in the United States. "),e(),n(8,"p",3)(9,"strong"),t(10,"Alcohol Regulations:"),e(),t(11," Alcohol is not permitted to be served or sold between midnight and 9:00 a.m. The legal drinking age in Taniti is 18, but enforcement of this age limit is not very strict. "),e(),n(12,"p",3)(13,"strong"),t(14,"Language:"),e(),t(15," Many younger Tanitians are fluent in English. However, in rural areas, especially among older residents, very little English is spoken. "),e(),n(16,"p",3)(17,"strong"),t(18,"Healthcare:"),e(),t(19," Taniti has one hospital and several clinics, with many multilingual staff members available. "),e(),n(20,"p",3)(21,"strong"),t(22,"Safety:"),e(),t(23," While violent crime is very rare in Taniti, an increase in tourism has led to more instances of pickpocketing and other petty crimes. "),e(),n(24,"p",3)(25,"strong"),t(26,"National Holidays:"),e(),t(27," Taniti celebrates a large number of national holidays. Visitors should note that many tourist attractions and restaurants may be closed on these days, so it's advisable to plan accordingly. "),e(),n(28,"p",3)(29,"strong"),t(30,"Currency:"),e(),t(31," The U.S. dollar is the standard currency in Taniti, but many businesses also accept euros and yen. Currency exchange is available at several banks, and most businesses accept major credit cards. "),e(),l(32,"img",4),e())},styles:[".questions-content[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;overflow-y:auto;position:fixed;top:18vh;left:30vw;width:40vw;height:70vh;background-color:#d1c79a;text-align:left;line-height:100%;box-shadow:0 0 20px #000}.questions-content-text[_ngcontent-%COMP%]{display:inline-block;margin-top:20px}.questions-title[_ngcontent-%COMP%]{padding:6px;font-size:54px;color:#000}.questions-body[_ngcontent-%COMP%]{font-size:16px;padding:6px;color:#000}.questions-gallery[_ngcontent-%COMP%]{display:block;width:40%;margin-top:50px;margin-left:auto;margin-right:auto}"]});let o=i;return o})();var h=[{path:"home",component:W},{path:"sightseeing",component:Q},{path:"entertainment",component:V},{path:"food",component:Y},{path:"lodging",component:$},{path:"transportation",component:Z},{path:"questions",component:J},{path:"",redirectTo:"/home",pathMatch:"full"}];var K=(()=>{let i=class i{constructor(r){this.title="taniti-site",r.get(y).resetConfig(h)}};i.\u0275fac=function(a){return new(a||i)(u(E))},i.\u0275cmp=m({type:i,selectors:[["app-root"]],standalone:!0,features:[O([{provide:j,useValue:h,multi:!0}]),c],decls:5,vars:0,template:function(a,s){a&1&&l(0,"app-header")(1,"app-main-content")(2,"router-outlet")(3,"app-nav-bar")(4,"app-footer")},dependencies:[I,z,A,G,H,U],styles:["@media screen and (max-width: 600px){.main-content[_ngcontent-%COMP%]{top:20vh;left:10vw;width:80vw}#islandName[_ngcontent-%COMP%], #islandNameBorder[_ngcontent-%COMP%]{font-size:3em}}"]});let o=i;return o})();var X={providers:[q(h),D()]};var ot={providers:[R()]},tt=P(X,ot);var at=()=>B(K,tt),Qt=at;export{Qt as a};