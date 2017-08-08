# Git Remotes + GitHub Code-along

## Objectives
1. Describe GitHub and its relationship with Git
2. Create a remote repository on GitHub
3. Use `git push` to connect your local repository of files to your remote repository
4. Use `git remote`
5. Use `git push`
6. Use `git pull`

Let's go through an example to clarify remote repositories on GitHub.

## Create a new directory and add a file
You can run this series of commands in the terminal:
1. Change into your `code` directory: `cd ~/code`
    - If your development directory is named something other than `~/code`, that's fine — `cd` into whatever yours is called.
2. Create a new directory named `my_new_directory`: `mkdir my_new_directory`
3. Change into the newly-created directory: `cd my_new_directory`
4. Create a new file named `README.md`: `touch README.md`
5. Add some text to the new file: `echo "This is my readme file" > README.md`

## Creating a remote repository on GitHub
1. While logged into GitHub, click the :heavy_plus_sign: in the menubar and select `New repository`. Alternatively, just navigate to [github.com/new](https://github.com/new).
2. Enter a name for your repository in the `Repository name` field. You can name it whatever you'd like; be creative! The default options are fine as-is — don't initialize the new repository with a README or add a `.gitignore` or license. Click the green `Create repository` button.
3. After you create the repo, you should see a "Quick setup" page. Click the "Copy to clipboard" symbol on the right-hand side of the screen (![GitHub clipboard](http://i.imgur.com/M8ihFoJ.png)) to copy the clone URL. (We'll use this in the next section.)

![github repo quick setup](https://curriculum-content.s3.amazonaws.com/web-development/enough-git-for-learn-co/github_quick_setup.png)

## Connecting your remote repo to a local repo
Run these commands in the terminal:
1. `git init`.
2. `git add .` and `git commit -m "initialize git"`. Add and commit the new file we created in the `my_new_directory` directory.
3. `git remote add origin your-remote-repository-URL`. This sets the remote, so you can push and pull code.

## Push code to GitHub
1. Let's add some new content to our `README.md` file. Open the file, and add whatever text you'd like.
2. Now look at the remote repo on GitHub. Notice that the new text in your README is not there. Let's fix this by pushing our code up to GitHub.
3. If we `git push` right away, we still won't get the changes because we have not tracked and committed the changes. Let's do that: `git add .` and `git commit -m "add additional content to README"`.
4. Now we can `git push -u origin master`. We only need to apply the `-u` flag (short for `--set-upstream`) the first time we use `git push`. It tells the current local branch to track itself against the `master` branch of `origin`, the remote repo we're pushing to. After you've set the upstream link with `-u`, you can use `git push` and `git pull` without specifying any arguments (such as a target branch or repo).
5. Confirm that your changes are now visible on GitHub, and you're done!

## Pull code from GitHub
```bash
git pull
```

This command takes any new changes to the remote repository and "pulls" them down to your local code. Try running it in your terminal now. In our case, there's nothing to pull, so you should see a message that says `Already up-to-date.`

Sometimes the code on your remote gets ahead of your local code. This happens often when collaborating with others, but it can also happen when you edit code directly on [GitHub.com](https://github.com/). Let's give that a try.

## Editing directly on GitHub
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
