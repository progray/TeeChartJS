var d = new dTree('d');

d.config.target='main';

var t=0;
d.add(t++,-1,'TeeChart API Reference','../docs/tee/index.html');
d.add(t++,0,'Version Release Notes','release.htm');
d.add(t++,0,'Basic Example','basic/Basic.htm');
d.add(t++,0,'Themes Intro (new Window)','intro/index.html','Themes','_blank');
var s=d.add(t++,0,'Series','series/All.htm');
    var line=d.add(t++,s,'Line','series/line/line.htm');
        d.add(t++,line,'Smooth Line','series/line/smoothline.htm');
        d.add(t++,line,'Stacked Lines','series/line/stackedline.htm');
        d.add(t++,line,'Line and Point','series/line/linepoint.htm');
    d.add(t++,s,'Point XY','series/line/point.htm');
    var area=d.add(t++,s,'Area','series/area/area.htm');
        d.add(t++,area,'Horizontal Area','series/area/horizarea.htm');
        d.add(t++,area,'Smooth Areas','series/area/smootharea.htm');
    var bar=d.add(t++,s,'Bar','series/bar/bar.htm');
        d.add(t++,bar,'Negative values','series/bar/barnegative.htm');
        d.add(t++,bar,'Volume','series/bar/volume.htm');
    d.add(t++,s,'Horiz. Bar','series/bar/horizbar.htm');
    var pie=d.add(t++,s,'Pie','series/pie/pie.htm');
      d.add(t++,pie,'Multiple Pie','series/pie/multipie.htm');
    var donut=d.add(t++,s,'Donut','series/donut/donut.htm');
      d.add(t++,donut,'Multiple Donut','series/donut/multidonut.htm');
    d.add(t++,s,'Bubble','series/bubble/bubble.htm');
    d.add(t++,s,'Candle OHLC','series/candle/candle.htm');
    d.add(t++,s,'Gantt','series/gantt/gantt.htm');
    var gau=d.add(t++,s,'Gauge','gauges/gauges.htm');
        d.add(t++,gau,'Gauge Gallery','gauges/gauge_gallery.htm');
        d.add(t++,gau,'Clocks','gauges/clocks.htm');
    d.add(t++,s,'Spark','series/spark/spark.htm');
    var map=d.add(t++,s,'World Maps','series/maps/worldmap.htm');
        d.add(t++,map,'Canvas Maps','series/maps/canvas_maps.htm');
        d.add(t++,map,'Bubble Maps','series/maps/maps_bubbles.htm');

    var polar=d.add(t++,s,'Polar / Radar');
      d.add(t++,polar,'Polar','series/polar/polar.htm');
      d.add(t++,polar,'Polar Bar','series/polar/polar_bar.htm');

    d.add(t++,s,'Color Grid','series/colorgrid/colorgrid.htm');
    d.add(t++,s,'Surface 3D','series/surface/surface.htm');

var ax=d.add(t++,0,'Axes','axes/allaxes.htm');
    d.add(t++,ax,'Centered axes','axes/centeraxes.htm');
    d.add(t++,ax,'Grid Bands','axes/gridbands.htm');
    d.add(t++,ax,'Synchronize','axes/synchro_many_charts.htm');
    d.add(t++,ax,'Multiple Axes','axes/multiple_axes.htm');
    d.add(t++,ax,'Custom Labels','axes/customlabels.htm');
	d.add(t++,ax,'Coded zoom','axes/zoompercent.htm');
d.add(t++,0,'Legend','legend/legend.htm');
var mo=d.add(t++,0,'Mouse and Touch','axes/zoomscroll.htm');
    d.add(t++,mo,'Series onClick','series/seriesonclick.htm');
var anim=d.add(t++,0,'Animations','');
    d.add(t++,anim,'Series','animations/linefadein.htm');
    d.add(t++,anim,'Sequence','animations/sequence.htm');
    d.add(t++,anim,'CSS3 Transitions','animations/css3_animations.htm');
var data=d.add(t++,0,'Data Sources','');
    d.add(t++,data,'From Array','sources/fromarray.htm');
    d.add(t++,data,'From Text','sources/FromText.htm');
    d.add(t++,data,'From Table','sources/FromTable.htm');
    d.add(t++,data,'From URL','sources/FromURL.htm');
    d.add(t++,data,'From Series','series/datasource.htm');
    d.add(t++,data,'From XML','sources/fromxml.htm');
    d.add(t++,data,'From JSON','sources/fromjson.htm');
    d.add(t++,data,'Realtime','sources/realtime.htm');
    d.add(t++,data,'From Typed Array','sources/fromtypedarray.htm');
    d.add(t++,data,'DateTime data','sources/datetime.htm');
    d.add(t++,data,'Yahoo Finance','sources/fromYahooFinance.htm');
    d.add(t++,data,'Weather Underground','sources/fromWUnderground.htm');
    d.add(t++,data,'Battery Level','sources/battery.htm');
    d.add(t++,data,'Parse.com objects','sources/parse_com.html');
