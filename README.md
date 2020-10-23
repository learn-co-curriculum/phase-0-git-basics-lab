# Git Basics Lab

## Learning Goals

- Understand how to complete labs on Learn
- Apply what you've learned about Git version control
- Initialize a new Git repository
- Stage and commit new content
- Create a remote repository on GitHub
- Connect the newly create local repository with the remote on GitHub

## Introduction

So far lessons have only contained written content on specific topics. All you
needed to do was read through each lesson and continue on. This lesson, however,
is considered a _lab_. Labs are exercises that have some written content to
guide you, but also contain _tests_ that must be passed in order to complete
the lesson.

Now that you've learned about Git version control, in this lab, we're going to
go through the entire process of creating a local Git repository, creating an
initial commit and pushing that work to a remote repo stored on
[GitHub][github].

**NOTE:** If you are new to using Learn.co and this is your first lab, welcome!
This lesson will include all the steps necessary to submit your lab work to Learn.co.

## Getting Started

To start work on this lab, while on Learn.co, click the "Open IDE" button.

> If you are using the in-browser Learn IDE, the IDE will open on the page

> If you are using the Learn IDE on your computer, the IDE should open
> automatically

> If you are using your own local environment set up, you will need to manually
> fork and clone this lesson. Click on the GitHub button next to "Open IDE" to
> visit this lab's repository. Once there, create a personal fork of the repo
> and clone it down

Once you've got the lesson open, run `learn` in the command line. Six failed
tests should print out, starting with this:

```text
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

Each failed test includes an explanation.

In the first test seen above, for instance, it says `this lab has a folder name
my-repository`, followed by `AssertionError: no folder name "my-repository" was
found`.

This first test is looking specifically for a folder, `my-repository`, to exist
inside this lab' main directory (or "folder"). You probably have a theory on
how to correct that test after seeing that error! We're going to use these
tests to let us know when we're all done.

## Instructions

> ***IMPORTANT TIPS TO AVOID GETTING STUCK***
> 
> 1. The work you will do to set up the Git repository will be done in the
>    `my-repository` directory (after you create it ;)). If you're doing `git`
>    commands in the same directory as THIS `README` that you're reading right
>    now, you're not going to get to working tests.
> 2. When you run the tests, you will need to be in the top-level directory of
>    this lab, (`git-basics-lab`, the directory with the `README` you're reading
>    right now in it.)

To get all tests passing in this lab, follow the steps below, applying commands
you've learned in the previous lessons.

### Steps

As we saw above, there are **six** broken tests. Let's get them working.

1. Create a new directory locally named `my-repository`. This directory should
   be side by side with the `test` directory of this lab. Use the Unix command
   to create this directory. From the top-level of this lab, the parent directory
   of `my-repository`, run `learn` and verify there are only 5 broken tests left.

2. Navigate into the new directory `my-repository` using `cd` on the command
   line.

3. While inside `my-repository`, using the command line, initialize a new git
   repository. You'll know you've done it if you see 'Initialized empty Git
   repository in _<...your local directory>/my-repository/.git/'>_. Change _back-up_
   to the parent directory and you should be back in the top-level directory. Run
   `learn` and you should be down to **four tests** left. If that's true, change
   _back_ into `my-repository`.

4. Create a file called `README.md` inside `my-repository`.

5. If you run `git status` at the command line, you should see that `README.md`
   is now listed as an untracked file. Add `README.md` so that it is tracked by
   Git.

6. Once the file is tracked, running `git status` again will show that
   `README.md` is staged and ready to be committed. Go ahead and create a commit
   on the command line (don't forget to add `-m` when committing to include a
   message!)

     **NOTE:** If you forget to include `-m` on when committing, you'll find you've
     opened _vi_, the built in terminal text editor. To escape out of this editor,
     press the 'esc' key once, then type `:q!` to close the editor and return to
     the normal terminal.

7. Change _back_ to the top-level directory, run `learn`, and you'll see that
   the test output is looking pretty successful:
   
```text
  this lab
    ✓ has a folder named my-repository
    ✓ has a valid git repository initialized for the my-repository folder
    ✓ has a README.md file in the my-repository folder

  the local repository
    ✓ has README.md as a tracked file
    ✓ has at least one commit
    1) has been pushed up to the remote repository


  5 passing (18ms)
  1 failing

  1) the local repository
       has been pushed up to the remote repository:
     AssertionError: no record of pushing to a remote was found. Follow the instructions on GitHub to connect and push to a new remote repository: value: expected './my-repository/.git/logs/refs/remotes' to exist
```

Almost done! Change _back_ into the `my-repository` directory.

8. Create a remote repository on [GitHub][github] using your personal GitHub
   account. When we create a blank repository, we are given instructions for
   adding that repository as a remote.  Copy the first line (`git remote add
   origin...`) and paste-and-run it from your command line to connect your local
   repository with the new remote one.

9. Still within the `my-repository` directory, push up your local work to the
   remote.

10. Change _back_ up to the top-level directory and run `learn` once more, your
    tests should all be passing

If all tests are passing, when you run `learn`, Learn.co will be notified and
register that you've passed the tests.  Once you've passed all tests, run
`learn submit` to register completion of this lab on Learn.co.

## Conclusion

As you become more comfortable with the terminal and Git, you'll find yourself
using the workflow of initializing, adding, committing and pushing your work on
a regular basis. These commands are at the core of Git version control. By
knowing them, you now have the ability to create your own repositories and
contribute to repositories that already exist.

In this lab you used tests to guide you in the basics of setting up a new local
Git repository and binding it to a remote repository on GitHub. By pushing your
work to a remote repository you've backed it up _and_ made it available for the
world to see via GitHub. Professional developers use this process to share code
with each other, to document their code, and to earn interview slots by showing
off what they're capable of. You did this guided by *tests*. It's common for
developers to write tasks as tests that all fail and then slowly work to get
them all passing. It's like a to-do list that verifies you've actually done the
work!

[github]: https://github.com/
[pr]: https://help.github.com/en/articles/about-pull-requests
