#!/bin/bash

echo -n "Installing prepare-commit-msg hook... "
. ./scripts/prepare-commit-msg.sh
echo "✅"

echo -n "Installing pre-commit hook... "
. ./scripts/pre-commit-hook.sh
echo "✅"
