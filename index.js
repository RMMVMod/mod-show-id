var ModAPI = require('modapi')
var _ = require('lodash')

var qml = ModAPI.QMLFile("Singletons/DataManager.qml")

qml.root.node.function("nameOrId", [
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
