#Git Remotes + GitHub Code-Along

##Objectives
1. Describe GitHub and its relationship with Git
2. Create a remote repository on GitHub
3. Use `git push` to connect your local repository of files to your remote repository
4. Use `git remote`
5. Use `git push`
6. Use `git pull`

Let's go through an example to clarify remote repositories on GitHub.

##Create a local directory
1. In your development directory, create a folder: `mkdir git-remote-code-along`.
2. Change directory: `cd git-remote-code-along`.
3. Add a README: `touch README.md`.

##Creating a remote repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. After you create the repo, click the "Copy to clipboard" symbol on the right-hand side of the screen (![GitHub clipboard](http://i.imgur.com/M8ihFoJ.png)) to copy the clone url (we'll use this in the next section).

##Connecting your remote repo to a local repo
1. `git init`.
2. `git add .` + `git commit -m "initialize git"`. Add and commit the new file created by the `git init` command in step 1.
3. `git remote add origin your-remote-repository-URL`. This sets the remote, so you can push and pull code.

##Push code to GitHub
1. Let's add something to our README. Open the file and add whatever text you'd like.
2. Now look at the remote repo on GitHub. Notice that the new text in your README is not there. Let's fix this by pushing our code up to GitHub.
3. If we `git push` right away, we still won't get the changes because we have not tracked and committed the changes. Let's do that: `git add .` and `git commit -m "add content to README"`.
4. Now we can `git push -u origin master`. We only need to apply the `-u` flag (short for `--set-upstream`) the first time we use `git push`. It tells the current local branch to track itself against the `master` branch of `origin`, the remote repo we're pushing to. After you've set the upstream link with `-u`, you can use `git push` and `git pull` without specifying any arguments (such as a target branch or repo).
5. Confirm that your changes are now visible on GitHub, and you're done!

##Pull code from GitHub
```bash
git pull
```

This command takes any new changes to the remote repository and "pulls" them down to your local code. Try running it in your terminal now. In our case, there's nothing to pull, so you should see a message that says `Already up-to-date.`

Sometimes the code on your remote gets ahead of your local code. This happens often when collaborating with others, but it can also happen when you edit code directly on [GitHub.com](https://github.com/). Let's give that a try.

##Editing directly on GitHub
Say you liked your README, but you noticed a minor typo. Let's fix it directly on GitHub.

1. Navigate to your remote repository on [GitHub.com](https://github.com/), e.g., https://github.com/username-here/repository-name-here.
2. Click on your README file.
3. At the top of the file, you'll notice a pencil icon (![GitHub pencil](http://i.imgur.com/J3HiLhO.png)). Clicking this will allow us to edit the file.
4. Make some changes to your README.
5. Commit them by clicking the "Commit changes" button at the bottom of the page.

Perfect! But now the code on our machine (in our local repo) is out of sync with the remote repo. To remedy this, we must `pull` down the code to our local repo. To do so, run:

```bash
git pull
``` 

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/git-remote-code-along' title='Git Remotes + GitHub Code-Along'>Git Remotes + GitHub Code-Along</a> on Learn.co and start learning to code for free.</p>
