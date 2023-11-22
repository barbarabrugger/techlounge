FROM node:21.2.0-alpine AS base
USER node

FROM base AS build
ADD --chown=node:node package*.json ./home/node
RUN cd /home/node && npm install
ADD --chown=node:node . /home/node

FROM base
COPY --from=build . .
CMD ["node", "/home/node/app.js"]