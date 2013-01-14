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
qx.Class.define("aie.theme.win7.decoration.button.TabViewButton",
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
		var aiebankdefaultbuttonbtm = self.aiebankdefaultbuttonbtm;
		var aiebankbuttonbtmhov = self.aiebankbuttonbtmhov;
				
		var dechtml;	
		var aiecanvasdiv;
		
		switch (this.getStatename()) {
			case "default":
				if (!aiebankdefaultstdbutton) {
  					aiebankdefaultstdbutton = self.aiebankdefaultstdbutton = this._generateBank("na", "default");
  				}
				dechtml = aiebankdefaultstdbutton;
				break;
			
			case "hovered":
				if (!aiebankstdbuttonhov) {
  					aiebankstdbuttonhov = self.aiebankstdbuttonhov = this._generateBank("na", "default-hovered");
  				}
				dechtml = aiebankstdbuttonhov;
				break;
				
			case "defaultbtm":
				if (!aiebankdefaultbuttonbtm) {
  					aiebankdefaultbuttonbtm = self.aiebankdefaultbuttonbtm = this._generateBank("na", "defaultbtm");
  				}
				dechtml = aiebankdefaultbuttonbtm;
				break;
			
			case "hoveredbtm":
				if (!aiebankbuttonbtmhov) {
  					aiebankbuttonbtmhov = self.aiebankbuttonbtmhov = this._generateBank("na", "default-hoveredbtm");
  				}
				dechtml = aiebankbuttonbtmhov;
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
	
	_generateBank : function(area, s)
	{
	  var bp = new aie.theme.win7.painter.button.TabViewButton(); 
	  var str = "";
	  
	  str = bp.getDefaultButton(s);

	  return str;
	}
  }
});
