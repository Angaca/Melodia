import { SPOTIFY_SECRET, SPOTIFY_CLIENTID } from "@env";
import axios from "axios";
import qs from "qs";

export const getSpotifyToken = async () => {
  if (!SPOTIFY_CLIENTID || !SPOTIFY_SECRET)
    return console.error(
      "ERROR: getSpotifyToken() environment variables must be set"
    );
  const encoded = btoa(`${SPOTIFY_CLIENTID}:${SPOTIFY_SECRET}`);
  const response = await axios({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    data: qs.stringify({
      grant_type: "client_credentials",
    }),
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      Authorization: `Basic ${encoded}`,
    },
  });
  return response.data.access_token;
};
