/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Theme.define("aie.theme.vista.Font",
{
  extend : qx.theme.modern.Font,

  fonts :
  {
  	"bannerheader" :
    {
      size : qx.bom.client.System.WINVISTA ? 13 : 12,
      family : qx.bom.client.Platform.MAC ? [ "Lucida Grande" ] :
        qx.bom.client.System.WINVISTA ? [ "Segoe UI", "Candara" ] :
        [ "Tahoma", "Liberation Sans", "Arial" ]
    },
	
	"assignstafflist" :
    {
      size : qx.bom.client.System.WINVISTA ? 14 : 13,
	  lineHeight : 1.2,
      family : qx.bom.client.Platform.MAC ? [ "Lucida Grande" ] :
        qx.bom.client.System.WINVISTA ? [ "Segoe UI", "Candara" ] :
        [ "Tahoma", "Liberation Sans", "Arial" ]
    },
	
	"voldetailfullname" :
    {
      size : qx.bom.client.System.WINVISTA ? 18 : 17,
      lineHeight : 1.3,
      family : qx.bom.client.Platform.MAC ? [ "Lucida Grande" ] :
        qx.bom.client.System.WINVISTA ? [ "Tahoma", "Arial" ] :
        [ "Segoe UI", "Candara" ]
    },
	
	"comingsoon" :
    {
      size : qx.bom.client.System.WINVISTA ? 18 : 17,
      family : qx.bom.client.Platform.MAC ? [ "Lucida Grande" ] :
        qx.bom.client.System.WINVISTA ? [ "Segoe UI", "Candara" ] :
        [ "Tahoma", "Arial" ]
    },
	
	"topheader" :
    {
      size : qx.bom.client.System.WINVISTA ? 18 : 17,
      lineHeight : 1.4,
      family : qx.bom.client.Platform.MAC ? [ "Lucida Grande" ] :
        qx.bom.client.System.WINVISTA ? [ "Segoe UI", "Candara" ] :
        [ "Tahoma", "Liberation Sans", "Arial" ],
      bold : true
    },
	
	"topheaderdesc" :
    {
      size : qx.bom.client.System.WINVISTA ? 14 : 13,
      lineHeight : 1.4,
      family : qx.bom.client.Platform.MAC ? [ "Lucida Grande" ] :
        qx.bom.client.System.WINVISTA ? [ "Segoe UI", "Candara" ] :
        [ "Tahoma", "Liberation Sans", "Arial" ]
    }
  }
});