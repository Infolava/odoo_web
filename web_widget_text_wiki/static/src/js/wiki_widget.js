/*@(#)wiki_widget.js
 --------------------------------------------------------------------------------
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 --------------------------------------------------------------------------------
 Project:        Trans-ALM
 Author:         <a href="mailto:hb@transprog.com">H. Bouzidi</a>
 Copyright:        © 2015 Infolava. All rights reserved.
 License:
 --------------------------------------------------------------------------------
 HeadURL:              $HeadURL$
 Created:              2015-04-15 23:50:50
 Last modified:        2015-04-15 23:52:29

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
				/*if (this.get('value') == ""){
					//$("#our_canvas").removeClass("description_content_ro");
					//$("#our_canvas").addClass("default_border")
				}
				else {*/
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
							try {nomnoml.main(wiki_elements[canvas_ids[j]].syntax,'canvas' + canvas_ids[j].toString());}
							catch (e) {alert('Invalid syntax for UML diagram in the field description');}
						}
					}
				//}
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


			
