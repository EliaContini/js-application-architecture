define(
   [
      "dijit/_WidgetBase",
   
      "dojo/_base/declare",
      "dojo/_base/lang",
      "dojo/dom-construct",
      "dojo/topic"
   ],
   function(_WidgetBase, declare, lang, domConstruct, topic) {

      return declare([_WidgetBase], {

         baseClass: "subscriber",         

         postCreate: function() {
            topic.subscribe("app/publisher", lang.hitch(this, "_read"));
         },

         _read: function(message) {
            this.domNode.innerHTML = message;
         }
      });
   }
);
