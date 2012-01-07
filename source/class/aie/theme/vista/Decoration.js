/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Theme.define("aie.theme.vista.Decoration",
{
  
  extend : qx.theme.modern.Decoration,

  decorations :
  {
  	"aie-vista-std-button-checked-focused" :
    {
      decorator: aie.theme.vista.decoration.ButtonDecorator,

      style :
      {
        statename : "checked-focused"
      }
    },

    "aie-vista-std-button-disabled" :
    {
      decorator : aie.theme.vista.decoration.ButtonDecorator,

      style :
      {
        statename : "disabled"
      }
    },

    "aie-vista-std-button-pressed" :
    {
      decorator : aie.theme.vista.decoration.ButtonDecorator,

      style :
      {
        statename : "pressed"
      }
    },
	
	"aie-vista-std-button-checked" :
    {
      decorator : aie.theme.vista.decoration.ButtonDecorator,

      style :
      {
        statename : "checked"
      }
    },
	
	"aie-vista-std-button-hovered" :
    {
      decorator : aie.theme.vista.decoration.ButtonDecorator,

      style :
      {
        statename : "hovered"
      }
    },
	
	"aie-vista-std-button-preselected" :
    {
      decorator : aie.theme.vista.decoration.ButtonDecorator,

      style :
      {
        statename : "preselected"
      }
    },
	
	"aie-vista-std-button-focused" :
    {
      decorator : aie.theme.vista.decoration.ButtonDecorator,

      style :
      {
        statename : "focused"
      }
    },
	
	"aie-vista-std-button-default" :
    {
      decorator : aie.theme.vista.decoration.ButtonDecorator,

      style :
      {
        statename : "default"
      }
    }
  }
});