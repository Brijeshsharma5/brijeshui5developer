sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("Test.Com.myportfolio.controller.View1", {
            onInit: function () {
                let oModel= new JSONModel("../model/data.json");
                this.getView().setModel(oModel,"portfolio")

            }
        });
    });
