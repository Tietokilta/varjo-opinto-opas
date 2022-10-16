FROM node:16-alpine3.16
WORKDIR /usr
COPY package.json ./
COPY tsconfig.json ./
COPY knexfile.js ./
COPY src ./src
COPY migrations ./migrations
RUN npm install
EXPOSE 4005
CMD ["npm","run","start"]