FROM node:12-stretch

# its better not to run commands as root user, 
# node container is shipped with node user
USER node

# its to prevent permission errors
RUN mkdir /home/node/code

WORKDIR /home/node/code

#  copies the entire folder
COPY --chown=node:node . .

RUN npm ci

RUN npm run build

CMD [ "node", "dist/index.js"]