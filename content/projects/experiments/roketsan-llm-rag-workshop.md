---
title: Roketsan LLM / RAG Workshop
slug: roketsan-llm-rag-workshop
description: A workshop implementation exploring document-grounded answers with retrieval-augmented generation.
github: https://github.com/menesgul/roketsan-llm-rag-workshop-day1
status: Completed
technologies:
  - Python
  - LangChain
  - Gemini
  - FAISS
topics:
  - RAG
  - FAISS
  - Embeddings
  - LLMs
---

## What I worked on

- Gemini API integration and prompt templates.
- RecursiveCharacterTextSplitter for document chunking.
- Gemini embeddings and a FAISS vector store.
- A similarity retriever using top-k retrieval.
- A RAG flow: Question → Retriever → FAISS → Context → Gemini → Answer.
- A simple AI agent with general-question and RAG tools.
- In-memory conversation state.

The implementation experimented with document-grounded answers by retrieving relevant context before calling Gemini.

## Lessons learned

- Embeddings and chunking choices shape what a retriever can surface.
- Context-grounded generation depends on retrieval quality as much as prompt design.
- Tool calling makes it possible to route general questions and RAG questions differently.
