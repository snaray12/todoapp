FROM node
COPY package.json /usr/src/app/package.json
RUN npm install -g nodemon
WORKDIR /usr/src/app
RUN npm install
ENV PORT 3000
ENV clientID clientid
ENV clientSecret clientsecrete
ENV dbuser user
ENV dbpwd pwd
ENV dbhost host
ENV dbport dbport
ENV dbname dbname
EXPOSE 3000
ADD config /usr/src/app/config
ADD controller /usr/src/app/controller
ADD models /usr/src/app/models
ADD public /usr/src/app/public
ADD services /usr/src/app/services
COPY app.js /usr/src/app/app.js
COPY routes.js /usr/src/app/routes.js
CMD ["node", "/usr/src/app/app.js"]