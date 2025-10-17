// QQWry MCP Service
const { Server } = require('@modelcontextprotocol/server');
const libqqwry = require('lib-qqwry');

// Initialize QQWry with speed mode
const qqwry = libqqwry(true);

const server = new Server({
  name: "QQWry IP Geolocation Service",
  version: "1.0.0"
});

// Register the searchIP method
server.setRequestHandler("qqwry.searchIP", async (request) => {
  const { ip } = request.params;
  
  if (!ip) {
    throw new Error("IP parameter is required");
  }
  
  try {
    const result = qqwry.searchIP(ip);
    return {
      content: [{
        type: "text",
        text: JSON.stringify(result, null, 2)
      }]
    };
  } catch (error) {
    return {
      content: [{
        type: "text",
        text: `Error: ${error.message}`
      }]
    };
  }
});

// Register the searchIPScope method
server.setRequestHandler("qqwry.searchIPScope", async (request) => {
  const { beginIP, endIP } = request.params;
  
  if (!beginIP || !endIP) {
    throw new Error("beginIP and endIP parameters are required");
  }
  
  try {
    const result = qqwry.searchIPScope(beginIP, endIP);
    return {
      content: [{
        type: "text",
        text: JSON.stringify(result, null, 2)
      }]
    };
  } catch (error) {
    return {
      content: [{
        type: "text",
        text: `Error: ${error.message}`
      }]
    };
  }
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  server.close();
  process.exit(0);
});

// Start the server
server.listen().catch(console.error);