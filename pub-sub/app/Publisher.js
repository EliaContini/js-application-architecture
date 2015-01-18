define(
   [
      "dijit/_AttachMixin",
      "dijit/_WidgetBase",
   
      "dojo/_base/declare",
      "dojo/_base/lang",
      "dojo/on",
      "dojo/topic"
   ],
   function(_AttachMixin, _WidgetBase, declare, lang, on, topic) {

      return declare([_WidgetBase, _AttachMixin], {
         
         postCreate: function() {
            on(this._input, "keyup", lang.hitch(this, "_write"));
         },

         _write: function(event) {
            topic.publish("app/publisher", this._input.value);
         }
      });
   }
);
