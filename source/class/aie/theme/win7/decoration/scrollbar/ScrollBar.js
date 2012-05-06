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
qx.Class.define("aie.theme.win7.decoration.scrollbar.ScrollBar",
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
		
  		var aiebankscrollbarvertical = self.aiebankscrollbarvertical;
  		var aiebankscrollbarhorizontal = self.aiebankscrollbarhorizontal;
				
		var dechtml;	
		var wrappedhtml;
		
		switch (this.getStatename()) {
			case "vertical" :
				if (!aiebankscrollbarvertical) {
  					aiebankscrollbarvertical = self.aiebankscrollbarvertical = this._generateBank("default", "vertical");
  				}
  				dechtml = aiebankscrollbarvertical;
			
			break;
			
			case "horizontal" :
				if (!aiebankscrollbarhorizontal) {
  					aiebankscrollbarhorizontal = self.aiebankscrollbarhorizontal = this._generateBank("default", "horizontal");
  				}
				dechtml = aiebankscrollbarhorizontal;
			break;
			
			default :
				dechtml = "";
		}
		
		//wrappedhtml = "<div style='width:100%;height:100%;position:absolute;overflow:hidden;left:0px;top:0px'>" + dechtml + "</div>";
		wrappedhtml = "<div style='position:absolute;overflow:hidden'>" + dechtml + "</div>";
	  
	  return wrappedhtml;
	  
    },


     // interface implementation
    resize : function(element, width, height)
    {
	  element.style.width = width + "px";
      element.style.height = height + "px";
    },


    // interface implementation
    tint : function(element, bgcolor)
    {},


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

	  var fh_str = "";
	  
	  var painter1 = new aie.theme.Painter();
	  
	  switch (s){
	  	case "vertical" :
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
