/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Theme.define("aie.theme.office07.Decoration",
{
  
  extend : aie.theme.vista.Decoration,

  decorations :
  {
    /*
    ---------------------------------------------------------------------------
      LABEL
    ---------------------------------------------------------------------------
    */
	
	"aie-office07-label-gray" :
	{
		decorator: aie.theme.office07.decoration.basic.Label,
		
		style :
		{
			paintgroupname : "light-gray-header"
		}
	},
	
	"aie-office07-label-gray2" :
	{
		decorator: aie.theme.office07.decoration.basic.Label,
		
		style :
		{
			paintgroupname : "light-gray-header2"
		}
	},
	
	"aie-office07-sm-label-gray" :
	{
		decorator: aie.theme.office07.decoration.basic.Label,
		
		style :
		{
			paintgroupname : "light-gray-smheader"
		}
	},
	
	/*
    ---------------------------------------------------------------------------
      TABLE
    ---------------------------------------------------------------------------
    */
	
	"aie-office07-table-header-gray" :
	{
		decorator: aie.theme.office07.decoration.table.Table,
		
		style :
		{
			paintgroupname : "light-gray-header"
		}
	},
	
	"aie-office07-table-headercell-gray" :
	{
		decorator: aie.theme.office07.decoration.table.Table,
		
		style :
		{
			paintgroupname : "light-gray-headercell"
		}
	},
	
	/*
    ---------------------------------------------------------------------------
      TOOLBAR
    ---------------------------------------------------------------------------
    */
  	
	"aie-office07-toolbar-lightgray" :
    {
      decorator: aie.theme.office07.decoration.toolbar.Toolbar,

      style :
      {
        paintgroupname : "light-gray"
      }
    },
	
	"aie-office07-toolbar-part-lightgray" :
    {
      decorator: aie.theme.office07.decoration.toolbar.Toolbar,

      style :
      {
        paintgroupname : "light-gray-handle"
      }
    },
  
  	"aie-office07-tb-radiobutton-checked-hovered" :
    {
      decorator: aie.theme.office07.decoration.toolbar.RadioButton,

      style :
      {
        statename : "checked-hovered"
      }
    },

    "aie-office07-tb-radiobutton-disabled" :
    {
      decorator : aie.theme.office07.decoration.toolbar.RadioButton,

      style :
      {
        statename : "disabled"
      }
    },

    "aie-office07-tb-radiobutton-pressed" :
    {
      decorator : aie.theme.office07.decoration.toolbar.RadioButton,

      style :
      {
        statename : "pressed"
      }
    },
	
	"aie-office07-tb-radiobutton-checked" :
    {
      decorator : aie.theme.office07.decoration.toolbar.RadioButton,

      style :
      {
        statename : "checked"
      }
    },
	
	"aie-office07-tb-radiobutton-hovered" :
    {
      decorator : aie.theme.office07.decoration.toolbar.RadioButton,

      style :
      {
        statename : "hovered"
      }
    },
	
	"aie-office07-tb-radiobutton-preselected" :
    {
      decorator : aie.theme.office07.decoration.toolbar.RadioButton,

      style :
      {
        statename : "preselected"
      }
    },
	
	"aie-office07-tb-radiobutton-focused" :
    {
      decorator : aie.theme.office07.decoration.toolbar.RadioButton,

      style :
      {
        statename : "focused"
      }
    },
	
	"aie-office07-tb-radiobutton-default" :
    {
      decorator : aie.theme.office07.decoration.toolbar.RadioButton,

      style :
      {
        statename : "default"
      }
    }
  }
});