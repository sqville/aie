/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Fabian Jakobs (fjakobs)

************************************************************************ */

/**
 * A very simple decorator featuring background colors and a simple uniform
 * border based on CSS styles.
 */
qx.Class.define("aie.theme.vista.decoration.ButtonDecorator",
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
	
	/** Width of the decorator's parent **/
    parentwidth :
    {
      check : "String",
      nullable : true,
	  themeable : true
    },
	
	/** Height of the decorator's parent **/
    parentheight :
    {
      check : "String",
      nullable : true,
	  init : 21,
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

   /*init : function(element) { 
	  element.setStyle("width", "100%" || "");
	  element.setStyle("height", "100%" || "");
	  element.setStyle("padding", "0px");
	  element.setStyle("border", "none"); 
	  element.setStyle("overflow", "visable");
	  element.setAttribute("html", this.getMarkup() || "");
    },
    */
  },

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {	
    // interface implementation
    getMarkup : function(element)
    {
		var self = this.self(arguments);
  		var aiebankdefault = self.aiebankdefault;
  		var aiebankhovered = self.aiebankhovered;
  		var aiebankpressed = self.aiebankpressed;
  		if (!aiebankdefault) {
  			aiebankdefault = self.aiebankdefault = this._generateBank(this.getParentheight(), "default");
  		}
  		if (!aiebankhovered) {
  			aiebankhovered = self.aiebankhovered = this._generateBank(this.getParentheight(), "hovered");
  		}
  		if (!aiebankpressed) {
  			aiebankpressed = self.aiebankpressed = this._generateBank(this.getParentheight(), "pressed");
  		}
				
		var dechtml;	
		var wrappedhtml;
		switch (this.getStatename()) {
			case "pressed":
				dechtml = aiebankpressed;
				break;
				
			case "hovered":
				dechtml = aiebankhovered;
				break;
				
			default:
				dechtml = aiebankdefault;
				
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
	
	_generateBank : function(h, s)
	{
	  var bp = new aie.theme.vista.painter.ButtonPainter(); 
	  var str = bp.getButtonMiddle(h,s);
	 
	  return str;
	}
  }
});

