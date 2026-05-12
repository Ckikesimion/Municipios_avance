var wms_layers = [];

var format_Financiero_I_2025_0 = new ol.format.GeoJSON();
var features_Financiero_I_2025_0 = format_Financiero_I_2025_0.readFeatures(json_Financiero_I_2025_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Financiero_I_2025_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Financiero_I_2025_0.addFeatures(features_Financiero_I_2025_0);
var lyr_Financiero_I_2025_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Financiero_I_2025_0, 
                style: style_Financiero_I_2025_0,
                popuplayertitle: 'Financiero_I_2025',
                interactive: true,
    title: 'Financiero_I_2025<br />\
    <img src="styles/legend/Financiero_I_2025_0_0.png" /> 0 - 14.9<br />\
    <img src="styles/legend/Financiero_I_2025_0_1.png" /> 14.9 - 17.4<br />\
    <img src="styles/legend/Financiero_I_2025_0_2.png" /> 17.4 - 19.7<br />\
    <img src="styles/legend/Financiero_I_2025_0_3.png" /> 19.7 - 21.8<br />\
    <img src="styles/legend/Financiero_I_2025_0_4.png" /> 21.8 - 24.1<br />\
    <img src="styles/legend/Financiero_I_2025_0_5.png" /> 24.1 - 26.5<br />\
    <img src="styles/legend/Financiero_I_2025_0_6.png" /> 26.5 - 27.7<br />\
    <img src="styles/legend/Financiero_I_2025_0_7.png" /> 27.7 - 29.7<br />\
    <img src="styles/legend/Financiero_I_2025_0_8.png" /> 29.7 - 33.5<br />\
    <img src="styles/legend/Financiero_I_2025_0_9.png" /> 33.5 - 47.7<br />' });
var format_Belice_1 = new ol.format.GeoJSON();
var features_Belice_1 = format_Belice_1.readFeatures(json_Belice_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Belice_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Belice_1.addFeatures(features_Belice_1);
var lyr_Belice_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Belice_1, 
                style: style_Belice_1,
                popuplayertitle: 'Belice',
                interactive: true,
                title: '<img src="styles/legend/Belice_1.png" /> Belice'
            });

lyr_Financiero_I_2025_0.setVisible(true);lyr_Belice_1.setVisible(true);
var layersList = [lyr_Financiero_I_2025_0,lyr_Belice_1];
lyr_Financiero_I_2025_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Codigo': 'Codigo', 'Municipio': 'Municipio', 'OID_1': 'OID_1', 'OID_12': 'OID_12', 'Color': 'Color', 'Cod_Dep': 'Cod_Dep', 'Departamen': 'Departamen', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'AreaKm2': 'AreaKm2', 'Fina_% de': 'Fina_% de', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', 'alias': 'alias', });
lyr_Belice_1.set('fieldAliases', {'iso2': 'iso2', 'iso3': 'iso3', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'version': 'version', 'area_sqkm': 'area_sqkm', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm0_ref_n': 'adm0_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'Mensaje': 'Mensaje', 'dddddd': 'dddddd', 'aaaaaa': 'aaaaaa', });
lyr_Financiero_I_2025_0.set('fieldImages', {'OBJECTID': 'Range', 'Codigo': 'Range', 'Municipio': 'TextEdit', 'OID_1': 'Range', 'OID_12': 'Range', 'Color': 'TextEdit', 'Cod_Dep': 'Range', 'Departamen': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'AreaKm2': 'TextEdit', 'Fina_% de': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', 'alias': 'TextEdit', });
lyr_Belice_1.set('fieldImages', {'iso2': 'TextEdit', 'iso3': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'version': 'TextEdit', 'area_sqkm': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm0_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'Mensaje': 'TextEdit', 'dddddd': 'TextEdit', 'aaaaaa': 'TextEdit', });
lyr_Financiero_I_2025_0.set('fieldLabels', {'OBJECTID': 'hidden field', 'Codigo': 'hidden field', 'Municipio': 'no label', 'OID_1': 'hidden field', 'OID_12': 'hidden field', 'Color': 'hidden field', 'Cod_Dep': 'hidden field', 'Departamen': 'no label', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'AreaKm2': 'hidden field', 'Fina_% de': 'hidden field', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', 'alias': 'no label', });
lyr_Belice_1.set('fieldLabels', {'iso2': 'hidden field', 'iso3': 'hidden field', 'adm0_name': 'hidden field', 'adm0_name1': 'hidden field', 'adm0_name2': 'hidden field', 'adm0_name3': 'hidden field', 'adm0_pcode': 'hidden field', 'valid_on': 'hidden field', 'valid_to': 'hidden field', 'version': 'hidden field', 'area_sqkm': 'hidden field', 'lang': 'hidden field', 'lang1': 'hidden field', 'lang2': 'hidden field', 'lang3': 'hidden field', 'adm0_ref_n': 'hidden field', 'center_lat': 'hidden field', 'center_lon': 'hidden field', 'Mensaje': 'no label', 'dddddd': 'no label', 'aaaaaa': 'no label', });
lyr_Belice_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});