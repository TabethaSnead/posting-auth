![Wireframe of posting-auth] (./assets/wireframe.png)

## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Look at the drawing and name the HTML elements you'll need to realize your vision**
1. **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1. **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1. **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)

## Page 1 display page

-button- Auth page- send user to auth page
-button- create page- send user to create page if logged in, if not logged in send user to auth page
-empty div- pushing data from supabase table into - display created posts

on load- fetch, loop, render, append all data on tables

## page 2 auth page

-form- sign up
-input-email
-input-password
-button-submit
-form- sign in
-input-email
-input-password
-button-submit

on load, if logged in, send to display page
submit on sign up form
-get info from email
-get info from password
-call signUp() with email and password
-redirect to display page

submit on sign in form
-get info from email
-get info from password
-call signIn() with email and password
-redirect to display page

## Page 3 create post

-form-
-input-title
-input- content
-input-contact
-button- submit

if logged in
on submit
-get data from form
-create a post in supabase
-redirect user home

## Slices

-see list of posts on load
-be able to go to auth page and sign up or sign in

-   user should not be able to create post if they arent logged in
-   user should not be able to go to the auth page if they are signed in
    -user should be able to create a post, then be redirected to the display page and see their post
