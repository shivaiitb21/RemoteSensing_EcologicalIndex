var wms_layers = [];


        var lyr_OpenStreetMapStandard_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Maharashtra_1 = new ol.format.GeoJSON();
var features_Maharashtra_1 = format_Maharashtra_1.readFeatures(json_Maharashtra_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Maharashtra_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Maharashtra_1.addFeatures(features_Maharashtra_1);
var lyr_Maharashtra_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Maharashtra_1, 
                style: style_Maharashtra_1,
                interactive: false,
                title: '<img src="styles/legend/Maharashtra_1.png" /> Maharashtra'
            });
var lyr_RSEIbasedchangedetection20152020_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "RSEI based change detection (2015-2020)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RSEIbasedchangedetection20152020_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8197199.947697, 2076962.577632, 8413199.834853, 2271339.341662]
                            })
                        });
var format_KarjatVillagewiseRSEI2015_3 = new ol.format.GeoJSON();
var features_KarjatVillagewiseRSEI2015_3 = format_KarjatVillagewiseRSEI2015_3.readFeatures(json_KarjatVillagewiseRSEI2015_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KarjatVillagewiseRSEI2015_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KarjatVillagewiseRSEI2015_3.addFeatures(features_KarjatVillagewiseRSEI2015_3);
var lyr_KarjatVillagewiseRSEI2015_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KarjatVillagewiseRSEI2015_3, 
                style: style_KarjatVillagewiseRSEI2015_3,
                interactive: true,
    title: 'Karjat Villagewise RSEI2015<br />\
    <img src="styles/legend/KarjatVillagewiseRSEI2015_3_0.png" /> 0.2 - 0.35 (Poor ecological status)<br />\
    <img src="styles/legend/KarjatVillagewiseRSEI2015_3_1.png" /> 0.35 - 0.38<br />\
    <img src="styles/legend/KarjatVillagewiseRSEI2015_3_2.png" /> 0.38 - 0.41<br />\
    <img src="styles/legend/KarjatVillagewiseRSEI2015_3_3.png" /> 0.41 - 0.43<br />\
    <img src="styles/legend/KarjatVillagewiseRSEI2015_3_4.png" /> 0.43 - 0.52 (Healthy ecological status)<br />'
        });
var format_KarjatVillagewiseRSEI2020_4 = new ol.format.GeoJSON();
var features_KarjatVillagewiseRSEI2020_4 = format_KarjatVillagewiseRSEI2020_4.readFeatures(json_KarjatVillagewiseRSEI2020_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KarjatVillagewiseRSEI2020_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KarjatVillagewiseRSEI2020_4.addFeatures(features_KarjatVillagewiseRSEI2020_4);
var lyr_KarjatVillagewiseRSEI2020_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KarjatVillagewiseRSEI2020_4, 
                style: style_KarjatVillagewiseRSEI2020_4,
                interactive: true,
    title: 'Karjat Villagewise RSEI2020<br />\
    <img src="styles/legend/KarjatVillagewiseRSEI2020_4_0.png" /> 0.2 - 0.35 (Poor ecological status)<br />\
    <img src="styles/legend/KarjatVillagewiseRSEI2020_4_1.png" /> 0.35 - 0.38<br />\
    <img src="styles/legend/KarjatVillagewiseRSEI2020_4_2.png" /> 0.38 - 0.41<br />\
    <img src="styles/legend/KarjatVillagewiseRSEI2020_4_3.png" /> 0.41 - 0.43<br />\
    <img src="styles/legend/KarjatVillagewiseRSEI2020_4_4.png" /> 0.43 - 0.52 (Healthy ecological status)<br />'
        });
