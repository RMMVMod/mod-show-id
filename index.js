var ModAPI = require('modapi')
var _ = require('lodash')

var qml = ModAPI.QMLFile("Singletons/DataManager.qml")
var nameOrId = _.find(qml.root.node.functions, {name: "nameOrId"})

nameOrId.content = [
  'function nameOrId(name, id, numDigits) {',
  '    if (name.length) {',
  '        numDigits = numDigits || 4;',
  '        return "#" + makeIdText(id, numDigits) + ": " + name;',
  '    } else {',
  '        numDigits = numDigits || 4;',
  '        return "#" + makeIdText(id, numDigits);',
  '    }',
  '}',
].join("\n");

qml.save()
