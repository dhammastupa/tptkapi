const { admin } = require('./admin')

const createProfile = async (data, context) => {
  const { uid, email, firstName, lastName, inviterUid, inviterCode } = data

  admin.firestore()
    .collection('user')
    .doc(uid)
    .set({
      uid,
      email,
      firstName,
      lastName,
      inviterUid,
      creationDate: admin.firestore.FieldValue.serverTimestamp()
    })
    .then(console.log('created'))
    .catch(console.error)

  const doc = await admin.firestore().collection('group').doc('staff').get()
  admin.firestore()
    .collection('group')
    .doc('staff')
    .update({
      user: [...doc.data().user, uid]
    })
    .catch(console.error)

  admin.firestore()
    .collection('user')
    .doc(inviterUid)
    .update({
      invitationIDs: admin.firestore.FieldValue.arrayRemove(inviterCode)
    })
}

module.exports = { createProfile }
