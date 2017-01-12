var projects = [
{name:"Bahamas Realty Ltd.", url:"http://www.bahamasrealty.bs/", slug:"brl"},
{name:"NAI Bahamas", url:"http://www.naibahamas.com/", slug:"nai"},
{name:"Monica Knowles Realty", url:"http://www.monicaknowlesrealty.com/", slug:"monkno"},

{name:"Graham Real Estate", url:"http://www.grahamrealestate.com/", slug:"graham"},
{name:"Callenders Realty Ltd.", url:"http://www.callendersrealty.com/", slug:"callen"},

{name:"Realty Team Bahamas", url:"http://www.rtbahamas.com/", slug:"rtb"},
{name:"Blue Sky Bahamas", url:"http://www.blueskybahamas.com/", slug:"bluesky"},
{name:"Bahamas Real Estate Portal", url:"http://www.paradisebahamas.com/", slug:"paradiseportal"},
{name:"TR Associates Ltd.", url:"http://www.trbahamas.com/", slug:"tra"},
{name:"McCarroll Real Estate", url:"http://www.mccarrollrealestate.com/", slug:"mcc"},
// {name:"Bahamas Island Estates", url:"http://www.bahamasislandestates.com/", slug:"aberle"},
{name:"Sonya Alvino Real Estate", url:"http://www.yourbahamas.com/", slug:"sonya"},
{name:"Seaside Real Estate", url:"http://www.seasidebahamas.com/", slug:"exuma"},

{name:"Bahamas Financial Services Board", url:"http://www.bfsb-bahamas.com/", responsive:false, slug:"bfsb"},
{name:"Utilities Regulation and Competition Authority", url:"http://www.urcabahamas.bs/", responsive:false, slug:"urca"},
{name:"Bahamas Real Estate Assoc.", url:"http://www.bahamasrealestateassociation.com/", responsive:false, slug:"brea"},

{name:"Cacique", url:"http://www.caciqueintl.com/", responsive:false, slug:"cacique"},
{name:"Deposit Insurance Corp.", url:"http://www.dic.bs/", responsive:false, slug:"dic"},
{name:"Lyford Cay Property Owners Assoc.", url:"http://lyfordcaypoa.com/", responsive:false, slug:"lyfordpoa"},
{name:"Bahamas Supreme Court", url:"http://www.supremecourt.org.bs/", responsive:false, slug:"supreme"},
{name:"Sandyport", url:"http://www.sandyport.com/", responsive:false, slug:"sandyport"},
{name:"Cross and Mosko", url:"http://www.crossandmosko.com/", responsive:false, slug:"crossmosk"}
// {name:"", url:"", responsive:false, slug:""},
];

// console.log( projects );

var currentProjectKey = 0;
var lastProjectKey = projects.length - 1;

var updateView = function()
{
	var projObj = projects[ currentProjectKey ];
	
	var name = $('.project h2');
	var frame1 = $('.big-frame');
	var frame2 = $('.small-frame');
	var preloader = $('.preload-frame');
	
	name.text(projObj.name);
	frame1[0].src = projObj.url;
	frame2[0].src = projObj.url;
	preloader[0].src = projects[ _validateKey(currentProjectKey+1) ].url;
	
	window.location.hash = projObj.slug;
	
	console.log('big',frame1[0]);
	console.log('preload', preloader[0]);
}

var _validateKey = function( key )
{
	if( key > lastProjectKey ) { key = 0; }
	if( key < 0 ) { key = lastProjectKey; }
	return key;
}

var next = function(){
	currentProjectKey = _validateKey( currentProjectKey + 1 );
	updateView();
}

var prev = function(){
	currentProjectKey = _validateKey( currentProjectKey - 1 );
	updateView();
}

var toggleViewports = function() {
	$('.frame-masker, .iframe-toggler span').toggleClass('active');
	
}

$('.i-next-proj').click( next );
$('.i-prev-proj').click( prev );
$('.iframe-toggler').click( toggleViewports );
