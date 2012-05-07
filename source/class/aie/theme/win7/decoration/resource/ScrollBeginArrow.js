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
qx.Class.define("aie.theme.win7.decoration.resource.ScrollBeginArrow",
{
  extend : qx.core.Object,
  
  implement : [qx.ui.decoration.IDecorator],
  
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
		
  		var aiebankbuttonscrollbeginarrow = self.aiebankbuttonscrollbeginarrow;
				
		var dechtml;	
		var wrappedhtml;
		
		if (!aiebankbuttonscrollbeginarrow) {
  			aiebankbuttonscrollbeginarrow = self.aiebankbuttonscrollbeginarrow = this._generateBank("default", "scrollbeginarrow");
  		}
		dechtml = aiebankbuttonscrollbeginarrow;
		
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
	  var str = "";
	  
	  var painter1 = new aie.theme.Painter();
	  var h_whlt = [];
	  //*** Paint down arrow
	  h_whlt.push([1,1,3,0,243,243,243],
		[1,1,4,0,245,245,245],
		[1,1,5,0,243,243,243],
		[1,1,2,1,242,242,242],
		[1,1,3,1,245,245,245],
		[1,1,4,1,45,45,45],
		[1,1,5,1,245,245,245],
		[1,1,6,1,243,243,243],
		[1,1,1,2,242,242,242],
		[1,1,2,2,245,245,245],
		[1,1,3,2,30,30,30],
		[1,1,4,2,53,53,53],
		[1,1,5,2,91,91,91],
		[1,1,6,2,245,245,245],
		[1,1,7,2,243,243,243],
		[1,1,0,3,242,242,242],
		[1,1,1,3,245,245,245],
		[1,1,2,3,33,33,33],
		[1,1,3,3,73,73,73],
		[1,1,4,3,121,121,121],
		[1,1,5,3,140,140,140],
		[1,1,6,3,134,134,134],
		[1,1,7,3,245,245,245],
		[1,1,8,3,243,243,243],
		[1,1,0,4,245,245,245],
		[1,1,1,4,85,85,85],
		[1,1,2,4,119,119,119],
		[1,1,3,4,157,157,157],
		[1,1,4,4,174,174,174],
		[1,1,5,4,183,183,183],
		[1,1,6,4,191,191,191],
		[1,1,7,4,182,182,182],
		[1,1,8,4,245,245,245],
		[1,1,0,5,242,242,242],
		[7,1,1,5,245,245,245],
		[1,1,8,5,243,243,243]);
			  	
	  str = h_whlt.map(painter1._whlt).join("");

	  return str;
	}
  }
});
