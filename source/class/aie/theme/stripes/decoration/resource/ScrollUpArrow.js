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
qx.Class.define("aie.theme.stripes.decoration.resource.ScrollUpArrow",
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
		
  		var aiebankbuttonscrolluparrow = self.aiebankbuttonscrolluparrow;
				
		var dechtml;	
		var wrappedhtml;
		
		if (!aiebankbuttonscrolluparrow) {
  			aiebankbuttonscrolluparrow = self.aiebankbuttonscrolluparrow = this._generateBank("default", "scrolluparrow");
  		}
		dechtml = aiebankbuttonscrolluparrow;
		
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
	  h_whlt.push([1,1,3,0,255,255,255,.18],
		[1,1,4,0,255,255,255,.35],
		[1,1,5,0,255,255,255,.18],
		[1,1,2,1,255,255,255,.15],
		[1,1,3,1,255,255,255,.35],
		[1,1,4,1,0,0,0,.8],
		[1,1,5,1,255,255,255,.35],
		[1,1,6,1,255,255,255,.18],
		[1,1,1,2,255,255,255,.15],
		[1,1,2,2,255,255,255,.35],
		[1,1,3,2,0,0,0,.872],
		[1,1,4,2,0,0,0,.78],
		[1,1,5,2,0,0,0,.62],
		[1,1,6,2,255,255,255,.35],
		[1,1,7,2,255,255,255,.18],
		[1,1,0,3,255,255,255,.15],
		[1,1,1,3,255,255,255,.35],
		[1,1,2,3,0,0,0,.86],
		[1,1,3,3,0,0,0,.675],
		[1,1,4,3,0,0,0,.5],
		[1,1,5,3,0,0,0,.4],
		[1,1,6,3,0,0,0,.45],
		[1,1,7,3,255,255,255,.35],
		[1,1,8,3,255,255,255,.18],
		[1,1,0,4,255,255,255,.35],
		[1,1,1,4,0,0,0,.63],
		[1,1,2,4,0,0,0,.52],
		[1,1,3,4,0,0,0,.35],
		[1,1,4,4,0,0,0,.28],
		[1,1,5,4,0,0,0,.24],
		[1,1,6,4,0,0,0,.2],
		[1,1,7,4,0,0,0,.23],
		[1,1,8,4,255,255,255,.35],
		[1,1,0,5,255,255,255,.18],
		[7,1,1,5,255,255,255,.35],
		[1,1,8,5,255,255,255,.18]);
			  	
	  str = h_whlt.map(painter1._whlt_op).join("");

	  return str;
	}
  }
});
