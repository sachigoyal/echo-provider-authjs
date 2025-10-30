# Echo OAuth with Auth.js

Demo application showing Echo authentication integrated with Next.js and Auth.js.

## Overview

This app implements Echo's OAuth flow using a custom Auth.js provider. After authentication, it demonstrates accessing Echo API endpoints using the OAuth access token.

## Architecture

### Authentication Flow

1. **OAuth Provider** (`src/lib/echo-provider.ts`)
   - Custom Auth.js provider implementing Echo's OAuth 2.0 flow
   - Handles authorization, token exchange, and user profile retrieval
   - Validates Echo App ID format (UUID v4)

2. **Token Management** (`src/auth/index.ts`)
   - Stores OAuth tokens in session via JWT callback
   - Makes `access_token` and `refresh_token` available to the application

3. **API Client** (`src/lib/echo-client.ts`)
   - Initializes `EchoClient` with the stored access token
   - Caches client instance for reuse across requests

4. **Data Fetching** (`src/lib/echo.ts`)
   - Uses authenticated client to call Echo API endpoints
   - Fetches user info, balance, and free tier data

### API Routes

- `/api/auth/[...nextauth]` - Auth.js handlers for OAuth flow
- `/api/echo/[...echo]` - Echo SDK handlers (Next.js integration)

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Set environment variable:
```bash
ECHO_APP_ID=your-echo-app-id
```

3. Run development server:
```bash
pnpm dev
```

## How It Works

The custom provider configures Auth.js to:
- Direct users to Echo's authorization endpoint with `llm:invoke offline_access` scopes
- Exchange authorization code for access/refresh tokens
- Fetch user profile from Echo's userinfo endpoint

The access token is persisted in the session and used to authenticate requests to Echo's API via the TypeScript SDK.

## Dependencies

- `next-auth@5.0.0-beta.30` - Authentication
- `@auth/core@0.41.1` - Authentication core (for the custom provider)
- `@merit-systems/echo-typescript-sdk` - Echo API client
- `@merit-systems/echo-next-sdk` - Echo Next.js integration
