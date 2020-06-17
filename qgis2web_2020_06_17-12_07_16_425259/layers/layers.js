var wms_layers = [];


        var lyr_HYBRIDGOOGLE_0 = new ol.layer.Tile({
            'title': 'HYBRID GOOGLE',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_splitmaps_1 = new ol.format.GeoJSON();
var features_splitmaps_1 = format_splitmaps_1.readFeatures(json_splitmaps_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_splitmaps_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_splitmaps_1.addFeatures(features_splitmaps_1);
var lyr_splitmaps_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_splitmaps_1, 
                style: style_splitmaps_1,
                interactive: true,
    title: 'split maps<br />\
    <img src="styles/legend/splitmaps_1_0.png" /> 06/22/2020<br />\
    <img src="styles/legend/splitmaps_1_1.png" /> 06/23/2020<br />\
    <img src="styles/legend/splitmaps_1_2.png" /> 06/24/2020<br />\
    <img src="styles/legend/splitmaps_1_3.png" /> 06/25/2020<br />\
    <img src="styles/legend/splitmaps_1_4.png" /> <br />'
        });

lyr_HYBRIDGOOGLE_0.setVisible(true);lyr_splitmaps_1.setVisible(true);
var layersList = [lyr_HYBRIDGOOGLE_0,lyr_splitmaps_1];
lyr_splitmaps_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'sy': 'sy', 'gals': 'gals', 'group': 'group', 'date': 'date', });
lyr_splitmaps_1.set('fieldImages', {'ogc_fid': 'TextEdit', 'sy': 'Range', 'gals': 'Range', 'group': 'TextEdit', 'date': 'TextEdit', });
lyr_splitmaps_1.set('fieldLabels', {'ogc_fid': 'no label', 'sy': 'no label', 'gals': 'no label', 'group': 'no label', 'date': 'header label', });
lyr_splitmaps_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});