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
 
 qx.Class.define("aie.theme.Painter",
{
  extend : qx.core.Object,
  
  members :
  {
	
	_whlt : function(vA) //TOP LEFT #1
    {
  		return "<div style='width:" + vA[0] + "px;height:" + vA[1] + "px;position:absolute;overflow:hidden;left:" + vA[2] + "px;top:" + vA[3] + "px;background-color:" + "rgb(" + vA[4] + "," + vA[5] + "," + vA[6] + ")'></div>";
    },
	
	_hlrt : function(vA) //TOP #2
    {
  		return "<div style='height:" + vA[0] + "px;position:absolute;overflow:hidden;left:" + vA[1] + "px;right:" + vA[2] + "px;top:" + vA[3] + "px;background-color:" + "rgb(" + vA[4] + "," + vA[5] + "," + vA[6] + ")'></div>";
    },
	
	_whrt : function(vA) //TOP RIGHT #3
    {
  		return "<div style='width:" + vA[0] + "px;height:" + vA[1] + "px;position:absolute;overflow:hidden;right:" + vA[2] + "px;top:" + vA[3] + "px;background-color:" + "rgb(" + vA[4] + "," + vA[5] + "," + vA[6] + ")'></div>";
    },
	
	_whlb : function(vA) //BOTTOM LEFT #7
    {
  		return "<div style='position:absolute;overflow:hidden;width:" + vA[0] + "px;height:" + vA[1] + "px;left:" + vA[2] + "px;bottom:" + vA[3] + "px;background-color:" + "rgb(" + vA[4] + "," + vA[5] + "," + vA[6] + ")'></div>";
    },
	
	_whrb : function(vA) //BOTTOM RIGHT #9
    {
  		return "<div style='position:absolute;overflow:hidden;width:" + vA[0] + "px;height:" + vA[1] + "px;right:" + vA[2] + "px;bottom:" + vA[3] + "px;background-color:" + "rgb(" + vA[4] + "," + vA[5] + "," + vA[6] + ")'></div>";
    },
	
	_hlrb : function(vA) //BOTTOM
    {
  		return "<div style='position:absolute;overflow:hidden;height:" + vA[0] + "px;left:" + vA[1] + "px;right:" + vA[2] + "px;bottom:" + vA[3] + "px;background-color:" + "rgb(" + vA[4] + "," + vA[5] + "," + vA[6] + ")'></div>";
    },
	
	_lrtb : function(vA)
    {
  		return "<div style='position:absolute;overflow:hidden;left:" + vA[0] + "px;right:" + vA[1] + "px;top:" + vA[2] + "px;bottom:" + vA[3] + "px;background-color:" + "rgb(" + vA[4] + "," + vA[5] + "," + vA[6] + ")'></div>";
    },
	
	_wltb : function(vA)
    {
  		return "<div style='position:absolute;overflow:hidden;width:" + vA[0] + "px;left:" + vA[1] + "px;top:" + vA[2] + "px;bottom:" + vA[3] + "px;background-color:" + "rgb(" + vA[4] + "," + vA[5] + "," + vA[6] + ")'></div>";
    },
	
	_wrtb : function(vA)
    {
  		return "<div style='position:absolute;overflow:hidden;width:" + vA[0] + "px;right:" + vA[1] + "px;bottom:" + vA[3] + "px;top:" + vA[2] + "px;background-color:" + "rgb(" + vA[4] + "," + vA[5] + "," + vA[6] + ")'></div>";
    },
    
	_hltb : function(vA) //BOTTOM
    {
  		return "<div style='height:" + vA[0] + "px;position:absolute;overflow:hidden;left:" + vA[1] + "px;top:" + vA[2] + "px;bottom:" + vA[3] + "px;background-color:" + "rgb(" + vA[4] + "," + vA[5] + "," + vA[6] + ")'></div>";
    },
    
    
    /*
    ---------------------------------------------------------------------------
      PAINTING WITH OPACITY
    ---------------------------------------------------------------------------
    */
   
    _whlt_op : function(vA) //TOP LEFT #1
    {
  		return "<div style='width:" + vA[0] + "px;height:" + vA[1] + "px;position:absolute;overflow:hidden;left:" + vA[2] + "px;top:" + vA[3] + "px;background-color:" + "rgb(" + vA[4] + "," + vA[5] + "," + vA[6] + ");opacity:" + vA[7] + ";-ms-filter: progid: DXImageTransform.Microsoft.Alpha(Opacity = " + vA[7]*100 + ");filter: alpha(opacity = " + vA[7]*100 + ")'></div>";
    },
    
    _whrt_op : function(vA) //TOP RIGHT #3
    {
  		return "<div style='width:" + vA[0] + "px;height:" + vA[1] + "px;position:absolute;overflow:hidden;right:" + vA[2] + "px;top:" + vA[3] + "px;background-color:" + "rgb(" + vA[4] + "," + vA[5] + "," + vA[6] + ");opacity:" + vA[7] + ";-ms-filter: progid: DXImageTransform.Microsoft.Alpha(Opacity = " + vA[7]*100 + ");filter: alpha(opacity = " + vA[7]*100 + ")'></div>";
    },
    
    _whlb_op : function(vA) //BOTTOM LEFT #7
    {
  		return "<div style='position:absolute;overflow:hidden;width:" + vA[0] + "px;height:" + vA[1] + "px;left:" + vA[2] + "px;bottom:" + vA[3] + "px;background-color:" + "rgb(" + vA[4] + "," + vA[5] + "," + vA[6] + ");opacity:" + vA[7] + ";-ms-filter: progid: DXImageTransform.Microsoft.Alpha(Opacity = " + vA[7]*100 + ");filter: alpha(opacity = " + vA[7]*100 + ")'></div>";
    },
    
    _whrb_op : function(vA) //BOTTOM RIGHT #9
    {
  		return "<div style='position:absolute;overflow:hidden;width:" + vA[0] + "px;height:" + vA[1] + "px;right:" + vA[2] + "px;bottom:" + vA[3] + "px;background-color:" + "rgb(" + vA[4] + "," + vA[5] + "," + vA[6] + ");opacity:" + vA[7] + ";-ms-filter: progid: DXImageTransform.Microsoft.Alpha(Opacity = " + vA[7]*100 + ");filter: alpha(opacity = " + vA[7]*100 + ")'></div>";
    },
    
    
    /*
    ---------------------------------------------------------------------------
      DYNAMIC PAINTING
    ---------------------------------------------------------------------------
    */
    
    _aiegd : function(vArr, vW, vH, vLADJ, vHSt, vSR, vSG, vSB, vER, vEG, vEB, vADJ)
    {
  		var sr, er, sg, eg, sb, eb, rspread, gspread, bspread, rcd, gcd, bcd, areah;
        //Start End RGB
        sr = vSR;er = vER;
        sg = vSG;eg = vEG;
        sb = vSB;eb = vEB;

        //Adjustment
        areah = vH-vADJ;
        
        //Spread
        rspread = (sr-er)/areah;rcd = rspread;
        gspread = (sg-eg)/areah;gcd = gspread;
        bspread = (sb-eb)/areah;bcd = bspread;
        
        //Loop
        for (var i = 1; i <= areah; i++) {
            if (i==areah){
                vArr.push([1, 1, vW-vLADJ, i+vHSt, er, eg, eb]);}
            else{
                vArr.push([1, 1, vW-vLADJ, i+vHSt, Math.round(sr), Math.round(sg), Math.round(sb)]);}
		    
		    sr-=rspread;
		    sg-=gspread;
		    sb-=bspread;           
        }
    }
  }
});

