# Git Commands
* * *

### Basic Commands

- `git init`: Initialize a new Git repository in the current directory.
- `git clone <repository-url>`: Clone an existing Git repository from the provided URL to your local machine.
- `git add <file>`: Stage changes made to the specified file for the next commit. Use `git add .` to stage all modified files.
- `git commit -m "commit message"`: Create a new commit with the staged changes and the provided commit message. The commit message should be a brief, descriptive summary of the changes.
- `git push`: Push your local commits to the corresponding remote repository.
- `git pull`: Fetch and merge changes from the remote repository to your local branch.

### Branching Commands

- `git branch`: List all local branches.
- `git branch <branch-name>`: Create a new local branch with the specified name.
- `git checkout <branch-name>`: Switch to the specified existing branch.
- `git merge <branch-name>`: Merge the contents of the specified branch into the current branch.
- `git branch -d <branch-name>`: Delete the specified local branch.

### Inspection Commands

- `git status`: Show the current status of the working tree, including any unstaged or untracked changes.
- `git log`: Show the commit history for the current branch, including commit hashes, authors, dates, and commit messages.
- `git diff`: Show the differences between your working tree, the staging area, and the last commit.

### Remote Management

- `git remote add <name> <url>`: Add a new remote repository with the specified name and URL.
- `git remote -v`: List all configured remote repositories and their URLs.
- `git fetch <remote>`: Fetch objects and references from the specified remote repository, without merging the changes into your local branch.
- `git push <remote> <branch>`: Push the specified local branch to the corresponding remote repository.

# Branch Naming Conventions
* * *

I like to use the Conventional Commits format for branch naming. This helps maintain a consistent and meaningful branch structure in all my repositories.

The general format for branch names is:
```
<type>/<descriptiveName>
```

- **Type**: The type of change being made, such as:
  - `feat`: New functionality or enhancements
  - `fix`: Bugfixes or patches
  - `refactor`: Code restructuring without changing functionality
  - `docs`: Documentation changes
  - `test`: Changes to tests or testing infrastructure
  - `chore`: Build process or tooling updates
  - `ci`: Pipeline tweaks with no source code changes
- **descriptiveName**: A brief description of the change.

Examples:
- `feat/loginPage`
- `fix/navBarResponsiveness`
- `docs/installationGuide`
- `refactor/dataModels`
- `test/apiUnitTests`
- `chore/upgradeDependencies`

# Git Aliases
* * *

Often, I find myself typing the same commands over and over again, so I use aliases to make my life easier. Typing `gaa` instead of `git add .` is a lot faster, for example.

## Git Config

This is an example of the commands I have set up in my `.bashrc` file.

```bash
## GIT ALIASES AND FUNCTIONS

# Shortcut for git
alias g='git'

# Add files
alias ga='git add'
alias gaa='git add .'

# Branch commands
alias gb='git branch'
alias gba='git branch -a'
alias gbu='git remote update origin --prune'

# Checkout branch commands
alias gch='git checkout'
alias gbn='git checkout -b'
alias gchm='git checkout master'

# Commit or commit with a message
alias gc='git commit'
alias gcm='git commit -m'

# Clone a repo - requires a URL
# E.g. 'gcl <my_repo_url>'
alias gcl='git clone'

# Push remote
alias gps='git push'

# Push changes to remote and create a branch on the remote with the current branch name
alias gpsu='git push -u origin HEAD'

# Git pull
alias gpl='git pull'

# Git status of the current branch
alias gs='git status'

# Git diff branches
alias gd='git diff'
ts gdt='git difftool --dir-diff' # Diff the current directory with Meld against the remote of the current branch.

# Merge a branch with the current one
# E.g. 'gm master'
alias gm='git merge'

# Hard reset the current branch
# YOU WILL LOSE ALL UNCOMMITTED WORK
# Useful if you've made some changes that broke a lot of stuff and want to 
# start over from your most recent commit
alias grs='git reset HEAD --hard'

# Adds files, runs commitizen to create a formatted commit, and pushes to the remote
alias gac='git add . && cz && git push'

# Deletes any local branches that don't exist in the remote
function gitsyncbranch { git fetch -p ; git branch -r | awk '{print $1}' | egrep -v -f /dev/fd/0 <(git branch -vv | grep origin) | awk '{print $1}' | xargs git branch -D; }

export gitsyncbranch
```