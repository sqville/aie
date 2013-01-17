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
qx.Class.define("aie.theme.win7.decoration.window.Window",
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
    },
    
    /** Windows base RGB value (color)
     *  Red RGB value as a number
     *   
     * **/	
	basecolorred :
    {
      check : "Integer",
      nullable : true,
	  themeable : true,
	  init : 255
    },
    
    /** Windows base RGB value (color)
     *  Green RGB value as a number
     *   
     * **/	
	basecolorgreen :
    {
      check : "Integer",
      nullable : true,
	  themeable : true,
	  init : 255
    },
    
    /** Windows base RGB value (color)
     *  Blue RGB value as a number
     *   
     * **/	
	basecolorblue :
    {
      check : "Integer",
      nullable : true,
	  themeable : true,
	  init : 255
    },
    
    aieshadow :
    {
    	check : "Boolean",
    	nullable : false,
    	themeable : true,
    	init : false
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
		
  		var aiebankactivewindow = self.aiebankactivewindow;
		var aiebankinactivewindow = self.aiebankinactivewindow;
		var aiebankwindowpane = self.aiebankwindowpane;
				
		var oldieflag = this.getAieshadow();
		var dechtml;	
		var wrappedhtml;
		
		switch (this.getStatename()) {
			case "default":
				if (!aiebankactivewindow) {
  					aiebankactivewindow = self.aiebankactivewindow = this._generateBank("active-window");
  				}
				dechtml = aiebankactivewindow;
				break;
				
			case "inactive":
				if (!aiebankinactivewindow) {
  					aiebankinactivewindow = self.aiebankinactivewindow = this._generateBank("inactive");
  				}
				dechtml = aiebankinactivewindow;
				break;
				
			case "windowpane":
				if (!aiebankwindowpane) {
  					aiebankwindowpane = self.aiebankwindowpane = this._generateBank("windowpane");
  				}
				dechtml = aiebankwindowpane;
				break;
			
			default:
				if (!aiebankactivewindow) {
  					aiebankactivewindow = self.aiebankactivewindow = this._generateBank("active-window");
  				}
				dechtml = aiebankactivewindow;
		}
		
		if (qx.core.Environment.get("browser.name") == "ie" && (qx.core.Environment.get("browser.version") == "8.0" || qx.core.Environment.get("browser.version") == "7.0")){
			oldieflag = false;
		}
		
		if (oldieflag == true) {
			var bsh = 0;
			var bsv = 0;
			var bsb = 6;
			var bss = 0;
			var brad = 8;
			var bsc = "#919191";
			var css3pat = new aie.theme.css3.Pattern();
			
			var aiecanvasdiv = "<div style='width:100%;height:100%;position:absolute;overflow:hidden;left:0px;top:0px;";
			aiecanvasdiv += "-moz-border-radius: " + brad + "px;";
			aiecanvasdiv += "-webkit-border-radius: " + brad + "px;";
			aiecanvasdiv += "border-radius: " + brad + "px;";
			aiecanvasdiv += "-moz-box-shadow: " + bsh + "px " + bsv + "px " + bsb + "px " + bss + "px " + bsc + ";";
			aiecanvasdiv += "-webkit-box-shadow: " + bsh + "px " + bsv + "px " + bsb + "px " + bss + "px " + bsc + ";";
			aiecanvasdiv += "box-shadow: " + bsh + "px " + bsv + "px " + bsb + "px " + bss + "px " + bsc + ";";
			aiecanvasdiv += css3pat.defaultWin7();
			aiecanvasdiv += "'>" + dechtml + "</div>";
			
			wrappedhtml = aiecanvasdiv;
		} else {
			wrappedhtml = "<div style='width:100%;height:100%;position:absolute;overflow:hidden;left:0px;top:0px'>" + dechtml + "</div>";
		}
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
	
	_generateBank : function(s)
	{
	  var bp = new aie.theme.win7.painter.window.Window(); 
	  var str = "";
	  
	  str = bp.getWindow(s, this.getBasecolorred(), this.getBasecolorgreen(), this.getBasecolorblue());
	 
	  return str;
	}
  }
});
