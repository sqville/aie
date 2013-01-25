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
qx.Class.define("aie.theme.stripes.decoration.list.List",
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
		
		var aiebankstdlistdefault = self.aiebankstdlistdefault;
		var aiebankstdlistfocused = self.aiebankstdlistfocused;
		//var aiebankstdtextfieldpressed = self.aiebankstdtextfieldpressed;
				
		var dechtml;	
		var aiecanvasdiv;
		
		switch (this.getStatename()) {
				
			/*case "pressed":
				if (!aiebankstdtextfieldpressed) {
  					aiebankstdtextfieldpressed = self.aiebankstdtextfieldpressed = this._generateBank("na", "pressed");
  				}
				dechtml = aiebankstdtextfieldpressed;
				break;*/
			
			case "focused":
				if (!aiebankstdlistfocused) {
  					aiebankstdlistfocused = self.aiebankstdlistfocused = this._generateBank("na", "focused");
  				}
				dechtml = aiebankstdlistfocused;
				break;
				
			default :
				if (!aiebankstdlistdefault) {
  					aiebankstdlistdefault = self.aiebankstdlistdefault = this._generateBank("na", "default");
  				}
				dechtml = aiebankstdlistdefault;
				break;
			
			break;
			
		}
		
		aiecanvasdiv = "<div style='position:absolute;overflow:hidden'>" + dechtml + "</div>";
		//aiecanvasdiv = "<div style='position:absolute;overflow:hidden;-moz-box-shadow: 1px 1px 4px #000000;-webkit-box-shadow: 1px 1px 4px #000000;box-shadow: 1px 1px 4px #000000;filter: progid: DXImageTransform.Microsoft.Shadow(strength = 1, direction = 135, color = '#000000');'>" + dechtml + "</div>";
		
		/*-moz-box-shadow: 1px 1px 4px #000000;
-webkit-box-shadow: 1px 1px 4px #000000;
box-shadow: 1px 1px 4px #000000;
filter: progid: DXImageTransform.Microsoft.Shadow(strength = 1, direction = 135, color = '#000000');
-ms-filter: "progid: DXImageTransform.Microsoft.Shadow(strength = 1, Direction = 135, Color = '#000000')";*/

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

      var Color = qx.theme.manager.Color.getInstance();

      if (bgcolor == null) {
        bgcolor = "yellow";
      }

      element.style.backgroundColor = Color.resolve(bgcolor) || "";

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
	
	_generateBank : function(area, vS)
	{ 
	  var fh_str = "";
	  
	  var painter1 = new aie.theme.Painter();
	  var h_whlt = [];
	  var h_hlrt = [];
	  var h_whrt = [];
	  var h_wltb = [];
	  var h_wrtb = [];
	  var h_whlb = [];
	  var h_whrb = [];
	  var h_hlrb = [];
	  
	  switch(vS) {
	  	case "default" :
	  		/** Top Left **/
		  	h_whlt.push([1,1,0,0,221,223,224]);
		  	
		  	/** Top Right **/
		  	h_whrt.push([1,1,0,0,221,223,224]);
		  	
		  	/** Top **/
		  	h_hlrt.push([1,1,1,0,131,134,141]);
		  	
		  	/** Left Side **/
		  	h_wltb.push([1,0,1,1,198,199,210]);
		  	
		  	/** Right Side **/
		  	h_wrtb.push([1,0,1,1,198,199,210]);
		  	
		  	/** Bottom Left op **/
		  	h_whlb.push([1,1,0,0,240,240,243]);
		  	
		  	/** Bottom Right op **/
		  	h_whrb.push([1,1,0,0,240,240,243]);
		  	
		  	/** Bottom **/
		  	h_hlrb.push([1,1,1,0,210,219,229]);
		  	
		  	
		  	var fh = [];
			fh_str = fh.concat(
				h_hlrt.map(painter1._hlrt),
				h_whlt.map(painter1._whlt),
				h_whrt.map(painter1._whrt),
				h_wltb.map(painter1._wltb),
				h_wrtb.map(painter1._wrtb),
				h_whlb.map(painter1._whlb),
				h_whrb.map(painter1._whrb),
				h_hlrb.map(painter1._hlrb)
			).join("");
	  	
	  	break;
	  	
	  	/*case "pressed" :
	  	
		  	var h_whlt = [];
			h_whlt.push([15,1,0,0,44,98,139]);
			
			fh_str = h_whlt.map(painter1._whlt).join("");
	  	
	  	break;*/
	  	
	  	case "focused" :
	  		/** Top Left **/
		  	h_whlt.push([1,1,0,0,173,196,215],
		  		[1,1,1,0,92,147,188],
		  		[1,1,1,1,198,222,238]);
		  	
		  	/** Top Right **/
		  	h_whrt.push([1,1,0,0,173,196,215],
		  		[1,1,1,0,92,147,188],
		  		[1,1,1,1,198,222,238]);
		  	
		  	/** Top **/
		  	h_hlrt.push([1,2,2,0,61,123,173]);
		  	
		  	/** Left Side **/
		  	h_wltb.push([1,0,1,1,181,207,231]);
		  	
		  	/** Right Side **/
		  	h_wrtb.push([1,0,1,1,164,201,227]);
		  	
		  	/** Bottom Left **/
		  	h_whlb.push([1,1,0,0,218,228,237],
		  		[1,1,1,1,198,222,238]);
		  	
		  	/** Bottom Right **/
		  	h_whrb.push([1,1,0,0,218,228,237],
		  		[1,1,1,1,198,222,238]);
		  	
		  	/** Bottom **/
		  	h_hlrb.push([1,1,1,0,183,217,237]);
		  	
		  	var fh = [];
			fh_str = fh.concat(
				h_hlrt.map(painter1._hlrt),
				h_whlt.map(painter1._whlt),
				h_whrt.map(painter1._whrt),
				h_wltb.map(painter1._wltb),
				h_wrtb.map(painter1._wrtb),
				h_whlb.map(painter1._whlb),
				h_whrb.map(painter1._whrb),
				h_hlrb.map(painter1._hlrb)
			).join("");
	  	
	  	break;
	  }

	  return fh_str;
	  
	}
  }
});
