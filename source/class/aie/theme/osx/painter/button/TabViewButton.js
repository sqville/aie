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

qx.Class.define("aie.theme.osx.painter.button.TabViewButton",
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
		
		var h_whlt_op = [];
		var h_hlrt = [];
		var h_hlrb_op = [];
		var h_whlt = [];
		var h_wltb_op = [];
		var h_wrtb = [];
		var h_whrt = [];
		var h_whlb_op = [];
		
		var fh_str = "";
		
		switch (vS) {
			case "default-first":
				//*** Top bar
				h_hlrt.push([1,4,1,0,158,158,158]);
				
				//*** Middle gradient
				//hight,left,right,top,r,g,b			
				h_hlrt.push([1,2,1,1,255,255,255],
					[1,1,1,2,254,254,254],
					[1,1,1,3,253,253,253],
					[1,1,1,4,252,252,252],
					[1,1,1,5,251,251,251],
					[1,1,1,6,250,250,250],
					[1,1,1,7,248,248,248],
					[1,1,1,8,247,247,247],
					[1,1,1,9,246,246,246],
					[1,1,1,10,245,245,245],
					[4,1,1,11,236,236,236],
					[2,1,1,15,237,237,237],
					[2,1,1,17,238,238,238],
					[1,2,1,19,243,243,243]);
				
				//*** Left Top Corner
				h_whlt_op.push([1,1,2,0,0,0,0,.06],
					[1,1,3,0,185,185,185,1],
					[1,1,4,0,166,166,166,1],
					[1,1,1,1,0,0,0,.1],
					[1,1,2,1,168,168,168,1],
					[1,1,3,1,0,0,0,.084],
					[1,1,4,1,0,0,0,.03],
					[1,1,0,2,0,0,0,.06],
					[1,1,1,2,173,173,173,1],
					[1,1,2,2,0,0,0,.03],
					[1,1,0,3,182,182,182,1],
					[1,1,1,3,0,0,0,.072],
					[1,1,1,4,0,0,0,.015]);
				
				//*** Left side
				h_wltb_op.push([1,0,4,5,0,0,0,.35],
					[1,1,5,5,255,255,255,.3]);
		        
				//*** Right side
				h_wrtb.push([1,0,0,1,158,158,158]);
				
				//*** Left Bottom Corner
				h_whlb_op.push([1,1,0,4,167,167,167,1],
					[1,1,1,4,0,0,0,.034],
					[1,1,0,3,0,0,0,.034],
					[1,1,1,3,161,161,161,1],
					[1,1,0,2,0,0,0,.009],
					[1,1,1,2,173,173,173,1],
					[1,1,2,2,152,152,152,1],
					[1,1,3,2,0,0,0,.034],
					[1,1,4,2,0,0,0,.009],
					[1,1,0,3,182,182,182,1],
					[1,1,1,1,0,0,0,.009],
					[1,1,2,1,0,0,0,.034],
					[1,1,3,1,156,156,156,1],
					[1,1,2,0,0,0,0,.005],
					[1,1,3,0,0,0,0,.009]);
					
				//*** Bottom
				h_hlrb_op.push([1,4,1,1,138,138,138,1],
					[1,4,0,0,0,0,0,.09]);
				
				break;
			
			case "default-middle":
		
				//*** Left side
				h_wltb_op.push([1,0,0,1,158,158,158,1]);
		        
		        //*** Middle gradient
				//hight,left,right,top,r,g,b			
				h_hlrt.push([1,0,0,0,158,158,158],
					[1,1,1,1,255,255,255],
					[1,1,1,2,254,254,254],
					[1,1,1,3,253,253,253],
					[1,1,1,4,252,252,252],
					[1,1,1,5,251,251,251],
					[1,1,1,6,250,250,250],
					[1,1,1,7,248,248,248],
					[1,1,1,8,247,247,247],
					[1,1,1,9,246,246,246],
					[1,1,1,10,245,245,245],
					[4,1,1,11,236,236,236],
					[2,1,1,15,237,237,237],
					[2,1,1,17,238,238,238],
					[1,1,1,19,243,243,243],
					[1,0,0,20,138,138,138]);
					
				//*** Right side
				h_wrtb.push([1,0,0,1,158,158,158]);
				
				//*** Bottom
				h_hlrb_op.push([1,0,0,0,0,0,0,.09]);
					
				break;
				
			case "defaultbtm":
				//*** Bottom two bars
				h_hlrt.push();
				
				//*** Left side
				h_wltb.push();
				
				//*** Left side white gradient
				h_whlt.push();
		        
		        //*** Middle gradient
				//hight,left,right,top,r,g,b			
				h_hlrt.push();
					
				//*** Right side
				h_wrtb.push();
				
				//*** Right Side white gradient bar  
		        h_whrt.push();
				
				break;
				
			case "default-hoveredbtm":
				//*** Bottom two bars
				h_hlrt.push();
				
				//*** Left side
				h_wltb.push();
				
				//*** Left side white gradient
				h_whlt.push();
		        
		        //*** Middle gradient
				//hight,left,right,top,r,g,b			
				h_hlrt.push();
					
				//*** Right side
				h_wrtb.push();
				
				//*** Right Side white gradient bar  
		        h_whrt.push();
					
				break;
		
		}
		
		
		var fh = [];
		fh_str = fh.concat(
			h_hlrt.map(this._hlrt),
			h_whlt_op.map(this._whlt_op),
			h_wltb_op.map(this._wltb_op),
			h_wrtb.map(this._wrtb),
			h_whrt.map(this._whrt),
			h_whlb_op.map(this._whlb_op),
			h_hlrb_op.map(this._hlrb_op)
		).join("");
		//fh_str = h_whlt.map(this._whlt).join("");
		
		return fh_str;
	}
    
  }

});
