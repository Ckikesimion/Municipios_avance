var wms_layers = [];

var format_Belice_0 = new ol.format.GeoJSON();
var features_Belice_0 = format_Belice_0.readFeatures(json_Belice_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Belice_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Belice_0.addFeatures(features_Belice_0);
var lyr_Belice_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Belice_0, 
                style: style_Belice_0,
                popuplayertitle: 'Belice',
                interactive: true,
                title: '<img src="styles/legend/Belice_0.png" /> Belice'
            });
var format_Municipal_Fsico_III_2025_1 = new ol.format.GeoJSON();
var features_Municipal_Fsico_III_2025_1 = format_Municipal_Fsico_III_2025_1.readFeatures(json_Municipal_Fsico_III_2025_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipal_Fsico_III_2025_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipal_Fsico_III_2025_1.addFeatures(features_Municipal_Fsico_III_2025_1);
var lyr_Municipal_Fsico_III_2025_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipal_Fsico_III_2025_1, 
                style: style_Municipal_Fsico_III_2025_1,
                popuplayertitle: 'Municipal_Físico_III_2025',
                interactive: true,
    title: 'Municipal_Físico_III_2025<br />\
    <img src="styles/legend/Municipal_Fsico_III_2025_1_0.png" /> 0 - 76.4<br />\
    <img src="styles/legend/Municipal_Fsico_III_2025_1_1.png" /> 76.4 - 86.8<br />\
    <img src="styles/legend/Municipal_Fsico_III_2025_1_2.png" /> 86.8 - 92<br />\
    <img src="styles/legend/Municipal_Fsico_III_2025_1_3.png" /> 92 - 96.3<br />\
    <img src="styles/legend/Municipal_Fsico_III_2025_1_4.png" /> 96.3 - 100<br />' });

lyr_Belice_0.setVisible(true);lyr_Municipal_Fsico_III_2025_1.setVisible(true);
var layersList = [lyr_Belice_0,lyr_Municipal_Fsico_III_2025_1];
lyr_Belice_0.set('fieldAliases', {'iso2': 'iso2', 'iso3': 'iso3', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'version': 'version', 'area_sqkm': 'area_sqkm', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm0_ref_n': 'adm0_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'Mensaje': 'Mensaje', 'dddddd': 'dddddd', 'aaaaaa': 'aaaaaa', });
lyr_Municipal_Fsico_III_2025_1.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'F_Código': 'F_Código', 'F_adm2_pco': 'F_adm2_pco', 'F_Municipi': 'F_Municipi', 'F_Departam': 'F_Departam', 'F_Vigente': 'F_Vigente', 'F_Devengad': 'F_Devengad', 'F_Resultad': 'F_Resultad', 'F_Result_1': 'F_Result_1', 'AliasFísi': 'AliasFísi', });
lyr_Belice_0.set('fieldImages', {'iso2': 'TextEdit', 'iso3': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'version': 'TextEdit', 'area_sqkm': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm0_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'Mensaje': 'TextEdit', 'dddddd': 'TextEdit', 'aaaaaa': 'TextEdit', });
lyr_Municipal_Fsico_III_2025_1.set('fieldImages', {'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'F_Código': 'TextEdit', 'F_adm2_pco': 'TextEdit', 'F_Municipi': 'TextEdit', 'F_Departam': 'TextEdit', 'F_Vigente': 'TextEdit', 'F_Devengad': 'TextEdit', 'F_Resultad': 'TextEdit', 'F_Result_1': 'TextEdit', 'AliasFísi': 'TextEdit', });
lyr_Belice_0.set('fieldLabels', {'iso2': 'hidden field', 'iso3': 'hidden field', 'adm0_name': 'hidden field', 'adm0_name1': 'hidden field', 'adm0_name2': 'hidden field', 'adm0_name3': 'hidden field', 'adm0_pcode': 'hidden field', 'valid_on': 'hidden field', 'valid_to': 'hidden field', 'version': 'hidden field', 'area_sqkm': 'hidden field', 'lang': 'hidden field', 'lang1': 'hidden field', 'lang2': 'hidden field', 'lang3': 'hidden field', 'adm0_ref_n': 'hidden field', 'center_lat': 'hidden field', 'center_lon': 'hidden field', 'Mensaje': 'no label', 'dddddd': 'no label', 'aaaaaa': 'no label', });
lyr_Municipal_Fsico_III_2025_1.set('fieldLabels', {'adm2_name': 'hidden field', 'adm2_name1': 'hidden field', 'adm2_name2': 'hidden field', 'adm2_name3': 'hidden field', 'adm2_pcode': 'hidden field', 'adm1_name': 'hidden field', 'adm1_name1': 'hidden field', 'adm1_name2': 'hidden field', 'adm1_name3': 'hidden field', 'adm1_pcode': 'hidden field', 'adm0_name': 'hidden field', 'adm0_name1': 'hidden field', 'adm0_name2': 'hidden field', 'adm0_name3': 'hidden field', 'adm0_pcode': 'hidden field', 'valid_on': 'hidden field', 'valid_to': 'hidden field', 'area_sqkm': 'hidden field', 'version': 'hidden field', 'lang': 'hidden field', 'lang1': 'hidden field', 'lang2': 'hidden field', 'lang3': 'hidden field', 'adm2_ref_n': 'hidden field', 'center_lat': 'hidden field', 'center_lon': 'hidden field', 'F_Código': 'hidden field', 'F_adm2_pco': 'hidden field', 'F_Municipi': 'no label', 'F_Departam': 'no label', 'F_Vigente': 'hidden field', 'F_Devengad': 'hidden field', 'F_Resultad': 'hidden field', 'F_Result_1': 'hidden field', 'AliasFísi': 'no label', });
lyr_Municipal_Fsico_III_2025_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});