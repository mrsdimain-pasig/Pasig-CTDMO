ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([13468833.128021, 1633325.561728, 13488199.428385, 1644531.108465]);
var wms_layers = [];


        var lyr_PositronCartoDB_0 = new ol.layer.Tile({
            'title': 'Positron CartoDB',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_Adm3WithoutPasig_1 = new ol.format.GeoJSON();
var features_Adm3WithoutPasig_1 = format_Adm3WithoutPasig_1.readFeatures(json_Adm3WithoutPasig_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Adm3WithoutPasig_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adm3WithoutPasig_1.addFeatures(features_Adm3WithoutPasig_1);
var lyr_Adm3WithoutPasig_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Adm3WithoutPasig_1, 
                style: style_Adm3WithoutPasig_1,
                popuplayertitle: 'Adm3WithoutPasig',
                interactive: false,
                title: '<img src="styles/legend/Adm3WithoutPasig_1.png" /> Adm3WithoutPasig'
            });
var format_BarangayBoundary_2 = new ol.format.GeoJSON();
var features_BarangayBoundary_2 = format_BarangayBoundary_2.readFeatures(json_BarangayBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BarangayBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BarangayBoundary_2.addFeatures(features_BarangayBoundary_2);
var lyr_BarangayBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BarangayBoundary_2, 
                style: style_BarangayBoundary_2,
                popuplayertitle: 'Barangay Boundary',
                interactive: true,
                title: '<img src="styles/legend/BarangayBoundary_2.png" /> Barangay Boundary'
            });
var format_PasigCityBoundary_3 = new ol.format.GeoJSON();
var features_PasigCityBoundary_3 = format_PasigCityBoundary_3.readFeatures(json_PasigCityBoundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PasigCityBoundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PasigCityBoundary_3.addFeatures(features_PasigCityBoundary_3);
var lyr_PasigCityBoundary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PasigCityBoundary_3, 
                style: style_PasigCityBoundary_3,
                popuplayertitle: 'Pasig City Boundary',
                interactive: false,
                title: '<img src="styles/legend/PasigCityBoundary_3.png" /> Pasig City Boundary'
            });
var format_RoadNetwork_4 = new ol.format.GeoJSON();
var features_RoadNetwork_4 = format_RoadNetwork_4.readFeatures(json_RoadNetwork_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadNetwork_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadNetwork_4.addFeatures(features_RoadNetwork_4);
var lyr_RoadNetwork_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadNetwork_4, 
                style: style_RoadNetwork_4,
                popuplayertitle: 'Road Network',
                interactive: true,
                title: 'Road Network'
            });
var format_ExistingBikeLanesClass1_5 = new ol.format.GeoJSON();
var features_ExistingBikeLanesClass1_5 = format_ExistingBikeLanesClass1_5.readFeatures(json_ExistingBikeLanesClass1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingBikeLanesClass1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingBikeLanesClass1_5.addFeatures(features_ExistingBikeLanesClass1_5);
var lyr_ExistingBikeLanesClass1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingBikeLanesClass1_5, 
                style: style_ExistingBikeLanesClass1_5,
                popuplayertitle: 'Existing Bike Lanes — Class 1',
                interactive: true,
                title: '<img src="styles/legend/ExistingBikeLanesClass1_5.png" /> Existing Bike Lanes — Class 1'
            });
var format_ExistingBikeLanesClass2_6 = new ol.format.GeoJSON();
var features_ExistingBikeLanesClass2_6 = format_ExistingBikeLanesClass2_6.readFeatures(json_ExistingBikeLanesClass2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingBikeLanesClass2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingBikeLanesClass2_6.addFeatures(features_ExistingBikeLanesClass2_6);
var lyr_ExistingBikeLanesClass2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingBikeLanesClass2_6, 
                style: style_ExistingBikeLanesClass2_6,
                popuplayertitle: 'Existing Bike Lanes — Class 2',
                interactive: true,
                title: '<img src="styles/legend/ExistingBikeLanesClass2_6.png" /> Existing Bike Lanes — Class 2'
            });
var format_ExistingBikeLanesClass3_7 = new ol.format.GeoJSON();
var features_ExistingBikeLanesClass3_7 = format_ExistingBikeLanesClass3_7.readFeatures(json_ExistingBikeLanesClass3_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingBikeLanesClass3_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingBikeLanesClass3_7.addFeatures(features_ExistingBikeLanesClass3_7);
var lyr_ExistingBikeLanesClass3_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingBikeLanesClass3_7, 
                style: style_ExistingBikeLanesClass3_7,
                popuplayertitle: 'Existing Bike Lanes — Class 3',
                interactive: true,
                title: '<img src="styles/legend/ExistingBikeLanesClass3_7.png" /> Existing Bike Lanes — Class 3'
            });
var group_ExistingBikeLanes = new ol.layer.Group({
                                layers: [lyr_ExistingBikeLanesClass1_5,lyr_ExistingBikeLanesClass2_6,lyr_ExistingBikeLanesClass3_7,],
                                fold: 'close',
                                title: 'Existing Bike Lanes'});
