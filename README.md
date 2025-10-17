# qqwry-mcp-service

A Model Context Protocol service for QQWry IP database library.

This service wraps the [lib-qqwry](https://www.npmjs.com/package/lib-qqwry) library as an MCP service, allowing you to query IP geolocation information through the Model Context Protocol.

## Features

- IP geolocation lookup using the QQWry database
- Support for both single IP and IP range queries
- Compatible with Model Context Protocol

## Installation

```bash
npm install
```

## Usage

```bash
npm start
```

## MCP Methods

- `qqwry.searchIP` - Search information for a single IP address
- `qqwry.searchIPScope` - Search information for an IP range

## License

MIT