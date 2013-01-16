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
    getWindow : function(vS, vRed, vGrn, vBlu)
    {
  	    var h_whlt = [];
		var h_whlb = [];
		var h_whrt = [];
		var h_whrb = [];
		var h_hlrt = [];
		var h_lrtb = [];
		var h_wltb = [];
		var h_wrtb = [];
		var h_hlrb = [];
		
		var fh_str = "";
		
		switch (vS) {
			case "active-window":
				//** Top Left Corner
				h_whlt.push([1,1,5,0,0,0,0,.9],
					[1,1,3,1,0,0,0,.9],
					[1,1,4,1,0,0,0,.88],
					[1,1,5,1,154,154,154,.98],
					[1,1,2,2,0,0,0,.9],
					[1,1,3,2,154,154,154,.9],
					[1,1,4,2,255,255,255,.6],
					[1,1,5,2,255,255,255,.2],
					[1,1,1,3,0,0,0,.9],
					[1,1,2,3,154,154,154,.98],
					[1,1,3,3,255,255,255,.6],
					[1,1,1,4,0,0,0,.98],
					[1,1,2,4,255,255,255,.6],
					[1,1,0,5,0,0,0,.9],
					[1,1,1,5,154,154,154,.98],
					[1,1,2,5,255,255,255,.2]);
				
				//** Top
				h_hlrt.push([1,6,6,0,0,0,0,.93],
					[1,6,6,1,255,255,255,.93]);
				
				//** Top Right Corner
				
								
				//*** Left Side
				h_wltb.push([1,0,6,6,0,0,0,.93],
					[1,1,6,6,255,255,255,.93]);
				
				//*** Header Middle
				h_hlrt.push();
				
				//*** Right Side	           
				h_wrtb.push([1,0,6,6,0,0,0,.93],
					[1,1,6,6,255,255,255,.93]);
			
				//*** Body
				h_lrtb.push();
				
				//*** Bottom Left Corner
				
				
				//*** Bottom
				h_hlrb.push([1,6,6,0,0,0,0,.93],
					[1,6,6,1,255,255,255,.93]);
				
				//*** Bottom Right Corner
				
			
				break;	
		}		
		
		var fh = [];
		fh_str = fh.concat(
			h_whlt.map(this._whlt_op),
			h_wltb.map(this._wltb_op),
			h_wrtb.map(this._wrtb_op),
			h_whlb.map(this._whlb),
			h_whrt.map(this._whrt),
			h_whrb.map(this._whrb),
			h_hlrt.map(this._hlrt_op),
			h_hlrb.map(this._hlrb_op),
			h_lrtb.map(this._lrtb)
		).join("");
		
		return fh_str;
    }
    
  }

});
