var ngModule;
try {
  ngModule = angular.module('wfm.epod-generic');
} catch (e) {
  ngModule = angular.module('wfm.epod-generic', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/epod-generic.tpl.html',
    '  <md-subheader>EPOD {{epodGeneric.action}}</md-subheader>\n' +
    '\n' +
    '  <md-list ng-if="epodGeneric.action !== \'SUMMARY\'" class="epod-generic">\n' +

    // Driver
    '    <md-list-item ng-if="epodGeneric.action === \'ARRIVAL\'" class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">perm_contact_calendar</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{epodGeneric.driver}}</h3>\n' +
    //'        <h3>{{profileData.name}}</h3>\n' +
    '        <p>Driver</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +

    // Vehicle
    '    <md-list-item ng-if="epodGeneric.action === \'ARRIVAL\'" class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">local_shipping</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{epodGeneric.vehicle}}</h3>\n' +
    '        <p>Vehicle</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +

    // Time on Site
    '    <md-list-item ng-if="epodGeneric.action === \'ARRIVAL\'" class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">timer</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{epodGeneric.timeOnSite}}</h3>\n' +
    '        <p>Time on Site</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +

    // Discharge Start Time
    '    <md-list-item ng-if="epodGeneric.action === \'START DISCHARGE\' && ! epodGeneric.aborted" class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">timer</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{epodGeneric.dischargeStartTime}}</h3>\n' +
    '        <p>Discharge Start Time</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +

    // Aborted
    '    <md-list-item ng-if="epodGeneric.action === \'START DISCHARGE\' && epodGeneric.aborted" class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">timer</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{epodGeneric.abortReason}}</h3>\n' +
    '        <p>Abort Reason</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +

    // Abort Time
    '    <md-list-item ng-if="epodGeneric.action === \'START DISCHARGE\' && epodGeneric.aborted" class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">timer</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{epodGeneric.abortTime}}</h3>\n' +
    '        <p>Abort Time</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +

    // Discharge Finish Time
    '    <md-list-item ng-if="epodGeneric.action === \'FINISH DISCHARGE\'" class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">timer</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{epodGeneric.dischargeEndTime}}</h3>\n' +
    '        <p>Discharge Finish Time</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +

    // Added Water
    '    <md-list-item ng-if="epodGeneric.action === \'CONFIRM ADDITIONS\'" class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">format_color_fill</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{epodGeneric.addedWater}}</h3>\n' +
    '        <p>Added Water</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +

    // Return Material
    '    <md-list-item ng-if="epodGeneric.action === \'CONFIRM ADDITIONS\'" class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">undo</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{epodGeneric.returnedMaterial}}</h3>\n' +
    '        <p>Return Material</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +

    // Waiting Time
    '    <md-list-item ng-if="epodGeneric.action === \'CONFIRM ADDITIONS\'" class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">slow_motion_video</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{epodGeneric.waitingTime}}</h3>\n' +
    '        <p>Waiting Time</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +

    '  </md-list>\n' +

    '  <md-list ng-if="epodGeneric.action === \'SUMMARY\'" class="epod-generic">\n' +
    '\n' +

    // TODO problably dealing with the REJECTION by the customer?
    //'    <md-list-item class="md-2-line" >\n' +
    //'      <md-icon md-font-set="material-icons" ng-if="epodGeneric.complete" class="success">check_circle</md-icon>\n' +
    //'      <md-icon md-font-set="material-icons" ng-if="! epodGeneric.complete" class="danger">cancel</md-icon>\n' +
    //'      <div class="md-list-item-text">\n' +
    //'        <h3 ng-if="epodGeneric.complete">Complete</h3>\n' +
    //'        <h3 ng-if="! epodGeneric.complete">Uncompleted</h3>\n' +
    //'        <p>Delivery Confirmation</p>\n' +
    //'      </div>\n' +
    //'    <md-divider></md-divider>\n' +
    //'    </md-list-item>\n' +

    // Added Water
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">format_color_fill</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{epodGeneric.addedWater}}</h3>\n' +
    '        <p>Added Water</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +

    // Return Material
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">undo</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{epodGeneric.returnedMaterial}}</h3>\n' +
    '        <p>Return Material</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +

    // Time off Site
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">timer</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{epodGeneric.timeOffSite}}</h3>\n' +
    '        <p>Time off Site</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +

    // On behalf off
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">person</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{epodGeneric.onBehalf}}</h3>\n' +
    '        <p>On behalf off</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +

    // Signature
    '    <md-list-item class="md-2-line with-image">\n' +
    '      <md-icon md-font-set="material-icons">gesture</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3><signature value="epodGeneric.signature"></signature></h3>\n' +
    '        <p>Customer signature</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +

    '  </md-list>\n' +
    '');
}]);
