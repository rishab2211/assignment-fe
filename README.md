# Assignment-FE

**Author:** Rishab Raj

## Overview

Next.js frontend app with Google OAuth authentication using NextAuth.js. Includes custom UI components and styling.

## Setup

1. Clone the repository and install dependencies:

   ```bash
   git clone https://github.com/your-username/assignment-fe.git
   cd assignment-fe
   npm install
   ```

2. Create a .env.local file in the root directory with the following variables:
   ```bash
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   NEXTAUTH_SECRET=your-random-secret
   NEXTAUTH_URL=http://localhost:3000
   ```
3. Run the development server:

   ```bash
   npm run dev
   ```