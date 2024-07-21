ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-132.100804, -65.199867, 151.399177, 90.132599]);
var wms_layers = [];

var format_World_Countries_Generalized_0 = new ol.format.GeoJSON();
var features_World_Countries_Generalized_0 = format_World_Countries_Generalized_0.readFeatures(json_World_Countries_Generalized_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_World_Countries_Generalized_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_World_Countries_Generalized_0.addFeatures(features_World_Countries_Generalized_0);
var lyr_World_Countries_Generalized_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_World_Countries_Generalized_0, 
                style: style_World_Countries_Generalized_0,
                popuplayertitle: "World_Countries_Generalized",
                interactive: false,
                title: '<img src="styles/legend/World_Countries_Generalized_0.png" /> World_Countries_Generalized'
            });
var format_NodeCarreraescogidoporDuque_1 = new ol.format.GeoJSON();
var features_NodeCarreraescogidoporDuque_1 = format_NodeCarreraescogidoporDuque_1.readFeatures(json_NodeCarreraescogidoporDuque_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NodeCarreraescogidoporDuque_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NodeCarreraescogidoporDuque_1.addFeatures(features_NodeCarreraescogidoporDuque_1);
var lyr_NodeCarreraescogidoporDuque_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NodeCarreraescogidoporDuque_1, 
                style: style_NodeCarreraescogidoporDuque_1,
                popuplayertitle: "No de Carrera escogido por Duque",
                interactive: true,
                title: '<img src="styles/legend/NodeCarreraescogidoporDuque_1.png" /> No de Carrera escogido por Duque'
            });
var format_DeCarreraescogidoporDuque_2 = new ol.format.GeoJSON();
var features_DeCarreraescogidoporDuque_2 = format_DeCarreraescogidoporDuque_2.readFeatures(json_DeCarreraescogidoporDuque_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DeCarreraescogidoporDuque_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeCarreraescogidoporDuque_2.addFeatures(features_DeCarreraescogidoporDuque_2);
var lyr_DeCarreraescogidoporDuque_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeCarreraescogidoporDuque_2, 
                style: style_DeCarreraescogidoporDuque_2,
                popuplayertitle: "De Carrera escogido por Duque",
                interactive: true,
                title: '<img src="styles/legend/DeCarreraescogidoporDuque_2.png" /> De Carrera escogido por Duque'
            });
var format_NodeCarreraescogidoporPetro_3 = new ol.format.GeoJSON();
var features_NodeCarreraescogidoporPetro_3 = format_NodeCarreraescogidoporPetro_3.readFeatures(json_NodeCarreraescogidoporPetro_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NodeCarreraescogidoporPetro_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NodeCarreraescogidoporPetro_3.addFeatures(features_NodeCarreraescogidoporPetro_3);
var lyr_NodeCarreraescogidoporPetro_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NodeCarreraescogidoporPetro_3, 
                style: style_NodeCarreraescogidoporPetro_3,
                popuplayertitle: "No de Carrera escogido por Petro",
                interactive: true,
                title: '<img src="styles/legend/NodeCarreraescogidoporPetro_3.png" /> No de Carrera escogido por Petro'
            });
var format_DeCarreraescogidoporPetro_4 = new ol.format.GeoJSON();
var features_DeCarreraescogidoporPetro_4 = format_DeCarreraescogidoporPetro_4.readFeatures(json_DeCarreraescogidoporPetro_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DeCarreraescogidoporPetro_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeCarreraescogidoporPetro_4.addFeatures(features_DeCarreraescogidoporPetro_4);
var lyr_DeCarreraescogidoporPetro_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeCarreraescogidoporPetro_4, 
                style: style_DeCarreraescogidoporPetro_4,
                popuplayertitle: "De Carrera escogido por Petro",
                interactive: true,
                title: '<img src="styles/legend/DeCarreraescogidoporPetro_4.png" /> De Carrera escogido por Petro'
            });
var format_SinEmbajador_5 = new ol.format.GeoJSON();
var features_SinEmbajador_5 = format_SinEmbajador_5.readFeatures(json_SinEmbajador_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SinEmbajador_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SinEmbajador_5.addFeatures(features_SinEmbajador_5);
var lyr_SinEmbajador_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SinEmbajador_5, 
                style: style_SinEmbajador_5,
                popuplayertitle: "Sin Embajador",
                interactive: true,
                title: '<img src="styles/legend/SinEmbajador_5.png" /> Sin Embajador'
            });
