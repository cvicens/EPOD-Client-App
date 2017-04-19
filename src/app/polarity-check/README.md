# FeedHenry WFM vehicle-inspection

A vehicle-inspection module for FeedHenry WFM providing a set of directives. The following items of a car can be checked with this module :
- Fuel
- Tires
- Lights

#### Setup
This module is packaged in a CommonJS format, exporting the name of the Angular namespace.  The module can be included in an angular.js as follows:

```javascript
angular.module('app', [
, require('fh-wfm-vehicule-inspection')
...
])
```

#### Integration

##### Angular service

#### Directives

| Name | Attributes |
| ---- | ----------- |
| vehicle-inspection-form | |
| vehicle-inspection | vehicle-inspection|
