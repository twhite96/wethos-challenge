# Wethos Technical Challenge

> Technical take home for Wethos.

[Live Demo]()

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/twhite96/wethos-challenge)


Install:

1. 🌀 Clone the repo at `https://github.com/twhite96/wethos-challenge.git`
2. 🏃 Run: `npm i` to install dependencies.

---


## 🥞 Stack

I used `react-bulma-components` for the UI, React for the framework with `create-react-app`, and `axios` as an `http` client.

## 👊🏽 Wins
I basically learned React Hooks, how to wire up JWT to the frontend using Hooks and `axios`, and the new version of `react-bulma` called `react-bulma-components` for the first time, on the fly. This took time, lots of it, and as such there are some major bugs.

##  😐 Difficulties
I had difficulties learning how to use the `useEffect` hook to make the `axio.post` request so that I could authenticate against the API. It took a couple days, a refactor back to a class component, and then today refactoring back to hooks as I found [this answer on Stack Overflow](https://stackoverflow.com/a/58277965/3800146) that basically explained that I could use a basic `handleSubmit` method that I would normally use in a class component to handle the post request when a user clicks the Login button.

I also had a difficult time trying to figure out the new `react-bulma-components` as it seemed to be a completely different set of components to use Hooks, which up until this challenge I was too afraid to learn. I could not retro-fit the old `react-bulma` to fit the project, as the old version of `react-bulma` didn't have a form-like component. The UI isn't complete though it's not like I couldn't complete it; I just wanted to get *something* going and as per [this issue](https://github.com/couds/react-bulma-components/issues/232#issue-564279789) the main styles for `react-bulma-components` are broken. I fixed this by digging into `node_modules` directory, pulling out the stylesheet, and importing it into both the `App.js` and `Login.js` components. I couldn't just import them from the `node_modules` directory as `create-react-app` no longer supports imports like this outside of the `/src` directory.

## 🚶‍♂️Next steps
I am certain y'all will make your decision and whatever the outcome, know that I have thoroughly enjoyed interviewing with you and chatting with you on Slack. This was one of the best interviews I've had so far and I mean that.



