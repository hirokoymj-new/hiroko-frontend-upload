import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { BrowserRouter } from "react-router-dom";
import { ReduxProvider } from "Redux/ReduxProvider";
import { ThemeProvider } from "Styles/ThemeProvider";
import { DashboardController } from "Components/DashboardController";

const URI = "https://hirokoymj-backend-upload.herokuapp.com/graphql";
const URI_LOCAL = "http://localhost:4000/graphql";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({ uri: URI }),
});

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ReduxProvider>
          <ThemeProvider>
            <DashboardController />
          </ThemeProvider>
        </ReduxProvider>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