var im=d.add(t++,0,'Images','basic/BackImage.htm');
    d.add(t++,im,'To PNG and JPEG','export/ToPNG.htm');
var editor=d.add(t++,0,'Chart Editor','editor/ChartEditor.htm');
    d.add(t++,editor,'Modal Editor','editor/modaleditor.htm');
var dash=d.add(t++,0,'Dashboards','');
    d.add(t++,dash,'Multi-Dim Tutorial','dashboard/tutorial/index.htm');
    d.add(t++,dash,'Demographics','dashboard/demographics.htm');
    d.add(t++,dash,'Product Sales','dashboard/productSales.htm');
    d.add(t++,dash,'Geo mapping','dashboard/geo_series.htm');		
var webgl=d.add(t++,0,'WebGL&trade; 3D','canvas/webgl/index.html');
    d.add(t++,webgl,'Basic 3D','canvas/webgl/basic_3d.htm');
    d.add(t++,webgl,'Advanced','canvas/webgl/threejs_example.htm');
    d.add(t++,webgl,'Maps 3D','canvas/webgl/maps_3d.htm');

    d.add(t++,0,'Chart Generator','generator/index.html');

var other=d.add(t++,0,'Other','');
    d.add(t++,other,'Annotations','extra/annotations.htm');
    d.add(t++,other,'Buttons','extra/buttons.htm');
    d.add(t++,other,'Tool tips','extra/ToolTips.htm');
    d.add(t++,other,'CSS Tool tips','extra/domToolTips.htm');
      d.add(t++,other,'Tips with Charts','extra/domToolTips_SubChart.htm');
    var cu=d.add(t++,other,'Cursor Tool','extra/CursorTool.htm');
        d.add(t++,cu,'Cursor Tool Interpolate','extra/CursorTool_Interpolate.htm');
    d.add(t++,other,'Floor reflection','extra/floorreflection.htm');
    var pa=d.add(t++,other,'Panel','basic/PanelShadow.htm');
        d.add(t++,pa,'Transparent','basic/Transparent.htm');
        d.add(t++,pa,'Full page align','basic/canvasalign.htm');
    d.add(t++,other,'Title and Footer','basic/TitleFooter.htm');
    d.add(t++,other,'Slider','extra/slider.htm');
    var scro=d.add(t++,other,'Series Scroller','extra/scroller.htm');
      d.add(t++,scro,'Datetime Scroller','extra/scroller_datetime.htm');
    var canv=d.add(t++,other,'Canvas','');
      d.add(t++,canv,'Custom Painting','canvas/custom_paint.htm');
      d.add(t++,canv,'Percent Size and Auto Resize','canvas/size_percent_resize.htm');
var plug=d.add(t++,0,'Plugins','plugins/plugins.htm');
    d.add(t++,plug,'JQuery TeeChart','plugins/jquery/teechart_jquery.htm');
    d.add(t++,plug,'Embarcadero HTML5 Builder','http://steema.com/files/public/teechart/html5/plugins/embarcadero/html5builder/demos/2012.09.30.1/client');
    d.add(t++,plug,'Microsoft TypeScript','plugins/typescript/index.htm');
    d.add(t++,plug,'Microsoft Visual Studio 2012','http://www.nuget.org/packages/TeeChart');
    d.add(t++,plug,'Node.js package','https://npmjs.org/package/TeeChart');
    d.add(t++,plug,'Google Gadget','extra/google_gadget.htm');
    d.add(t++,plug,'WordPress','http://steema.us/wp');
    d.add(t++,plug,'Drupal','http://steema.us/drupal');
    d.add(t++,plug,'Joomla','http://steema.us/joomla25');
    d.add(t++,plug,'Smart Mobile Studio','http://op4js.optimalesystemer.no/2012/04/26/steema-teechart-converted-to-smart');
    d.add(t++,plug,'Three.js WebGL 3D','canvas/webgl/index.html');
var testing=d.add(t++,0,'Unit Tests','tests/index.html');
document.write(d);


