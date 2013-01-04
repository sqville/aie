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
qx.Class.define("aie.theme.vista.decoration.window.Window",
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
	paintgroupname :
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
		
  		var aiebankactivewindowblue = self.aiebankactivewindowblue;
		var aiebankinactivewindowgray = self.aiebankinactivewindowgray;
		var aiebankactivewindowstatusbarblue = self.activewindowstatusbarblue;
		var aiebankinactivewindowstatusbarblue = self.inactivewindowstatusbarblue;
				
		var dechtml;	
		var wrappedhtml;
		
		switch (this.getPaintgroupname()) {
			case "active-window-blue":
				if (!aiebankactivewindowblue) {
  					aiebankactivewindowblue = self.aiebankactivewindowblue = this._generateBank("caption", "active-window-blue");
  				}
				dechtml = aiebankactivewindowblue;
				break;
				
			case "inactive-window-gray":
				if (!aiebankinactivewindowgray) {
  					aiebankinactivewindowgray = self.aiebankinactivewindowgray = this._generateBank("caption", "inactive-window-gray");
  				}
				dechtml = aiebankinactivewindowgray;
				break;
				
			case "active-window-statusbar-blue":
				if (!aiebankactivewindowstatusbarblue) {
  					aiebankactivewindowstatusbarblue = self.aiebankactivewindowstatusbarblue = this._generateBank("statusbar", "active-window-statusbar-blue");
  				}
				dechtml = aiebankactivewindowstatusbarblue;
				break;
				
			case "inactive-window-statusbar-blue":
				if (!aiebankinactivewindowstatusbarblue) {
  					aiebankinactivewindowstatusbarblue = self.aiebankinactivewindowstatusbarblue = this._generateBank("statusbar", "inactive-window-statusbar-blue");
  				}
				dechtml = aiebankinactivewindowstatusbarblue;
				break;
			
			default:
				if (!aiebankactivewindowblue) {
  					aiebankactivewindowblue = self.aiebankactivewindowblue = this._generateBank("active-window-blue");
  				}
				dechtml = aiebankactivewindowblue;
		}
		
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
	  var bp = new aie.theme.vista.painter.window.Window(); 
	  var str = "";
	  
	  if (area=="statusbar")
	  	str = bp.getWindowStatusBarBlue(s);
	  else
	  	str = bp.getWindowCaptionBlue(s);
	 
	  return str;
	}
  }
});
