const { connect } = require('mongoose');

const startConnection = async () => {
  try {
    const db = await connect(`mongodb://localhost/MediaDashboard`)
    console.log('Connection successfully with the database', db.connect.name)
  } catch (err) {
    console.error('Error connectivity with the database', err)
  }
}

module.exports = startConnection;