var format_Jamkhed_VillagewiseRSEI2015_5 = new ol.format.GeoJSON();
var features_Jamkhed_VillagewiseRSEI2015_5 = format_Jamkhed_VillagewiseRSEI2015_5.readFeatures(json_Jamkhed_VillagewiseRSEI2015_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jamkhed_VillagewiseRSEI2015_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jamkhed_VillagewiseRSEI2015_5.addFeatures(features_Jamkhed_VillagewiseRSEI2015_5);
var lyr_Jamkhed_VillagewiseRSEI2015_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jamkhed_VillagewiseRSEI2015_5, 
                style: style_Jamkhed_VillagewiseRSEI2015_5,
                interactive: true,
    title: 'Jamkhed_Villagewise RSEI2015<br />\
    <img src="styles/legend/Jamkhed_VillagewiseRSEI2015_5_0.png" /> 0.2 - 0.35 (Poor ecological status)<br />\
    <img src="styles/legend/Jamkhed_VillagewiseRSEI2015_5_1.png" /> 0.35 - 0.38<br />\
    <img src="styles/legend/Jamkhed_VillagewiseRSEI2015_5_2.png" /> 0.38 - 0.41<br />\
    <img src="styles/legend/Jamkhed_VillagewiseRSEI2015_5_3.png" /> 0.41 - 0.43<br />\
    <img src="styles/legend/Jamkhed_VillagewiseRSEI2015_5_4.png" /> 0.43 - 0.515 (Healthy ecological status)<br />'
        });
var format_JamkhedVillagewiseRSEI2020_6 = new ol.format.GeoJSON();
var features_JamkhedVillagewiseRSEI2020_6 = format_JamkhedVillagewiseRSEI2020_6.readFeatures(json_JamkhedVillagewiseRSEI2020_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JamkhedVillagewiseRSEI2020_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JamkhedVillagewiseRSEI2020_6.addFeatures(features_JamkhedVillagewiseRSEI2020_6);
var lyr_JamkhedVillagewiseRSEI2020_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JamkhedVillagewiseRSEI2020_6, 
                style: style_JamkhedVillagewiseRSEI2020_6,
                interactive: true,
    title: 'Jamkhed Villagewise RSEI2020<br />\
    <img src="styles/legend/JamkhedVillagewiseRSEI2020_6_0.png" /> 0.2 - 0.35 (Poor ecological status)<br />\
    <img src="styles/legend/JamkhedVillagewiseRSEI2020_6_1.png" /> 0.35 - 0.38<br />\
    <img src="styles/legend/JamkhedVillagewiseRSEI2020_6_2.png" /> 0.38 - 0.41<br />\
    <img src="styles/legend/JamkhedVillagewiseRSEI2020_6_3.png" /> 0.41 - 0.43<br />\
    <img src="styles/legend/JamkhedVillagewiseRSEI2020_6_4.png" /> 0.43 - 0.515 (Healthy ecological status)<br />'
        });
var lyr_AhmednagarRSEI2015_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ahmednagar RSEI-2015",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AhmednagarRSEI2015_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8197199.879458, 2076963.127647, 8413199.778302, 2271339.504416]
                            })
                        });
var lyr_AhmedagarRSEI2020_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ahmedagar RSEI-2020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AhmedagarRSEI2020_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8197199.879458, 2076963.127647, 8413199.778302, 2271339.504416]
                            })
                        });
var format_AhmednagarDistrict_9 = new ol.format.GeoJSON();
var features_AhmednagarDistrict_9 = format_AhmednagarDistrict_9.readFeatures(json_AhmednagarDistrict_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AhmednagarDistrict_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AhmednagarDistrict_9.addFeatures(features_AhmednagarDistrict_9);
var lyr_AhmednagarDistrict_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AhmednagarDistrict_9, 
                style: style_AhmednagarDistrict_9,
                interactive: false,
                title: '<img src="styles/legend/AhmednagarDistrict_9.png" /> Ahmednagar District'
            });
var format_AhmednagarTalukas_10 = new ol.format.GeoJSON();
var features_AhmednagarTalukas_10 = format_AhmednagarTalukas_10.readFeatures(json_AhmednagarTalukas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AhmednagarTalukas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AhmednagarTalukas_10.addFeatures(features_AhmednagarTalukas_10);
var lyr_AhmednagarTalukas_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AhmednagarTalukas_10, 
                style: style_AhmednagarTalukas_10,
                interactive: false,
                title: '<img src="styles/legend/AhmednagarTalukas_10.png" /> Ahmednagar Talukas '
            });

