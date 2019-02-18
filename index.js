Handlebars.registerHelper('comment_body', function() {
    if(this.state === "closed") {
        return new Handlebars.SafeString(this.body)
    } else {
        return new Handlerbars.SafeString("<strong>" +this.body + "</strong>")
    }
})



function loadIssues() {
    const issue = {
        state: "closed",
        number: 5, 
        created_at: "2016-03-31 16:23:13 UTC",
        body: "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team."
    }
    const template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
    const result = template(issue);
    document.getElementById("main").innerHTML += result;
}
