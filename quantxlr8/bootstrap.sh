#!/usr/bin/env bash
#
# Bootstrap script for QuantXlr8
#
# This script installs the project dependencies and starts the Next.js
# development server on port 3000. Use it to quickly get up and running
# after cloning the repository.

set -euo pipefail

echo "Installing dependencies..."
npm install

echo "Starting development server..."
npm run dev