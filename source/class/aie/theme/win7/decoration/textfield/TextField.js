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
qx.Class.define("aie.theme.win7.decoration.textfield.TextField",
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
		var aiebankstdtextfieldhov = self.aiebankstdtextfieldhov;
		var aiebankdstdcbobuttonpressed = self.aiebankdstdcbobuttonpressed;
				
		var dechtml;	
		var aiecanvasdiv;
		
		switch (this.getStatename()) {
				
			case "pressed":
				if (!aiebankdstdcbobuttonpressed) {
  					aiebankdstdcbobuttonpressed = self.aiebankdstdcbobuttonpressed = this._generateBank("na", "pressed");
  				}
				dechtml = aiebankdstdcbobuttonpressed;
				break;
			
			case "hovered":
				if (!aiebankstdtextfieldhov) {
  					aiebankstdtextfieldhov = self.aiebankstdtextfieldhov = this._generateBank("na", "hovered");
  				}
				dechtml = aiebankstdtextfieldhov;
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
	
	_generateBank : function(area, vS)
	{ 
	  var str = "";
	  
	  var painter1 = new aie.theme.Painter();
	  
	  switch(vS) {
	  	case "default" :
	  	
		  	var h_whlt = [];
			h_whlt.push([15,1,0,0,44,98,139]);
			
			str = h_whlt.map(painter1._whlt).join("");
	  	
	  	break;
	  	
	  	case "pressed" :
	  	
		  	var h_whlt = [];
			h_whlt.push([15,1,0,0,44,98,139]);
			
			str = h_whlt.map(painter1._whlt).join("");
	  	
	  	break;
	  	
	  	case "hovered" :
	  	
	  		var h_whlt = [];
		    h_whlt.push([15,1,0,0,60,127,177]);
	  	
	  		str = h_whlt.map(painter1._whlt).join("");
	  	
	  	break;
	  }

	  return str;
	  
	}
  }
});
