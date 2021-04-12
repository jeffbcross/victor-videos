![Screenshot of Victor Videos app](/screenshot.png)

# Performance Workshop

Presented by [Jeff Cross](https://twitter.com/jeffbcross) of [Nrwl](https://nrwl.io) at ng-conf 2021.

We'll be looking at an app that resembles real-world performance issues, and will cover 4 tools to identify the root causes:

- **Chrome Devtools**:
  - **Lighthouse** _for measuring startup performance_
  - **Network** _tab to understand how resources are being loaded_
  - **Performance** _tab to see full view of app performance_
  - **Code Coverage** _to see what CSS and JS aren't being used_
- **Source Map Explorer** _to see what's inside bundles_

## Running the App

To run the app with production configuration, follow these steps:

1. `npm install`
1. `npx nx build victor-videos --prod`
1. `npx nx build prod-server --prod`
1. `node dist/apps/prod-server/main.js`
1. Open `localhost:3333`

## Resources

The UAAO doc created during the workshop can be viewed here: https://docs.google.com/document/d/1JCC9SuKSgQ3nDltLrJCmTUtWrLJRvWWIX0FdywvNl88/edit?usp=sharing

To learn more about the UAAO process, and see a more thorough example, go to https://go.nrwl.io/uaao.

## Become a Performance Expert

Here are some of my favorite resources that I refer back to often.

### High Performance Browser Networking

This book is the canonical source for all things related to internet plumbing, written and updated by someone who's at the forefront of Internet standards, Ilya Grigorik (Google). And it's FREE on the web here: https://hpbn.co/

### Critical Rendering Path

Speaking of Ilya Grigorik, if you want to understand everything that goes into rendering a page, this article by Ilya Grigorik on Chrome Web Fundamentals is your friend: https://developers.google.com/web/fundamentals/performance/critical-rendering-path

### Blog: JavaScript Loading Priorities in Chrome

This is my cheat sheet for remembering the nuanced behaviors of `<link>` and `<script>` tags with different attributes applied. Written by none other than Addy Osmani (Google) https://addyosmani.com/blog/script-priorities/

### Twitter Thread from Ivan Akulov

This Twitter thread includes over 50 insightful Web performance tips. I learned a few things! https://twitter.com/iamakulov/status/1275769142809944064

### Demystifying Speed Tooling

The video's almost 2 years old, but still a good overview of Chrome's performance tools, straight from the people working on the tools (Paul Irish and Elizabeth Sweeny): https://www.youtube.com/watch?v=mLjxXPHuIJo
