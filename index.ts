// Import stylesheets
import './style.css';

import { MapView } from "@here/harp-mapview";

console.log("M", MapView);
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;