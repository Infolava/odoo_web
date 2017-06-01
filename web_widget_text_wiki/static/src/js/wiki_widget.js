/*@(#)wiki_widget.js
--------------------------------------------------------------------------------
    This file is part of TransALM

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
--------------------------------------------------------------------------------
 Project:        Trans-ALM
 Author:         <a href="mailto:hb@transprog.com">H. Bouzidi</a>
 Copyright:      © 2017 Infolava GmbH. All rights reserved.
 License:        GNU GENERAL PUBLIC LICENSE Version 3.0
 --------------------------------------------------------------------------------
 HeadURL:              $HeadURL$
 Created:              2015-04-13 23:50:50
 Last modified:        2017-04-17 05:17:55 AM

 Last Checkin:         $LastChangedDate$
 Last Author:          $LastChangedBy$
 Checked out Version:  $LastChangedRevision$
 ------------------------------------------------------------------------------
*/
openerp.web_widget_text_wiki = function(instance) {
	instance.web.form.widgets.add('wiki', 'instance.web_widget_text_wiki.wiki_widget')
	instance.web_widget_text_wiki.wiki_widget= instance.web.form.AbstractField.extend(instance.web.form.ReinitializeFieldMixin, {
		events: {
			'change textarea': 'store_dom_value',
		},
		template:"wiki_widget_template",
		split_wiki_uml : function(src){
			var regex_uml = /^@uml((?:.*\n*)*?)@enduml$/m;
			var token = [];
			while (src){
				if (src.indexOf('@enduml') != -1){
					if (cap = regex_uml.exec(src)) {
						if (cap.index == 0){
							src= src.substring(cap[0].length);
							token.push({
								type : 'uml',
								syntax : cap[1],
							});
							continue;
						}
						else{
							token.push({
								type : 'wiki',
								syntax : src.substring(0, cap.index),
							});
							token.push({
								type : 'uml',
								syntax : cap[1],
							});
							src= src.substring(cap.index + cap[0].length);
							continue;
						}
						continue;
					}
				else {
					token.push({
						type : 'wiki',
						syntax : src,
					});
					src = "";
					continue;
				}
				continue;
				}
				else{
					token.push({
						type : 'wiki',
						syntax : src,
					});
					src = "";
					continue;
				}
			}
			return token;
		},
		
		render_value : function() {
			if (this.get("effective_readonly")) {
					wiki_elements = this.split_wiki_uml(this.get('value'));
					var html_syntaxt = "";
					var canvas_ids = []
					for (i=0; i < wiki_elements.length; i++){
						switch (wiki_elements[i].type){
						case 'wiki' : {
							html_syntaxt += marked(wiki_elements[i].syntax);
							break;
						}
						case 'uml' : {
							html_syntaxt += "<canvas id='canvas" + i.toString() + "'/>";
							canvas_ids.push(i);
							break;
						}
						}
					}
					this.$el.html(html_syntaxt)
					if (canvas_ids != []){
						for (j=0; j < canvas_ids.length; j++){
							canvas = document.getElementById('canvas' + canvas_ids[j].toString());
							try {nomnoml.draw(canvas, wiki_elements[canvas_ids[j]].syntax);}
							catch (e) {
								alert('Invalid syntax for UML diagram in the field description');
							}
						}
					}
			} else {
				this.$("textarea").val(this.get("value") || '');
			}
		},
		commit_value: function () {
			if (! this.get("effective_readonly")) {
				this.store_dom_value();
			}
			return this._super();
		},
		store_dom_value: function () {
			this.internal_set_value(instance.web.parse_value(this.$("textarea").val(), this));
		},
	})
}
//eof wiki_widget.js
