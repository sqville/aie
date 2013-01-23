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
qx.Class.define("aie.theme.osx.decoration.textfield.TextField",
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
		
		var aiebankstdtextfielddefault = self.aiebankstdtextfielddefault;
		var aiebankstdtextfieldfocused = self.aiebankstdtextfieldfocused;
				
		var dechtml;	
		var aiecanvasdiv;
		
		switch (this.getStatename()) {
				
			case "focused":
				if (!aiebankstdtextfieldfocused) {
  					aiebankstdtextfieldfocused = self.aiebankstdtextfieldfocused = this._generateBank("na", "focused");
  				}
				dechtml = aiebankstdtextfieldfocused;
				break;
				
			default :
				if (!aiebankstdtextfielddefault) {
  					aiebankstdtextfielddefault = self.aiebankstdtextfielddefault = this._generateBank("na", "default");
  				}
				dechtml = aiebankstdtextfielddefault;
				break;
			
			break;
			
		}
		
		//aiecanvasdiv = "<div style='width:100%;height:100%;position:absolute;overflow:visible;left:" + aiechkleft + ";top:" + aiechktop + "'>" + dechtml + "</div>";
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
		  	/** Top **/
		  	h_hlrt.push([1,0,0,0,172,172,172],
		  		[1,1,1,1,234,234,234]);
		  	
		  	/** Left Side **/
		  	h_wltb.push([1,0,1,0,171,171,171],
		  		[1,1,1,1,248,248,248]);
		  	
		  	/** Right Side **/
		  	h_wrtb.push([1,0,0,0,172,172,172],
		  		[1,1,1,1,234,234,234]);
		  	
		  	/** Bottom **/
		  	h_hlrb.push([1,1,0,0,172,172,172]);
		  	
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
	  	
	  	case "focused" :
		  	/** Top **/
		  	h_hlrt.push([1,0,0,0,100,152,201],
		  		[1,1,1,1,169,198,225]);
		  	
		  	/** Left Side **/
		  	h_wltb.push([1,0,1,0,101,153,202],
		  		[1,1,1,1,177,208,235]);
		  	
		  	/** Right Side **/
		  	h_wrtb.push([1,0,1,0,101,153,202],
		  		[1,1,1,1,177,208,235]);

		  	/** Bottom **/
		  	h_hlrb.push([1,1,0,0,105,157,206],
		  		[1,1,1,1,182,213,242]);
		  	
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
