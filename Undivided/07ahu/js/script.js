//NAV BAR

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}



var capital = false;
function capitalClicked(){
    capital = true;
    document.getElementById("region").innerHTML="capital"
}

function backClick(){
    if (capital == true){
        window.location.href="home.html";
    }
    else {
        window.location.href="maryland.html";
    }
}



/*home.html*/

   
let map;
let markers = [];
let x = 0;

function initMap() {
  const maryland = {lat:39.0458,lng:-76.6413};
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: maryland,
  });

  var library = "https://img.icons8.com/material/24/000000/reading--v1.png";
  var northstar = "https://img.icons8.com/ultraviolet/24/000000/map-pin.png";
  var other = "https://img.icons8.com/officel/24/000000/marker.png";
  var senior = "https://img.icons8.com/ios-filled/24/FAB005/marker.png";
  var kids = "https://img.icons8.com/ios-filled/24/C850F2/marker.png";
  var computer = "https://img.icons8.com/external-sbts2018-solid-sbts2018/24/22C3E6/external-computer-seo-4.1-sbts2018-solid-sbts2018.png";
  // add event listeners for the buttons
  document
    .getElementById("show-markers-region1")
    .addEventListener("click", region1);
  document
    .getElementById("show-markers-region2")
    .addEventListener("click", region2);
  document
    .getElementById("show-markers-region3")
    .addEventListener("click", region3);
  document
    .getElementById("show-markers-region4")
    .addEventListener("click", region4);
  document
    .getElementById("show-markers-region5")
    .addEventListener("click", region5);
  document
    .getElementById("show-markers-region6")
    .addEventListener("click", region6);
  document
    .getElementById("show-all-maryland")
    .addEventListener("click", allMaryland);

  document
    .getElementById("show-library")
    .addEventListener("click", showLibrary);
  document
    .getElementById("show-northstar")
    .addEventListener("click", showNorthstar);
  document
    .getElementById("show-computer")
    .addEventListener("click", showComputer);
  document
    .getElementById("show-other")
    .addEventListener("click", showOther);
  // ADD MARKERS HERE
  
  //WESTERN REGION (1) 0-4
  //garrett county
  addMarker({coords:{lat:39.5681,lng:-79.2902},iconImage:library,content:"<h1 class='mapTitle'>The Ruth Enlow Library of Garrett County</h1> <p class='mapText'> All branch locations have public internet access and Wireless Internet Access. There are also public computers and you can check out Wifi hotspots and place them on hold through the catalog <a target='_blank' href='https://catalog.wmrl.info/polaris/Search/default.aspx?ctx=1.1033.0.0.1&type=Keyword'>here</a>. Locations in Oakland, Accident, Friendsville, Grantsville and Kitzmiller. Find locations and hours here: <a target='_blank' href='https://www.relib.net/locations'>https://www.relib.net/locations</a></p>"});
  //allegany county
  addMarker({coords:{lat:39.6255,lng:-78.6115},iconImage:library,content:"<h1 class='mapTitle'>Allegany County Library System</h1> <p class='mapText'>All 6 branches offer computers with internet access and there's free Wi-Fi access. They offer several how to videos for online resources<a target='_blank' href='https://my.nicheacademy.com/alleganycountylibrary'> here.</a> Adults 18 or older can borrow Chromebooks and WiFi hotspots by placing a request <a target='_blank' href='https://www.alleganycountylibrary.info/placearequestonline/'>here. </a> Find locations and hours here <a target='_blank' href='https://www.alleganycountylibrary.info/locations-and-hours/' >https://www.alleganycountylibrary.info/locations-and-hours/</a></p>"});
  //washington county
  addMarker({coords:{lat:39.6418,lng:-77.7200},iconImage:library,content:"<h1 class='mapTitle'>Washington County Libraries</h1> <p class='mapText'> Wireless Internet is available at all locations and also computers. They offer computer and tech classes and you can find upcoming classes <a target='_blank' href='https://www.washcolibrary.org/computerclasses'>here</a> and register for them <a target='_blank' href='https://wcfl.librarymarket.com/'>here. </a>Locations and hours can be found at <a target='_blank' href='https://www.washcolibrary.org/locations'>https://www.washcolibrary.org/locations</a> Call 301-739-3250 for more information.</p>"});
  addMarker({coords:{lat:39.64682689199042,lng: -77.72177603069174},iconImage:northstar,content:"<h1 class='mapTitle'>Horizon Goodwill Industries Hagerstown MD Resource Center</h1> <p class='mapText'>200 North Prospect Street Hagerstown, MD 21740 Contact them by Phone: 1-800-435-2480 Email: feedback@goodwill-hgi.org Services include Assessments, Assessment certificates, Computer classes, Northstar Online Learning accounts for learning and practice</p>"});
  addMarker({coords:{lat:39.71729922162523, lng:-77.71519808876653},iconImage:northstar,content:"<h1 class='mapTitle'>Horizon Goodwill Industries Corporate Office</h1> <p class='mapText'>Address: 14515 Pennsylvania Avenue Contact- Phone: 1-800-435-2480 Email: feedback@goodwill-hgi.org <a target='_blank' href='https://www.google.com/maps/dir/38.9866485,-76.9297349/14515+Pennsylvania+Ave,+Hagerstown,+MD+21742/@39.3487123,-77.8634693,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89c99241dce84465:0x9761754076e1df10!2m2!1d-77.7217797!2d39.713464'> Get directions Here.</a>Northstar services include Assessments, Assessment certificates, Computer classes, Northstar Online Learning accounts for learning and practice</p>"});
  //CAPITAL REGION (2) 5-15
  //fredco
  addMarker({coords:{lat:39.3845,lng:-77.4702},
    iconImage:library,content:"<h1 class='mapTitle'>Frederick County Public Libraries</h1> <p class='mapText'> There is outdoor wifi at all branches and public computers or chromebooks. Adults 18 or older can borrow laptop and hotspot kits for one week. 'The kits provide a Dell Precision 3560 laptop and a Mobile Beacon 4G LTE hotspot on T-mobile's network so you can apply for jobs, study, or research from anywhere.' Find branches and hours: <a target='_blank' href='https://www.fcpl.org/branches-hours'> https://www.fcpl.org/branches-hours</a> You can also contact the different branches <a target='_blank' href='https://www.fcpl.org/contact-us'>here.</a></p>"});
  addMarker({coords:{lat:39.41502238962526, lng:-77.38864280893212},iconImage:northstar,content:"<h1 class='mapTitle'>Frederick County Workforce Services</h1> <p class='mapText'> Phone: 301-600-2255 Email: fcws@frederickworks.com <a target='_blank' href='https://www.google.com/maps/dir/?api=1&destination=200+Monroe+Avenue%2C+Suite+1%2C+Frederick%2C+MD+21701%2C+USA'>Get directions.</a >Northstar services include Assessments, Assessment certificates, Computer classes, Northstar Online Learning accounts for learning and practice.</p>"});
  //montco
  addMarker({coords:{lat:39.1547,lng:-77.2405},iconImage:library,content:"<h1 class='mapTitle'>Montgomery County Public Libraries</h1> <p class='mapText'>There are desktop computer available at all locations except Noyes and some have laptops. There is also WiFi at all locations, some locations have outdoor wifi and you can wireless hotspots that can be borrowed for 2 weeks. They also offer charging stations. You can even borrow thermal cameras and wireless print. You can find computer and tech classes for adults, seniors, and teens <a target='_blank' href='https://mcpl.libnet.info/events?r=today'>here.</a> There is a digital media lab at the Silver Spring Branch with software like iMovie, Xcode, Github, Cura and more. There's also hardware including 3 Mac Book Pro laptops and 4 iMac desktops. Find Branches here: <a target='_blank' href='https://www.montgomerycountymd.gov/library/branches/index.html'>https://www.montgomerycountymd.gov/library/branches/index.html</a></p>"});
  addMarker({coords:{lat:39.14205866309036, lng:-77.1958039450078},iconImage:northstar,content:"<h1 class='mapTitle'>Montgomery College - Information Technology Institute</h1> <p class='mapText'> 12 South Summit Avenue 4th floor Gaithersburg, MD 20877 Phone: 240-567-5188 Email: wdce@montgomerycollege.edu <a target='_blank' href='https://www.google.com/maps/dir/38.9866485,-76.9297349/12+S+Summit+Ave+%234th,+Gaithersburg,+MD+20877/@39.1376471,-77.4309681,10.25z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89b7d2d2c92add37:0x984a70bbb271f839!2m2!1d-77.1939746!2d39.1409262'>Get directions.</a> Northstar services include Assessments, Assessment certificates, Computer classes, Northstar Online Learning accounts for learning and practice.</p>"});
  addMarker({coords:{lat:39.09737949302043, lng:-77.15827715526869},iconImage:northstar,content:"<h1 class='mapTitle'>LCMC</h1> <p class='mapText'> Phone: 6466731468 Email: gabriel@lcmcmd.org 21 Maryland Ave #320 Rockville, MD 20850 <a target='_blank' href='https://www.google.com/maps/dir/?api=1&destination=21+Maryland+Ave%2C+%23320%2C+Rockville%2C+MD+20850%2C+USA'>Get directions.</a> Northstar services include Assessments, Assessment certificates, Computer classes, Northstar Online Learning accounts for learning and practice.</p>"});
  
  addMarker({coords:{lat:38.99287893615256, lng:-77.02564369653703},iconImage:other,content:"<h1 class='mapTitle'>TDI</h1> <p class='mapText'>Active national advocacy organization focusing its energies and resources to address equal access issues in telecommunications and media for people who are deaf, hard-of-hearing, late-deafened, deafblind and deaf-plus (with other disabilities). Provide technical assistance and consulting to industry, including digital literacy classes. Address: 940 Thayer Ave #8009, Silver Spring, MD 20910 Call them at 301-563-9112 <a target='_blank' href='https://tdiforaccess.org/'>Go to their website.</a></p>"});
  addMarker({coords:{lat:39.019556077997315, lng:-77.02636980756368},iconImage: senior, content:"<h1 class='mapTitle'>Schweinhaut Senior Center</h1> <p class='mapText'> Address: 1000 Forest Glen Rd, Silver Spring, MD 20901 In-Person Classes from Senior Planet in Montgomery County <a target='_blank' href='https://seniorplanet.org/locations/montgomery-county/inpersonevents/'>Find in person classes here.</a> They teach classes to seniors on skills like how to us smartphones, social media and fitness apps. Find more virtual classes <a href='https://seniorplanet.org/locations/montgomery-county/events/' target='_blank'>here.</a></p>"});
  addMarker({coords:{lat:39.04691899245338, lng:-76.97585775005028},iconImage: senior, content:"<h1 class='mapTitle'>White Oak Community Recreation Center</h1> <p class='mapText'> Address: 1700 April Ln, Silver Spring, MD 20904 In-Person Classes from Senior Planet in Montgomery County <a target='_blank' href='https://seniorplanet.org/locations/montgomery-county/inpersonevents/'>Find in person classes here.</a>They teach classes to seniors on skills like how to us smartphones, social media and fitness apps. Find more virtual classes <a href='https://seniorplanet.org/locations/montgomery-county/events/' target='_blank'>here.</a></p>"});
  
  addMarker({coords:{lat:39.17646099182766, lng:-77.23293031325528},iconImage:computer,content:"<h1 class='mapTitle'>Montgomery Connects - Computer For You</h1><p class='mapText'>Montgomery Connects provides loaner Chromebook laptop computers for those eligible. To be eligible you have to be a Montgomery County Resident, at least 7 years old, and you don't have access to a computer for education. You must get a montgomery county library county number and an email to sign up. You can make an appointment to pick up a computer at UpCounty Regional Services Center 12900 Middlebrook Rd, Germantown, MD 20874 OR Plum Gar Community Recreation Center - 19561 Scenery Drive, Germantown, MD 20876 OR Wheaton American Jobs Center - 11510 Georgia Ave., First Floor, Silver Spring, MD 20902 OR Takoma Park Rec Center - 7315 New Hampshire Avenue Takoma Park, MD 20874. Learn more and sign up at <a href='https://www.montgomerycountymd.gov/obp/computer-for-you.html' target='_blank'>https://www.montgomerycountymd.gov/obp/computer-for-you.html</a> Learn how to use a chromebook <a href='https://www.montgomerycountymd.gov/obp/Resources/Files/computer/Lenovo%20Chromebook%20English.docx' target='_blank'>here.</a></p>"});
  addMarker({coords:{lat:39.08862539653415, lng:-77.14553725885492},iconImage:computer, content:"<h1 class='mapTitle'>MoCoNet</h1> <p class='mapText'>MoCoNet is designed to provide an option for low income and special needs residents to have internet access for their personal and family use without the burden of paying fees. This free service is available to eligible residents of Main Street Apartments, Residences Upon The Lane, Bauer Park Apartments(14635 Building Only), and Snowden's Ridge Apartments. If interested e-mail  customercare@mymoconet.com or call 240-773-801. Find more information at <a href='https://www.montgomerycountymd.gov/obp/moconet.html' target='_blank'>https://www.montgomerycountymd.gov/obp/moconet.html</a></p>"});
  //prince georges county
  addMarker({coords:{lat:38.7849,lng:-76.8721},iconImage:library,content:"<h1 class='mapTitle'>Prince George's County Memorial Library System</h1> <p class='mapText'> Chromebooks can be borrowed at all branches <a target='_blank' href='https://catalog.pgcmls.info/polaris/search/searchresults.aspx?ctx=1.1033.0.0.3&type=Keyword&term=1263205&by=CN&sort=RELEVANCE&limit=TOM=*&query=&page=0&searchid=1'>here.</a> A guide to connect to WiFi and use the chromebook can be found <a href= 'https://pgcmls.info/frontend-images/pdfs/pgcmls/Online2Go_User_Guide_07152021__2_.pdf' target='_blank' >here.</a> Adults 18 or older can borrow Educational WiFi Hotspots, for more information call (240) 482-4635. You can also borrow Electricity Usage Monitors and Playaway Launchpads. More info can be found <a href='https://www.pgcmls.info/borrow-technology'> here.</a> Computer Classes can be found <a href='https://www.pgcmls.info/events' target='_blank' >here.</a> Hours, locations and contact info can be found at <a href='https://www.pgcmls.info/map-of-branches' target='_blank'>https://www.pgcmls.info/map-of-branches</a></p>"});
  
  //SOUTHERN REGION (3) 16-18
  //charles co
  addMarker({coords:{lat:38.5222,lng:-77.1025},iconImage:library,content:"<h1 class='mapTitle'>Charles County Public Libraries</h1> <p class='mapText'> People 16 or older can borrow mobile hotspots for 3 weeks <a href='https://www.ccplonline.org/about/mobile-hotspots/'>here.</a> There are public computers, charging stations, and WiFi access at all branches. Each branch also has a workstation that give help with technology to citizens protected by the Americans with Disabilities Act.  You can check out a chromebook bundle which includes a chromebook and mobile hotspot <a href='https://www.ccplonline.org/chromebooks/'>here.</a> Branches have Discovery Sessions which are one-on-one personal assistance for computer skills. More information can be found <a target='_blank' href='https://www.ccplonline.org/about/one-on-one-computer-instruction/'>here.</a> You can call or go to a location to get help with Northstar which is a program that will teach digitial literacy. Locations and hours: <a target='_blank' href='https://www.ccplonline.org/about/library-locations/'>https://www.ccplonline.org/about/library-locations/</a></p>"});
  //st marys
  addMarker({coords:{lat:38.1060,lng:-76.3637},iconImage:library,content:"<h1 class='mapTitle'>St Mary's County Library</h1> <p class='mapText'> All branches have public computers, WiFi and a workstation with assistive tech to help citizen protected by the Americans Disabilites Act. People 16 and older can check out a WiFi hotspot and laptops. There's one on one appointments for device help, computers basics and how to use other software. Call the branch near you to get an appointment. Charlotte Hall Library is 301-884-2211. Leonardtown is 301-475-2846. Lexington Park is 301-863-8188. More info can be found <a href='https://www.stmalib.org/events/computer-and-technology-instruction/' target='_blank'>here.</a> More on locations and hours can be found at <a href='https://www.stmalib.org/about-us/locations-and-hours/' target='_blank'>https://www.stmalib.org/about-us/locations-and-hours/</a> St Mary's County Library is also a Northstar location to learn more about digital skills go <a href='https://www.stmalib.org/research-learn/northstar-digital-literacy/' target='_blank'>here.</a></p>"});
  //calvert county
  addMarker({coords:{lat:38.4950,lng:-76.5026},iconImage:library,content:"<h1 class='mapTitle'>Calvert Library</h1> <p class='mapText'>Check out WiFi hotspots from Sprint <a href='https://catalog.somd.lib.md.us/polaris/search/searchresults.aspx?ctx=1.1033.0.0.1&type=Keyword&term=sprint%20hotspot&by=TI&sort=RELEVANCE&limit=TOM=*&query=&page=0&searchid=1' target='_blank'>here.</a> Check out hotspots from Kajeet <a href='https://catalog.somd.lib.md.us/polaris/search/searchresults.aspx?ctx=1.1033.0.0.1&type=Keyword&term=kajeet%20hotspot&by=TI&sort=RELEVANCE&limit=TOM=*&query=&page=0&searchid=6' target='_blank'>here.</a>  Check out chromebooks <a href='https://catalog.somd.lib.md.us/polaris/search/searchresults.aspx?ctx=1.1033.0.0.1&type=Keyword&term=chromebook&by=AU&sort=RELEVANCE&limit=TOM=*&query=&page=0&searchid=2' target='_blank'>here.</a> Hotspots and chromebooks can be borrowed for 21 days and you need to be 16 or older. There's public WiFi, PCs, 3D printers and different software that you can use. Classes for STEM and tech can be found <a href='https://calvertlibrary.libnet.info/events?r=thismonth' target='_blank'>here.</a> Contact Info, hours and locations can be found <a href='https://directory.sailor.lib.md.us/library/info/?id=5' target='_blank'>here.</a></p>"});
  
  //CENTRAL REGION (4) 19-27
  //carroll
  addMarker({coords:{lat:39.5423,lng:-77.0564},iconImage:library,content:"<h1 class='mapTitle'>Carroll County Public Library</h1> <p class='mapText'>All locations have public WiFi and computers. You can take Cisco Networking Classes which teach IT skills on the computers. Find more info at <a href='https://library.carr.org/programs/cisco.asp' target='_blank'>https://library.carr.org/programs/cisco.asp</a> Hours and Locations can be found at <a href='https://library.carr.org/about/locations.asp' target='_blank'>https://library.carr.org/about/locations.asp</a></p>"});
  //howard
  addMarker({coords:{lat:39.2873,lng:-76.9643},iconImage:library,content:"<h1 class='mapTitle'>Howard County Library System</h1> <p class='mapText'>All Library branches offer workstations with high-speed Internet access and word processing software. WiFi is available at all branches. With a library card you can borrow Children's Launchpad, chromebooks, hotspots, and STEM activity kits. You have to be 18 or older to borrow chromebooks and hotspots and you can borrow them for 6 weeks. If you're looking to improve your computer skills, then visit their computer skills open lab! There's assistance for basic computer skills using the Internet, setting up an email account, and creating and saving documents. The schedule for open labs can be found <a href='https://howardcounty.librarycalendar.com/?keywords=computer%20skills%20open%20lab&program_types%5B105%5D=105' target='_blank'>here.</a> Contact info, locations and branches can be found at <a href='http://hclibrary.org/locations/' target='_blank'>http://hclibrary.org/locations/</a></p>"});
  //anne arundal
  addMarker({coords:{lat:38.9530,lng:-76.5488},iconImage:library,content:"<h1 class='mapTitle'>Anne Arundel County Public Library</h1> <p class='mapText'>All public library computers offer Microsoft Word, Excel, Publisher, and PowerPoint, as well as Internet access. You can also wirelessly print, copy, fax, and more. Borrow chromebooks <a href='https://www.aacpl.net/library-of-things/chromebook-kit' target='_blank'>here.</a> WiFi hotspots can be found <a href='https://www.aacpl.net/library-of-things/hotspots' target='_blank'>here.</a> ADA Accessible Workstations are available at their Broadneck, Eastport-Annapolis Neck, Edgewater, and Glen Burnie library locations. More info on the technology offered can be found <a href='https://www.aacpl.net/services/technology' target='_blank'>here.</a> You can find tech classes and events at <a href='https://www.aacpl.net/events/upcoming?program_types%5B115%5D=115' target='_blank'>https://www.aacpl.net/events/upcoming?program_types%5B115%5D=115</a> There's even a STEM festival and you can find info <a href='https://www.aacpl.net/blog-entries/stem-festival-aacpl' target='_blank'>here.</a></p>"});
  //baltimore
  addMarker({coords:{lat:39.4648,lng:-76.7337},iconImage:library,content:"<h1 class='mapTitle'>Baltimore County Public Library</h1> <p class='mapText'>Public computers and WiFi are found at all branches. Borrow chromebooks <a href='https://catalog.bcpl.lib.md.us/polaris/search/searchresults.aspx?ctx=1.1033.0.0.6&type=Boolean&term=brs=129584&by=KW&sort=MP&limit=&query=&page=0&searchid=1' target='_blank'>here.</a> Wireless hotspots can be borrowed <a href='https://catalog.bcpl.lib.md.us/polaris/search/searchresults.aspx?ctx=1.1033.0.0.6&type=Boolean&term=brs=%20139629&by=KW&sort=MP&limit=&query=&page=0&searchid=2' target='_blank'>here.</a> You can even borrow <a href='https://catalog.bcpl.lib.md.us/polaris/search/searchresults.aspx?ctx=1.1033.0.0.6&type=Boolean&term=brs=157563&by=KW&sort=RELEVANCE&limit=&query=&page=0&searchid=3' target='_blank'>science</a> and <a href='https://catalog.bcpl.lib.md.us/polaris/search/searchresults.aspx?ctx=1.1033.0.0.6&type=Boolean&term=brs=129583&by=KW&sort=MP&limit=&query=&page=0&searchid=0' target='_blank'>technology</a> kits. Assistive technology and computer workstations are also available (see more <a href='https://www.bcpl.info/services/assistive-technology.html' target='_blank' >here</a>). Northstar digital literacy is also available where you can asses your digital skills and more information can be found <a href='https://www.bcpl.info/services/digital-literacy.html' target='_blank'>here.</a> Locations, hours and contact information can be found at  <a href='https://www.bcpl.info/locations/index.html' target='_blank'>https://www.bcpl.info/locations/index.html</a></p>"});
  addMarker({coords:{lat:39.35557229400723, lng:-76.70665469024979},iconImage:northstar,content:"<h1 class='mapTitle'>VSP</h1> <p class='mapText'> <a target='_blank' href='https://www.google.com/maps/dir/38.9866485,-76.9297349/5607+Metro+Dr,+Baltimore,+MD+21215/@39.1497997,-77.0609638,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89c81a4bdc6b8993:0x5d593ff4aca4cccb!2m2!1d-76.7056655!2d39.3446263'>Get directions here.</a>  Northstar services include Assessments, Assessment certificates, Computer classes, Northstar Online Learning accounts for learning and practice.</p>"});
  
  addMarker({coords:{lat:39.290843080090085, lng:-76.60985860655032},iconImage:kids, content:"<h1 class='mapTitle'>Digital Harbor Foundation Tech Center</h1> <p class='mapText'> Address: 1045 Light St, Baltimore, MD 21230 Phone: +14436819384 Website: <a href='http://www.digitalharbor.org/' target='_blank'> http://www.digitalharbor.org/</a>  They offer beginner, intermediate, and advanced classes in core technology and maker skills for kids and teens. They offer many more opportunites with pathways from coding to 3D printing and everything is pay what you can. Request a device to borrow here: <a href='https://airtable.com/shr4yZiwAEVzKaFfB' target='_blank'> https://airtable.com/shr4yZiwAEVzKaFfB</a></p>"});
  addMarker({coords:{lat:39.31004043405193, lng:-76.5839008503738},iconImage:computer,content:"<h1 class='mapTitle'>Enoch Pratt Free Library</h1> <p class='mapText'>Address: 2001 N Wolfe St, Baltimore, MD 21213 Borrow mobil hotspots, tablets for students and chromebooks. Find more at <a href='https://www.prattlibrary.org/books-and-more/computer-internet-devices' target='_blank'>https://www.prattlibrary.org/books-and-more/computer-internet-devices</a> Outdoor wifi provided by Pratt is avaible here too: <a href='https://www.prattlibrary.org/services/outdoor-wi-fi' target='_blank'>https://www.prattlibrary.org/services/outdoor-wi-fi</a></p>"});
  addMarker({coords:{lat:39.30153947500419, lng:-76.58847441464529},iconImage:computer,content:"<h1 class='mapTitle'>PCs for People</h1> <p class='mapText'> PCs for People provides refurbished computers to eligible customers for affordable prices. They also provide low-cost high-speed internet solutions. Address: 2901 E Biddle St, Baltimore, MD 21213. More info can be found at <a href='https://www.pcsforpeople.org/locations/baltimore/' target='_blank'>https://www.pcsforpeople.org/locations/baltimore/</a></p>"});

  //harford
  addMarker({coords:{lat:39.5839,lng:-76.3637},iconImage:library,content:"<h1 class='mapTitle'>Harford County Public Library</h1> <p class='mapText'>Public computers and Wifi are available. Find locations and hours at <a href='https://hcplonline.org/locations.php'>https://hcplonline.org/locations.php</a> Find out more at <a href='https://hcplonline.org/index.php' target='_blank'>https://hcplonline.org/index.php</a></p>"});

  //UPPER EASTERN SHORE (5) 28-38
  //cecil
  addMarker({coords:{lat:39.5739,lng:-75.9463},iconImage:library,content:"<h1 class='mapTitle'>Cecil County Public Library</h1> <p class='mapText'>All Cecil County Public Library Branches have public Internet access computers with the Microsoft Office Suite as well as free wireless Internet service. WiFi is also available in all Cecil County Public Library Branch parking lots, look for CCPL_Outdoor_WiFi to connect your device. Learn digital skills with LinkedIn by entering your library card number <a href='https://www.linkedin.com/learning-login/go/cecil' target='_blank'>here.</a> They also offer Gale courses which covers computers and other info like financial and health literacy, you can find it <a href='https://education.gale.com/l-elkt98452/' target='_blank'>here.</a> Find Science and technology events at <a href='https://www.cecilcountylibrary.org/events/month?program_types%5B11%5D=11' target='_blank'>https://www.cecilcountylibrary.org/events/month?program_types%5B11%5D=11</a>   Contact info, hours and locations can be found at <a href='https://www.cecilcountylibrary.org/about/hours-locations'>https://www.cecilcountylibrary.org/about/hours-locations</a></p>"});
  //kent
  addMarker({coords:{lat:39.2714,lng:-76.1320},iconImage:library,content:"<h1 class='mapTitle'>Kent County Public Library</h1> <p class='mapText'>Public WiFi at all locations. KCPL librarians can help with simple technology questions at any time. For more in-depth help, such as setting up an email account or learning how to use KCPL's Digital Library, you can schedule a 30-minute appointment for one-on-one help <a href='https://docs.google.com/forms/d/e/1FAIpQLScQWx6QTAHpm9MmX6m3oVHbZpfj3lNeomeZwuzDN9D2Gzlb1w/viewform' target='_blank'>here.</a> They host a STEM festival that you can find at <a href='https://kent-md.libcal.com/event/9356045' target='_blank'>https://kent-md.libcal.com/event/9356045</a> <a href='http://auth.esrl.org/verify.php?r=fy2013_alc_kent' target='_blank'>Here</a> are some resources to learn computers for adults. Resources to learn different online softwares can be found <a href='https://my.nicheacademy.com/esrl' target='_blank'>here.</a> Hours, locations and contact information can be found at <a href=http://www.kentcountylibrary.org/using/hours.php''>http://www.kentcountylibrary.org/using/hours.php</a></p>"});
  addMarker({coords:{lat:39.28176484749401, lng:-76.09236838465414},iconImage:computer,content:"<h1 class='mapTitle'>Kent County Community Center</h1> <p class='mapText'>The Kent County Public Library (KCPL) in partnership with Kent County Parks and Recreation (KCPR) offers the KCPL Worton Computer Facility at the Kent County Community Center. The Computer Facility has three computers available for public use that are equipped with Internet access, a wide range of online library resources, and educational games. Call them at 410-778-1948. Located at 11041 Worton Rd, Worton, MD 21678</p>"});
  //queen annes
  addMarker({coords:{lat:39.0264,lng:-76.1320},iconImage:library,content:"<h1 class='mapTitle'>Queen Anne's County Library</h1> <p class='mapText'>The library provides internet access computers for use by the public. You can Lend Laptops and Mobile Hot-Spots for 14 days. ADA Accessible Workstations are available at Centreville and Kent Island branches.   These workstations include computers with MAGiC text enlarging and screen reader software for those with low or deteriorating vision, JAWS screen reader software for the blind, 27' monitor, and large type keyboard. Centreville and Kent Island locations are Northstar locations. The locations and hours can be found at <a href='https://www.qaclibrary.org/locations'>https://www.qaclibrary.org/locations</a></p>"});
  addMarker({coords:{lat:38.958634263551076, lng:-76.20175321432554}, iconImage:senior,content:"<h1 class='mapTitle'>Queen Anne's Senior Center</h1> <p class='mapText'> Computer Classes are available at the 3 locations for Queen Anne's Senior Centers. Find more information at <a href='https://www.qac.org/206/Senior-Centers' target='_blank'>https://www.qac.org/206/Senior-Centers</a> </p>"});
  //caroline
  addMarker({coords:{lat:38.9105,lng:-75.8534},iconImage:library,content:"<h1 class='mapTitle'>Caroline County Public Library</h1> <p class='mapText'>Call 410-479-1343 to lend a laptop and each household can borrow one. You can also check hotspots and you can learn more about hotspots and laptops at <a href='https://www.carolib.org/laptop-faq/' target='_blank'>https://www.carolib.org/laptop-faq/</a> You can book a librarian to get help on computer basics at <a href='https://www.carolib.org/book-a-librarian/' target='_blank'>https://www.carolib.org/book-a-librarian/</a> You can find locations and hours at <a href='https://www.carolib.org/hours-and-locations/' target='_blank'>https://www.carolib.org/hours-and-locations/</a> Upcoming tech and computer classes can be found at <a href='https://carolib.libcal.com/calendar/CCPLEvents?cid=9427&t=m&d=0000-00-00&cal=9427&ct=38962&inc=0' target='_blank'>here.</a></p>"});

  //LOWER EASTERN (6)
  //talbot
  addMarker({coords:{lat:38.7804,lng:-76.1320},iconImage:library,content:"<h1 class='mapTitle'>Talbot County Free Library</h1> <p class='mapText'>Each of the TCFL branches has multiple WiFi networks available for free public usage. The library has 25 computers in the Easton branch and 9 computers in the St. Michaels branch dedicated to public computer access. Each computer features a variety of software programs designed to facilitate Internet access, word processing, use of the library's eResources, and more. You can sign on for a one hour session using the 14 digit number on the back of your library card. There is one ADA compatible workstation at each branch, provided by the Maryland Library for the Blind and Print Disabled to assist patrons with visual impairment. Each workstation features ClearView+ Speech, JAWS, and MAGic. Ask at the Information Desk for basic computer tutoring to get one-on-one help on computer skills. You can borrow a WiFi hotspot for 7 days and an extended WiFi hotspots for 56 days. <a href='http://www.tcfl.org/visit/?content=children'>Find upcoming STEM events.</a> Locations and hours can be found at <a href='http://www.tcfl.org/visit/?content=locations' target='_blank'>http://www.tcfl.org/visit/?content=locations</a></p>"});
  //dorchester
  addMarker({coords:{lat:38.4153,lng:-76.1784},iconImage:library,content:"<h1 class='mapTitle'>Dorchester County Public Library</h1> <p class='mapText'>The Dorchester County Public Library offers over a dozen computers for public use. These computers include the full Microsoft Office suite, as well as internet and printer access. There's also a <a href='https://www.dorchesterlibrary.org/maker-space' target='_blank'>Maker Space</a> which offers different resources like a 3D printer. Find contact information, locations, and hours at <a href='https://www.dorchesterlibrary.org/contact' target='_blank'>https://www.dorchesterlibrary.org/contact</a></p>"});
  //wicomico
  addMarker({coords:{lat:38.376434524736005, lng:-75.60098864084723},iconImage:library,content:"<h1 class='mapTitle'>Wicomico Public Libraries</h1> <p class='mapText'>You can use your own laptop or PDA to connect to the Internet at the Library. Use your wireless enabled device to access our high speed Internet connection for web browsing. Adults 18 and older can borrow laptops with WiFi hotspots for one week. More information can be found at <a href='http://www.wicomicolibraries.org/laptop-lending-program-faq' target='_blank'>http://www.wicomicolibraries.org/laptop-lending-program-faq</a> Gale Courses are available <a href='https://education.gale.com/l-sali50380/' target='_blank'>here.</a> Locations, contact information and hours can be found at <a href='http://www.wicomicolibraries.org/locations' target='_blank'>http://www.wicomicolibraries.org/locations</a></p>"});
  //somerset
  addMarker({coords:{lat:38.0862,lng:-75.8534},iconImage:library,content:"<h1 class='mapTitle'>Somerset County Library</h1> <p class='mapText'>Upcoming One-On-One Computer Help sessions can be found at <a href='http://www.somelibrary.org/adultprograms.php' target='_blank'>http://www.somelibrary.org/adultprograms.php</a> Access Gale Courses to learn digital basics <a href='https://education.gale.com/l-sali50380/' target='_blank'>here.</a> For visual aid, large print materials are available at all library locations and all public computers are equipped with Windows Narrator screen reader software, and Windows Magnifier text-enlarging software.  The Deaf Culture Digital Library is a collection of resources and help related to deaf culture. The site includes access to a wide selection of eBooks, eAudiobooks, and streaming video for all ages. Locations and hours can be found <a href='http://www.somelibrary.org/index.php' target='_blank'>here</a> at the top.</p>"});
  //worcester
  addMarker({coords:{lat:38.1584,lng:-75.4345},iconImage:library,content:"<h1 class='mapTitle'>Worcester County Library</h1> <p class='mapText'>Free wireless Internet access and computers are available at all Worcester County Library branches. People 18 or older can check out a WiFi hotspot for 30 days which is a device that allows you to connect your enabled devices (e.g. laptop, smartphones, tablets, etc.) to the internet. The hotspot is portable so you can connect your device almost wherever you go. Check out a mobile hotspot with your library card. Check out laptops <a href='https://eshore.polarislibrary.com/polaris/search/searchresults.aspx?ctx=20.1033.0.0.1&type=Keyword&term=dell%20latitude&by=KW&sort=RELEVANCE&limit=&query=&page=0&searchid=1' target='_blank'>here.</a>  Branches and locations can be found at <a href='https://worcesterlibrary.org/branches' target='_blank'>https://worcesterlibrary.org/branches</a></p>"});
  
  //DC 39-42
  addMarker({coords:{lat:38.9072,lng:-77.0369},iconImage:library,content:"<h1 class='mapTitle'>DC Public Library</h1> <p class='mapText'>All library locations have a limited number of computers available for customer use (MLK Memorial Library has a <a href='https://www.dclibrary.org/labsatdcpl' target='_blank'>Lab</a>) They offer the NorthStar Digital Literacy Assessment and Certificate service, which allows you to earn this respected workforce credential in one or more of the following areas of basic digital literacy. Classes offered can be found <a href='https://www.dclibrary.org/services/class-descriptions#mavis' target='_blank'>here</a> and more information can be found <a href='https://www.dclibrary.org/services/computer#two' target='_blank'>here.</a> Upcoming STEM and computer classes can be found <a href='https://dclibrary.libnet.info/events?v=list' target='_blank'>here.</a> Hours and locations can be found at <a href='https://www.dclibrary.org/hours-locations' target='_blank'>https://www.dclibrary.org/hours-locations</a></p>"});
  addMarker({coords:{lat:38.92136290441868, lng:-77.03156812331352},iconImage:northstar,content:"<h1 class='mapTitle'>YWCA National Capital Area</h1> <p class='mapText'> Phone: 2023493931 Email: dcampbell@ywcanca.org 2303 14th Street, NW Suite 100 Washington, DC 20009 <a target='_blank' href='https://www.google.com/maps/dir/38.9866485,-76.9297349/2303+14th+St+NW+%23100,+Washington,+DC+20009/@38.9349516,-77.0390068,13.37z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89b7b7e730c0d677:0xb8a831143c037f2b!2m2!1d-77.0314982!2d38.9206344'> Get directions here.</a> Northstar services include Assessments, Assessment certificates, Computer classes, Northstar Online Learning accounts for learning and practice.</p>"});
  addMarker({coords:{lat:38.93720557578198, lng:-77.03892179894979},iconImage:northstar,content:"<h1 class='mapTitle'>The Family Place</h1> <p class='mapText'> Address: 3309 16th Street, NW Washington, DC 20010 <a target='_blank' href='https://www.google.com/maps/dir/?api=1&destination=3309+16th+Street%2C+NW%2C+%2C+Washington%2C+DC+20010%2C+USA'>Get directions here.</a> Northstar services include Assessments, Assessment certificates, Computer classes, Northstar Online Learning accounts for learning and practice.</p>"});
  addMarker({coords:{lat:38.92200783426964, lng:-77.02375249078045},iconImage:computer,content:"<h1 class='mapTitle'>Wilderness Technology Alliance</h1><p class='mapText'>Address: 65 Massachusetts Ave NW #7, Washington, DC 20001 This organization offers many different programs including access to technology, computer training, support and senior programs. Find more info on the website at: <a href='http://www.wildtech.org/our-programs/' target='_blank'>http://www.wildtech.org/our-programs/</a> Contact them- Phone: 202-853-7617 Email: info@wildtech.org</p>"});
}

