let AWS = require("aws-sdk");
AWS.config.update({region:'us-east-1'});


let costexplorer = new AWS.CostExplorer({apiVersion: '2017-10-25'});
let params = {
    Granularity: "MONTHLY", /* required */
    Metrics: [ /* required */
      'BLENDED_COST',
      /* more items */
    ],
    TimePeriod: { /* required */
      End: '2022-03-31', /* required */
      Start: '2022-03-01' /* required */
    },
    GroupBy: [
      {
        Key: 'client_name',
        Type: "TAG"
      },
      /* more items */
    ],
  };
  costexplorer.getCostAndUsage(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(JSON.stringify(data, null, 2));           // successful response
  });
