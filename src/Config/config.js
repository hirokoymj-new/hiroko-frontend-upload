const config = {
  local: {
    HOST: "https://localhost:4000/",
    APOLLO_CLIENT_URI: "https://hirokoymj-backend-upload.herokuapp.com/graphql",
  },
  production: {
    HOST: "https://hirokoymj-backend-upload.herokuapp.com/",
    APOLLO_CLIENT_URI: "https://hirokoymj-backend-upload.herokuapp.com/graphql",
  },
  GOOGLE_MAP_API_KEY: "AIzaSyDVSQkRDcbE-z-2aeaAtFpkQPm4l_wu43o",
  TOKYO_LOCATION: {
    city: "tokyo",
    lat: 35.689499,
    lon: 139.691711,
  },
  LOS_ANGELES_LOCATION: {
    city: "Los Angeles",
    lat: 34.052231,
    lon: -118.243683,
  },
};

export default {
  ...config,
  ...config[process.env.REACT_APP_STAGE],
};
