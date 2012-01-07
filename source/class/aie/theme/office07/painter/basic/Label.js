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

qx.Class.define("aie.theme.office07.painter.basic.Label",
{
  extend : aie.theme.Painter,
  
  construct : function()
  {
    this.base(arguments);    
  },
   
   members :
  {
  	
	getLabelBackground : function(vS)
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
				h_whlt.push([1,23,0,1,255,255,255]);
			
				h_hlrt.push([1,0,0,0,255,255,255],[1,1,0,1,240,241,242],[1,1,0,2,238,239,240],
				[1,1,0,3,236,237,238],[1,1,0,4,233,235,237],[1,1,0,5,231,233,235],
				[1,1,0,6,229,231,233],[1,1,0,7,227,229,231],[1,1,0,8,224,227,230],
				[1,1,0,9,222,225,228],[1,1,0,10,220,223,226],[1,1,0,11,218,221,224],
				[1,1,0,12,216,219,222],[1,1,0,13,214,217,221],[1,1,0,14,211,214,219],
				[1,1,0,15,209,212,217],[1,1,0,16,207,210,215],[1,1,0,17,205,208,213],
				[1,1,0,18,203,206,211],[1,1,0,19,200,204,210],[1,1,0,20,198,202,208],
				[1,1,0,21,196,200,206],[1,1,0,22,194,198,204],[1,1,0,23,191,196,203],
				[1,1,0,24,189,194,201],[1,0,0,25,167,173,182]);	
				
				var fh_at = h_whlt.map(this._whlt);	
		    	var fh_m = h_hlrt.map(this._hlrt);	
			
				fh = fh_at.concat(fh_m);
				break;
				
			case "light-gray-header2":
				h_hlrt.push([1,0,0,0,240,241,242],
				[1,0,0,1,238,239,240],
				[1,0,0,2,236,237,238],
				[1,0,0,3,233,235,237],
				[1,0,0,4,231,233,235],
				[1,0,0,5,229,231,233],
				[1,0,0,6,227,229,231],
				[1,0,0,7,225,228,230],
				[1,0,0,8,223,226,229],
				[1,0,0,9,221,224,227],
				[1,0,0,10,219,222,225],
				[1,0,0,11,217,220,223],
				[1,0,0,12,215,218,222],
				[1,0,0,13,213,216,220],
				[1,0,0,14,210,213,218],
				[1,0,0,15,208,211,216],
				[1,0,0,16,206,209,214],
				[1,0,0,17,204,207,212],
				[1,0,0,18,202,205,211],
				[1,0,0,19,200,204,210],
				[1,0,0,20,198,202,208],
				[1,0,0,21,196,200,206],
				[1,0,0,22,194,198,204],
				[1,0,0,23,191,196,203],
				[1,0,0,24,199,203,209]);	
				
					
		    	var fh = h_hlrt.map(this._hlrt);	
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
