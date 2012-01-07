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
qx.Theme.define("aie.theme.vista.Appearance",
{
  title: "Theme for Partner Track 2",
  extend : qx.theme.modern.Appearance,

  appearances :
  {
  	
    /*
    ---------------------------------------------------------------------------
     AIE VISTA STANDARD BUTTON
    ---------------------------------------------------------------------------
    */

    "aie-vista-std-button-frame" :
    {
      alias : "atom",

      style : function(states)
      {
        var decorator, textColor;

        if (states.checked && states.focused && !states.inner)
        {
          decorator = "aie-vista-std-button-checked-focused";
          textColor = undefined;
        }
        else if (states.disabled)
        {
          decorator = "aie-vista-std-button-disabled";
          textColor = undefined;
        }
        else if (states.pressed)
        {
          decorator = "aie-vista-std-button-pressed";
          textColor = "text-hovered";
        }
        else if (states.checked)
        {
          decorator = "aie-vista-std-button-checked";
          textColor = undefined;
        }
        else if (states.hovered)
        {
          decorator = "aie-vista-std-button-hovered";
          textColor = "text-hovered";
        }
        else if (states.preselected && states.focused && !states.inner)
        {
          decorator = "aie-vista-std-button-preselected-focused";
          textColor = "text-hovered";
        }
        else if (states.preselected)
        {
          decorator = "aie-vista-std-button-preselected";
          textColor = "text-hovered";
        }
        else if (states.focused && !states.inner)
        {
          decorator = "aie-vista-std-button-focused";
          textColor = undefined;
        }
        else
        {
          decorator = "aie-vista-std-button-default";
          textColor = undefined;
        }

        return {
          decorator : decorator,
          textColor : textColor,
          shadow : states.invalid && !states.disabled ? "button-invalid-shadow" : undefined
        }
      }
    },

    "aie-vista-std-button" :
    {
      alias : "aie-vista-std-button-frame",
      include : "aie-vista-std-button-frame",

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
