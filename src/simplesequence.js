var doc = require('dynamodb-doc');
var dynamo = new doc.DynamoDB();

exports.handler = function(event, context) {

  var updateRequest = {
    TableName: "supersimplesequences",
    Key: {
      sequencename: event.sequenceName
    },
    AttributeUpdates: {
      sequencevalue: {}
    },
    ReturnValues: "ALL_NEW"
  };

  var take = 1;
  if ( event.sequenceValue ) {
    updateRequest.AttributeUpdates.sequencevalue.Action = "PUT";
    updateRequest.AttributeUpdates.sequencevalue.Value = Number(event.sequenceValue);
  } else {
    take = (Number(event.take)>0) ? Number(event.take) : take;
    updateRequest.AttributeUpdates.sequencevalue.Action = "ADD";
    updateRequest.AttributeUpdates.sequencevalue.Value = take;
  }

  dynamo.updateItem(updateRequest, function(error, timer_result) {
    if (error) {
      context.fail("500: error retrieving sequence: "+error);
      return;
    }
    var lastNumber = Number(timer_result.Attributes.sequencevalue);
    var firstNumber = lastNumber - take +1;
    var result = {
      firstNumber: firstNumber,
      lastNumber: lastNumber
    };
    context.succeed(result);
  });

};