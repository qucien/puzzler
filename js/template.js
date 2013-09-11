/**
 * template.
 * User: raytin
 * Date: 13-8-28
 */
module.exports = {
    style:
        '<style type="text/css">\n' +
            '\t.wid100{\n' +
                '\t\twidth: 100%;\n' +
                '\t\theight: auto;\n' +
                '\t\tmargin-left: auto;\n' +
                '\t\tmargin-right: auto;\n' +
            '\t}\n' +
            '\t.wid990{\n' +
                '\t\twidth: 990px;\n' +
                '\t\theight: auto;\n' +
                '\t\tmargin-left: auto;\n' +
                '\t\tmargin-right: auto;\n' +
                '\t\tposition: relative;\n' +
            '\t}\n' +
            '\t.ui-rect{\n' +
                '\t\tposition: absolute;\n' +
                '\t\tdisplay:inline-block;\n' +
                '\t\tbackground: url("https://i.alipayobjects.com/e/201309/11htyhgbGn.gif") repeat;\n' +
            '\t}\n' +
            '\t<%- classHeaders %>{\n' +
                '\t\tposition: absolute;\n' +
            '\t}\n' +
            '<% _.each(blockStyles, function(blockStyle) { %>' +
            '\t.ui-<%= blockStyle.name %>{\n' +
                '\t\twidth: <%= blockStyle.width %>px;\n' +
                '\t\theight: <%= blockStyle.height %>px;\n' +
                '\t\tbackground: url("img/section-<%= blockStyle.num %>.<%= blockStyle.format %>") center top no-repeat;\n' +
                '\t\tleft: <%= blockStyle.left %>px;\n' +
                '\t\ttop: <%= blockStyle.top %>px;\n' +
            '\t}\n' +
            '<% }); %>' +
        '</style>\n' +
        '<div class="wid100">\n' +
            '\t<div class="wid990">\n' +
                '<% _.each(blocks, function(block) { %>' +
                    '<% if(!block.rect){ %>' +
                    '\t\t<div class="ui-<%= block.name %>"></div>\n' +
                    '<% }else{ %>' +
                    '\t\t<div class="ui-<%= block.name %>">\n' +
                            '<% _.each(block.rect, function(rect) { %>' +
                            '\t\t\t<a href="<%= rect.rect.url %>"<% if(rect.rect.open){ %> target="_blank"<% }; %> class="ui-rect" style="width: <%= rect.rect.width %>px; height: <%= rect.rect.height %>px; left: <%= rect.left %>px; top: <%= rect.top %>px;"></a>\n' +
                            '<% }); %>' +
                    '\t\t</div>\n' +
                    '<% }; %>' +
                '<% }); %>' +
            '\t</div>\n' +
        '</div>\n',
    styleBig:
        '<style type="text/css">\n' +
            '\t.wid100{\n' +
                '\t\twidth: 100%;\n' +
                '\t\theight: auto;\n' +
                '\t\tmargin-left: auto;\n' +
                '\t\tmargin-right: auto;\n' +
            '\t}\n' +
            '\t.wid990{\n' +
                '\t\twidth: 990px;\n' +
                '\t\theight: auto;\n' +
                '\t\tmargin-left: auto;\n' +
                '\t\tmargin-right: auto;\n' +
                '\t\tposition: relative;\n' +
            '\t}\n' +
            '<% _.each(blockStyles, function(blockStyle) { %>' +
            '\t.ui-<%= blockStyle.name %>{\n' +
                '\t\theight: <%= blockStyle.height %>px;\n' +
                '\t\tbackground: url("img/section-<%= blockStyle.num %>.<%= blockStyle.format %>") center top no-repeat;\n' +
            '\t}\n' +
            '<% }); %>' +
        '</style>\n' +
        '<% _.each(blocks, function(block) { %>' +
        '<div class="ui-<%= block.name %> wid100">\n' +
            '\t<div class="wid990"></div>\n' +
        '</div>\n' +
        '<% }); %>'
};