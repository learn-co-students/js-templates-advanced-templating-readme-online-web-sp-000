Handlebars.registerHelper('comment_body', function() {
  let tags = this.state === 'closed' ? ["",""] : ["<strong>","</strong>"]
  return new Handlebars.SafeString(tags[0]+this.body+tags[1])
  if (this.state === 'closed') {
    return new Handlebars.SafeString(this.body)
  } else {
    return new Handlebars.SafeString(`<strong>${this.body}</strong>`)
  }
})

function loadIssues() {
  var template = Handlebars.compile(document.getElementById('issue-template').innerHTML)
  var result = template(issues)
  document.getElementsByTagName('main')[0].innerHTML += result
}

function loadIssue() {
  var issue = {
    state: "closed",
    number: 5,
    created_at: "2006-03-31 16:32:13 UTC",
    body: "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team."
  }

  var template = Handlebars.compile(document.getElementById('issue-template').innerHTML)
  var result = template(issue)
  document.getElementsByTagName('main')[0].innerHTML += result
}
