#!/bin/bash

# Define the path for the commit-msg hook
HOOKS_DIR=".git/hooks"
COMMIT_MSG_HOOK="$HOOKS_DIR/commit-msg"

# Create the commit-msg hook with the required check for the feature name in brackets
cat << 'EOF' > $COMMIT_MSG_HOOK
#!/bin/sh

# Regular expression to check for feature name in brackets at the start of the commit message
PATTERN="^\[BL-[0-9]+\].*$"

# Read the commit message from the file provided as the first argument
COMMIT_MSG_FILE=$1
COMMIT_MSG=$(cat $COMMIT_MSG_FILE)

# Check if the commit message matches the pattern
if ! echo "$COMMIT_MSG" | grep -Eq "$PATTERN"; then
    echo "ERROR: Commit message must start with a User Story or Task code in brackets (e.g., '[BL-129] Your message')."
    exit 1
fi

exit 0
EOF

# Make the commit-msg hook executable
chmod +x $COMMIT_MSG_HOOK

echo "Git hook installed successfully."
