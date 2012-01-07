/* ************************************************************************

   Appearance is Everything (AIE) - Themes for the Qooxdoo Framework

   http://www.sqville.com/aie
   
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

qx.Class.define("aie.theme.office07.painter.form.Button",
{
  extend : aie.theme.Painter,
  
  construct : function()
  {
    this.base(arguments);    
  },
   
   members :
  {
  		
	getLargeButton : function(vS)
    {
		var h_whlt = [];
		var h_whlb = [];
		var h_whrt = [];
		var h_whrb = [];
		var h_hlrt = [];
		
		var fh_str = "";
		
		switch (vS) {
			case "active-window-blue":
				//*** Top Left
				h_whlt.push([2,1,2,0,254,254,254],
				[1,1,4,0,252,252,253],
				[1,1,5,0,105,111,119],
				[1,1,2,1,253,254,254],
				[1,1,3,1,105,110,119],
				[1,1,4,1,86,93,101],
				[1,1,5,1,214,216,218],
				[1,1,0,2,254,254,254],
				[1,1,2,2,115,120,128],
				[1,1,3,2,213,215,217],
				[2,1,4,2,245,245,246],
				[1,1,0,3,254,254,254],
				[1,1,1,3,105,110,119],
				[1,1,2,3,211,214,216],
				[3,1,3,3,243,244,245],
				[1,1,0,4,254,254,254],
				[1,1,1,4,86,93,101],
				[4,1,2,4,242,243,244],
				[1,1,0,5,105,110,119],
				[1,1,1,5,209,212,214],
				[4,1,2,5,240,241,243]);
				
				//** Top
				h_hlrt.push([1,6,6,0,76,83,92],
				[1,6,6,1,246,246,247],
				[1,6,6,2,245,245,246],
				[1,6,6,3,243,244,245],
				[1,6,6,4,242,243,244],
				[1,6,6,5,240,241,243]);
				
				//** Top Right
            	h_whrt.push();
				
				//*** Middle
				h_hlrt.push();
				
				//** Left Bottom Corner
	        	h_whlb.push();
				
				//** Rt Btm Corner
            	h_whrb.push();
				
				
				
				break;
				
			case "":
				
				break;
				
			default:
				
		}
    
		var fh_at = h_whlt.map(this._whlt);
		var fh_ab = h_whlb.map(this._whlb);
	    var fh_bt = h_whrt.map(this._whrt);
		var fh_bb = h_whrb.map(this._whrb);	
	    var fh_m = h_hlrt.map(this._hlrt);	
		
		var fh = fh_at.concat(fh_ab,fh_bt,fh_bb,fh_m);	
		
		fh_str = fh.join("");
		
		return fh_str;
    }
  }

});
