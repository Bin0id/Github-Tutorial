## Git Hidden Folder

There is a hidden folder called `.git` which tells you that our project is a Git repo

If we want to create a git repo in a new project we'd create a new folder and then initialize that repo using `git init`
```
mkdir /workspaces/tmp/new_project
cd /workspaces/tmp/new_project
git init
touch Readme.md
code Readme.md
git status
git add .
git reset
git add Readnme.md
#Make changes to Readme.md
git commit -m "Add Readme file"
```


## Cloning

We can clone three ways: HTTPS, SSH, Github CLI

Since we are using Github codespaces, we'll create a temporary directory in out workspace.

```sh
mkdir /workspaces/tmp
cd /workspaces/tmp
```

### HTTPS

```sh
git clone https://github.com/Bin0id/Github-Tutorial.git
cd Github-Tutorial
```

> You'll need to generate a Personal Access Token (PAT)
https://github.com/settings/personal-access-tokens

You will use the PAT as your password when you login

- Give it access (read and write) to contents, commits

### SSH

To check if you have a SSH key run `ls ~/.ssh`, If you see files like `id_rsa.pub` or `id_ed25519.pub`, you already have an SSH key.

```sh
ls ~/.ssh
```

Before cloning the repo, you neeed to create a new SSH key pair (a secure way to authenticate with GitHub and other services) using the Ed25519 encryption algorithm trough `ssh-keygen`.

The default encryption is RSA, but Ed25519 is preferred : 
 - ✅ Stronger security with shorter key → more efficient

 - ✅ Faster authentication and smaller keys → ideal for Git operations

 - ✅ Simpler and safer defaults — fewer config pitfalls

- ✅ Recommendation (2025) Use ed25519 unless you have a specific reason to support older systems.

> 🔐 The private key stays on your machine. The public key is uploaded to GitHub. When you connect to GitHub, it verifies that the private key matches the public one, without ever sending the private key.

For RSA:
```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

For Ed25519:
```sh
ssh-keygen -t ed25519 -C "your_email@example.com"
```

It will prompt you:

```sh
Enter file in which to save the key (/Users/you/.ssh/id_ed25519): 
```
Just press Enter to use the default, or you can add a name for the file, with its path.

```sh
Enter passphrase (empty for no passphrase):
```
You can press Enter again to skip (or enter a passphrase for extra security).

It will create two files in `~/.ssh/`:
(if you added a name for the file it will display the name)

`id_ed25519` → Your private key (keep it secret!)

`id_ed25519.pub` → Your public key (share this with GitHub)

----

Then you need to start a SSH agent, which is a background program that manages your private keys. It unlocks your private key once, and then remembers it for the rest of your terminal session using `eval`. 

Then you can add the keys to the agent using `ssh-add`, this tells the SSH agent to load your private key (from the file you just created).Now, GitHub will be able to authenticate you via this key when you run Git commands.

```sh
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```
> You've only added the key temporarily for the session, it’s forgotten when you close your terminal.
But if you want to manually remove it right now, run:
```sh
ssh-add -d ~/.ssh/id_ed25519
```

Then, copy your SSH public key to the clipboard:
```sh
pbcopy < ~/.ssh/id_ed25519.pub
```

Or you can display the public key on the terminal
```sh
cat ~/.ssh/id_ed25519.pub
```

Then go to GitHub:

 - Go to Settings → SSH and GPG keys

 - Click "New SSH key"

- Paste the key and save


 You can test your connection

 ```sh
 ssh -T git@github.com
 ```

You should see a message like this
> Hi Bin0id! You've successfully authenticated...

Now you try cloning

```sh
git clone git@github.com:Bin0id/Github-Tutorial.git
cd Github-Tutorial
```

To delete the keys once you are done with the project, run `rm` for the private and public keys.

```sh
rm ~/.ssh/id_ed25519 ~/.ssh/id_ed25519.pub
```
> ⚠️ Be sure you don’t need these keys anymore before running this.

### Github CLI

Install the CLI for mac:

```sh
brew install gh             # Install Gitub CLI
brew upgrade gh             # Upgrade Github CLI
brew cleanup python3       # Clean old versions
```
>https://cli.github.com/

Then we have to log in and clone the repo:

```
gh auth login
gh repo clone Bin0id/Github-Tutorial
```
>Note that you also have to login trough either HTTPS or SSH to use CLI. For SSH you'll need to create a SSH key to login. The CLI program will do it automatically for you.

## Commits

When we want to commit we can write git commit which will open up the commit edit message in the editor of choice

```sh
git commit
```

Set the global editor
```
git config --global core.editor emacs
```

make a commit with a message without opening an editor
```sh
git commit -m "commit name"
```

## Branches

List of branches

```sh
git branch
```

Create a branch with a name

```sh
git branch branch_name
```

checkout the branch (switch to the branch)

```sh
git checkout branch_name
```

>You can't push a local branch that doesn't have a remote on Github. To solve it run: 

```sh
 git push --set-upstream origin branch_name
```

The new branch is now tracked on the remote.

To visualize the branch and tree. You can add an extension


## Remotes

We can add remotes but often we will add remotes via upstream when adding a branch

```sh
git remote add ...

git push --set-upstream origin branch_name
```

## Fetching

Fetch updates from the remote (but don’t merge):

```bash
git fetch
```

## Stashing


**Stashing** temporarily shelves (or "stashes") changes you've made to your working directory so you can work on something else without committing those changes.

It’s useful when:
- You’re in the middle of a task but need to switch branches
- You don’t want to lose uncommitted changes

```sh
git stash           # Save all uncommitted changes (tracked files only)
git stash save my_name   # Save changes with a custom message (older syntax, still works)
git stash push -m "message"  #Save changes with a custom message
git stash list      # Show list of all stashed changes
git stash pop       # Apply the latest stash and remove it from the stash list
git stash apply     # Apply the latest stash but keep it in the stash list
```

> 🧠 Bonus tip
You can also stash specific files with the new syntax:

```sh
git stash push -m "partial changes" file1.py file2.txt
````

## Merging

```sh
git checkout branch_name
git merge origin/main
```

## Add

When we want stage changed that will be included in the commit we can use the . to add all possible files

```
Git add .
```

## Status

Git status shows you file that will or will not be commited.

```
git status
```


## Reset 

Reset allows you to move staged changes to be unstaged
This is useful when you want to revert all files not to be commited

``` 
git add .
git reset
```

> Git reset will revert git add .

## Gitconfig File

The gitconfig file is what stores your global configurations for git such as email, name, editor, ...

showing the content of our .gitconfig file
```
git config --list
```

When you first setup git on your machine you are supposed to setup your name and email

```sh
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

## Log

Git log will allows you to see the recent commits of your tree

```
git log
```

## Push

When we want to push a repo to our remote origin

```
git push
```