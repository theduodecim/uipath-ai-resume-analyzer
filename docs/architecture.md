# Architecture

## General architecture

AI PDF Summarizer is a cloud-first automation built around UiPath Studio Web. The workflow coordinates PDF retrieval, text extraction, API communication, and LLM-based analysis without relying on a custom backend in the current version.

```text
Google Drive -> UiPath Studio Web -> PDF Text Extraction -> OpenRouter API -> LLM -> JSON Output
```

## Components

### UiPath Studio Web

UiPath Studio Web is the orchestration layer. It controls the workflow execution, coordinates integrations, and runs the automation from the UiPath cloud environment.

### Google Drive

Google Drive acts as the document source. The workflow downloads the target PDF from cloud storage before processing.

### Read PDF Text

The `Read PDF Text` activity extracts textual content from the PDF. This content becomes the input payload for the AI processing step.

### Message Box validation

A `Message Box` displays the extracted text for validation. This is useful during development and controlled testing to confirm that the PDF content is being read correctly before it is sent to the LLM.

### HTTP Request

The `HTTP Request` activity sends the extracted text to OpenRouter API. This makes the workflow provider-flexible because OpenRouter can route requests to different model providers depending on configuration.

### OpenRouter LLM

The LLM receives the document text and generates a structured JSON analysis. The expected result is machine-readable output that can support downstream automation steps.

## Data flow

1. The user starts the workflow manually.
2. UiPath downloads the PDF from Google Drive.
3. UiPath extracts text from the PDF.
4. The extracted content is shown for validation.
5. UiPath sends the text to OpenRouter API through an HTTP request.
6. The LLM processes the content.
7. UiPath receives a structured JSON response.

## UiPath and LLM integration

The integration uses UiPath as the deterministic automation layer and the LLM as the semantic analysis layer. UiPath handles repeatable process steps such as file retrieval and API calls, while the LLM handles natural-language interpretation and structured summarization.

This separation keeps the automation maintainable: workflow control stays in UiPath, and model behavior is managed through prompt design, request payload structure, and provider configuration.

## API handling

The current workflow uses direct HTTP communication from UiPath Studio Web to OpenRouter API. API configuration should include:

- Authorization headers for the OpenRouter API key.
- A prompt or instruction payload that defines the expected JSON schema.
- Error handling for failed requests, empty PDF content, malformed responses, and rate limits.
- Response parsing logic for structured JSON output.

## Security considerations

- Store API keys in UiPath assets or secure credential storage when possible.
- Avoid hardcoding OpenRouter credentials in workflow activities.
- Validate whether PDFs contain sensitive or regulated data before sending content to an external LLM provider.
- Restrict Google Drive access to the minimum files and folders required by the automation.
- Review model provider retention and privacy policies before processing confidential documents.
- Log metadata and operational status rather than full document contents whenever possible.

## Future improvements

- Add a dedicated backend API to isolate AI orchestration from the RPA workflow.
- Add schema validation for LLM JSON responses.
- Add retry and fallback strategies for transient API failures.
- Add support for batch processing multiple PDFs.
- Add MCP server integration to give the agent controlled access to tools such as GitHub, search, or an internal knowledge base.
- Replace development-time `Message Box` validation with production-grade logging and review queues.
