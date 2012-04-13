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

qx.Class.define("aie.theme.win7.painter.button.Button",
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
    getDefaultButton: function(vS){
		
		//var h_hlrt = [];
		var h_whlt = [];
		//var h_wltb = [];
		//var h_wrtb = [];
		//var h_hlrb = [];
		//var h_whlb = [];
		//var h_whrb = [];
		//var h_whrt = [];
		
		var fh_str = "";
		
		switch (vS) {
			case "default":
				h_whlt.push([13,1,0,0,142,143,143]);
				
				break;
				
			case "default-pressed":
				h_whlt.push([13,1,0,0,44,98,139]);
				
				break;
				
			case "default-chked-pressed":
				h_whlt.push([13,1,0,0,44,98,139]);
				
				break;
				
			case "default-checked":
				h_whlt.push([13,1,0,0,142,143,143]);
				
				break;
			
			case "default-chk-hovered":
				h_whlt.push([13,1,0,0,85,134,163]);
				
				break;
			
			case "default-hovered":
				h_whlt.push([13,1,0,0,85,134,163]);
				
				break;
				
				case "default-disabled":
				h_whlt.push([13,1,0,0,177,177,177]);
				
				break;
				
				case "default-mixed":
				h_whlt.push([13,1,0,0,142,143,143]);
				
				break;
				
		}
		
		//var fh = [];
		/*fh_str = fh.concat(
			h_hlrt.map(this._hlrt),
			h_wltb.map(this._wltb),
			h_wrtb.map(this._wrtb),
			h_hlrb.map(this._hlrb),
			h_whlt.map(this._whlt),
			h_whlb.map(this._whlb),
			h_whrb.map(this._whrb),
			h_whrt.map(this._whrt)
		).join("");*/
		fh_str = h_whlt.map(this._whlt).join("");
		
		return fh_str;
	}
    
  }

});
