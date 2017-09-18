var ngModule;
try {
  ngModule = angular.module('wfm.epod-generic');
} catch (e) {
  ngModule = angular.module('wfm.epod-generic', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/epod-generic-form.tpl.html',

    //'  <div ng-show="epodGenericStep === 0"  class="risk-assessment">\n' +
    //'<div  ng-show="action !== \'SUMMARY\' && count == 0" layout="row" layout-align="center center">'

    ' <div ng-cloak ng-show="showDisclaimer">' +
    '     <md-toolbar class="md-warn" md-dynamic-height md-border-bottom>' +
    '       <h2 class="md-toolbar-tools" layout-align="center center">' +
    '         <span>DISCLAIMER</span>' +
    '       </h2>' +
    '     </md-toolbar>' +
    '     <md-content>' +
    '     <md-content flex layout-padding style="text-align: justify;">' +
    '       <p style="font-weight: bold;">Caution: WET CONCRETE AND SCREED CAN CAUSE SERIOUS BURNS TO SKIN</p>' +
    '       <p>To avoid this, minimise contact with cement or concrete, e.g. wear full protective clothing. Where contact occurs (whether directly or through saturated clothing)</p> ' +
    '       <p style="font-weight: bold; text-align: center;"><span>WASH THOROUGHLY IMMEDIATELY</span></p>' +
    '       <p style="font-weight: bold;">PLEASE ENSURE THAT THIS WARNING IS BROUGHT TO THE ATTENTION OF ALL PERSONS HANDLING WET CONCRETE BEFORE DELIVERY COMMENCES</p>' +
    '     </md-content>' +

    '     <div layout="row" layout-align="center center">' +
    '          <md-button class="md-primary md-warn" ng-click="ctrl.acceptDisclaimer($event)">ACCEPT</md-button>\n' +
    '     </div>' +
    '     </md-content>' +
    ' </div>' +

    ' <div ng-cloak ng-show="action !== \'SUMMARY\' && ! showDisclaimer" class="heightpx">' +
    '    <md-content>' +
    '    <md-tabs md-dynamic-height md-border-bottom md-selected="selectedIndex">' +
    // DELIVERY
    //'    <md-tabs md-border-bottom>' +
    '      <md-tab label="Delivery">' +
    '        <md-content class="md-padding">' +

    '                <div layout="row" class="epod-generic-row">\n' +
    '                  <div flex="40" layout="row" layout-align="start center">\n' +
    '                    <span class="md-body-2">\n' +
    '                      Date\n' +
    '                    </span>\n' +
    '                  </div>\n' +
    '                  <input type="text" name="input" ng-model="ctrl.workorder.ticketDate" ng-disabled="true">\n' +
    '                </div>\n' +

    '                <div layout="row" class="epod-generic-row">\n' +
    '                  <div flex="40" layout="row" layout-align="start center">\n' +
    '                    <span class="md-body-2">\n' +
    '                      Time Out\n' +
    '                    </span>\n' +
    '                  </div>\n' +
    '                  <input type="text" name="input" ng-model="ctrl.workorder.ticketTime" ng-disabled="true">\n' +
    '                </div>\n' +

    '                <div layout="row" class="epod-generic-row">\n' +
    '                  <div flex="40" layout="row" layout-align="start center">\n' +
    '                    <span class="md-body-2">\n' +
    '                      Delivery Ticket\n' +
    '                    </span>\n' +
    '                  </div>\n' +
    '                  <input type="text" name="input" ng-model="ctrl.workorder.ticketNumber" ng-disabled="true">\n' +
    '                </div>\n' +

    '                <md-divider></md-divider>\n' +
    '                <div layout="row" class="epod-generic-row">\n' +
    '                  <div layout-align="start center">\n' +
    '                    <span class="md-body-2">\n' +
    '                      Delivery Address\n' +
    '                    </span>\n' +
    '                    <p class="epod-generic-p-small">\n' +
    '                      {{ctrl.workorder.addressDetail}} \n' +
    '                    </p>\n' +
    '                    <p class="epod-generic-p-small">\n' +
    '                      {{ctrl.workorder.addressStreet}} \n' +
    '                    </p>\n' +
    '                    <p class="epod-generic-p-small">\n' +
    '                      {{ctrl.workorder.addressPostalCode}} \n' +
    '                    </p>\n' +
    '                  </div>\n' +
    '                </div>\n' +

    '                <md-divider></md-divider>\n' +
    '                <div layout="row" class="epod-generic-row">\n' +
    '                  <div layout-align="start center">\n' +
    '                    <span class="md-body-2">\n' +
    '                      Special Instruccions\n' +
    '                    </span>\n' +
    '                    <p class="epod-generic-p-small">\n' +
    '                      {{ctrl.workorder.instructions}} \n' +
    '                    </p>\n' +
    '                  </div>\n' +
    '                </div>\n' +

    '        </md-content>' +
    '      </md-tab>' +
    // PRODUCT
    '      <md-tab label="Product">' +
    '        <md-content class="md-padding">' +

    '                <div layout="row" class="epod-generic-row">\n' +
    '                  <div flex="40" layout="row" layout-align="start center">\n' +
    '                    <span class="md-body-2">\n' +
    '                      Loaded at\n' +
    '                    </span>\n' +
    '                  </div>\n' +
    '                  <input type="text" name="input" ng-model="ctrl.workorder.originName" ng-disabled="true">\n' +
    '                </div>\n' +

    '                <div layout="row" class="epod-generic-row">\n' +
    '                  <div flex="40" layout="row" layout-align="start center">\n' +
    '                    <span class="md-body-2">\n' +
    '                      Phone\n' +
    '                    </span>\n' +
    '                  </div>\n' +
    '                  <input type="text" name="input" ng-model="ctrl.workorder.originPhone" ng-disabled="true">\n' +
    '                </div>\n' +

    '                <div layout="row" class="epod-generic-row">\n' +
    '                  <div flex="40" layout="row" layout-align="start center">\n' +
    '                    <span class="md-body-2">\n' +
    '                      Product\n' +
    '                    </span>\n' +
    '                  </div>\n' +
    '                  <input type="text" name="input" ng-model="ctrl.workorder.product" ng-disabled="true">\n' +
    '                </div>\n' +
    '                <md-divider></md-divider>\n' +
    '                <div layout="row" class="epod-generic-row">\n' +
    '                  <div flex="40" layout="row" layout-align="start center">\n' +
    '                    <span class="md-body-2">\n' +
    '                      Volume\n' +
    '                    </span>\n' +
    '                  </div>\n' +
    '                  <input type="text" name="input" ng-model="ctrl.workorder.volumeUnit" ng-disabled="true">\n' +
    '                </div>\n' +

    '                <div layout="row" class="epod-generic-row">\n' +
    '                  <div flex="40" layout="row" layout-align="start center">\n' +
    '                    <span class="md-body-2">\n' +
    '                      This load\n' +
    '                    </span>\n' +
    '                  </div>\n' +
    '                  <input type="text" name="input" ng-model="ctrl.workorder.thisLoad" ng-disabled="true">\n' +
    '                </div>\n' +

    '                <div layout="row" class="epod-generic-row">\n' +
    '                  <div flex="40" layout="row" layout-align="start center">\n' +
    '                    <span class="md-body-2">\n' +
    '                      Pour so far\n' +
    '                    </span>\n' +
    '                  </div>\n' +
    '                  <input type="text" name="input" ng-model="ctrl.workorder.pourSoFar" ng-disabled="true">\n' +
    '                </div>\n' +

    '                <div layout="row" class="epod-generic-row">\n' +
    '                  <div flex="40" layout="row" layout-align="start center">\n' +
    '                    <span class="md-body-2">\n' +
    '                      Total ordered\n' +
    '                    </span>\n' +
    '                  </div>\n' +
    '                  <input type="text" name="input" ng-model="ctrl.workorder.totalOrdered" ng-disabled="true">\n' +
    '                </div>\n' +
    '                <md-divider></md-divider>\n' +

    '                <div layout="row" class="epod-generic-row">\n' +
    '                  <div flex="40" layout="row" layout-align="start center">\n' +
    '                    <span class="md-body-2">\n' +
    '                      Time on Site\n' +
    '                    </span>\n' +
    '                  </div>\n' +
    '                  <input type="text" name="input" ng-model="ctrl.workorder.timeOnSite" ng-disabled="true">\n' +
    '                </div>\n' +

    '                <div layout="row" class="epod-generic-row">\n' +
    '                  <div flex="40" layout="row" layout-align="start center">\n' +
    '                    <span class="md-body-2">\n' +
    '                      Discharge Start\n' +
    '                    </span>\n' +
    '                  </div>\n' +
    '                  <input type="text" name="input" ng-model="ctrl.workorder.dischargeStartTime" ng-disabled="true">\n' +
    '                </div>\n' +

    '                <div layout="row" class="epod-generic-row">\n' +
    '                  <div flex="40" layout="row" layout-align="start center">\n' +
    '                    <span class="md-body-2">\n' +
    '                      Discharge End\n' +
    '                    </span>\n' +
    '                  </div>\n' +
    '                  <input type="text" name="input" ng-model="ctrl.workorder.dischargeEndTime" ng-disabled="true">\n' +
    '                </div>\n' +

    '                <div layout="row" class="epod-generic-row">\n' +
    '                  <div flex="40" layout="row" layout-align="start center">\n' +
    '                    <span class="md-body-2">\n' +
    '                      Time off Site\n' +
    '                    </span>\n' +
    '                  </div>\n' +
    '                  <input type="text" name="input" ng-model="ctrl.model.timeOffSite" ng-disabled="true">\n' +
    '                </div>\n' +

    '        </md-content>' +
    '      </md-tab>' +
    // Customer
    '      <md-tab label="Customer">' +
    '        <md-content class="md-padding">' +

    '                <div layout="row" class="epod-generic-row">\n' +
    '                  <div layout-align="start center">\n' +
    '                    <span class="md-body-2">\n' +
    '                      Customer\n' +
    '                    </span>\n' +
    '                    <p class="epod-generic-p-small">\n' +
    '                      {{ctrl.workorder.customerName}} \n' +
    '                    </p>\n' +
    '                  </div>\n' +
    '                </div>\n' +

    '                <div layout="row" class="epod-generic-row">\n' +
    '                  <div flex="40" layout="row" layout-align="start center">\n' +
    '                    <span class="md-body-2">\n' +
    '                      Account\n' +
    '                    </span>\n' +
    '                  </div>\n' +
    '                  <input type="text" name="input" ng-model="ctrl.workorder.account" ng-disabled="true">\n' +
    '                </div>\n' +

    '                <div layout="row" class="epod-generic-row">\n' +
    '                  <div flex="40" layout="row" layout-align="start center">\n' +
    '                    <span class="md-body-2">\n' +
    '                      P/O\n' +
    '                    </span>\n' +
    '                  </div>\n' +
    '                  <input type="text" name="input" ng-model="ctrl.workorder.po" ng-disabled="true">\n' +
    '                </div>\n' +

    '                <div layout="row" class="epod-generic-row">\n' +
    '                  <div flex="40" layout="row" layout-align="start center">\n' +
    '                    <span class="md-body-2">\n' +
    '                      Contract\n' +
    '                    </span>\n' +
    '                  </div>\n' +
    '                  <input type="text" name="input" ng-model="ctrl.workorder.contract" ng-disabled="true">\n' +
    '                </div>\n' +

    '                <div layout="row" class="epod-generic-row">\n' +
    '                  <div flex="40" layout="row" layout-align="start center">\n' +
    '                    <span class="md-body-2">\n' +
    '                      Call Off\n' +
    '                    </span>\n' +
    '                  </div>\n' +
    '                  <input type="text" name="input" ng-model="ctrl.workorder.callOff" ng-disabled="true">\n' +
    '                </div>\n' +

    '        </md-content>' +
    '      </md-tab>' +
    '      <md-tab label="Additions">' +
    '        <md-content class="md-padding">' +

    '                <div layout="row" class="epod-generic-row">\n' +
    '                  <div flex="40" layout="row" layout-align="start center">\n' +
    '                    <span class="md-body-2">\n' +
    '                      Water (lt.)\n' +
    '                    </span>\n' +
    '                  </div>\n' +
    //style="-webkit-appearance: caret; color: red;"
    '                  <input type="text" name="input" ng-model="ctrl.model.addedWater" ng-disabled="false">\n' +
    '                </div>\n' +

    '                <div layout="row" class="epod-generic-row">\n' +
    '                  <div flex="40" layout="row" layout-align="start center">\n' +
    '                    <span class="md-body-2">\n' +
    '                      Return Material\n' +
    '                    </span>\n' +
    '                  </div>\n' +
    '                  <input type="text" name="input" ng-model="ctrl.model.returnedMaterial" ng-change="monitorReturnedMaterial($event)">\n' +
    '                </div>\n' +

    '                <div layout="row" class="epod-generic-row" ng-show="ctrl.model.returnedMaterial > 0">\n' +
    '                  <div flex="40" layout="row" layout-align="start center">\n' +
    '                    <span class="md-body-2">\n' +
    '                      Reason for Returned\n' +
    '                    </span>\n' +
    '                  </div>\n' +
    '                  <input type="text" name="input" ng-model="ctrl.model.reasonReturnedMaterial" ng-disabled="false">\n' +
    '                </div>\n' +

    //'                <div layout="row" class="epod-generic-row" >\n' +
    //'                 <md-slider-container>' +
    //'                   <span class="md-body-2">Return Material</span>' +
    //'                   <md-slider flex min="0" max="8" ng-model="ctrl.model.returnedMaterial" aria-label="red" id="red-slider">' +
    //'                   </md-slider>' +
    //'                   <md-input-container>' +
    //'                     <input flex type="number" ng-model="ctrl.model.returnedMaterial" aria-label="red" aria-controls="red-slider">' +
    //'                   </md-input-container>' +
    //'                 </md-slider-container>' +
    //'                </div>\n' +


    //'                <div layout="row" class="epod-generic-row">\n' +
    //'                  <div flex="40" layout="row" layout-align="start center">\n' +
    //'                    <span class="md-body-2">\n' +
    //'                      Waiting Time\n' +
    //'                    </span>\n' +
    //'                  </div>\n' +
    //'                  <input type="text" name="input" ng-model="ctrl.model.waitingTime" ng-disabled="false">\n' +
    //'                </div>\n' +
    //'                <md-divider></md-divider>\n' +

    '                <div ng-if="additionsStatus" layout="row" class="epod-generic-padding-row">\n' +
    '                  <div layout-align="start center">\n' +
    '                    <span class="epod-generic-warn md-body-2">\n' +
    '                      Attention\n' +
    '                    </span>\n' +
    '                    <p class="epod-generic-p-small">\n' +
    '                      {{additionsStatus}} \n' +
    '                    </p>\n' +
    '                  </div>\n' +
    '                </div>\n' +

    '        </md-content>' +
    '      </md-tab>' +
    '    </md-tabs>' +

    '  </md-content>' +

    //'  <div layout="row" layout-align="center end">' +
    '    <div class="workflow-actions md-padding md-whiteframe-z4" layout="row" layout-align="center end">\n' +
    '     <md-button class="md-primary md-warn" ng-show="action === \'START DISCHARGE\' && !isAborted" ng-click="ctrl.showAbortConfirm($event)">ABORT</md-button>\n' +
    '     <md-button class="md-primary md-warn" ng-show="!isAborted" ng-disabled="isActionButtonDisabled || ! ctrl.dataIsValid()" ng-click="ctrl.onAction($event)">{{action}}</md-button>\n' +
    '    </div>' +

    // workflow-actions
    //'    <div class="workflow-actions md-padding md-whiteframe-z4">\n' +
    //'      <md-button class="md-primary" ng-disabled="isContinueButtonDisabled || isAborted" ng-click="ctrl.done($event)">Continue</md-button>\n' +
    //'    </div>\n' +

    '</div>' +




    '\n' +

    '\n' +
    '  <div ng-show="action === \'SUMMARY\'  && !isSignatureStep"  class="risk-assessment">\n' +

    '     <div layout="row" class="epod-generic-padding-lo-row">\n' +
    '       <div flex="40" layout="row" layout-align="start center">\n' +
    '         <span class="md-body-2">\n' +
    '           Driver\n' +
    '         </span>\n' +
    '       </div>\n' +
    //'       <input type="text" name="input" ng-model="ctrl.model.driver" ng-disabled="true">\n' +
    '       <input type="text" name="input" ng-model="profileData.name" ng-disabled="true">\n' +
    '     </div>\n' +

    '     <div layout="row" class="epod-generic-padding-lo-row">\n' +
    '       <div flex="40" layout="row" layout-align="start center">\n' +
    '         <span class="md-body-2">\n' +
    '           Vehicle\n' +
    '         </span>\n' +
    '       </div>\n' +
    '       <input type="text" name="input" ng-model="ctrl.model.vehicle" ng-disabled="true">\n' +
    '     </div>\n' +

    // Customer Name
    '     <div layout="row" class="epod-generic-padding-lo-row">\n' +
    '       <div layout-align="start center">\n' +
    //'         <span class="md-body-2">\n' +
    //'           Customer\n' +
    //'         </span>\n' +
    '         <p class="epod-generic-p-small">\n' +
    '           {{ctrl.workorder.customerName}} \n' +
    '         </p>\n' +
    '       </div>\n' +
    '     </div>\n' +

    // Product
    '     <div layout="row" class="epod-generic-padding-lo-row">\n' +
    '       <div layout-align="start center">\n' +
    //'         <span class="md-body-2">\n' +
    //'           Customer\n' +
    //'         </span>\n' +
    '         <p class="epod-generic-p-small">\n' +
    '           {{ctrl.workorder.product}} \n' +
    '         </p>\n' +
    '       </div>\n' +
    '     </div>\n' +

    '     <md-divider></md-divider>\n' +
    '     <div layout="row" class="epod-generic-padding-lo-row">\n' +
    '       <div flex="40" layout="row" layout-align="start center">\n' +
    '         <span class="md-body-2">\n' +
    '           Volume\n' +
    '         </span>\n' +
    '       </div>\n' +
    '       <input type="text" name="input" ng-model="ctrl.model.volumeUnit" ng-disabled="true">\n' +
    '     </div>\n' +

    '     <div layout="row" class="epod-generic-padding-lo-row">\n' +
    '       <div flex="40" layout="row" layout-align="start center">\n' +
    '         <span class="md-body-2">\n' +
    '           This load\n' +
    '         </span>\n' +
    '       </div>\n' +
    '       <input type="text" name="input" ng-model="ctrl.workorder.thisLoad" ng-disabled="true">\n' +
    '     </div>\n' +

    '     <div layout="row" class="epod-generic-padding-lo-row">\n' +
    '       <div flex="40" layout="row" layout-align="start center">\n' +
    '         <span class="md-body-2">\n' +
    '           Total ordered\n' +
    '         </span>\n' +
    '       </div>\n' +
    '       <input type="text" name="input" ng-model="ctrl.workorder.totalOrdered" ng-disabled="true">\n' +
    '     </div>\n' +
    '     <md-divider></md-divider>\n' +

    '     <div layout="row" class="epod-generic-padding-lo-row">\n' +
    '       <div flex="40" layout="row" layout-align="start center">\n' +
    '         <span class="md-body-2">\n' +
    '           Time on Site\n' +
    '         </span>\n' +
    '       </div>\n' +
    '       <input type="text" name="input" ng-model="ctrl.model.timeOnSite" ng-disabled="false">\n' +
    '     </div>\n' +

    '     <div layout="row" class="epod-generic-padding-lo-row">\n' +
    '       <div flex="40" layout="row" layout-align="start center">\n' +
    '         <span class="md-body-2">\n' +
    '           Discharge Start\n' +
    '         </span>\n' +
    '       </div>\n' +
    '       <input type="text" name="input" ng-model="ctrl.model.dischargeStartTime" ng-disabled="false">\n' +
    '     </div>\n' +

    '     <div layout="row" class="epod-generic-padding-lo-row">\n' +
    '       <div flex="40" layout="row" layout-align="start center">\n' +
    '         <span class="md-body-2">\n' +
    '           Discharge End\n' +
    '         </span>\n' +
    '       </div>\n' +
    '       <input type="text" name="input" ng-model="ctrl.model.dischargeEndTime" ng-disabled="false">\n' +
    '     </div>\n' +

  	'     <div layout="row" class="epod-generic-padding-lo-row">\n' +
  	'       <div flex="40" layout="row" layout-align="start center">\n' +
  	'         <span class="md-body-2">\n' +
  	'           Time off Site\n' +
  	'         </span>\n' +
  	'       </div>\n' +
  	'       <input type="text" name="input" ng-model="ctrl.model.timeOffSite" ng-disabled="false">\n' +
  	'     </div>\n' +
    '     <md-divider></md-divider>\n' +

    '     <div layout="row" class="epod-generic-padding-lo-row">\n' +
    '       <div flex="40" layout="row" layout-align="start center">\n' +
    '         <span class="md-body-2">\n' +
    '           Water (lt.)\n' +
    '         </span>\n' +
    '       </div>\n' +
    '       <input type="text" name="input" ng-model="ctrl.model.addedWater" ng-disabled="false">\n' +
    '     </div>\n' +

    '     <div layout="row" class="epod-generic-padding-lo-row">\n' +
    '       <div flex="40" layout="row" layout-align="start center">\n' +
    '         <span class="md-body-2">\n' +
    '           Return Material\n' +
    '         </span>\n' +
    '       </div>\n' +
    '       <input type="text" name="input" ng-model="ctrl.model.returnedMaterial" ng-disabled="false">\n' +
    '     </div>\n' +

    '\n' +

    '    <div class="workflow-actions md-padding md-whiteframe-z4" layout="row" layout-align="center end">\n' +
    '     <md-button class="md-primary md-warn" ng-disabled="isActionButtonDisabled" ng-click="ctrl.onAction($event, true)">ACCEPT</md-button>\n' +
    '    </div>' +
    '\n' +
    //'    <div class="workflow-actions md-padding md-whiteframe-z4">\n' +
    //'      <md-button class="md-primary" ng-disabled="isContinueButtonDisabled" ng-click="ctrl.done($event)">Continue</md-button>\n' +
    //'    </div><!-- workflow-actions-->\n' +

    '  </div>\n' +

    '  <div ng-show="action === \'SUMMARY\' && isSignatureStep" layout-padding>\n' +
    '\n' +
    //'    <h3 class="md-title">Signature</h3>\n' +

    '     <div layout="row" class="epod-generic-padding-lo-row">\n' +
    '       <div flex="40" layout="row" layout-align="start center">\n' +
    '         <span class="md-body-2">\n' +
    '           Print\n' +
    '         </span>\n' +
    '       </div>\n' +
    '       <input type="text" name="input" ng-model="ctrl.model.onBehalf" ng-disabled="false">\n' +
    '     </div>\n' +

    '    <p class="md-caption">Signed on behalf of the customer confirming goods received, vehicle times, water added on site and returned materials</p>\n' +

    '    <signature-form value="ctrl.model.signature"></signature-form>\n' +
    '\n' +
    '    <div class="workflow-actions md-padding md-whiteframe-z4">\n' +
    //'      <md-button class="md-primary md-hue-1" ng-click="ctrl.back($event)">Back</md-button>\n' +
    '      <md-button class="md-primary" ng-click="ctrl.done($event)">Continue</md-button>\n' +
    '    </div><!-- workflow-actions-->\n' +
    '  </div>\n' +

    '');
}]);
