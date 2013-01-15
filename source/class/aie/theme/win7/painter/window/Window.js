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

qx.Class.define("aie.theme.win7.painter.window.Window",
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
    getWindow : function(vS)
    {
  	    var h_whlt = [];
		var h_whlb = [];
		var h_whrt = [];
		var h_whrb = [];
		var h_hlrt = [];
		var h_lrtb = [];
		var h_wltb = [];
		var h_wrtb = [];
		
		var fh_str = "";
		
		switch (vS) {
			case "active-window-blue":
				//** Top Left Corner
				
				
				//** Top
				
				
				//** Top Right Corner
				
								
				//*** Left Side
	            h_whlt.push();
				
				h_wltb.push([1,0,2,0,38,39,45]);
				
				//*** Header Middle
				h_hlrt.push();
				
				//*** Right Side	           
			
			
				//*** Body
				h_lrtb.push();
				
				//*** Bottom Left Corner
				
				
				//*** Bottom
				
				
				//*** Bottom Right Corner
				
			
				break;	
		}
    
		var fh_at = h_whlt.map(this._whlt);
	    var fh_at2 = h_wltb.map(this._wltb);
		var fh_at4 = h_wrtb.map(this._wrtb);
		var fh_ab = h_whlb.map(this._whlb);
	    var fh_bt = h_whrt.map(this._whrt);
		var fh_bb = h_whrb.map(this._whrb);	
	    var fh_m = h_hlrt.map(this._hlrt);	
		var fh_bod = h_lrtb.map(this._lrtb);
		
		var fh = fh_at.concat(fh_at2,fh_at4,fh_ab,fh_bt,fh_bb,fh_m,fh_bod);	
		
		fh_str = fh.join("");
		
		return fh_str;
    }
    
  }

});
