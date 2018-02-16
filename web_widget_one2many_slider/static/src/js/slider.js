openerp.web_widget_one2many_slider=function(instance,module)
{
	var QWeb = instance.web.qweb;
	var _t = instance.web._t;

	instance.web.form.widgets = instance.web.form.widgets.extend(
	{
		'one2many_slider' : 'instance.web.form.RangeSlider',
	});

  
	instance.web.form.RangeSlider = instance.web.form.AbstractField.extend({
	    template: 'One2ManySlider',
	    get_render_data: function(ids){
	        var self = this;
	        var dataset = new instance.web.DataSetStatic(this, this.field.relation, self.build_context());
	        return dataset.name_get(ids);
	    },
	    
	    start: function () {
	    	this._super.apply(this, arguments);
	    	var self = this;
	    	this.alive(self.get_render_data(this.get('value'))).done(function(data) 
	    			{
	    				var field_name = _.map(data, function(o){return {key : o[1], value : o[0]}});
	    		    	var onChange = function(args) {
	    		    		return self.do_action({
	    			            type: 'ir.actions.act_window',
	    			            res_model: self.field.relation,
	    			            res_id: args.value,
	    			            view_mode:'form',
	    			            views: [[false, 'form']],
	    			            target:'current',

	    			        });
	    		    	};
	    		    	var MyRangeSlide = rangeslide("#rangeslide", {
	    		    	    enableLabelClick: true,
	    		    	    enableMarkerClick: true,
	    		    	    enableTrackClick: false,
	    		    	    data: field_name,
	    		    	    handlers: {
	    		    			"labelClicked": [onChange],
	    		    			"markerClicked" : [onChange],
	    		    		},
	    		    		showLabels: false,
	    		    		dataSource: "value",
	    		            labelsContent: "key",
	    		            valueIndicatorContent: "key",
	    		            highlightSelectedLabels: true,
	    		            showTrackMarkers: true,
	    		            showTicks: false,  
	    		            showValue: true,
	    		            valueIndicatorWidth: 120,
	    		            valueIndicatorHeight: 20,
	    		            //showTooltips: true, 
	    		            //tooltipsContent:"key",
	    		            //slideMode: "free",
	    		            
	    		    	});
	    			});
	    },
	});
}