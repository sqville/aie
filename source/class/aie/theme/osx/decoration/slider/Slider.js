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
qx.Class.define("aie.theme.osx.decoration.slider.Slider",
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
		
		var aiebankhorizontaldefault = self.aiebankhorizontaldefault;
				
		var dechtml;	
		var aiecanvasdiv;
		
		switch (this.getStatename()) {
			
			case "horizontal-default":
				if (!aiebankhorizontaldefault) {
  					aiebankhorizontaldefault = self.aiebankhorizontaldefault = this._generateBank("na", "horizontal-default");
  				}
				dechtml = aiebankhorizontaldefault;
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
	  //var bp = new aie.theme.osx.painter.button.Button(); 
	  var str = "";
	  
	  var painter1 = new aie.theme.Painter();
	  
	  switch(vS) {
	  	case "horizontal-default" :
	  	
		  	var h_whlt = [];
		  	var h_hlrt = [];
			h_whlt.push([1,1,0,6,0,0,0,.1],
				[1,1,1,6,153,153,153,1],
				[1,1,0,7,156,156,156,1],
				[1,1,1,7,157,157,157,1],
				[1,1,0,8,154,154,154,1],
				[1,1,1,8,192,192,192,1],
				[1,1,0,9,179,179,179,1],
				[1,1,1,9,196,196,196,1],
				[1,1,0,10,0,0,0,.1],
				[1,1,1,10,191,191,191,1]);
				
			h_hlrt.push([1,2,2,6,127,127,127,1],
				[1,2,2,7,179,179,179,1],
				[1,2,2,8,201,201,201,1],
				[1,2,2,9,213,213,213,1],
				[1,2,2,10,189,189,189,1]);
			
			//str = h_whlt.map(painter1._whlt).join("");
				var fh = [];
				str = fh.concat(
					h_hlrt.map(painter1._hlrt_op),
					h_whlt.map(painter1._whlt_op),
					h_whlt.map(painter1._whrt_op)		
				).join("");
				//fh_str = h_whlt.map(this._whlt).join("");
		
	  	
	  	break;
	  }

	  return str;
	  
	}
  }
});
