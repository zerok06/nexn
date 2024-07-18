FROM node:18

RUN mkdir -p /home/app

COPY . /home/app

WORKDIR /home/app

RUN npm i 

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]