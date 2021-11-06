const { admin } = require('./admin')

const getInviterInfo = async (data) => {
  const { id } = data

  const docs = await admin.firestore().collection('user')
    .where('invitationIDs', 'array-contains', id)
    .get()
  return docs.empty ? {} : docs.docs.map(doc => doc.data())
}

module.exports = { getInviterInfo }
