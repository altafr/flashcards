#!/bin/bash

# Check if .env file exists
if [ -f .env ]; then
    echo "⚠️  .env file already exists. Do you want to overwrite it? (y/n)"
    read -r response
    if [[ "$response" =~ ^([nN][oO]|[nN])$ ]]; then
        echo "❌ Setup cancelled"
        exit 1
    fi
fi

# Copy .env.example to .env
cp .env.example .env

echo "✅ Environment file created successfully!"
echo "⚠️  Please edit .env and add your GROQ API key"
echo "📝 You can get your GROQ API key from: https://console.groq.com"
