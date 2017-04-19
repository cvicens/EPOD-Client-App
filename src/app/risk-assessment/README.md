# FeedHenry WFM risk-assessment

A vehicle-inspection module for FeedHenry WFM providing a set of directives. The following items of a risk assessment can be collected this module :
- Completed / uncompleted
- Signature capture

#### Setup
This module is packaged in a CommonJS format, exporting the name of the Angular namespace.  The module can be included in an angular.js as follows:

```javascript
angular.module('app', [
, require('fh-wfm-risk-assessment')
...
])
```

#### Dependency

This module also needs the the [wfm-signature](https://github.com/feedhenry-staff/wfm-signature) to work properly :
```javascript
angular.module('app', [
, require('fh-wfm-signature')
...
])
```


#### Integration

##### Angular service

#### Directives

| Name | Attributes |
| ---- | ----------- |
| risk-assessment-form | |
| risk-assessment | value |
