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

qx.Class.define("aie.theme.office07.painter.toolbar.Toolbar",
{
  extend : aie.theme.Painter,
  
  construct : function()
  {
    this.base(arguments);    
  },
   
   members :
  {
  	
	getToolbarBackground : function(vS)
    {
		var h_whlt = [];
		var h_hlrt = [];
		var fh = "";
		var fh_str = "";
		
		switch (vS) {
			case "blue":
				h_hlrt.push([1,0,0,0,76,83,92]);
				break;
			
			default:
				h_whlt.push([1,1,1,0,248,248,248],[1,1,0,1,248,248,248],[1,1,1,1,252,252,252]);
			
				h_hlrt.push([2,3,0,0,252,252,252],[3,1,0,2,251,251,251],
				[3,1,0,5,250,250,250],[3,1,0,8,249,249,249],[3,1,0,11,248,248,248],
				[1,1,0,14,247,247,247],[2,1,0,15,246,246,246],[2,1,0,17,245,245,245],
				[1,1,0,19,244,244,244],[2,1,0,20,243,243,243],[1,1,0,22,242,242,242],
				[1,1,0,23,241,241,241],[1,1,0,24,242,242,242]);
				
				var fh_at = h_whlt.map(this._whlt);	
	    		var fh_m = h_hlrt.map(this._hlrt);	
		
				fh = fh_at.concat(fh_m);	
		}								
		
		fh_str = fh.join("");
		
		return fh_str;
    },
	
	getToolbarPartHandle : function(vS)
    {
		var h_whlt = [];
		var h_hlrt = [];
		var fh = "";
		var fh_str = "";
		
		switch (vS) {
			case "blue":
				h_hlrt.push([1,0,0,0,76,83,92]);
				break;
			
			default:
				h_whlt.push([2,1,0,0,184,184,184],[2,1,0,1,184,184,184],[1,1,2,1,255,255,255],
				[2,1,1,2,255,255,255],[2,1,0,4,184,184,184],[2,1,0,5,184,184,184],
				[1,1,2,5,255,255,255],[2,1,1,6,255,255,255],[2,1,0,8,184,184,184],
				[2,1,0,9,184,184,184],[1,1,2,9,255,255,255],[2,1,1,10,255,255,255],
				[2,1,0,12,184,184,184],[2,1,0,13,184,184,184],[1,1,2,13,255,255,255],
				[2,1,1,14,255,255,255]);
			
				var fh_at = h_whlt.map(this._whlt);	
	    		//var fh_m = h_hlrt.map(this._hlrt);	
				//fh = fh_at.concat(fh_m);
				fh = fh_at;	
		}								
		
		//fh_str = fh.join("");
		return fh;
    }
  }

});
