FROM node:10.16-buster

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN apt-get update

RUN npm install
RUN apt-get install python -y
RUN npm -g config set user root

#RUN npm install -g angular-cli
#RUN npm install -g @angular/cli
#RUN npm install @angular/cli@8.1.2 
COPY . /usr/src/app

EXPOSE 4200 49153

#CMD [ "npm", "start" ]'
#CMD ng serve --port 49153 --host 0.0.0.0 --poll 1
