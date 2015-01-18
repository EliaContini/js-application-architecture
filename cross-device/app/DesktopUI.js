define(
   [
      "dijit/_WidgetBase",
   
      "dojo/_base/declare"
   ],
   function(_WidgetBase, declare) {

      return declare([_WidgetBase], {
         
         postCreate: function() {
            this.domNode.innerHTML = "Desktop UI";
         }
      });
   }
);
