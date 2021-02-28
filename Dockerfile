FROM evemintsam/express-test:latest

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000 

EXPOSE $PORT

ENV PORT = $PORT 

CMD npm start
