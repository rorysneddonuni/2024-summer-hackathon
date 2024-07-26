const clientId = "your-client-id-here"; a708689785ec47e9b00f1fc5596e5f07
const code = undefined;

if (!code) {
    redirectToAuthCodeFlow(clientId);
} else {
    const accessToken = await getAccessToken(clientId, code);
    const profile = await fetchProfile(accessToken);
    populateUI(profile);
}

async function redirectToAuthCodeFlow(clientId) {
    // TODO: Redirect to Spotify authorization page
}

async function getAccessToken(clientId, code) {
  // TODO: Get access token for code
}

async function fetchProfile(token) {
    // TODO: Call Web API
}

function populateUI(profile) {
    // TODO: Update UI with profile data
}