var format_Consulados_6 = new ol.format.GeoJSON();
var features_Consulados_6 = format_Consulados_6.readFeatures(json_Consulados_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Consulados_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Consulados_6.addFeatures(features_Consulados_6);
var lyr_Consulados_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Consulados_6, 
                style: style_Consulados_6,
                popuplayertitle: "Consulados",
                interactive: true,
                title: '<img src="styles/legend/Consulados_6.png" /> Consulados'
            });

lyr_World_Countries_Generalized_0.setVisible(true);lyr_NodeCarreraescogidoporDuque_1.setVisible(true);lyr_DeCarreraescogidoporDuque_2.setVisible(true);lyr_NodeCarreraescogidoporPetro_3.setVisible(true);lyr_DeCarreraescogidoporPetro_4.setVisible(true);lyr_SinEmbajador_5.setVisible(true);lyr_Consulados_6.setVisible(true);
var layersList = [lyr_World_Countries_Generalized_0,lyr_NodeCarreraescogidoporDuque_1,lyr_DeCarreraescogidoporDuque_2,lyr_NodeCarreraescogidoporPetro_3,lyr_DeCarreraescogidoporPetro_4,lyr_SinEmbajador_5,lyr_Consulados_6];
lyr_World_Countries_Generalized_0.set('fieldAliases', {'FID': 'FID', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_NodeCarreraescogidoporDuque_1.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'ID': 'ID', 'Imp_No.': 'Imp_No.', 'Imp_Misión di': 'Mision Diplomatica', 'Imp_Country': 'Imp_Country', 'Imp_Dirección': 'Direccion Geografica', 'Imp_Nombre': 'Nombre', 'Imp_Tipo': 'Tipo', 'Imp_Géner': 'Genero', 'Imp_Número de': 'Numero', 'Imp_Fecha de d': 'Fecha', 'Imp_Gobierno': 'Gobierno', 'Imp_result_num': 'Imp_result_num', 'Imp_osm_id': 'Imp_osm_id', 'Imp_display_na': 'Imp_display_na', 'Imp_category': 'Imp_category', 'Imp_type': 'Imp_type', 'Imp_latlong': 'Imp_latlong', });
lyr_DeCarreraescogidoporDuque_2.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'ID': 'ID', 'Imp_No.': 'Imp_No.', 'Imp_Misión di': 'Mision Diplomatica', 'Imp_Country': 'Imp_Country', 'Imp_Dirección': 'Direccion Geografica', 'Imp_Nombre': 'Nombre', 'Imp_Tipo': 'Tipo', 'Imp_Géner': 'Genero', 'Imp_Número de': 'Numero', 'Imp_Fecha de d': 'Fecha', 'Imp_Gobierno': 'Gobierno', 'Imp_result_num': 'Imp_result_num', 'Imp_osm_id': 'Imp_osm_id', 'Imp_display_na': 'Imp_display_na', 'Imp_category': 'Imp_category', 'Imp_type': 'Imp_type', 'Imp_latlong': 'Imp_latlong', });
lyr_NodeCarreraescogidoporPetro_3.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'ID': 'ID', 'Imp_No.': 'Imp_No.', 'Imp_Misión di': 'Mision Diplomatica', 'Imp_Country': 'Imp_Country', 'Imp_Dirección': 'Direccion Geografica', 'Imp_Nombre': 'Nombre', 'Imp_Tipo': 'Tipo', 'Imp_Géner': 'Genero', 'Imp_Número de': 'Numero', 'Imp_Fecha de d': 'Fecha', 'Imp_Gobierno': 'Gobierno', 'Imp_result_num': 'Imp_result_num', 'Imp_osm_id': 'Imp_osm_id', 'Imp_display_na': 'Imp_display_na', 'Imp_category': 'Imp_category', 'Imp_type': 'Imp_type', 'Imp_latlong': 'Imp_latlong', });
lyr_DeCarreraescogidoporPetro_4.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'ID': 'ID', 'Imp_No.': 'Imp_No.', 'Imp_Misión di': 'Mision Diplomatica', 'Imp_Country': 'Imp_Country', 'Imp_Dirección': 'Direccion Geografica', 'Imp_Nombre': 'Nombre', 'Imp_Tipo': 'Tipo', 'Imp_Géner': 'Genero', 'Imp_Número de': 'Numero', 'Imp_Fecha de d': 'Fecha', 'Imp_Gobierno': 'Gobierno', 'Imp_result_num': 'Imp_result_num', 'Imp_osm_id': 'Imp_osm_id', 'Imp_display_na': 'Imp_display_na', 'Imp_category': 'Imp_category', 'Imp_type': 'Imp_type', 'Imp_latlong': 'Imp_latlong', });
lyr_SinEmbajador_5.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'ID': 'ID', 'Imp_No.': 'Imp_No.', 'Imp_Misión di': 'Mision Diplomatica', 'Imp_Country': 'Imp_Country', 'Imp_Dirección': 'Direccion Geografica', 'Imp_Nombre': 'Nombre', 'Imp_Tipo': 'Tipo', 'Imp_Géner': 'Genero', 'Imp_Número de': 'Numero', 'Imp_Fecha de d': 'Fecha', 'Imp_Gobierno': 'Gobierno', 'Imp_result_num': 'Imp_result_num', 'Imp_osm_id': 'Imp_osm_id', 'Imp_display_na': 'Imp_display_na', 'Imp_category': 'Imp_category', 'Imp_type': 'Imp_type', 'Imp_latlong': 'Imp_latlong', });
lyr_Consulados_6.set('fieldAliases', {'No': 'No', 'Consulado/': 'Consulado/', 'Embajada r': 'Embajada r', 'Circunscri': 'Circunscri', 'Dirección': 'Dirección', 'Nombre': 'Nombre', 'Tipo': 'Tipo', 'Cargo': 'Cargo', 'Categoría': 'Categoría', 'Número de': 'Número de', 'Fecha de d': 'Fecha de d', 'Gobierno': 'Gobierno', 'Género': 'Género', 'Correo ele': 'Correo ele', 'Teléfono': 'Teléfono', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_World_Countries_Generalized_0.set('fieldImages', {'FID': 'Range', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_NodeCarreraescogidoporDuque_1.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'ID': 'Range', 'Imp_No.': 'TextEdit', 'Imp_Misión di': 'TextEdit', 'Imp_Country': 'TextEdit', 'Imp_Dirección': 'TextEdit', 'Imp_Nombre': 'TextEdit', 'Imp_Tipo': 'TextEdit', 'Imp_Géner': 'TextEdit', 'Imp_Número de': 'TextEdit', 'Imp_Fecha de d': 'TextEdit', 'Imp_Gobierno': 'TextEdit', 'Imp_result_num': 'TextEdit', 'Imp_osm_id': 'TextEdit', 'Imp_display_na': 'TextEdit', 'Imp_category': 'TextEdit', 'Imp_type': 'TextEdit', 'Imp_latlong': 'TextEdit', });
lyr_DeCarreraescogidoporDuque_2.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'ID': 'Range', 'Imp_No.': 'TextEdit', 'Imp_Misión di': 'TextEdit', 'Imp_Country': 'TextEdit', 'Imp_Dirección': 'TextEdit', 'Imp_Nombre': 'TextEdit', 'Imp_Tipo': 'TextEdit', 'Imp_Géner': 'TextEdit', 'Imp_Número de': 'TextEdit', 'Imp_Fecha de d': 'TextEdit', 'Imp_Gobierno': 'TextEdit', 'Imp_result_num': 'TextEdit', 'Imp_osm_id': 'TextEdit', 'Imp_display_na': 'TextEdit', 'Imp_category': 'TextEdit', 'Imp_type': 'TextEdit', 'Imp_latlong': 'TextEdit', });
lyr_NodeCarreraescogidoporPetro_3.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'ID': 'Range', 'Imp_No.': 'TextEdit', 'Imp_Misión di': 'TextEdit', 'Imp_Country': 'TextEdit', 'Imp_Dirección': 'TextEdit', 'Imp_Nombre': 'TextEdit', 'Imp_Tipo': 'TextEdit', 'Imp_Géner': 'TextEdit', 'Imp_Número de': 'TextEdit', 'Imp_Fecha de d': 'TextEdit', 'Imp_Gobierno': 'TextEdit', 'Imp_result_num': 'TextEdit', 'Imp_osm_id': 'TextEdit', 'Imp_display_na': 'TextEdit', 'Imp_category': 'TextEdit', 'Imp_type': 'TextEdit', 'Imp_latlong': 'TextEdit', });
lyr_DeCarreraescogidoporPetro_4.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'ID': 'Range', 'Imp_No.': 'TextEdit', 'Imp_Misión di': 'TextEdit', 'Imp_Country': 'TextEdit', 'Imp_Dirección': 'TextEdit', 'Imp_Nombre': 'TextEdit', 'Imp_Tipo': 'TextEdit', 'Imp_Géner': 'TextEdit', 'Imp_Número de': 'TextEdit', 'Imp_Fecha de d': 'TextEdit', 'Imp_Gobierno': 'TextEdit', 'Imp_result_num': 'TextEdit', 'Imp_osm_id': 'TextEdit', 'Imp_display_na': 'TextEdit', 'Imp_category': 'TextEdit', 'Imp_type': 'TextEdit', 'Imp_latlong': 'TextEdit', });
lyr_SinEmbajador_5.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'ID': 'Range', 'Imp_No.': 'TextEdit', 'Imp_Misión di': 'TextEdit', 'Imp_Country': 'TextEdit', 'Imp_Dirección': 'TextEdit', 'Imp_Nombre': 'TextEdit', 'Imp_Tipo': 'TextEdit', 'Imp_Géner': 'TextEdit', 'Imp_Número de': 'TextEdit', 'Imp_Fecha de d': 'TextEdit', 'Imp_Gobierno': 'TextEdit', 'Imp_result_num': 'TextEdit', 'Imp_osm_id': 'TextEdit', 'Imp_display_na': 'TextEdit', 'Imp_category': 'TextEdit', 'Imp_type': 'TextEdit', 'Imp_latlong': 'TextEdit', });
lyr_Consulados_6.set('fieldImages', {'No': 'TextEdit', 'Consulado/': 'TextEdit', 'Embajada r': 'TextEdit', 'Circunscri': 'TextEdit', 'Dirección': 'TextEdit', 'Nombre': 'TextEdit', 'Tipo': 'TextEdit', 'Cargo': 'TextEdit', 'Categoría': 'TextEdit', 'Número de': 'TextEdit', 'Fecha de d': 'TextEdit', 'Gobierno': 'TextEdit', 'Género': 'TextEdit', 'Correo ele': 'TextEdit', 'Teléfono': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_World_Countries_Generalized_0.set('fieldLabels', {'FID': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_NodeCarreraescogidoporDuque_1.set('fieldLabels', {'fid': 'hidden field', 'COUNTRY': 'hidden field', 'ISO': 'hidden field', 'COUNTRYAFF': 'hidden field', 'AFF_ISO': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'ID': 'hidden field', 'Imp_No.': 'hidden field', 'Imp_Misión di': 'header label - always visible', 'Imp_Country': 'hidden field', 'Imp_Dirección': 'header label - always visible', 'Imp_Nombre': 'header label - always visible', 'Imp_Tipo': 'header label - always visible', 'Imp_Géner': 'header label - always visible', 'Imp_Número de': 'header label - always visible', 'Imp_Fecha de d': 'header label - always visible', 'Imp_Gobierno': 'header label - always visible', 'Imp_result_num': 'hidden field', 'Imp_osm_id': 'hidden field', 'Imp_display_na': 'hidden field', 'Imp_category': 'hidden field', 'Imp_type': 'hidden field', 'Imp_latlong': 'hidden field', });
lyr_DeCarreraescogidoporDuque_2.set('fieldLabels', {'fid': 'hidden field', 'COUNTRY': 'hidden field', 'ISO': 'hidden field', 'COUNTRYAFF': 'hidden field', 'AFF_ISO': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'ID': 'hidden field', 'Imp_No.': 'hidden field', 'Imp_Misión di': 'header label - always visible', 'Imp_Country': 'hidden field', 'Imp_Dirección': 'header label - always visible', 'Imp_Nombre': 'header label - always visible', 'Imp_Tipo': 'header label - always visible', 'Imp_Géner': 'header label - always visible', 'Imp_Número de': 'header label - always visible', 'Imp_Fecha de d': 'header label - always visible', 'Imp_Gobierno': 'header label - always visible', 'Imp_result_num': 'hidden field', 'Imp_osm_id': 'hidden field', 'Imp_display_na': 'hidden field', 'Imp_category': 'hidden field', 'Imp_type': 'hidden field', 'Imp_latlong': 'hidden field', });
lyr_NodeCarreraescogidoporPetro_3.set('fieldLabels', {'fid': 'hidden field', 'COUNTRY': 'hidden field', 'ISO': 'hidden field', 'COUNTRYAFF': 'hidden field', 'AFF_ISO': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'ID': 'hidden field', 'Imp_No.': 'hidden field', 'Imp_Misión di': 'header label - always visible', 'Imp_Country': 'hidden field', 'Imp_Dirección': 'header label - always visible', 'Imp_Nombre': 'header label - always visible', 'Imp_Tipo': 'header label - always visible', 'Imp_Géner': 'header label - always visible', 'Imp_Número de': 'header label - always visible', 'Imp_Fecha de d': 'header label - always visible', 'Imp_Gobierno': 'header label - always visible', 'Imp_result_num': 'hidden field', 'Imp_osm_id': 'hidden field', 'Imp_display_na': 'hidden field', 'Imp_category': 'hidden field', 'Imp_type': 'hidden field', 'Imp_latlong': 'hidden field', });
lyr_DeCarreraescogidoporPetro_4.set('fieldLabels', {'fid': 'hidden field', 'COUNTRY': 'hidden field', 'ISO': 'hidden field', 'COUNTRYAFF': 'hidden field', 'AFF_ISO': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'ID': 'hidden field', 'Imp_No.': 'hidden field', 'Imp_Misión di': 'header label - always visible', 'Imp_Country': 'hidden field', 'Imp_Dirección': 'header label - always visible', 'Imp_Nombre': 'header label - always visible', 'Imp_Tipo': 'header label - always visible', 'Imp_Géner': 'header label - always visible', 'Imp_Número de': 'header label - always visible', 'Imp_Fecha de d': 'header label - always visible', 'Imp_Gobierno': 'header label - always visible', 'Imp_result_num': 'hidden field', 'Imp_osm_id': 'hidden field', 'Imp_display_na': 'hidden field', 'Imp_category': 'hidden field', 'Imp_type': 'hidden field', 'Imp_latlong': 'hidden field', });
lyr_SinEmbajador_5.set('fieldLabels', {'fid': 'hidden field', 'COUNTRY': 'hidden field', 'ISO': 'hidden field', 'COUNTRYAFF': 'hidden field', 'AFF_ISO': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'ID': 'hidden field', 'Imp_No.': 'hidden field', 'Imp_Misión di': 'header label - always visible', 'Imp_Country': 'hidden field', 'Imp_Dirección': 'header label - always visible', 'Imp_Nombre': 'header label - always visible', 'Imp_Tipo': 'header label - always visible', 'Imp_Géner': 'header label - always visible', 'Imp_Número de': 'header label - always visible', 'Imp_Fecha de d': 'header label - always visible', 'Imp_Gobierno': 'header label - always visible', 'Imp_result_num': 'hidden field', 'Imp_osm_id': 'hidden field', 'Imp_display_na': 'hidden field', 'Imp_category': 'hidden field', 'Imp_type': 'hidden field', 'Imp_latlong': 'hidden field', });
lyr_Consulados_6.set('fieldLabels', {'No': 'hidden field', 'Consulado/': 'header label - always visible', 'Embajada r': 'header label - always visible', 'Circunscri': 'header label - always visible', 'Dirección': 'hidden field', 'Nombre': 'header label - always visible', 'Tipo': 'header label - always visible', 'Cargo': 'header label - always visible', 'Categoría': 'header label - always visible', 'Número de': 'hidden field', 'Fecha de d': 'hidden field', 'Gobierno': 'header label - visible with data', 'Género': 'hidden field', 'Correo ele': 'hidden field', 'Teléfono': 'hidden field', 'result_num': 'hidden field', 'osm_id': 'hidden field', 'display_na': 'hidden field', 'category': 'hidden field', 'type': 'hidden field', 'latlong': 'hidden field', });
lyr_Consulados_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});