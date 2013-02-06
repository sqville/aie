/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
     2006 STZ-IDA, Germany, http://www.stz-ida.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
   * Sebastian Werner (wpbasti)
   * Andreas Ecker (ecker)
   * Til Schneider (til132)
   * Martin Wittemann (martinwittemann)

************************************************************************* */

/* ************************************************************************

#asset(qx/decoration/Classic/*)

************************************************************************* */

/**
 * The classic qooxdoo decoration theme.
 */
qx.Theme.define("aie.theme.osx.Decoration",
{
  aliases : {
    decoration : "aie/decoration/OSX"
  },

  decorations :
  {
    /*
    ---------------------------------------------------------------------------
      CORE
    ---------------------------------------------------------------------------
    */

    "main" :
    {
      decorator: qx.ui.decoration.Uniform,

      style :
      {
        width : 1,
        color : "border-dark"
      }
    },


    "keyboard-focus" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : 1,
        color : "black",
        style : "dotted"
      }
    },



    /*
    ---------------------------------------------------------------------------
      THREE DIMENSIONAL
    ---------------------------------------------------------------------------
    */

    "inset" :
    {
      decorator : qx.ui.decoration.Double,

      style :
      {
        width : 1,
        innerWidth : 1,
        /*top, right, bottom, left*/
        color : [ "border-default-top", "#C6C6C6", "#AFAFAF", "#ABABAB" ],
        innerColor : [ "#EAEAEA", "#F8F8F8", "#FFFFFF", "#F8F8F8" ]
      }
    },

    "outset" :
    {
      decorator : qx.ui.decoration.Double,

      style :
      {
        width : 1,
        innerWidth: 1,
        color : [ "border-light-shadow", "border-dark", "border-dark", "border-light-shadow" ],
        innerColor : [ "border-light", "border-dark-shadow", "border-dark-shadow", "border-light" ]
      }
    },

    "groove" :
    {
      decorator : qx.ui.decoration.Double,

      style :
      {
        width : 1,
        innerWidth: 1,
        color : [ "border-dark-shadow", "border-light", "border-light", "border-dark-shadow" ],
        innerColor : [ "border-light", "border-dark-shadow", "border-dark-shadow", "border-light" ]
      }
    },

    "ridge" :
    {
      decorator : qx.ui.decoration.Double,

      style :
      {
        width : 1,
        innerWidth: 1,
        color : [ "border-light", "border-dark-shadow", "border-dark-shadow", "border-light" ],
        innerColor : [ "border-dark-shadow", "border-light", "border-light", "border-dark-shadow" ]
      }
    },

    "inset-thin" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : 1,
        color : [ "border-dark-shadow", "border-light", "border-light", "border-dark-shadow" ]
      }
    },

    "outset-thin" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : 1,
        color : [ "border-light", "border-dark-shadow", "border-dark-shadow", "border-light" ]
      }
    },

    "focused-inset" :
    {
      decorator : qx.ui.decoration.Double,

      style :
      {
        width : 1,
        innerWidth : 1,
        color : [ "#6498C9", "#6599CA", "#699DCE", "#669ACB" ],
        innerColor : [ "#A9C6E1", "#B1D0EB", "#B6D5F2", "#B1D0EB" ]
      }
    },

    "focused-outset" :
    {
      decorator : qx.ui.decoration.Double,

      style :
      {
        width : 1,
        innerWidth: 1,
        color : [ "border-focused-light-shadow", "border-focused-dark", "border-focused-dark", "border-focused-light-shadow" ],
        innerColor : [ "border-focused-light", "border-focused-dark-shadow", "border-focused-dark-shadow", "border-focused-light" ]
      }
    },

    "border-invalid" :
    {
      decorator: qx.ui.decoration.Double,

      style :
      {
        width : 1,
        innerWidth: 1,
        color : [ "border-dark-shadow", "border-light", "border-light", "border-dark-shadow" ],
        innerColor : "invalid"
      }
    },
    

    
    
    /*
    ---------------------------------------------------------------------------
      GROUPBOX
    ---------------------------------------------------------------------------
    */

	"aie-osx-groupbox" :
    {
      decorator: aie.theme.osx.decoration.groupbox.GroupBox

      /*style :
      {
        statename : "none"
      }*/
    },


    /*
    ---------------------------------------------------------------------------
      SEPARATOR
    ---------------------------------------------------------------------------
    */

    "separator-horizontal" :
    {
      decorator: qx.ui.decoration.Single,

      style :
      {
        widthLeft : 1,
        colorLeft : "border-separator"
      }
    },

    "separator-vertical" :
    {
      decorator: qx.ui.decoration.Single,

      style :
      {
        widthTop : 1,
        colorTop : "border-separator"
      }
    },



    /*
    ---------------------------------------------------------------------------
      SHADOWS
    ---------------------------------------------------------------------------
    */

    "aie-osx-shadow-small" :
    {
      decorator : aie.theme.osx.decoration.shadow.Shadow,

      style : {
        boxshadowhorizontal : 2,
        boxshadowvertical : 3,
        boxshadowcolor : "#919191",
        boxshadowblur : 3,
        boxshadowspread : 0
      }
    },
    
    "shadow" :
    {
      decorator : qx.ui.decoration.Grid,

      style : {
        //baseImage : "decoration/shadow/shadow.png",
        insets    : [ 4, 8, 8, 4 ]
      }
    },

    "shadow-window" :
    {
      decorator : qx.ui.decoration.Grid,

      style : {
        baseImage : "decoration/shadow/shadow.png",
        insets    : [ 4, 8, 8, 4 ]
      }
    },


    "shadow-small" :
    {
      decorator : qx.ui.decoration.Grid,

      style : {
        baseImage : "decoration/shadow/shadow-small.png",
        insets    : [ 0, 3, 3, 0 ]
      }
    },

    "checkbox-invalid-shadow" :
    {
      decorator : qx.ui.decoration.Beveled,

      style :
      {
        outerColor : "invalid",
        innerColor : "border-focused-invalid",
        insets: [0]
      }
    },
    
    
    /*
    ---------------------------------------------------------------------------
      BUTTON
    ---------------------------------------------------------------------------
    */

    "aie-osx-std-button-disabled" :
    {
      decorator : aie.theme.osx.decoration.button.Button,

      style :
      {
        statename : "disabled"
      }
    },

    "aie-osx-std-button-pressed" :
    {
      decorator : aie.theme.osx.decoration.button.Button,

      style :
      {
        statename : "pressed"
      }
    },
	
	"aie-osx-std-button-focused" :
    {
      decorator : aie.theme.osx.decoration.button.Button,

      style :
      {
        statename : "focused"
      }
    },
    
    "aie-osx-std-button-checked" :
    {
      decorator : aie.theme.osx.decoration.button.Button,

      style :
      {
        statename : "checked"
      }
    },
	
	"aie-osx-std-button-default" :
    {
      decorator : aie.theme.osx.decoration.button.Button,

      style :
      {
        statename : "default"
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      SCROLLBAR BUTTON
    ---------------------------------------------------------------------------
    */
    
    "aie-osx-std-scrollbarbuttonup-default" :
    {
      decorator : aie.theme.osx.decoration.button.ScrollbarButton,

      style :
      {
        statename : "default-up"
      }
    },
    
    
    
    /*
    ---------------------------------------------------------------------------
      BUTTON ARROWS
    ---------------------------------------------------------------------------
    */
    "aie-osx-selectbox-down-arrow" :
    {
      decorator : aie.theme.osx.decoration.resource.DownArrow,

      style :
      {}
    },
    
    "aie-osx-scrollbarbutton-up-arrow" :
    {
      decorator : aie.theme.osx.decoration.resource.ScrollUpArrow,

      style :
      {}
    },
    
    
    /*
    ---------------------------------------------------------------------------
      COMBO BOX
    ---------------------------------------------------------------------------
    */
    "aie-osx-std-cbobox-default" :
    {
      decorator : aie.theme.osx.decoration.textfield.TextField,

      style :
      {
      	statename : "default"
      }
    },
    
    "aie-osx-std-cbobox-focused" :
    {
      decorator : aie.theme.osx.decoration.textfield.TextField,

      style :
      {
      	statename : "focused"
      }
    },
    
    "aie-osx-std-cbobutton-default" :
    {
      decorator : aie.theme.osx.decoration.resource.DownArrow,

      style :
      {}
    },
    
    "aie-osx-std-cbobutton-default-btn" :
    {
      decorator : aie.theme.osx.decoration.button.ComboboxButton,

      style :
      {
        statename : "default"
      }
    },
    
    "aie-osx-std-cbobutton-pressed" :
    {
      decorator : aie.theme.osx.decoration.button.ComboboxButton,

      style :
      {
        statename : "pressed"
      }
    },
    

    
    /*
    ---------------------------------------------------------------------------
      CHECKBOX
    ---------------------------------------------------------------------------
    */

	"aie-osx-std-checkbox" :
    {
      decorator: aie.theme.osx.decoration.checkbox.CheckBox,
      style :
      {
        statename : "default"
      }
    },
    
    "aie-osx-std-checkbox-chkd" :
    {
      decorator: aie.theme.osx.decoration.checkbox.CheckBox,
      style :
      {
        statename : "default-checked"
      }
    },

     /*
    ---------------------------------------------------------------------------
      RADIOBUTTON
    ---------------------------------------------------------------------------
    */

	"aie-osx-std-radiobutton" :
    {
      decorator: aie.theme.osx.decoration.radiobutton.RadioButton,
      style :
      {
        statename : "default"
      }
    },
    
    "aie-osx-std-radiobutton-chkd" :
    {
      decorator: aie.theme.osx.decoration.radiobutton.RadioButton,
      style :
      {
        statename : "default-checked"
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      LIST
    ---------------------------------------------------------------------------
    */
    "aie-osx-std-list-default" :
    {
      decorator : aie.theme.osx.decoration.list.List,

      style :
      {
      	statename : "default"
      }
    },
    
    "aie-osx-std-list-focused" :
    {
      decorator : aie.theme.osx.decoration.list.List,

      style :
      {
      	statename : "focused"
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      SCROLLBAR
    ---------------------------------------------------------------------------
    */
    "aie-osx-std-scrollbar-vertical" :
    {
      decorator : aie.theme.osx.decoration.scrollbar.ScrollBar,

      style :
      {
      	statename : "vertical"
      }
    },
    
    "aie-osx-std-scrollbar-horizontal" :
    {
      decorator : aie.theme.osx.decoration.scrollbar.ScrollBar,

      style :
      {
      	statename : "horizontal"
      }
    },
    
    
    /*
    ---------------------------------------------------------------------------
      SLIDER
    ---------------------------------------------------------------------------
    */
    "aie-osx-slider-bar-default" :
    {
      decorator : aie.theme.osx.decoration.slider.Slider,

      style :
      {
      	statename : "horizontal-default"
      }
    },
    
    
    /*
    ---------------------------------------------------------------------------
      WINDOW
    ---------------------------------------------------------------------------
    */

    "aie-osx-std-window" :
    {
      decorator : aie.theme.osx.decoration.window.Window,

      style :
      {
        statename : "default",
        basecolorred : 153,
        basecolorgreen : 180,
        basecolorblue : 209,
        aieshadow : true
      }
    },
    
    "aie-osx-std-window-pane" :
    {
      decorator : aie.theme.osx.decoration.window.Window,

      style :
      {
        statename : "windowpane"
      }
    },
    
    "aie-osx-std-window-title" :
    {
      decorator : aie.theme.osx.decoration.window.Window,

      style :
      {
        statename : "windowtitle"
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      SPINNER
    ---------------------------------------------------------------------------
    */
    
    "aie-osx-spinner-upbutton" : 
    {
      decorator : aie.theme.osx.decoration.button.SpinnerButton,

      style :
      {
        statename : "default-up"
      }
    },
    
    "aie-osx-spinner-upbutton-pressed" : 
    {
      decorator : aie.theme.osx.decoration.button.SpinnerButton,

      style :
      {
        statename : "pressed-up"
      }
    },
    
    "aie-osx-spinner-downbutton" : 
    {
      decorator : aie.theme.osx.decoration.button.SpinnerButton,

      style :
      {
        statename : "default-down"
      }
    },
    
    "aie-osx-spinner-downbutton-pressed" : 
    {
      decorator : aie.theme.osx.decoration.button.SpinnerButton,

      style :
      {
        statename : "pressed-down"
      }
    },
    
    
    /*
    ---------------------------------------------------------------------------
      LIST ITEM
    ---------------------------------------------------------------------------
    */

    "lead-item" :
    {
      decorator : qx.ui.decoration.Uniform,

      style :
      {
        width : 1,
        style : "dotted",
        color : "border-lead"
      }
    },




    /*
    ---------------------------------------------------------------------------
      TOOL TIP
    ---------------------------------------------------------------------------
    */

    "tooltip" :
    {
      decorator: qx.ui.decoration.Uniform,

      style :
      {
        width : 1,
        color : "tooltip-text"
      }
    },


    "tooltip-error" :
    {
      decorator : qx.ui.decoration.Uniform,

      style : {
        width : 1,
        color : "tooltip-text"
      }
    },




    /*
    ---------------------------------------------------------------------------
      TOOLBAR
    ---------------------------------------------------------------------------
    */

    "toolbar-separator" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthLeft : 1,
        colorLeft : "border-dark-shadow"
      }
    },

    "toolbar-part-handle" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : 1,
        style : "solid",

        colorTop    : "white",
        colorLeft   : "white",
        colorRight  : "border-dark-shadow",
        colorBottom : "border-dark-shadow"
      }
    },





    /*
    ---------------------------------------------------------------------------
      MENU
    ---------------------------------------------------------------------------
    */

    "menu-separator" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthTop: 1,
        widthBottom: 1,
        colorTop : "border-dark",
        colorBottom : "border-light"
      }
    },





    /*
    ---------------------------------------------------------------------------
      DATE CHOOSER
    ---------------------------------------------------------------------------
    */

    "datechooser-date-pane" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthTop: 1,
        colorTop : "gray",
        style : "solid"
      }
    },


    "datechooser-weekday" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthBottom: 1,
        colorBottom : "gray",
        style : "solid"
      }
    },

    "datechooser-week" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthRight: 1,
        colorRight : "gray",
        style : "solid"
      }
    },

    "datechooser-week-header" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthBottom : 1,
        colorBottom : "gray",
        widthRight: 1,
        colorRight : "gray",

        style : "solid"
      }
    },





    /*
    ---------------------------------------------------------------------------
      TAB VIEW
    ---------------------------------------------------------------------------
    */
   
    "aie-tabview-border" :
    {
      decorator : qx.ui.decoration.Single,
      
      style :
      {
        width : 1,
        /*top, right, bottom, left*/
        color : [ "#898C95", "#898C95", "#898C95", "#898C95" ]
      }
    },

    "tabview-page-button-top" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : 1,
        color : [ "#898C95", "#898C95", "#898C95", "#898C95" ],
        widthBottom : 0
      }
    },

    "tabview-page-button-bottom" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : 1,
        color : [ "#898C95", "#898C95", "#898C95", "#898C95" ],
        widthTop : 0
      }
    },

    "tabview-page-button-left" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : 1,
        color : [ "#898C95", "#898C95", "#898C95", "#898C95" ],
        widthRight : 0
      }
    },

    "tabview-page-button-right" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : 1,
        color : [ "#898C95", "#898C95", "#898C95", "#898C95" ],
        widthLeft : 0
      }
    },
    
    "aie-tabviewbutton-default-first" :
    {
      decorator : aie.theme.osx.decoration.button.TabViewButton,

      style :
      {
        statename : "default-first"
      }
    },

	"aie-tabviewbutton-checked-first" :
    {
      decorator : aie.theme.osx.decoration.button.TabViewButton,

      style :
      {
        statename : "checked-first"
      }
    },
    
    "aie-tabviewbutton-default-middle" :
    {
      decorator : aie.theme.osx.decoration.button.TabViewButton,

      style :
      {
        statename : "default-middle"
      }
    },
    
    "aie-tabviewbutton-checked-middle" :
    {
      decorator : aie.theme.osx.decoration.button.TabViewButton,

      style :
      {
        statename : "checked-middle"
      }
    },
    
    "aie-tabviewbutton-default-last" :
    {
      decorator : aie.theme.osx.decoration.button.TabViewButton,

      style :
      {
        statename : "default-last"
      }
    },
    
    "aie-tabviewbutton-checked-last" :
    {
      decorator : aie.theme.osx.decoration.button.TabViewButton,

      style :
      {
        statename : "checked-last"
      }
    },
    
    "aie-tabviewbutton-default-bottom" :
    {
      decorator : aie.theme.osx.decoration.button.TabViewButton,

      style :
      {
        statename : "defaultbtm"
      }
    },

	"aie-tabviewbutton-default-bottom-hovered" :
    {
      decorator : aie.theme.osx.decoration.button.TabViewButton,

      style :
      {
        statename : "hoveredbtm"
      }
    },



    /*
    ---------------------------------------------------------------------------
      TABLE
    ---------------------------------------------------------------------------
    */

    "table-statusbar" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthTop : 1,
        colorTop : "border-dark-shadow",
        styleTop : "solid"
      }
    },

    "table-scroller-header" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthBottom : 1,
        colorBottom : "table-header-border",
        styleBottom : "solid"
      }
    },

    "table-scroller-focus-indicator" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : 2,
        color : "table-focus-indicator",
        style : "solid"
      }
    },

    "table-header-cell" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthRight : 1,
        colorRight : "table-header-border",
        styleRight : "solid"
      }
    },

    "table-header-cell-hovered" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthRight : 1,
        colorRight : "table-header-border",
        styleRight : "solid",

        widthBottom : 2,
        colorBottom : "effect",
        styleBottom : "solid"
      }
    },

    /*
    ---------------------------------------------------------------------------
      PROGRESSBAR
    ---------------------------------------------------------------------------
    */

    "progressbar" :
    {
      decorator: qx.ui.decoration.Single,

      style:
      {
        backgroundColor: "#FFF",
        width: 1,
        color: "border-separator"
      }
    }
  }
});
