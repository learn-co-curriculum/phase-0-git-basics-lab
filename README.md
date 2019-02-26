# Git Remotes + GitHub Lab

## Objectives

- Understand how to complete labs on Learn
- Apply what you've learned about git version control
- Initialize a new git repository
- Stage and commit new content
- Create a remote repository on GitHub
- Connect the newly create local repository with the remote on GitHub

## Introduction

Now that you've learned about git version control, your task is to apply that
knowledge by creating your own local git repository, making changes, and pushing
up those changes to a remote repo stored on [GitHub][].

So far lessons have only contained written content on a specific topic - all you
needed to do was read through the lesson and continue on. This lesson, however,
is considered a _lab_. Labs are exercises - they have some written content to
guide you, but also contain _tests_ that must be passed in order to complete
the lesson.

In this lab, we're going to go through the process completing a Learn lab
while reinforcing our understanding of git.

## Getting Started

To start work on this lab, while on Learn.co, click the "Open IDE" button.

> If you are using the in-browser Learn IDE, the IDE will open on the page

> If you are using the Learn IDE on your computer, the IDE should open
> automatically

> If you are using your own local environment set up, you will need to manually
> fork and clone the lesson. Click on the GitHub button next to "Open IDE" to
> visit the lab repository where you can fork it.

Once you've got the lesson open, run `learn` in the command line. Six failed
tests should print out starting with this:

```shell
this lab
  1) has a folder named my-repository
  2) has a valid git repository initialized for the my-repository folder
  3) has a README.md file in the my-repository folder

the local repository
  4) has README.md as a tracked file
  5) has at least one commit
  6) has been pushed up to the remote repository


0 passing (42ms)
6 failing

1) this lab
     has a folder named my-repository:
   AssertionError: no folder name "my-repository" was found: value: expected './my-repository' to exist
    at Function.<anonymous> (node_modules/chai-fs/lib/assertions/directory.js:21:53)
    at Function.ctx.(anonymous function) [as directory] (node_modules/chai/lib/chai/utils/addMethod.js:41:25)
    at Function.assert.isDirectory (node_modules/chai-fs/lib/assertions/directory.js:34:35)
    at Context.it (test/index-test.js:11:19)
    ...
```

Each failed test includes an explanation. In the first test seen above, for
instance, it says `this lab has a folder name my-repository`, followed by
`AssertionError: no folder name "my-repository" was found`. This test is looking
specifically for a folder, `my-repository`, to exist inside this lab. To pass
this test, create a folder by that name and run `learn` again. If successful,
you should not only see _five_ failed tests. One down, five more to go.

## Instructions

To get all tests passing in this lab, follow the steps below, applying commands
you've learned in the previous lessons. You can track your progress in the lab
at any time by running `learn` to see what tests are passing and failing.

**Note:** You must be in the main repository folder of this lesson to run the
tests. If you navigate into a new folder, make sure to use `cd ..` until you're
back in the `git-basics-lab` folder before running `learn`.

### Steps

1. Create a new folder locally named `my-repository`. This folder should be side
   by side with the `test` folder of this lab.

2. Navigate into the new folder using `cd` on the command line

3. While inside `my-repository`, using the command line, initialize a new git
   repository. You'll know you've done it if you see 'Initialized empty Git
   repository in <...your local directory>/my-repository/.git/'

4. Create a README.md file inside `my-repository`

5. If you run `git status` in your command line, you should see that `README.md`
   is now listed as an untracked file. Add `README.md` so that it is tracked by
   git

6. Once the file is tracked, running `git status` again will show that
   `README.md` is staged and ready to be committed. Go ahead and create a commit
   in the command line (don't forget to add `-m` when committing to include a
   message!)

   **Note:** If you forget to include `-m` on when committing, you'll find you've
   opened _vi_, the built in terminal text editor. To escape out of this editor,
   press the 'esc' key once, then type `:x!` to close the editor and return to
   the normal terminal.

7. Create a remote repository on [GitHub][github] using your personal GitHub
   account. When creating a blank repository, you will be given instructions for
   pushing an existing repository from the command line. Copy the first line
   (`git remote add origin...`) and run in your command line to connect your
   local repository with the new remote one.

8. Push up your local work to the remote

If you've followed all the steps, run `learn` to confirm all tests are passing.
If not, follow the messages provided by each failing test to get through any
remaining tests. If all tests are passing, when you run `learn`, Learn.co will
be notified and register that you've passed the tests.

Once you've passed all tests, run `learn submit` to register
completion of this lab on Learn.co.

## Conclusion

As you become more comfortable with the terminal and git, you'll find yourself
using the workflow of initializing, adding, committing and pushing your work on
a regular basis. These commands are at the core of git version control. By
knowing them, you now have the ability to create your own repositories and
contribute to repositories that already exist.

[github]: https://github.com/

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/git-remotes-and-github-lab' title='Git Remotes + GitHub Lab'>Git Remotes + GitHub Code-Along</a> on Learn.co and start learning to code for free.</p>
