sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
	"sap/ui/demo/walkthrough/controller/HelloDialog"
], function (UIComponent, JSONModel, HelloDialog) {
   "use strict";
   return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata : {
            manifest: "json"
      },
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         // set data model
         var oData = {
            recipient : {
               name : "World"
            }
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);
			// set dialog
			this._helloDialog = new HelloDialog(this.getRootControl());
			// create the views based on the url/hash
			this.getRouter().initialize();
		},


		exit : function() {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},

		openHelloDialog : function () {
			this._helloDialog.open();
        },
		
		getContentDensityClass : function() {
			if (!this._sContentDensityClass) {
				if (!sap.ui.Device.support.touch) {
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					this._sContentDensityClass = "sapUiSizeCozy";
				}
			}
			return this._sContentDensityClass;
		}
   });
});