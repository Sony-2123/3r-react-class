 Git pull and git fetch difference


The key difference between git fetch and pull is that git pull copies changes from a remote repository directly into your working directory, while git fetch does not. The git fetch command only copies changes into your local Git repo. The git pull command does both.
 

What is Git Fetch?
The Git Fetch command is used to fetch all changes from the remote repository to the local repository. It doesn’t make any changes to the current working directory. It stores all the changes in a separate branch called the remote-tracking branch. git merge or git rebase command is used to merge these changes into our current working directory.

How to Use Git Fetch?
Step 1: Let us create a file called demo.txt with “Hello Geeks” content inside it initialize the directory to a git repository and push the changes to a remote repository.

git init
git add <Filename>
git commit -m <Commit Message>
git remote add origin <Link to your remote repository>
git push origin <branch name>

What is Git Pull?
Git Pull command is used to fetch all changes from the remote repository to the current working directory. It automatically try to merge or rebase them into our current working directory. It is the combination of git fetch and git merge or git rebase. It can generate merge conflicts if there are conflict changes between our local and remote branches


Benefits of the git pull command
If a developer finds out that there are new, updated files on a remote repository like GitHub, they will likely want to copy those changes from GitHub to both their local repository and into their working directory.

This is what the git pull command does. The git pull command updates both the user’s local Git repository and the files in their working directory.


That provides the developer with two benefits:

The local Git repo is now in sync with the remote repo.
The local filesystem has the latest, most up to date files.
The git pull command has one prerequisite: the user cannot be actively editing any tracked files in their local workspace that conflict with what’s on the remote server.

------------------------------------------------------------------------------------

What are Merge Conflicts?

A merge conflict arises when Git encounters conflicting changes in the same part of a file from different branches. This typically happens during a merge or rebase operation. Git cannot determine which changes to keep, so it flags the conflict for the developer to resolve manually.

Common Causes of Merge Conflicts

Simultaneous Edits: When multiple developers edit the same lines in a file, Git will not be able to merge the changes automatically.
Overlapping Changes: When changes in different branches overlap, such as one branch renaming a file while another branch edits its content.
Divergent Branches: Long-lived branches that have diverged significantly can result in conflicts when merged back together.

Creating a merge conflict

To show a simple example of how a merge conflict can happen, we can manually trigger a merge conflict from the following set of commands in any UNIX terminal / GIT bash :

Step 1: Create a new directory using the mkdir command, and cd into it.

Step 2: initialize it as a new Git repository using the git init command and create a new text file using the touch command.

Step 3: Open the text file and add some content in it, then add the text file to the repo and commit it.
Step 4: Now, its time to create a new branch to use it as the conflicting merge. Use git checkout to create and checkout the new branch.

Step 5: Now, overwrite some conflicting changes to the text file from this new branch.

Step 6: Add the changes to git and commit it from the new branch.

Step 7: Again checkout the master branch, and this time append some text to the test_file.txt from the master branch.

Step 8: add these new changes to the staging area and commit them.

Step 9: Now for the last part, try merging the new branch to the master branch and you will encounter the second type of merge conflict.


------------------------------------------------------------------



Creating a pull request
Create a pull request to propose and collaborate on changes to a repository. These changes are proposed in a branch, which ensures that the default branch only contains finished and approved work.



Changing the branch range and destination repository



When thinking about branches, remember that the base branch is where changes should be applied, the head branch contains what you would like to be applied.

When you change the base repository, you also change notifications for the pull request. Everyone that can push to the base repository will receive an email notification and see the new pull request in their dashboard the next time they sign in.

When you change any of the information in the branch range, the Commit and Files changed preview areas will update to show your new range.

--------------------------------------------------------
june13 14task