var group_Boundary = new ol.layer.Group({
                                layers: [lyr_Adm3WithoutPasig_1,lyr_BarangayBoundary_2,lyr_PasigCityBoundary_3,],
                                fold: 'close',
                                title: 'Boundary'});
var group_Hazards = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Hazards'});
var group_BaseMap = new ol.layer.Group({
                                layers: [lyr_PositronCartoDB_0,],
                                fold: 'close',
                                title: 'Base Map'});
var group_InsetMap = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Inset Map'});

lyr_PositronCartoDB_0.setVisible(true);lyr_Adm3WithoutPasig_1.setVisible(false);lyr_BarangayBoundary_2.setVisible(true);lyr_PasigCityBoundary_3.setVisible(false);lyr_RoadNetwork_4.setVisible(true);lyr_ExistingBikeLanesClass1_5.setVisible(true);lyr_ExistingBikeLanesClass2_6.setVisible(true);lyr_ExistingBikeLanesClass3_7.setVisible(true);
var layersList = [group_BaseMap,group_Boundary,lyr_RoadNetwork_4,group_ExistingBikeLanes];
lyr_Adm3WithoutPasig_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM3_EN': 'ADM3_EN', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM3_REF': 'ADM3_REF', 'ADM3ALT1EN': 'ADM3ALT1EN', 'ADM3ALT2EN': 'ADM3ALT2EN', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_BarangayBoundary_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Code': 'Reg_Code', 'Reg_Name': 'Reg_Name', 'Pro_Code': 'Pro_Code', 'Province': 'Province', 'Mun_Code': 'Mun_Code', 'City/Munic': 'City/Munic', 'Bgy_Code': 'Bgy_Code', 'Barangay': 'Barangay', 'ALL': 'ALL', 'Areasqkm': 'Areasqkm', });
lyr_PasigCityBoundary_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'City/Munic': 'City/Munic', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM3_REF': 'ADM3_REF', 'ADM3ALT1EN': 'ADM3ALT1EN', 'ADM3ALT2EN': 'ADM3ALT2EN', 'Province': 'Province', 'ADM2_PCODE': 'ADM2_PCODE', 'Region': 'Region', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_RoadNetwork_4.set('fieldAliases', {'Name': 'Name', 'Length (m)': 'Length (m)', });
lyr_ExistingBikeLanesClass1_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ExistingBikeLanesClass2_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ExistingBikeLanesClass3_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Adm3WithoutPasig_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM3_REF': 'TextEdit', 'ADM3ALT1EN': 'TextEdit', 'ADM3ALT2EN': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_BarangayBoundary_2.set('fieldImages', {'OBJECTID': 'Range', 'Reg_Code': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Code': 'TextEdit', 'Province': 'TextEdit', 'Mun_Code': 'TextEdit', 'City/Munic': '', 'Bgy_Code': 'TextEdit', 'Barangay': 'TextEdit', 'ALL': 'Range', 'Areasqkm': 'TextEdit', });
lyr_PasigCityBoundary_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'City/Munic': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM3_REF': 'TextEdit', 'ADM3ALT1EN': 'TextEdit', 'ADM3ALT2EN': 'TextEdit', 'Province': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'Region': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_RoadNetwork_4.set('fieldImages', {'Name': 'TextEdit', 'Length (m)': 'TextEdit', });
lyr_ExistingBikeLanesClass1_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_ExistingBikeLanesClass2_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_ExistingBikeLanesClass3_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Adm3WithoutPasig_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM3_EN': 'no label', 'ADM3_PCODE': 'no label', 'ADM3_REF': 'no label', 'ADM3ALT1EN': 'no label', 'ADM3ALT2EN': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_BarangayBoundary_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Reg_Code': 'hidden field', 'Reg_Name': 'hidden field', 'Pro_Code': 'hidden field', 'Province': 'inline label - always visible', 'Mun_Code': 'hidden field', 'City/Munic': 'inline label - always visible', 'Bgy_Code': 'hidden field', 'Barangay': 'inline label - always visible', 'ALL': 'hidden field', 'Areasqkm': 'hidden field', });
lyr_PasigCityBoundary_3.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'City/Munic': 'inline label - always visible', 'ADM3_PCODE': 'hidden field', 'ADM3_REF': 'hidden field', 'ADM3ALT1EN': 'hidden field', 'ADM3ALT2EN': 'hidden field', 'Province': 'inline label - always visible', 'ADM2_PCODE': 'hidden field', 'Region': 'inline label - always visible', 'ADM1_PCODE': 'hidden field', 'ADM0_EN': 'hidden field', 'ADM0_PCODE': 'hidden field', 'date': 'hidden field', 'validOn': 'hidden field', 'validTo': 'hidden field', });
lyr_RoadNetwork_4.set('fieldLabels', {'Name': 'inline label - always visible', 'Length (m)': 'inline label - always visible', });
lyr_ExistingBikeLanesClass1_5.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_ExistingBikeLanesClass2_6.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_ExistingBikeLanesClass3_7.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_ExistingBikeLanesClass3_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});