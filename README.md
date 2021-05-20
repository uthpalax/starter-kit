# Nhost and SvelteKit starter kit

Learn more about [`nhost`](https://nhost.io/);
Learn more about [`svelte kit`](https://kit.svelte.dev/);

Watch the lesson series on youtube - DoingITeasyChannel [`here`](https://www.youtube.com/watch?v=u28pzv__KdU&list=PLRd0zhQj3CBkbHAlqi0e6cdLN4XHuQ8mh);


## Getting Started 

Create a nhost project

```bash
# clone the project
git clone git@github.com:Uthpala/starter-kit.git

# Install dependencies 
npm install 

# Update .env file with your nhost project urls 
VITE_NHOST_BASE_URL="your nhost project backend url"

```

## Initializing the nhost project

Once you have created a nhost project and installed nhost cli.

```bash
# Install nhost cli if you haven't already
npm install -g nhost

# Login to nhost using cli
nhost login 

# REMOVE the nhost directory from the project

# Initialize the project
nhost init

# Select your project 

# start the server and open the app in a new browser tab
npm run dev -- --open
```