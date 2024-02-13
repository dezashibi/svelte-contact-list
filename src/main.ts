import App from './App.svelte';

// Attempt to get the element
const appElement = document.getElementById('app');

// Check if the element is not found
if (!appElement) {
    throw new Error("Failed to find the element with ID 'app'");
}

// Since we've thrown an error if appElement is null, TypeScript knows appElement is not null here
const app = new App({
    target: appElement,
});

export default app;
