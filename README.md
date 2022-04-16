# morgulla
This is the frontend website project for [tsearch.tools](https://tsearch.tools).  
The Svelte framework is used with the Svelte Kit framework.  

Backend endpoints from [datava](https://github.com/tsearch/datava) and [lorva](https://github.com/tsearch/lorva) are used.

## What is morgulla
morgulla or tsearch.tools is a twitch search service. It can be used to search for clips or highlights for certian broadcasters.
Twitch itself has no search for clips or highlights.  
Did you ever try to get a 2 years old highlight from a active broadcasting streamer?  
Current the search is limited title search.

## Screenhots
### Light theme - Desktop
![Frontpage screenshot light theme](/gh-images/frontpage-desktop-light.png)

### Dark theme - Desktop
![Frontpage screenshot dark theme](/gh-images/frontpage-desktop-dark.png)

## Run project
To run the project, you need the project files first: 
```bash
git clone git@github.com:tsearch/morgulla.git
```
Then you need to install the dependenies with npm:
```bash
# npm install 
npm ci
```

(Possibly download other projects for the backend endpoints)  
(Possibly set ``.env.local`` file, see [Vite env modes](https://vitejs.dev/guide/env-and-mode.html#env-files))  

Run dev server, listing on all ips:
```bash
npm run dev -- --open --host 0.0.0.0
```

## Production build
To build project as a production build, you need the execute this npm command:
```bash
npm run build
```

The builded files are now in ``build`` dir.
To preview the build files:
```bash
npm run preview
```
You can now move the builded files anywhere...