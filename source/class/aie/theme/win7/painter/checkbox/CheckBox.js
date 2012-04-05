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

qx.Class.define("aie.theme.win7.painter.checkbox.CheckBox",
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
    getDefaultCheckBox: function(vS){
		
		var h_hlrt = [];
		var h_whlt = [];
		var h_wltb = [];
		var h_wrtb = [];
		var h_hlrb = [];
		var h_whlb = [];
		var h_whrb = [];
		var h_whrt = [];
		
		var fh_str = "";
		
		//*** Top
		h_hlrt.push([1,2,2,0,213,223,229],[1,2,2,1,255,255,255]);
			
		//*** Left Top Corner
		h_whlt.push([1,1,1,1,213,223,229]);
		
		//*** Left Side
        h_wltb.push([1,0,2,3,213,223,229],[1,1,2,3,255,255,255]);
		
		//*** Right Side
        h_wrtb.push([1,0,2,3,213,223,229],[1,1,2,3,255,255,255]);
        
        //*** Right Top Corner
        h_whrt.push([1,1,1,1,213,223,229]);
		
		//*** Bottom
		h_hlrb.push([1,2,2,0,255,255,255],[1,2,2,1,213,223,229]);
		
		//*** Bottom Left Corner
		h_whlb.push([1,1,0,2,255,255,255],[1,1,1,2,213,223,229],[1,1,1,1,255,255,255]);
		
		//*** Bottom Right
		h_whrb.push([1,1,0,2,255,255,255],[1,1,1,2,213,223,229],[1,1,1,1,255,255,255]);	
		
		var fh = [];
		fh_str = fh.concat(
			h_hlrt.map(this._hlrt),
			h_wltb.map(this._wltb),
			h_wrtb.map(this._wrtb),
			h_hlrb.map(this._hlrb),
			h_whlt.map(this._whlt),
			h_whlb.map(this._whlb),
			h_whrb.map(this._whrb),
			h_whrt.map(this._whrt)
		).join("");
		
		return fh_str;
	}
    
  }

});
