/* ************************************************************************

   Appearance is Everything (AIE) - Advanced themes for the Qooxdoo Ajax framework

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

qx.Class.define("aie.theme.office07.painter.table.Table",
{
  extend : aie.theme.Painter,
  
  construct : function()
  {
    this.base(arguments);    
  },
   
   members :
  {
  	
	getTableHeaderBackground : function(vS)
    {
		var h_whlt = [];
		var h_hlrt = [];
		var h_lrtb = [];
		var h_wltb = [];
		var h_hlrb = [];
		var fh = "";
		var fh_str = "";
		
		switch (vS) {		
			case "light-gray-header":
				h_hlrt.push([1,1,0,0,255,255,255],
				[1,1,0,1,253,253,253],
				[1,1,0,2,250,251,251],
				[1,1,0,3,248,249,249],
				[1,1,0,4,247,247,248],
				[1,1,0,5,245,245,246],
				[1,1,0,6,242,243,244],
				[1,1,0,7,240,241,242],
				[1,1,0,8,238,239,241],
				[1,1,0,9,235,237,239],
				[1,1,0,10,234,235,238],
				[1,1,0,11,232,233,236],
				[1,1,0,12,230,231,234],
				[1,1,0,13,227,229,232],
				[1,1,0,14,225,227,231],
				[1,1,0,15,223,225,229],
				[1,1,0,16,220,223,227],
				[1,1,0,17,218,221,225],
				[1,1,0,18,217,219,224],
				[1,1,0,19,215,217,222],
				[1,1,0,20,212,215,220]);	
					
		    	var fh = h_hlrt.map(this._hlrt);	
				break;
				
			case "light-gray-headercell":
				h_wltb.push([1,15,1,3,145,153,164],
				[1,15,0,3,221,224,227]);
				
				//Left Right Top Bottom function
				fh = h_wltb.map(this._whrt);
				
				break;
				
			default:				
				h_hlrt.push([1,0,0,0,255,255,255]);
				h_wltb.push([1,0,0,1,255,255,255]);
				h_lrtb.push([1,0,1,1,221,224,227]);
				h_hlrb.push([1,0,0,1,199,203,209]);	
				
				var fh_at = h_wltb.map(this._wltb);	
		    	var fh_m = h_hlrt.map(this._hlrt);
				var fh_b = h_lrtb.map(this._lrtb);
				var fh_c = h_hlrb.map(this._hlrb);	
			
				fh = fh_at.concat(fh_m, fh_b, fh_c);
		}
		
		fh_str = fh.join("");
		
		return fh_str;
    }
  }

});
