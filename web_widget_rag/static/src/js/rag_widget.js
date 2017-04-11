/*@(#)rag_widget.js
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
 Created:              2015-04-13 23:50:50
 Last modified:        2015-04-13 23:52:29

 Last Checkin:         $LastChangedDate$
 Last Author:          $LastChangedBy$
 Checked out Version:  $LastChangedRevision$
 ------------------------------------------------------------------------------
*/
openerp.web_widget_rag = function(instance) {
	
	instance.web.form.widgets.add('rag', 'instance.web.form.FieldRAG')
	
	instance.web.form.FieldRAG = instance.web.form.AbstractField.extend({
		template : "graphics_rag",
		render_value : function() {
			this._super(parent);
			var fieldval = this.get('value');
			this.$el.find("circle").css({fill:"black"})[0];//reset to unknown
			if (fieldval >= 0.0 && fieldval < 0.33)
			{
				this.$el.find("circle").css({fill:"green"})[0];
			}
			else if (fieldval >= 0.33 && fieldval < 0.66)
			{
				this.$el.find("circle").css({fill:"orange"})[0];
			}
			else if (fieldval >= 0.66)
			{
				this.$el.find("circle").css({fill:"red"})[0];
			}
			//alert(' ' + fieldval + ' ' + this.name)//for DEBUG only
		},
	});

}
