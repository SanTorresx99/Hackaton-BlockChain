FROM node:20

WORKDIR /deploy

RUN ls 
RUN npm install


EXPOSE 3000
EXPOSE 8545
