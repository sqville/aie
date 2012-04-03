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

qx.Class.define("aie.theme.win7.painter.groupbox.GroupBox",
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
    getGroupBox: function(vS){
		
		var h_hlrt = [];
		var h_wltb = [];
		var h_wrtb = [];
		var h_hlrb = [];
		//var h_whrb = [];
		
		var fh_str = "";
		
		//*** Top
		//var lft = 1;
		//var rht = 1;
		h_hlrt.push([1,2,2,0,213,223,229],[1,2,2,1,255,255,255]);
			
		//*** Left Side
        h_wltb.push([1,1,1,2,213,223,229],[1,2,2,2,255,255,255]);
		
		//*** Right Side
        h_wrtb.push([1,0,2,2,213,223,229],[1,1,2,2,255,255,255]);
		
		//*** Bottom
		h_hlrb.push([1,2,2,0,255,255,255],[1,2,2,1,213,223,229]);
		
		//*** Bottom Right
		//h_whrb.push([2,1,2,3,175,196,223]);
				
		
		var fh_at = h_hlrt.map(this._hlrt);
	    var fh_at2 = h_wltb.map(this._wltb);
	    var fh_at3 = h_wrtb.map(this._wrtb);	
	    var fh_at4 = h_hlrb.map(this._hlrb);
		
		var fh = fh_at.concat(fh_at2, fh_at3, fh_at4);	
		//var fh = fh_m;
		
		fh_str = fh.join("");
		
		return fh_str;
	}
    
  }

});
