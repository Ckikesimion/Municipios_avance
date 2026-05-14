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
var format_financiero_1_2026_1 = new ol.format.GeoJSON();
var features_financiero_1_2026_1 = format_financiero_1_2026_1.readFeatures(json_financiero_1_2026_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_financiero_1_2026_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_financiero_1_2026_1.addFeatures(features_financiero_1_2026_1);
var lyr_financiero_1_2026_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_financiero_1_2026_1, 
                style: style_financiero_1_2026_1,
                popuplayertitle: 'financiero_1_2026',
                interactive: true,
    title: 'financiero_1_2026<br />\
    <img src="styles/legend/financiero_1_2026_1_0.png" /> 0 - 0<br />\
    <img src="styles/legend/financiero_1_2026_1_1.png" /> 0 - 8.9<br />\
    <img src="styles/legend/financiero_1_2026_1_2.png" /> 8.9 - 12.6<br />\
    <img src="styles/legend/financiero_1_2026_1_3.png" /> 12.6 - 15<br />\
    <img src="styles/legend/financiero_1_2026_1_4.png" /> 15 - 17.7<br />\
    <img src="styles/legend/financiero_1_2026_1_5.png" /> 17.7 - 19.6<br />\
    <img src="styles/legend/financiero_1_2026_1_6.png" /> 19.6 - 22.4<br />\
    <img src="styles/legend/financiero_1_2026_1_7.png" /> 22.4 - 25.3<br />\
    <img src="styles/legend/financiero_1_2026_1_8.png" /> 25.3 - 29.3<br />\
    <img src="styles/legend/financiero_1_2026_1_9.png" /> 29.3 - 49.3<br />' });

lyr_Belice_0.setVisible(true);lyr_financiero_1_2026_1.setVisible(true);
var layersList = [lyr_Belice_0,lyr_financiero_1_2026_1];
lyr_Belice_0.set('fieldAliases', {'iso2': 'iso2', 'iso3': 'iso3', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'version': 'version', 'area_sqkm': 'area_sqkm', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm0_ref_n': 'adm0_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'Mensaje': 'Mensaje', 'dddddd': 'dddddd', 'aaaaaa': 'aaaaaa', });
lyr_financiero_1_2026_1.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'M_adm2_pco': 'M_adm2_pco', 'M_Municipi': 'M_Municipi', 'M_Departam': 'M_Departam', 'M_%financi': 'M_%financi', 'M_%Fisico': 'M_%Fisico', 'aliasfin': 'aliasfin', });
lyr_Belice_0.set('fieldImages', {'iso2': 'TextEdit', 'iso3': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'version': 'TextEdit', 'area_sqkm': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm0_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'Mensaje': 'TextEdit', 'dddddd': 'TextEdit', 'aaaaaa': 'TextEdit', });
lyr_financiero_1_2026_1.set('fieldImages', {'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'M_adm2_pco': 'TextEdit', 'M_Municipi': 'TextEdit', 'M_Departam': 'TextEdit', 'M_%financi': 'TextEdit', 'M_%Fisico': 'TextEdit', 'aliasfin': 'TextEdit', });
lyr_Belice_0.set('fieldLabels', {'iso2': 'hidden field', 'iso3': 'hidden field', 'adm0_name': 'hidden field', 'adm0_name1': 'hidden field', 'adm0_name2': 'hidden field', 'adm0_name3': 'hidden field', 'adm0_pcode': 'hidden field', 'valid_on': 'hidden field', 'valid_to': 'hidden field', 'version': 'hidden field', 'area_sqkm': 'hidden field', 'lang': 'hidden field', 'lang1': 'hidden field', 'lang2': 'hidden field', 'lang3': 'hidden field', 'adm0_ref_n': 'hidden field', 'center_lat': 'hidden field', 'center_lon': 'hidden field', 'Mensaje': 'no label', 'dddddd': 'no label', 'aaaaaa': 'no label', });
lyr_financiero_1_2026_1.set('fieldLabels', {'adm2_name': 'hidden field', 'adm2_name1': 'hidden field', 'adm2_name2': 'hidden field', 'adm2_name3': 'hidden field', 'adm2_pcode': 'hidden field', 'adm1_name': 'no label', 'adm1_name1': 'hidden field', 'adm1_name2': 'hidden field', 'adm1_name3': 'hidden field', 'adm1_pcode': 'hidden field', 'adm0_name': 'hidden field', 'adm0_name1': 'hidden field', 'adm0_name2': 'hidden field', 'adm0_name3': 'hidden field', 'adm0_pcode': 'hidden field', 'valid_on': 'hidden field', 'valid_to': 'hidden field', 'area_sqkm': 'hidden field', 'version': 'hidden field', 'lang': 'hidden field', 'lang1': 'hidden field', 'lang2': 'hidden field', 'lang3': 'hidden field', 'adm2_ref_n': 'hidden field', 'center_lat': 'hidden field', 'center_lon': 'hidden field', 'M_adm2_pco': 'hidden field', 'M_Municipi': 'no label', 'M_Departam': 'hidden field', 'M_%financi': 'hidden field', 'M_%Fisico': 'hidden field', 'aliasfin': 'no label', });
lyr_financiero_1_2026_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});