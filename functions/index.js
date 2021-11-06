const functions = require('firebase-functions')
const { createProfile } = require('./create-profile')
const { getInviterInfo } = require('./get-inviter-info')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true})
//   response.send("Hello from Firebase!")
// })

module.exports = {
  createProfile: functions.https.onCall(createProfile),
  getInviterInfo: functions.https.onCall(getInviterInfo)
}
