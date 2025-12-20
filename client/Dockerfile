FROM node:20-alpine

WORKDIR /app

RUN npm install

COPY package * .json ./


COPY . . 

EXPOSE 5173

CMD ["npm" , "run" ,"dev"]
