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
qx.Class.define("aie.theme.osx.decoration.button.TabViewButton",
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
		
  		var aiebankdefaultfirst = self.aiebankdefaultfirst;
		var aiebankcheckedfirst = self.aiebankcheckedfirst;
		var aiebankdefaultmiddle = self.aiebankdefaultmiddle;
		var aiebankcheckedmiddle = self.aiebankcheckedmiddle;
		var aiebankdefaultlast = self.aiebankdefaultlast;
		var aiebankcheckedlast = self.aiebankcheckedlast;
				
		var dechtml;	
		var aiecanvasdiv;
		
		switch (this.getStatename()) {
			case "default-first":
				if (!aiebankdefaultfirst) {
  					aiebankdefaultfirst = self.aiebankdefaultfirst = this._generateBank("na", "default-first");
  				}
				dechtml = aiebankdefaultfirst;
				break;
			
			case "checked-first":
				if (!aiebankcheckedfirst) {
  					aiebankcheckedfirst = self.aiebankcheckedfirst = this._generateBank("na", "checked-first");
  				}
				dechtml = aiebankcheckedfirst;
				break;
				
			case "default-middle":
				if (!aiebankdefaultmiddle) {
  					aiebankdefaultmiddle = self.aiebankdefaultmiddle = this._generateBank("na", "default-middle");
  				}
				dechtml = aiebankdefaultmiddle;
				break;
			
			case "checked-middle":
				if (!aiebankcheckedmiddle) {
  					aiebankcheckedmiddle = self.aiebankcheckedmiddle = this._generateBank("na", "checked-middle");
  				}
				dechtml = aiebankcheckedmiddle;
				break;
				
			case "default-last":
				if (!aiebankdefaultlast) {
  					aiebankdefaultlast = self.aiebankdefaultlast = this._generateBank("na", "default-last");
  				}
				dechtml = aiebankcheckedmiddle;
				break;
				
			case "checked-last":
				if (!aiebankcheckedlast) {
  					aiebankcheckedlast = self.aiebankcheckedlast = this._generateBank("na", "checked-last");
  				}
				dechtml = aiebankcheckedlast;
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
	  var bp = new aie.theme.osx.painter.button.TabViewButton(); 
	  var str = "";
	  
	  str = bp.getDefaultButton(s);

	  return str;
	}
  }
});
