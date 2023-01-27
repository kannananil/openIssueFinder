const logMessage = (severity, message, additionalDetails = {}) => {
  console.log(`${severity}: ${message}\n${JSON.stringify(additionalDetails)}`);
}

const info = (message, additionalDetails = {}) => {
  logMessage('Info', message, additionalDetails);
}

const error = (message, additionalDetails = {}) => {
  logMessage('Error', message, additionalDetails);
}