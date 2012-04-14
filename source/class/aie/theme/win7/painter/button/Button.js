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
		
		var h_hlrt = [];
		var h_whlt = [];
		//var h_wltb = [];
		//var h_wrtb = [];
		//var h_hlrb = [];
		var h_whlb = [];
		var h_whrb = [];
		var h_whrt = [];
		
		var fh_str = "";
		
		switch (vS) {
			case "default":
				h_whlt.push([1,1,0,0,240,240,240],
	        [1,1,1,0,147,147,147],
	        [1,1,2,0,119,119,119],
	        [1,1,0,1,137,137,137],
	        [1,1,1,1,145,145,145],
	        [1,1,2,1,232,232,232],
	        [1,1,0,2,117,117,117],
	        [1,1,1,2,234,234,234],
	        [1,1,2,2,250,250,250]);
			
			//** Left Bottom Corner
			h_whlb.push([1,1,0,3,117,117,117],
	        [1,1,1,3,226,226,226],
	        [1,1,2,3,236,236,236],
	        [1,1,0,2,138,138,138],
	        [1,1,1,2,143,143,143],
	        [1,1,2,2,228,228,228],
	        [1,1,0,1,240,240,240],
	        [1,1,1,1,136,136,136],
	        [1,1,2,1,117,117,117]);
	  
	        //** Rt Top Corner
			h_whrt.push([1,1,3,0,119,119,119],
	        [1,1,2,0,147,147,147],
	        [1,1,1,0,240,240,240],
	        [1,1,3,1,232,232,232],
	        [1,1,2,1,145,145,145],
	        [1,1,1,1,137,137,137],
	        [1,1,3,2,250,250,250],
	        [1,1,2,2,234,234,234],
	        [1,1,1,2,117,117,117]);
	           
			//** Rt Btm Corner
			h_whrb.push([1,1,3,3,236,236,236],
	        [1,1,2,3,226,226,226],
	        [1,1,1,3,117,117,117],
	        [1,1,3,2,228,228,228],
	        [1,1,2,2,143,143,143],
	        [1,1,1,2,138,138,138],
	        [1,1,3,1,117,117,117],
	        [1,1,2,1,136,136,136],
	        [1,1,1,1,240,240,240]);
	        
	        //*** Middle
			//hight,left,right,top,r,g,b			
			h_hlrt.push([1,3,3,0,112,112,112],
			[1,3,3,1,252,252,252],
			[1,3,3,2,242,242,242],
			[1,3,3,3,242,242,242],
			[1,3,3,4,241,241,241],
			[1,3,3,5,240,240,240],
			[1,3,3,6,239,239,239],
			[1,3,3,7,237,237,237],
			[1,3,3,8,236,236,236],
			[1,3,3,9,235,235,235],
			[1,3,3,10,221,221,221],
			[1,3,3,11,219,219,219],
			[1,3,3,12,218,218,218],
			[1,3,3,13,216,216,216],
			[1,3,3,14,214,214,214],
			[1,3,3,15,212,212,212],
			[1,3,3,16,210,210,210],
			[1,3,3,17,209,209,209],
			[1,3,3,18,207,207,207],
			[1,3,3,19,243,243,243],
			[1,3,3,20,112,112,112]);
			
			//*** Left Side  
	        h_whlt.push([1,15,0,3,112,112,112],
	        [1,1,1,3,252,252,252],
	        [1,4,1,4,251,251,251],
		    [1,2,1,8,250,250,250],
			[1,3,1,10,246,246,246],
		    [1,3,1,13,245,245,245],
		    [1,1,1,16,244,244,244],
		    [1,1,1,17,243,243,243]);
			
			//*** Right Side
	        h_whrt.push([1,15,1,3,112,112,112],
            [1,1,2,3,252,252,252],
	        [1,4,2,4,251,251,251],
		    [1,5,2,8,250,250,250],
			[1,3,2,10,246,246,246],
		    [1,3,2,13,245,245,245],
		    [1,1,2,16,244,244,244],
		    [1,1,2,17,243,243,243]);
				
				break;
				
			case "default-pressed":
				h_whlt.push([13,1,0,0,44,98,139]);
				
				break;
			
			case "default-hovered":
				h_whlt.push([13,1,0,0,85,134,163]);
				
				break;
		}
		
		var fh = [];
		fh_str = fh.concat(
			h_hlrt.map(this._hlrt),
			h_whlt.map(this._whlt),
			h_whlb.map(this._whlb),
			h_whrb.map(this._whrb),
			h_whrt.map(this._whrt)
		).join("");
		//fh_str = h_whlt.map(this._whlt).join("");
		
		return fh_str;
	}
    
  }

});