lyr_OpenStreetMapStandard_0.setVisible(true);lyr_Maharashtra_1.setVisible(true);lyr_RSEIbasedchangedetection20152020_2.setVisible(true);lyr_KarjatVillagewiseRSEI2015_3.setVisible(true);lyr_KarjatVillagewiseRSEI2020_4.setVisible(true);lyr_Jamkhed_VillagewiseRSEI2015_5.setVisible(true);lyr_JamkhedVillagewiseRSEI2020_6.setVisible(true);lyr_AhmednagarRSEI2015_7.setVisible(true);lyr_AhmedagarRSEI2020_8.setVisible(true);lyr_AhmednagarDistrict_9.setVisible(true);lyr_AhmednagarTalukas_10.setVisible(true);
var layersList = [lyr_OpenStreetMapStandard_0,lyr_Maharashtra_1,lyr_RSEIbasedchangedetection20152020_2,lyr_KarjatVillagewiseRSEI2015_3,lyr_KarjatVillagewiseRSEI2020_4,lyr_Jamkhed_VillagewiseRSEI2015_5,lyr_JamkhedVillagewiseRSEI2020_6,lyr_AhmednagarRSEI2015_7,lyr_AhmedagarRSEI2020_8,lyr_AhmednagarDistrict_9,lyr_AhmednagarTalukas_10];
lyr_Maharashtra_1.set('fieldAliases', {'st_nm': 'st_nm', });
lyr_KarjatVillagewiseRSEI2015_3.set('fieldAliases', {'GML_ID': 'GML_ID', 'STNAME': 'STNAME', 'DTNAME': 'DTNAME', 'GPNAME': 'GPNAME', 'IPNAME': 'IPNAME', 'STCENSUS': 'STCENSUS', 'DTCENSUS': 'DTCENSUS', 'GPCODE': 'GPCODE', 'IPCODE': 'IPCODE', 'VILLNAME': 'VILLNAME', 'NEWCD2011': 'NEWCD2011', 'VLGCD2001': 'VLGCD2001', 'VLGCD2011': 'VLGCD2011', 'DISTFULL': 'DISTFULL', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'meanRSEI': 'meanRSEI', });
lyr_KarjatVillagewiseRSEI2020_4.set('fieldAliases', {'GML_ID': 'GML_ID', 'STNAME': 'STNAME', 'DTNAME': 'DTNAME', 'GPNAME': 'GPNAME', 'IPNAME': 'IPNAME', 'STCENSUS': 'STCENSUS', 'DTCENSUS': 'DTCENSUS', 'GPCODE': 'GPCODE', 'IPCODE': 'IPCODE', 'VILLNAME': 'VILLNAME', 'NEWCD2011': 'NEWCD2011', 'VLGCD2001': 'VLGCD2001', 'VLGCD2011': 'VLGCD2011', 'DISTFULL': 'DISTFULL', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'meanRSEI': 'meanRSEI', 'meanRSEI1': 'meanRSEI1', 'meanRSEIfi': 'meanRSEIfi', });
lyr_Jamkhed_VillagewiseRSEI2015_5.set('fieldAliases', {'GML_ID': 'GML_ID', 'STNAME': 'STNAME', 'DTNAME': 'DTNAME', 'GPNAME': 'GPNAME', 'IPNAME': 'IPNAME', 'STCENSUS': 'STCENSUS', 'DTCENSUS': 'DTCENSUS', 'GPCODE': 'GPCODE', 'IPCODE': 'IPCODE', 'VILLNAME': 'VILLNAME', 'NEWCD2011': 'NEWCD2011', 'VLGCD2001': 'VLGCD2001', 'VLGCD2011': 'VLGCD2011', 'DISTFULL': 'DISTFULL', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'meanRSEI': 'meanRSEI', });
lyr_JamkhedVillagewiseRSEI2020_6.set('fieldAliases', {'GML_ID': 'GML_ID', 'STNAME': 'STNAME', 'DTNAME': 'DTNAME', 'GPNAME': 'GPNAME', 'IPNAME': 'IPNAME', 'STCENSUS': 'STCENSUS', 'DTCENSUS': 'DTCENSUS', 'GPCODE': 'GPCODE', 'IPCODE': 'IPCODE', 'VILLNAME': 'VILLNAME', 'NEWCD2011': 'NEWCD2011', 'VLGCD2001': 'VLGCD2001', 'VLGCD2011': 'VLGCD2011', 'DISTFULL': 'DISTFULL', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'meanRSEI': 'meanRSEI', });
lyr_AhmednagarDistrict_9.set('fieldAliases', {'district_c': 'district_c', 'district_1': 'district_1', 'district_n': 'district_n', 'district_2': 'district_2', 'taluka_cod': 'taluka_cod', 'taluka_nam': 'taluka_nam', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_AhmednagarTalukas_10.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'ID_3': 'ID_3', 'NAME_3': 'NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'NL_NAME_3': 'NL_NAME_3', 'VARNAME_3': 'VARNAME_3', 'district_c': 'district_c', 'district_1': 'district_1', 'district_n': 'district_n', 'district_2': 'district_2', 'taluka_cod': 'taluka_cod', 'taluka_nam': 'taluka_nam', });
lyr_Maharashtra_1.set('fieldImages', {'st_nm': 'TextEdit', });
lyr_KarjatVillagewiseRSEI2015_3.set('fieldImages', {'GML_ID': 'TextEdit', 'STNAME': 'TextEdit', 'DTNAME': 'TextEdit', 'GPNAME': 'TextEdit', 'IPNAME': 'TextEdit', 'STCENSUS': 'Range', 'DTCENSUS': 'TextEdit', 'GPCODE': 'TextEdit', 'IPCODE': 'TextEdit', 'VILLNAME': 'TextEdit', 'NEWCD2011': 'TextEdit', 'VLGCD2001': 'TextEdit', 'VLGCD2011': 'TextEdit', 'DISTFULL': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'meanRSEI': 'TextEdit', });
lyr_KarjatVillagewiseRSEI2020_4.set('fieldImages', {'GML_ID': 'TextEdit', 'STNAME': 'TextEdit', 'DTNAME': 'TextEdit', 'GPNAME': 'TextEdit', 'IPNAME': 'TextEdit', 'STCENSUS': 'Range', 'DTCENSUS': 'TextEdit', 'GPCODE': 'TextEdit', 'IPCODE': 'TextEdit', 'VILLNAME': 'TextEdit', 'NEWCD2011': 'TextEdit', 'VLGCD2001': 'TextEdit', 'VLGCD2011': 'TextEdit', 'DISTFULL': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'meanRSEI': 'TextEdit', 'meanRSEI1': 'Range', 'meanRSEIfi': 'TextEdit', });
lyr_Jamkhed_VillagewiseRSEI2015_5.set('fieldImages', {'GML_ID': 'TextEdit', 'STNAME': 'TextEdit', 'DTNAME': 'TextEdit', 'GPNAME': 'TextEdit', 'IPNAME': 'TextEdit', 'STCENSUS': 'Range', 'DTCENSUS': 'TextEdit', 'GPCODE': 'TextEdit', 'IPCODE': 'TextEdit', 'VILLNAME': 'TextEdit', 'NEWCD2011': 'TextEdit', 'VLGCD2001': 'TextEdit', 'VLGCD2011': 'TextEdit', 'DISTFULL': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'meanRSEI': 'TextEdit', });
lyr_JamkhedVillagewiseRSEI2020_6.set('fieldImages', {'GML_ID': 'TextEdit', 'STNAME': 'TextEdit', 'DTNAME': 'TextEdit', 'GPNAME': 'TextEdit', 'IPNAME': 'TextEdit', 'STCENSUS': 'Range', 'DTCENSUS': 'TextEdit', 'GPCODE': 'TextEdit', 'IPCODE': 'TextEdit', 'VILLNAME': 'TextEdit', 'NEWCD2011': 'TextEdit', 'VLGCD2001': 'TextEdit', 'VLGCD2011': 'TextEdit', 'DISTFULL': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'meanRSEI': 'TextEdit', });
lyr_AhmednagarDistrict_9.set('fieldImages', {'district_c': 'TextEdit', 'district_1': 'TextEdit', 'district_n': 'TextEdit', 'district_2': 'TextEdit', 'taluka_cod': 'TextEdit', 'taluka_nam': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_AhmednagarTalukas_10.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'ID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'district_c': 'TextEdit', 'district_1': 'TextEdit', 'district_n': 'TextEdit', 'district_2': 'TextEdit', 'taluka_cod': 'TextEdit', 'taluka_nam': 'TextEdit', });
lyr_Maharashtra_1.set('fieldLabels', {'st_nm': 'no label', });
lyr_KarjatVillagewiseRSEI2015_3.set('fieldLabels', {'GML_ID': 'no label', 'STNAME': 'no label', 'DTNAME': 'no label', 'GPNAME': 'no label', 'IPNAME': 'no label', 'STCENSUS': 'no label', 'DTCENSUS': 'header label', 'GPCODE': 'no label', 'IPCODE': 'no label', 'VILLNAME': 'header label', 'NEWCD2011': 'no label', 'VLGCD2001': 'no label', 'VLGCD2011': 'no label', 'DISTFULL': 'no label', '_count': 'no label', '_sum': 'no label', '_mean': 'no label', 'meanRSEI': 'inline label', });
lyr_KarjatVillagewiseRSEI2020_4.set('fieldLabels', {'GML_ID': 'no label', 'STNAME': 'no label', 'DTNAME': 'no label', 'GPNAME': 'no label', 'IPNAME': 'no label', 'STCENSUS': 'no label', 'DTCENSUS': 'no label', 'GPCODE': 'no label', 'IPCODE': 'no label', 'VILLNAME': 'header label', 'NEWCD2011': 'no label', 'VLGCD2001': 'no label', 'VLGCD2011': 'no label', 'DISTFULL': 'no label', '_count': 'no label', '_sum': 'no label', '_mean': 'no label', 'meanRSEI': 'inline label', 'meanRSEI1': 'no label', 'meanRSEIfi': 'no label', });
lyr_Jamkhed_VillagewiseRSEI2015_5.set('fieldLabels', {'GML_ID': 'no label', 'STNAME': 'no label', 'DTNAME': 'no label', 'GPNAME': 'no label', 'IPNAME': 'no label', 'STCENSUS': 'no label', 'DTCENSUS': 'no label', 'GPCODE': 'no label', 'IPCODE': 'no label', 'VILLNAME': 'header label', 'NEWCD2011': 'no label', 'VLGCD2001': 'no label', 'VLGCD2011': 'no label', 'DISTFULL': 'no label', '_count': 'no label', '_sum': 'no label', '_mean': 'no label', 'meanRSEI': 'inline label', });
lyr_JamkhedVillagewiseRSEI2020_6.set('fieldLabels', {'GML_ID': 'no label', 'STNAME': 'no label', 'DTNAME': 'no label', 'GPNAME': 'no label', 'IPNAME': 'no label', 'STCENSUS': 'no label', 'DTCENSUS': 'no label', 'GPCODE': 'no label', 'IPCODE': 'no label', 'VILLNAME': 'header label', 'NEWCD2011': 'no label', 'VLGCD2001': 'no label', 'VLGCD2011': 'no label', 'DISTFULL': 'no label', '_count': 'no label', '_sum': 'no label', '_mean': 'no label', 'meanRSEI': 'inline label', });
lyr_AhmednagarDistrict_9.set('fieldLabels', {'district_c': 'no label', 'district_1': 'no label', 'district_n': 'no label', 'district_2': 'no label', 'taluka_cod': 'no label', 'taluka_nam': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_AhmednagarTalukas_10.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'ID_3': 'no label', 'NAME_3': 'inline label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'NL_NAME_3': 'no label', 'VARNAME_3': 'no label', 'district_c': 'no label', 'district_1': 'no label', 'district_n': 'no label', 'district_2': 'no label', 'taluka_cod': 'no label', 'taluka_nam': 'no label', });
lyr_AhmednagarTalukas_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});