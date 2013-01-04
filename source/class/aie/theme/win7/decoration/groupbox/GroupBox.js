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
qx.Class.define("aie.theme.win7.decoration.groupbox.GroupBox",
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
		
  		var aiebankdefaultgraywhite = self.aiebankdefaultgraywhite;
				
		var dechtml;	
		var wrappedhtml;
		
		if (!aiebankdefaultgraywhite) {
  			aiebankdefaultgraywhite = self.aiebankdefaultgraywhite = this._generateBank("default", "default_graywhite");
  		}
		dechtml = aiebankdefaultgraywhite;
		
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
	
	_generateBank : function(area, s)
	{
	  var bp = new aie.theme.win7.painter.groupbox.GroupBox(); 
	  var str = "";
	  
	  str = bp.getGroupBox(s);

	  return str;
	}
  }
});
