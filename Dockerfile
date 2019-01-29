FROM nginx:stable-alpine

# install simple http server for serving static content
RUN apk add --update nginx nodejs
RUN apk add --update yarn
RUN yarn global add http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN yarn install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN yarn run build

EXPOSE 8080
CMD [ "http-server", "dist" ]