// Adds a marker to the map and push to the array.
function addMarker(props) {
  const marker = new google.maps.Marker({
    position:props.coords,
    map,
    icon: props.iconImage
  }); 

  //check for custom icons
  if(props.iconImage){
    marker.setIcon(props.iconImage);
  }
  //check for info window content
  if (props.content){
    var infoWindow = new google.maps.InfoWindow({
      content:props.content
    });

    marker.addListener('click', function(){
      infoWindow.open(map, marker);
    });

    //sets cards text to the same text in the content cards
    document.getElementById('textbox'+String(x)).innerHTML = props.content;
    x++;
  }

  markers.push(marker);
}

let county = [0,markers.length];

// Sets the map on all markers in the array.
function setMapOnAll(map, start,end) {
  for (let i = start; i < end; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function hideMarkers() {
  setMapOnAll(null,0,markers.length);
}

function showCards(){
  for (var i = 0;i<markers.length;i++){
    var element = document.getElementById('cd'+String(i));
    if (i>county[1] || i<county[0]){
      element.style.display='none';
    }
    else{
      element.style.display = 'inline-block';
    }
  }
}

//county indexes remain same setMapOnAll second number adds one because of the i< (second number) for loop
function region1(){
  hideMarkers();
  //shows markers in region 1
  setMapOnAll(map,0,5);
  county=[0,4];
  showCards();
}

function region2(){
  hideMarkers();
  //show markers in region 2
  setMapOnAll(map,5,16);
  county=[5,15];
  showCards();
}

function region3(){
  hideMarkers();
  //show markers in region 3
  setMapOnAll(map,16,19);
  county=[16,18];
  showCards();
}

function region4(){
  hideMarkers();
  //show markers in region 4
  setMapOnAll(map,19,28);
  county=[19,27];
  showCards();
}

function region5(){
  hideMarkers();
  //show markers in region 5
  setMapOnAll(map,28,39);
  county=[28,38];
  showCards();
}

function region6(){
  hideMarkers();
  //show markers in region 7
  setMapOnAll(map,39,43);
  county=[39,42];
  showCards();
}

function allMaryland(){
  setMapOnAll(map,0,markers.length);
  county=[0,markers.length-1];
  showCards();
}

function showLibrary(){
  if (county[1]==0){
    county[1] = markers.length;
  }
  hideMarkers();
  var library = "https://img.icons8.com/material/24/000000/reading--v1.png";
  for (let i = county[0]; i <= county[1] ;i++){
    if (markers[i].icon==library){
      setMapOnAll(map,i,i+1);
    }
  }
}

function showNorthstar(){
  if (county[1]==0){
    county[1] = markers.length;
  }
  hideMarkers();
  var northstar = "https://img.icons8.com/ultraviolet/24/000000/map-pin.png";
  for (let i = county[0]; i <= county[1] ;i++){
    if (markers[i].icon==northstar){
      setMapOnAll(map,i,i+1);
    }
  }
}

function showComputer(){
  if (county[1]==0){
    county[1] = markers.length;
  }
  hideMarkers();
  var computer = "https://img.icons8.com/external-sbts2018-solid-sbts2018/24/22C3E6/external-computer-seo-4.1-sbts2018-solid-sbts2018.png";
  for (let i = county[0]; i <= county[1] ;i++){
    if (markers[i].icon==computer){
      setMapOnAll(map,i,i+1);
    }
  }
}


function showOther(){
  if (county[1]==0){
    county[1] = markers.length;
  }
  hideMarkers();
  var other = "https://img.icons8.com/officel/24/000000/marker.png";
  var senior = "https://img.icons8.com/ios-filled/24/FAB005/marker.png";
  var kids = "https://img.icons8.com/ios-filled/24/C850F2/marker.png";
  for (let i = county[0]; i <= county[1] ;i++){
    if (markers[i].icon==other || markers[i].icon == senior || markers[i].icon == kids){
      setMapOnAll(map,i,i+1);
    }
  }
}

window.initMap = initMap;
