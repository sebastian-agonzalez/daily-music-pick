const SPOTIFY_CLIENT_ID = "07fcde4942cd4c639a031e17fbe824e6";
const SPOTIFY_REDIRECT_URI = "http://localhost:3000";
const SPOTIFY_AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const SPOTIFY_RESPONSE_TYPE = "token";
const SPOTIFY_URL = `${SPOTIFY_AUTH_ENDPOINT}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${SPOTIFY_REDIRECT_URI}&response_type=${SPOTIFY_RESPONSE_TYPE}`;

export default function UserLogin() {
  return <a href={SPOTIFY_URL}>ACCEDER CON SPOTIFY</a>;
}
