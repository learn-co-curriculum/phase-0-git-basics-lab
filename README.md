#Git Remotes + Github Code Along

##Objectives
1. Describe Github and its relationship with git
2. Create a remote repository on Github
3. Use git push to connect your local repository of files to your remote repository 
4. Use git remote
5. Use git push
6. Use git pull

Let's go through an example to clarify remote repositories on Github.

##Create a local directory
1. Create a folder: `mkdir git-remote-code-along`
2. Add a README: `touch README.md`

##Creating a remote repository on Github

1. From your Github profile, click the "Create New Repository" button.
2. After you create the repo, click the "Copy to clipboard" symbol on the right-hand side of the screen to copy the url (we'll use this in the next section)


##Connecting your remote repo to a local repo
1. `git --init`
2. `git add .` + `git commit -m "initialize git"`. Add and commit the new file created by the init command in the step 1.
3. `git remote add origin your-remote-repository-URL`. This sets the remote, so you can push and pull code.

##Push code to Github
1. Let's add something to our README. Open the file and add whatever text you'd like.
2. Now look at the remote repo on Github. Notice that the new text in your README is not there. Let's fix this by pushing our code up to Github.
3. If we `git push` right away, we still won't get the changes because we have not tracked and committed the changes. Let's do that: `git add .` and `git commit -m "add content to README"`
4. Now we can `git push`.
5. Confirm that your changes are now on Github, and you're done!


##Pull code from Github

Sometimes the code on your remote gets ahead of your local code. This could be because you're collaborating with other. It can also occur when you change it directly on Github. Let's try this.

Let's say you liked your README, but you noticed a minor typo. Let's fix it directly on Github by clicking the README.md file. 

1. At the top of the file, you'll notice a pencil icon. Clicking this will allow us to edit the file.
2. Make some changes to the README
3. Commit them by clicking the "Commit changes" button at the bottom of the page.

Perfect! The only problem is, now our code on our machine (our local repo) is out of sync with the remote repo. To remedy this, we must pull down the code to our local repo. No surprises here. To do this we run:

```bash
git pull
``` 
