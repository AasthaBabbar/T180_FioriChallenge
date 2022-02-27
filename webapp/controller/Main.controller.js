sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "T180/fiorichallenge/model/models",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, models) {
        "use strict";

        return Controller.extend("T180.fiorichallenge.controller.Main", {
            onInit: function () {

            },

            onAfterRendering: function () {

                // Instantiate the Asset Review Model from the models.js template
                this.getView().setModel(new JSONModel(models.createAssetReviewModelTemplate()), "AssetReviewModel");

                // Example; setting the 'CurrentDate' property in the Asset Review model
                this.getView().getModel("AssetReviewModel").setProperty("/CurrentDate", new Date());
                            
            },
            //Aastha Babbar: 23.02.2022: Event Handler for Add New Review
            OnAddBtnClick: function () {
                if(!this.getView().byId("fragmentId")){
                    this.loadFragment({name: "T180.fiorichallenge.View.AddNewReview"}).then(function (oDialog) {
                        this.getView().addDependent(oDialog);
                        oDialog.open();
                      });
                      
                } else {
                    this.byId("fragmentId").open();
                     }
            }

        });
    });
