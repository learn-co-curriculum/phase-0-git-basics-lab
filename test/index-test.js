const jsdom = require( 'jsdom' );
const path = require( 'path' );
var chai = require( 'chai' );
chai.use( require( 'chai-fs' ) );

describe( 'this lab', () => {

  it( 'has a folder named my-repository', () => {
    chai.assert.isDirectory( './my-repository', 'no folder name "my-repository" was found' );
  } )

  it( 'has a valid git repository initialized for the my-repository folder', () => {
    chai.assert.isDirectory( './my-repository/.git', 'no ".git" folder was found within "/my-repository, used "git init" to initialize' );
  } )

  it( 'has a README.md file in the my-repository folder', () => {
    chai.assert.pathExists( './my-repository/README.md', 'no README.md file found within "/my-repository"' );
  } )

} )

describe( 'the local repository', () => {

  it( 'has README.md as a tracked file', () => {
    chai.assert.pathExists( './my-repository/.git/index', 'no files are being tracked.  Use "git add ." to track all files in this repo' );
  } )

  it( 'has at least one commit', () => {
    chai.assert.isDirectory( './my-repository/.git/logs', 'no commits were found.  Use "git commit -m" followed by a message to create a commit' );
  } )

  it( 'has been pushed up to the remote repository', () => {
    chai.assert.isDirectory( './my-repository/.git/logs/refs/remotes', 'no record of pushing to a remote was found. Follow the instructions on GitHub to connect and push to a new remote repository' );
  } )

} )
