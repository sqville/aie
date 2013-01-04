/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
   * Sebastian Werner (wpbasti)
   * Andreas Ecker (ecker)

************************************************************************* */

/**
 * The win7 qooxdoo font theme.
 */
qx.Theme.define("aie.theme.win7.Font",
{
  fonts :
  {
    "default" :
    {
      size : 12,
      //lineHeight : 1.4,
      family : [ "Segoe UI", "Tahoma", "Verdana", "Bitstream Vera Sans", "Liberation Sans" ]
    },

    "bold" :
    {
      size : 12,
      //lineHeight : 1.4,
      family : [ "Segoe UI", "Lucida Grande", "Tahoma", "Verdana", "Bitstream Vera Sans", "Liberation Sans" ],
      bold : true
    },

    "small" :
    {
      size : 11,
      //lineHeight : 1.4,
      family : [ "Segoe UI", "Lucida Grande", "Tahoma", "Verdana", "Bitstream Vera Sans", "Liberation Sans" ]
    },

    "monospace" :
    {
      size : 12,
      //lineHeight : 1.4,
      family : [ "DejaVu Sans Mono", "Courier New", "monospace" ]
    }
  }
});
