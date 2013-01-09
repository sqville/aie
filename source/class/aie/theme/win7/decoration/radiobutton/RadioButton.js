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
qx.Class.define("aie.theme.win7.decoration.radiobutton.RadioButton",
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
		
  		var aiebankdefaultstdrdobut = self.aiebankdefaultstdrdobut;
		var aiebankunchkhov = self.aiebankunchkhov;
		var aiebankchkchked = self.aiebankchkchked;
		var aiebankchkdisab = self.aiebankchkdisab;
		var aiebankdisab = self.aiebankdisab;
		var aiebankchkpressed = self.aiebankchkpressed;
		var aiebankchkchkedpressed = self.aiebankchkchkedpressed;
		var aiebankchkhov = self.aiebankchkhov;
		var aiebankchkmixed = self.aiebankchkmixed;
				
		var dechtml;	
		var aiecanvasdiv;
		
		switch (this.getStatename()) {
			case "default":
				if (!aiebankdefaultstdrdobut) {
  					aiebankdefaultstdrdobut = self.aiebankdefaultstdrdobut = this._generateBank("na", "default");
  				}
				dechtml = aiebankdefaultstdrdobut;
				break;
				
			case "default-checked":
				if (!aiebankchkchked) {
  					aiebankchkchked = self.aiebankchkchked = this._generateBank("na", "default-checked");
  				}
				dechtml = aiebankchkchked;
				break;
				
			case "default-pressed":
				if (!aiebankchkpressed) {
  					aiebankchkpressed = self.aiebankchkpressed = this._generateBank("na", "default-pressed");
  				}
				dechtml = aiebankchkpressed;
				break;
				
			case "default-chked-pressed":
				if (!aiebankchkchkedpressed) {
  					aiebankchkchkedpressed = self.aiebankchkchkedpressed = this._generateBank("na", "default-chked-pressed");
  				}
				dechtml = aiebankchkchkedpressed;
				break;
				
			case "default-chked-hovered":
				if (!aiebankchkhov) {
  					aiebankchkhov = self.aiebankchkhov = this._generateBank("na", "default-chked-hovered");
  				}
				dechtml = aiebankchkhov;
				break;
			
			case "default-hovered":
				if (!aiebankunchkhov) {
  					aiebankunchkhov = self.aiebankunchkhov = this._generateBank("na", "default-hovered");
  				}
				dechtml = aiebankunchkhov;
				break;
				
			case "default-mixed":
				if (!aiebankchkmixed) {
  					aiebankchkmixed = self.aiebankchkmixed = this._generateBank("na", "default-mixed");
  				}
				dechtml = aiebankchkmixed;
				break;
			
			case "default-disabled":
				if (!aiebankdisab) {
  					aiebankdisab = self.aiebankdisab = this._generateBank("na", "default-disabled");
  				}
				dechtml = aiebankdisab;
				break;
				
			case "default-chked-disabled":
				if (!aiebankchkdisab) {
  					aiebankchkdisab = self.aiebankchkdisab = this._generateBank("na", "default-chked-disabled");
  				}
				dechtml = aiebankchkdisab;
				break;
		}
	
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
	
	_generateBank : function(area, s)
	{
	  var bp = new aie.theme.win7.painter.radiobutton.RadioButton(); 
	  var str = "";
	  
	  str = bp.getDefaultRadioButton(s);

	  return str;
	}
  }
});
