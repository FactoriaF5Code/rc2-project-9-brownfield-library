#!/bin/bash

# Define the hook script location
HOOKS_DIR=".git/hooks"
HOOK_NAME="prepare-commit-msg"
HOOK_SCRIPT="$HOOKS_DIR/$HOOK_NAME"

# Create the hook script
cat > "$HOOK_SCRIPT" << 'EOF'
#!/bin/sh

# Get the current branch name
CURRENT_BRANCH=$(git branch --show-current)

# Prompt for a branch name, defaulting to the current branch
read -p "Branch name ($CURRENT_BRANCH): " BRANCH_NAME
BRANCH_NAME=${BRANCH_NAME:-$CURRENT_BRANCH}

# Prompt for the commit message
echo "Message: "
read COMMIT_MSG

# Prepend the branch name to the commit message and write it to the commit message file
echo "[$BRANCH_NAME] $COMMIT_MSG" > "$1"
EOF

# Make the hook script executable
chmod +x "$HOOK_SCRIPT"
