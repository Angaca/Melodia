import { SPOTIFY_SECRET, SPOTIFY_CLIENTID } from "@env";
import axios from "axios";
import qs from "qs";
import { useState, useEffect } from "react";
import { Base64 } from "./Base64";

export const getSpotifyToken = async () => {
  if (!SPOTIFY_CLIENTID || !SPOTIFY_SECRET)
    return console.error(
      "ERROR: getSpotifyToken() environment variables must be set"
    );
  const encoded = Base64.btoa(`${SPOTIFY_CLIENTID}:${SPOTIFY_SECRET}`);
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

export const useSpotify = () => {
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    if (!accessToken) {
      getSpotifyToken()
        .then((access_token) => {
          setAccessToken(access_token);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  async function getTracksByArtist(artist) {
    if (accessToken) {
      return axios({
        method: "get",
        url: `https://api.spotify.com/v1/search?q=${artist}&type=track%2Cartist&market=US&limit=10&offset=5`,
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=utf-8",
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }
  }

  return { accessToken, getTracksByArtist };
};
