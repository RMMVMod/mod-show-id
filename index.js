var ModAPI = require('modapi')
var _ = require('lodash')

var qml = ModAPI.QMLFileV2("Singletons/DataManager.qml")

qml.root.set("nameOrId", [
  'function nameOrId(name, id, numDigits) {',
  '    if (name.length) {',
  '        numDigits = numDigits || 4;',
  '        return "#" + makeIdText(id, numDigits) + ": " + name;',
  '    } else {',
  '        numDigits = numDigits || 4;',
  '        return "#" + makeIdText(id, numDigits);',
  '    }',
  '}',
].join("\n"))

qml.save()
