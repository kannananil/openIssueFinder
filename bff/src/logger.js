const logMessage = (severity, message, additionalDetails = null) => {
  const structuredMessage = additionalDetails
    ? `${severity}: ${message}\n${JSON.stringify(additionalDetails)}\n`
    : `${severity}: ${message}\n`;
  console.log(structuredMessage);
}

const info = (message, additionalDetails = null) => {
  logMessage('Info', message, additionalDetails);
}

const error = (message, additionalDetails = null) => {
  logMessage('Error', message, additionalDetails);
}

module.exports = { info, error };