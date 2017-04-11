openerp.web_widget_file_browser = function(instance) {
	
	instance.web.form.widgets.add('file_browser', 'instance.web.form.FieldBROWSER')
	
	instance.web.form.FieldBROWSER = instance.web.form.AbstractField.extend(instance.web.form.ReinitializeFieldMixin, {
		template : "file_browser_template",
		events: {
	        'change': 'store_dom_value',
	    },
		render_value : function() {
			//this._super(parent);
			var full_path = this.get('value')
			if (this.get("effective_readonly")) {
				
		        this.$el.fileTree({
		            root: full_path,
		            script: '/web/connector/file_browser',
		            expandSpeed: 1000,
		            collapseSpeed: 1000,
		            multiFolder: false
		        }, function(file) {
		            alert(file);
		        });
			};
		},
	});

}