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
qx.Class.define("aie.theme.office07.decoration.table.Table",
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
		
  		var aiebanklightgrayheader = self.aiebanklightgrayheader;
		var aiebanklightgrayheadercell = self.aiebanklightgrayheadercell;
		
		var dechtml;	
		var wrappedhtml;
		
		switch (this.getPaintgroupname()) {
			case "light-gray-header":
				if (!aiebanklightgrayheader) {
  					aiebanklightgrayheader = self.aiebanklightgrayheader = this._generateBank("light-gray-header");
  				}
				dechtml = aiebanklightgrayheader;
				break;
			
			case "light-gray-headercell":
				if (!aiebanklightgrayheadercell) {
  					aiebanklightgrayheadercell = self.aiebanklightgrayheadercell = this._generateBank("light-gray-headercell");
  				}
				dechtml = aiebanklightgrayheadercell;
				break;
			
			default:
				if (!aiebanklightgrayheader) {
  					aiebanklightgrayheader = self.aiebanklightgrayheader = this._generateBank("light-gray-header");
  				}
				dechtml = aiebanklightgrayheader;
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
	
	_generateBank : function(s)
	{
	  var bp = new aie.theme.office07.painter.table.Table(); 
	  var str = bp.getTableHeaderBackground(s);
	 
	  return str;
	}
  }
});

