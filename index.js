
Handlebars.registerHelper('comment_body', function() {
  if(this.state === "closed") {
    return new Handlebars.SafeString(this.body);
  } else {
    return new Handlebars.SafeString(`<strong>${this.body}</strong>`)
  }
})

function loadIssues() {
  const template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  let result = template(issues);
  document.getElementsByTagName("main")[0].innerHTML += result;
}

//  Very slow, re-allocates "result" and queries DOM in each loop

// function loadIssue() {
//   const template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
//   for(let i = 0; i < issues.length; i++) {
//     let result = template(issues[i]);
//     document.getElementsByTagName("main")[0].innerHTML += result;
//   }
//
// }
