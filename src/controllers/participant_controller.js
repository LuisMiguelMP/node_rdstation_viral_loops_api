const axios = require('axios')

exports.post = (req, res) => {
  var result = req.body;
  var email = result.leads[0].email;
  var referralCode = result.leads[0].custom_fields.referral;
  var resultsUrl;
  var internalId = result.event_id;

  var data = {
    "apiToken": "VIRAL_LOOPS_CAMPAIGN_API_TOKEN",
    "params": {
      "event": "registration",
      "user": {
        "firstname": "",
        "lastname": "",
        "email": email,
        "extraData": { "internalID": internalId }
      },
      "referrer": {
        "referralCode": referralCode,
      },
      "refSource": ""
    }
  }

  axios
    .post('https://app.viral-loops.com/api/v2/events',
      data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.error(error)
    }).then(res.status(200).end()
    )
};