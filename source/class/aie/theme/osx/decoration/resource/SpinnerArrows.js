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
qx.Class.define("aie.theme.osx.decoration.resource.SpinnerArrows",
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
		
  		var aiebankspinneruparrow = self.aiebankspinneruparrow;
  		var aiebankspinnerdownarrow = self.aiebankspinnerdownarrow;
				
		var dechtml;	
		var wrappedhtml;
		
		switch (this.getStatename()) {
			
			case "up":
				if (!aiebankspinneruparrow) {
		  			aiebankspinneruparrow = self.aiebankspinneruparrow = this._generateBank("default", "up");
		  			dechtml = aiebankspinneruparrow;
		  		}
	  		break;
	  		
  			case "down":
		  		if (!aiebankspinnerdownarrow) {
		  			aiebankspinnerdownarrow = self.aiebankspinnerdownarrow = this._generateBank("default", "down");
		  			dechtml = aiebankspinnerdownarrow;
		  		}		
	  		break;
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
	  
	  switch (s) {
			case "up":
			  //*** Paint down arrow
			  h_whlt.push([1,1,2,0,0,0,0,.6],
			  	[1,1,1,1,0,0,0,.3],
			  	[1,1,2,1,0,0,0,.8],
			  	[1,1,3,1,0,0,0,.3],
			  	[1,1,0,2,0,0,0,.04],
			  	[3,2,1,2,0,0,0,.7],
			  	[1,1,4,2,0,0,0,.04],
			  	[1,1,0,3,0,0,0,.6],
			  	[1,1,4,3,0,0,0,.6]);
			  	
			break;
			  
			case "down":
				h_whlt.push([1,1,2,3,0,0,0,.6],
			  	[1,1,1,2,0,0,0,.3],
			  	[1,1,2,2,0,0,0,.8],
			  	[1,1,3,2,0,0,0,.3],
			  	[1,1,0,1,0,0,0,.04],
			  	[3,2,1,0,0,0,0,.6],
			  	[1,1,4,1,0,0,0,.04],
			  	[1,1,0,0,0,0,0,.6],
			  	[1,1,4,0,0,0,0,.6]);
			  	
			break;
			  
			  
		}
		
		str = h_whlt.map(painter1._whlt_op).join("");
	  return str;
	}
  }
});
