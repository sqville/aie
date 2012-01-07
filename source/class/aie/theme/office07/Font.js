/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Theme.define("aie.theme.office07.Font",
{
  extend : aie.theme.vista.Font,

  fonts :
  {
  	"aie-office07-link-button-hovered" :
	{
	  decoration : "underline",
	  size : qx.bom.client.System.WINVISTA ? 11 : 10,
      lineHeight : 1.4,
      family : qx.bom.client.Platform.MAC ? [ "Lucida Grande" ] :
        qx.bom.client.System.WINVISTA ? [ "Segoe UI", "Candara" ] :
        [ "Tahoma", "Liberation Sans", "Arial" ]
	}
  }
});