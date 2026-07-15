# Roadmap

## v1 - Current Version

**Status:** Completed

Includes:

- UiPath Studio Web workflow.
- PDF extraction.
- Google Drive integration.
- HTTP Request integration.
- LLM processing.
- JSON response.

## v2 - Backend Layer

**Status:** Planned

Create a dedicated backend using:

```text
Node.js + Express
```

Objective:

Separate the artificial intelligence orchestration logic from the RPA workflow.

Future architecture:

```text
UiPath
   |
   v
Backend API
   |
   v
LLM Provider
```

Expected benefits:

- Centralized prompt and model configuration.
- Better observability and API logs.
- Reusable AI endpoints for additional automations.
- Easier provider switching and response validation.

## v3 - MCP Integration

**Status:** Planned

Add a custom MCP server to expand the agent's tool access.

Examples:

- GitHub MCP
- Search MCP
- Knowledge Base MCP

Objective:

Allow the agent to access external tools and contextual sources to improve document analysis quality, validation, and enrichment.
