/* ************************************************************************

   Appearance is Everything (AIE) - Advanced themes for the Qooxdoo Ajax framework

   http://www.sqville.com/aie/index.html
   
   Copyright (C) 2008 SQville, Chris Eskew

   License:
     * LGPL: http://www.gnu.org/licenses/lgpl.html
     * See the LICENSE file in the project's top-level directory for details.

   Author:
     * Chris Eskew
     * Email: chris.eskew@sqville.com

************************************************************************ */

/* ************************************************************************


************************************************************************ */

qx.Class.define("aie.theme.osx.painter.resource.SpinnerArrows",
{
  extend : aie.theme.Painter,

  construct : function()
  {
    this.base(arguments);    
  },
 
   members :
  {
	/**
     * TODOC
     *
     * @type member
     */
    getSpinnerArrow: function(vS){
		
	  var str = "";
	  
	  //str = bp.getGroupBox(s);
	  var h_whlt = [];
	  
	  switch (vS) {
			case "up":
			  //*** Paint down arrow
			  h_whlt.push([1,1,2,0,0,0,0,.3],
			  	[1,1,1,1,0,0,0,.1],
			  	[1,1,2,1,0,0,0,.5],
			  	[1,1,3,1,0,0,0,.1],
			  	[1,1,0,2,0,0,0,.034],
			  	[3,2,1,2,0,0,0,.4],
			  	[1,1,4,2,0,0,0,.034],
			  	[1,1,0,3,0,0,0,.3],
			  	[1,1,4,3,0,0,0,.3]);
			  	
			break;
			  
			case "down":
				h_whlt.push([1,1,2,3,0,0,0,.3],
			  	[1,1,1,2,0,0,0,.1],
			  	[1,1,2,2,0,0,0,.5],
			  	[1,1,3,2,0,0,0,.1],
			  	[1,1,0,1,0,0,0,.034],
			  	[3,2,1,1,0,0,0,.4],
			  	[1,1,4,1,0,0,0,.034],
			  	[1,1,0,0,0,0,0,.3],
			  	[1,1,4,0,0,0,0,.3]);
			  	alert("hi");
			  	
			break;
		
		}
		
		str = h_whlt.map(this._whlt_op).join("");
	  return str;
	}
    
  }

});
