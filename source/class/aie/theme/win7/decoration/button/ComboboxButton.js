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
qx.Class.define("aie.theme.win7.decoration.button.ComboboxButton",
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
		
		var aiebankstdcbobuttonhov = self.aiebankstdcbobuttonhov;
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
				if (!aiebankstdcbobuttonhov) {
  					aiebankstdcbobuttonhov = self.aiebankstdcbobuttonhov = this._generateBank("na", "hovered");
  				}
				dechtml = aiebankstdcbobuttonhov;
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
	  //var bp = new aie.theme.win7.painter.button.Button(); 
	  var str = "";
	  
	  var painter1 = new aie.theme.Painter();
	  
	  switch(vS) {
	  	case "pressed" :
	  	
		  	var h_whlt = [];
			h_whlt.push([15,1,0,0,44,98,139],
			[1,1,15,0,65,102,129],
			[1,19,0,1,44,98,139],
			[14,1,1,1,158,176,186],
			[1,1,15,1,63,91,111],
			[1,1,16,1,101,131,152],
			[1,1,1,2,149,171,184],
			[2,1,2,2,222,237,246],
			[1,1,4,2,228,243,251],
			[7,1,5,2,229,244,252],
			[1,1,12,2,228,243,251],
			[2,1,13,2,222,237,246],
			[1,1,15,2,158,176,186],
			[1,17,16,2,44,98,139],
			[1,1,1,3,170,188,199],
			[1,1,2,3,221,236,244],
			[1,1,3,3,224,239,248],
			[1,1,4,3,228,243,251],
			[7,1,5,3,229,244,252],
			[1,1,12,3,228,243,251],
			[1,1,13,3,226,241,249],
			[1,1,14,3,222,237,245],
			[1,1,15,3,170,188,199],
			[1,1,1,4,176,195,206],
			[2,1,2,4,224,241,250],
			[9,1,4,4,225,242,251],
			[2,1,13,4,224,241,250],
			[1,1,15,4,176,195,206],
			[1,1,1,5,174,195,206],
			[13,1,2,5,221,240,250],
			[1,1,15,5,174,195,206],
			[1,1,1,6,170,193,206],
			[13,1,2,6,216,238,250],
			[1,1,15,6,170,193,206],
			[1,1,1,7,166,191,206],
			[13,1,2,7,211,236,249],
			[1,1,15,7,166,191,206],
			[1,1,1,8,162,189,205],
			[13,1,2,8,206,233,248],
			[1,1,15,8,162,189,205],
			[1,1,1,9,158,187,204],
			[13,1,2,9,201,231,247],
			[1,1,15,9,158,187,204],
			[1,1,1,10,154,186,203],
			[13,1,2,10,196,229,246],
			[1,1,15,10,154,186,203],
			[1,1,1,11,120,170,197],
			[13,1,2,11,152,209,239],
			[1,1,15,11,120,170,197],
			[1,1,1,12,115,167,196],
			[13,1,2,12,147,206,237],
			[1,1,15,12,115,167,196],
			[1,1,1,13,110,164,194],
			[13,1,2,13,140,202,235],
			[1,1,15,13,110,164,194],
			[1,1,1,14,105,161,191],
			[13,1,2,14,134,198,232],
			[1,1,15,14,105,161,191],
			[1,1,1,15,100,157,189],
			[13,1,2,15,127,194,229],
			[1,1,15,15,100,157,189],
			[1,1,1,16,94,153,187],
			[13,1,2,16,120,189,226],
			[1,1,15,16,94,153,187],
			[1,1,1,17,90,150,184],
			[13,1,2,17,114,185,223],
			[1,1,15,17,90,150,184],
			[1,1,1,18,85,146,181],
			[2,1,2,18,109,181,220],
			[9,1,4,18,109,182,221],
			[2,1,13,18,109,181,220],
			[1,1,15,18,85,146,181],
			[1,1,1,19,85,146,181],
			[1,1,2,19,99,172,211],
			[1,1,3,19,104,177,216],
			[1,1,4,19,104,178,218],
			[7,1,5,19,104,179,219],
			[1,1,12,19,104,178,218],
			[1,1,13,19,102,175,215],
			[1,1,14,19,99,172,211],
			[1,1,15,19,87,122,148],
			[1,1,16,19,111,146,172],
			[15,1,0,20,44,98,139],
			[1,1,15,20,125,161,185]);
			
			str = h_whlt.map(painter1._whlt).join("");
	  	
	  	break;
	  	
	  	case "hovered" :
	  	
	  		var h_whlt = [];
		    h_whlt.push([15,1,0,0,60,127,177],
			[1,1,15,0,82,133,171],
			[1,1,16,0,173,196,215],
			[1,19,0,1,60,127,177],
			[14,1,1,1,250,253,254],
			[1,1,15,1,106,157,195],
			[1,1,16,1,119,161,191],
			[1,17,1,2,250,253,254],
			[13,1,2,2,234,246,253],
			[1,17,15,2,250,253,254],
			[1,17,16,2,60,127,177],
			[13,1,2,3,232,246,253],
			[13,1,2,4,230,245,253],
			[13,1,2,5,228,244,252],
			[13,1,2,6,225,243,252],
			[13,1,2,7,222,242,252],
			[13,1,2,8,220,241,252],
			[13,1,2,9,217,240,252],
			[13,1,2,10,190,230,253],
			[13,1,2,11,188,229,252],
			[13,1,2,12,185,227,251],
			[13,1,2,13,181,226,250],
			[13,1,2,14,178,224,249],
			[13,1,2,15,175,222,248],
			[13,1,2,16,172,220,247],
			[13,1,2,17,169,219,246],
			[12,1,2,18,167,217,245],
			[1,1,14,18,169,219,246],
			[14,1,1,19,250,253,254],
			[1,1,15,19,112,160,196],
			[1,1,16,19,119,162,192],
			[15,1,0,20,60,127,177],
			[1,1,15,20,130,170,196],
			[1,1,16,20,218,228,237]);
	  	
	  		str = h_whlt.map(painter1._whlt).join("");
	  	
	  	break;
	  }

	  return str;
	  
	}
  }
});
