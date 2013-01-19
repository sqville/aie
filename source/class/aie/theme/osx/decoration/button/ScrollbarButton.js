/* ************************************************************************

   AIE - Apperance Is Everything

   http://www.sqville.com/aie

   Copyright:
     2008 SQville, Austin, TX USA http://www.sqville.com

   License:
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Chris Eskew (chris.eskew@sqville.com)

************************************************************************ */

/**
 * 
 */
qx.Class.define("aie.theme.osx.decoration.button.ScrollbarButton",
{
  extend : qx.core.Object,
  
  implement : [qx.ui.decoration.IDecorator],
  
    /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {	
	/** Directs Painter on how to paint the Decorator **/
    statename :
    {
      check : "String",
      nullable : true,
	  themeable : true
    }
  },
  
  
  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param width {Integer} Width of the border
   * @param style {String} Any supported border style
   * @param color {Color} The border color
   */
  construct : function()
  {
    this.base(arguments);
  },

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
  	// interface implementation
    getMarkup : function()
    {
		var self = this.self(arguments);
		
  		var aiebankdefaultstdbutton = self.aiebankdefaultstdbutton;
		var aiebankstdbuttonhov = self.aiebankstdbuttonhov;
		var aiebankdstdbuttonpressed = self.aiebankdstdbuttonpressed;
		var aiebankdstdbuttonfocused = self.aiebankdstdbuttonfocused;
		var aiebankdstdbuttondisabled = self.aiebankdstdbuttondisabled;
				
		var dechtml;	
		var aiecanvasdiv;
		
		switch (this.getStatename()) {
			case "default-up":
				if (!aiebankdefaultstdbutton) {
  					aiebankdefaultstdbutton = self.aiebankdefaultstdbutton = this._generateBank("up", "default");
  				}
				dechtml = aiebankdefaultstdbutton;
				break;
				
			case "pressed":
				if (!aiebankdstdbuttonpressed) {
  					aiebankdstdbuttonpressed = self.aiebankdstdbuttonpressed = this._generateBank("na", "default-pressed");
  				}
				dechtml = aiebankdstdbuttonpressed;
				break;
			
			case "hovered":
				if (!aiebankstdbuttonhov) {
  					aiebankstdbuttonhov = self.aiebankstdbuttonhov = this._generateBank("na", "default-hovered");
  				}
				dechtml = aiebankstdbuttonhov;
				break;
				
			case "focused":
				if (!aiebankdstdbuttonfocused) {
  					aiebankdstdbuttonfocused = self.aiebankdstdbuttonfocused = this._generateBank("na", "default-focused");
  				}
				dechtml = aiebankdstdbuttonfocused;
				break;
				
			case "disabled":
				if (!aiebankdstdbuttondisabled) {
  					aiebankdstdbuttondisabled = self.aiebankdstdbuttondisabled = this._generateBank("na", "default-disabled");
  				}
				dechtml = aiebankdstdbuttondisabled;
				break;
		}
		
		//aiecanvasdiv = "<div style='width:100%;height:100%;position:absolute;overflow:hidden;left:" + aiechkleft + ";top:" + aiechktop + "'>" + dechtml + "</div>";
		aiecanvasdiv = "<div style='position:absolute;overflow:hidden'>" + dechtml + "</div>";

	  return aiecanvasdiv;	  
	  
    },


     // interface implementation
    resize : function(element, width, height)
    {
	  element.style.width = width + "px";
      element.style.height = height + "px";
    },


    // interface implementation
    tint : function(element, bgcolor)
    {

      /*var Color = qx.theme.manager.Color.getInstance();

      if (bgcolor == null) {
        bgcolor = "yellow";
      }

      element.style.backgroundColor = Color.resolve(bgcolor) || "";*/

    },


    // overridden
    __insets :
    {
      top : 0,
      right : 0,
      bottom : 0,
      left : 0
    },


    // interface implementation
    getInsets : function() {
      return this.__insets;
    },
	
	_generateBank : function(direction, s)
	{
	  var fh_str = "";
	  
	  var painter1 = new aie.theme.Painter();
	  
	  switch (s){
	  	case "default" :
	  		var h_wltb_op = [];
	  		h_wltb_op.push([1,0,0,0,227,227,227,.24]);
	  		
	  		var h_wltb = [];
		  	h_wltb.push([1,1,0,0,227,227,227],
			  	[1,2,0,0,231,231,231],
			  	[1,3,0,0,237,237,237],
			  	[4,4,0,0,239,239,239],
			  	[1,8,0,0,240,240,240],
			  	[1,9,0,0,239,239,239],
			  	[4,10,0,0,240,240,240],
			  	[1,14,0,0,241,241,241],
			  	[1,15,0,0,242,242,242],
			  	[1,16,0,0,234,234,234]);
		  	
		  	var fh = [];
			fh_str = fh.concat(
				h_wltb_op.map(painter1._wltb_op),
				h_wltb.map(painter1._wltb)
			).join("");
	  	
	  	break;
	  	
	  	case "horizontal" :
	  	
	  	break;
	  }
	  
	  return fh_str;
	}
  }
});
