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
qx.Class.define("aie.theme.osx.decoration.resource.DownArrow",
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
		
  		var aiebankbuttondownarrow = self.aiebankbuttondownarrow;
				
		var dechtml;	
		var wrappedhtml;
		
		if (!aiebankbuttondownarrow) {
  			aiebankbuttondownarrow = self.aiebankbuttondownarrow = this._generateBank("default", "button-downarrow");
  		}
		dechtml = aiebankbuttondownarrow;
		
		wrappedhtml = "<div style='width:100%;height:100%;position:absolute;overflow:hidden;left:0px;top:0px'>" + dechtml + "</div>";
		
	  return wrappedhtml;
	  
    },


     // interface implementation
    resize : function(element, width, height)
    {
	  //element.style.width = width + "px";
      //element.style.height = height + "px";
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
	  //var bp = new aie.theme.osx.painter.groupbox.GroupBox(); 
	  var str = "";
	  
	  //str = bp.getGroupBox(s);
	  var painter1 = new aie.theme.Painter();
	  var h_whlt = [];
	  //*** Paint down arrow
	  h_whlt.push([7,1,0,2,0,0,0],
	  	[5,1,1,3,0,0,0],
	  	[3,1,2,4,0,0,0],
	  	[1,1,3,5,0,0,0]);
	  	
	  str = h_whlt.map(painter1._whlt).join("");

	  return str;
	}
  }
});
