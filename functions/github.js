require('dotenv').config();
const GitHubPublisher = require('github-publish');
const moment = require('moment');

const { GITHUB_TOKEN, GITHUB_USER, GITHUB_REPO } = process.env

const gitpush = (data) => {

    const publisher = new GitHubPublisher(GITHUB_TOKEN, GITHUB_USER, GITHUB_REPO);
    const path = "content/tribute/"
    
    const { tribute, author, twitter, facebook } = data.data
    const { created_at: date } = data
    let filename = `${path}tribute-${moment(date).format("YYYY-MM-DD-HH-mm")}.md`
    let filecontent = `---\ndate: ${date}\nauthor: ${author}\ndraft: false\ntwitter: ${twitter}\nfacebook: ${facebook}\n---\n\n${tribute}`

    publisher.publish(filename, filecontent).then(function (result) {
        // If "result" is truthy then the post was successfully published
        console.log('ok')
    });

    
}

module.exports = gitpush