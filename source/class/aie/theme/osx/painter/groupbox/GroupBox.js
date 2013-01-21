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

qx.Class.define("aie.theme.osx.painter.groupbox.GroupBox",
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
		
		var h_hlrt_op = [];
		var h_whlt_op = [];
		var h_wltb_op = [];
		var h_hlrb_op = [];
		var h_lrtb = [];
		var h_whlb_op = [];
		
		var fh_str = "";
		
		//*** Top
		h_hlrt_op.push([1,2,2,0,165,165,165,1],
			[1,2,2,1,0,0,0,.14],
			[1,2,2,2,0,0,0,.06],
			[1,2,2,3,0,0,0,.02]);
			
		//*** Left & Right Top Corner
		h_whlt_op.push([1,1,1,0,0,0,0,.04],
			[1,1,2,0,181,181,181,1],
			[1,1,3,0,167,167,167,1],
			[1,1,0,1,0,0,0,.04],
			[1,1,1,1,167,167,167,1],
			[1,1,2,1,178,178,178,1],
			[1,1,3,1,0,0,0,.04],
			[2,1,0,2,184,184,184,1],
			[1,1,2,2,0,0,0,.054],
			[1,1,3,2,0,0,0,.03],
			[1,1,0,3,175,175,175,1],
			[1,1,1,3,0,0,0,.04],
			[1,1,2,3,0,0,0,.032],
			[1,1,3,3,0,0,0,.018]);
		
		//*** Left & Right Side
        h_wltb_op.push([1,0,2,2,184,184,184,1],
        	[1,1,2,2,0,0,0,.06],
        	[1,2,2,2,0,0,0,.02]);
        
        //*** Body
        h_lrtb.push([1,1,1,1,230,230,230]);
		
		//*** Bottom
		h_hlrb_op.push([1,3,3,1,0,0,0,.04],
			[1,3,3,0,199,199,199,1]);
		
		//*** Bottom Left & Right Corner
		h_whlb_op.push([1,1,0,2,194,194,194,1],
			[1,1,1,2,0,0,0,.04],
			[1,1,2,2,0,0,0,.032],
			[1,1,0,1,0,0,0,.04],
			[1,1,1,1,189,189,189,1],
			[1,1,2,1,0,0,0,.04],
			[1,1,3,1,0,0,0,.032],
			[1,1,1,0,0,0,0,.04],
			[1,1,2,0,199,199,199,1]);
		
		var fh = [];
		fh_str = fh.concat(
			h_lrtb.map(this._lrtb),
			h_hlrt_op.map(this._hlrt_op),
			h_wltb_op.map(this._wltb_op),
			h_wltb_op.map(this._wrtb_op),
			h_hlrb_op.map(this._hlrb_op),
			h_whlt_op.map(this._whlt_op),
			h_whlb_op.map(this._whlb_op),
			h_whlb_op.map(this._whrb_op),
			h_whlt_op.map(this._whrt_op)
		).join("");
		
		return fh_str;
	}
    
  }

});
