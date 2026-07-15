# AI PDF Summarizer - UiPath + LLM Automation

![UiPath](https://img.shields.io/badge/UiPath-Studio%20Web-FA4616?style=for-the-badge&logo=uipath&logoColor=white)
![RPA Automation](https://img.shields.io/badge/RPA-Automation-2563EB?style=for-the-badge)
![OpenRouter](https://img.shields.io/badge/OpenRouter-API-7C3AED?style=for-the-badge)
![LLM](https://img.shields.io/badge/LLM-Integration-10B981?style=for-the-badge)
![AI Automation](https://img.shields.io/badge/AI-Automation-F59E0B?style=for-the-badge)

## Overview

AI PDF Summarizer is an RPA + AI automation workflow built with **UiPath Studio Web**. It automates the initial analysis of PDF documents by combining cloud-based robotic process automation, document text extraction, API orchestration, and LLM-based structured analysis.

The workflow addresses a common operational need: reducing manual review time when working with PDF documents by extracting their content and sending it to an AI model capable of returning a structured JSON response.

This repository documents the automation architecture, execution flow, technical decisions, and future evolution of the solution. The actual UiPath Studio Web export is expected to be added manually at:

```text
workflow/Solution.uis
```

`Solution.uis` is the native export format for **UiPath Studio Web** solutions. This project is not a classic UiPath Studio Desktop project and does not use separated `.xaml` workflow files.

## Architecture

```text
Google Drive PDF
        |
        v
UiPath Studio Web
        |
        v
PDF Text Extraction
        |
        v
HTTP Request
        |
        v
OpenRouter LLM
        |
        v
Structured JSON Analysis
```

## Workflow

### 1. Trigger

The workflow starts manually from UiPath Studio Web.

### 2. Download File

UiPath retrieves the target PDF file from Google Drive, enabling cloud-based document intake without requiring local file handling.

### 3. Read PDF Text

The workflow uses the `Read PDF Text` activity to extract textual content from the downloaded document.

### 4. Validation

The extracted text is displayed through a `Message Box` so the operator can validate the content before AI processing.

Future execution references:

```text
docs/screenshots/workflow.png
docs/screenshots/execution.png
```

### 5. AI Processing

The extracted text is sent through an `HTTP Request` activity to OpenRouter API, where an LLM processes the document content.

### 6. Structured Output

The LLM returns a structured JSON analysis that can be consumed by later workflow steps, downstream APIs, dashboards, or human reviewers.

## Why this project

This project demonstrates the evolution from traditional software delivery toward applied AI workflows. It connects full stack development experience with practical automation design: API integrations, cloud workflow orchestration, LLM interaction patterns, and structured data extraction.

The solution is positioned as an applied AI automation asset rather than a standalone web application. It reflects experience across:

- Full Stack Development
- AI Applications
- LLM integrations
- LangChain and LangGraph agents
- MCP servers
- n8n + AI automation
- API integrations
- Cloud workflows

## How to open the project

### Requirements

- UiPath Studio Web account
- OpenRouter API Key
- Google Drive access

### Steps

1. Clone this repository.
2. Open UiPath Studio Web.
3. Import `workflow/Solution.uis` after the file has been added manually.
4. Configure Google Drive and OpenRouter credentials.
5. Execute the workflow from UiPath Studio Web.

> This project uses **UiPath Studio Web**, not UiPath Studio Desktop. The automation is packaged as a `Solution.uis` export, not as separated `.xaml` files.

## Roadmap

See the detailed roadmap in [roadmap.md](roadmap.md).

## Author

[Name]

[GitHub]

[LinkedIn]

[Portfolio]
