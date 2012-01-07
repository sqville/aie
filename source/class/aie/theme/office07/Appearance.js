/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2007 1&1 Internet AG, Germany, http://www.1and1.org
     2006 STZ-IDA, Germany, http://www.stz-ida.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
   * Jonathan Weiß (jonathan_rass)

************************************************************************* */

/**
 * Extends the default qooxdoo appearance theme.
 */
qx.Theme.define("aie.theme.office07.Appearance",
{
  title: "Theme for Partner Track 2",
  extend : aie.theme.vista.Appearance,

  appearances :
  {
  	
    /*
    ---------------------------------------------------------------------------
     LABEL
    ---------------------------------------------------------------------------
    */
	
	"aie-office07-label-gray" :
	{
	  style : function(states)
      {		
		return {
          height : 26,
		  allowGrowX : true,
		  allowShrinkX : true,
		  alignY : "middle",
		  paddingTop : 4,
		  paddingLeft : 8,
		  decorator : "aie-office07-label-gray"
        };
      }
	},
	
	"aie-office07-sm-label-gray" :
	{
	  style : function(states)
      {		
		return {
          height : 17,
		  allowGrowX : true,
		  allowShrinkX : true,
		  alignY : "middle",
		  paddingTop : 2,
		  paddingLeft : 9,
		  decorator : "aie-office07-sm-label-gray"
        };
      }
	},
	
	"aie-office07-label-gray2" :
	{
	  style : function(states)
      {		
		return {
          height : 25,
		  allowGrowX : true,
		  allowShrinkX : true,
		  alignY : "middle",
		  paddingTop : 2,
		  paddingLeft : 9,
		  decorator : "aie-office07-label-gray2"
        };
      }
	},
	
    /*
    ---------------------------------------------------------------------------
     TABLE
    ---------------------------------------------------------------------------
    */
	
	"table-scroller/header" :
	{
	  style : function(states)
      {		
		return {
          height : 21,
		  allowGrowX : true,
		  allowShrinkX : true,
		  alignY : "middle",
		  decorator : "aie-office07-table-header-gray"
        };
      }
	},
	
	"table-header-cell" :
	{
	  style : function(states)
      {
        return {
          minWidth  : 13,
          height : 21,
		  padding : [0, 6],
          decorator : "aie-office07-table-headercell-gray",
		  //decorator : "table-header-cell",
          sortIcon  : states.sorted ?
              (states.sortedAscending ? "decoration/table/ascending.png" : "decoration/table/descending.png")
              : undefined
        }
      }
	},
	
	"table-header-cell/label" :
    {
      style : function(states)
      {
        return {
          minWidth : 0,
          alignY : "middle",
		  paddingTop : 3,
		  height : 21,
		  font : "areaHeaderssmall"
        }
      }
    },
	
	/*
    ---------------------------------------------------------------------------
      LIST
    ---------------------------------------------------------------------------
    */

    "aie-office07-list" :
    {
      //alias : "scrollarea",

      style : function(states)
      {
        var decorator = null;

        return {
          backgroundColor : "transparent",
          decorator : decorator
        };
      }
    },

    "aie-office07-listitem" :
    {
      //alias : "atom",

      style : function(states)
      {
        var decorator;
        if (states.dragover) {
          decorator = states.selected ? "selected-dragover" : "dragover";
        } else {
          decorator = states.selected ? "selected" : undefined;
        }

        return {
          padding   : states.dragover ? [4, 4, 2, 4] : 4,
          textColor : states.selected ? "text-selected" : undefined,
          decorator : decorator
        };
      }
    },

	
	/*
    ---------------------------------------------------------------------------
     TOOLBAR
    ---------------------------------------------------------------------------
    */
	
	"aie-office07-toolbar-lightgray" :
    {
		
      style : function(states)
      {		
		return {
          height : 25,
		  paddingLeft : 2,
		  allowGrowX : true,
		  allowShrinkX : true,
		  spacing : 0,
		  decorator : "aie-office07-toolbar-lightgray"
        };
      }
    },
	
	"aie-office07-toolbar-part-lightgray" :
    {
      style : function(states)
      {
        return {
          decorator : "aie-office07-toolbar-part-lightgray"
        };
      }
    },

    "toolbar/part/container" :
    {
      style : function(states)
      {
        return {
          paddingLeft : 2,
          paddingRight : 2
        };
      }
    },

    "toolbar/part/handle" :
    {
      style : function(states)
      {
        return {
          marginLeft : 3,
          marginRight : 3
        };
      }
    },

    "aie-office07-toolbar-large-radiobutton" :
    {

	  alias : "atom",

      style : function(states)
      {
        var decorator;
		
		if (states.pressed){
			decorator = "aie-office07-tb-radiobutton-pressed";
		}
		else if(states.checked && states.hovered){
			decorator = "aie-office07-tb-radiobutton-checked-hovered";
		}
		else if (states.checked && !states.hovered){
			decorator = "aie-office07-tb-radiobutton-checked";
		}
		else if(states.hovered && !states.checked){
			decorator = "aie-office07-tb-radiobutton-hovered";
		}
		else {
			decorator = "aie-office07-tb-radiobutton-default";
		}
		
		return {
          height : 34,
		  paddingLeft : 8,
		  allowGrowX : true,
		  allowShrinkX : true,
		  decorator : decorator
        };
      }
    },
	
	/*
    ---------------------------------------------------------------------------
     BUTTONS
    ---------------------------------------------------------------------------
    */
	
	"aie-office07-link-button" :
    {
      style : function(states)
      {
        var font, cursor;

		if (states.hovered)
        {
          font = "aie-office07-link-button-hovered";
		  cursor = "pointer";
        }
        else
        {
          font = "small";
		  cursor = "default";
        }

        return {
          font : font,
		  cursor : cursor,
		  height : 17,
		  padding : [1,8],
          allowGrowX : true,
		  allowShrinkX : true,
		  alignX : "left"
        }
      }
    },
	
	
	"aie-office07-std-button-frame" :
    {
      alias : "atom",

      style : function(states)
      {
        var decorator, textColor;

        if (states.checked && states.focused && !states.inner)
        {
          decorator = "aie-office07-std-button-checked-focused";
          textColor = undefined;
        }
        else if (states.disabled)
        {
          decorator = "aie-office07-std-button-disabled";
          textColor = undefined;
        }
        else if (states.pressed)
        {
          decorator = "aie-office07-std-button-pressed";
          textColor = "text-hovered";
        }
        else if (states.checked)
        {
          decorator = "aie-office07-std-button-checked";
          textColor = undefined;
        }
        else if (states.hovered)
        {
          decorator = "aie-office07-std-button-hovered";
          textColor = "text-hovered";
        }
        else if (states.preselected && states.focused && !states.inner)
        {
          decorator = "aie-office07-std-button-preselected-focused";
          textColor = "text-hovered";
        }
        else if (states.preselected)
        {
          decorator = "aie-office07-std-button-preselected";
          textColor = "text-hovered";
        }
        else if (states.focused && !states.inner)
        {
          decorator = "aie-office07-std-button-focused";
          textColor = undefined;
        }
        else
        {
          decorator = "aie-office07-std-button-default";
          textColor = undefined;
        }

        return {
          decorator : decorator,
          textColor : textColor,
          shadow : states.invalid && !states.disabled ? "button-invalid-shadow" : undefined
        }
      }
    },

    "aie-office07-std-button" :
    {
      alias : "aie-office07-std-button-frame",
      include : "aie-office07-std-button-frame",

      style : function(states)
      {
        return {
          height : 21,
		  padding : [ 0, 8 ],
          center : true
        };
      }
    }
  }
});
