FROM node:20-alpine as build

WORKDIR /usr/src/app

# install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# copy sources and build
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /usr/src/app
RUN npm install -g serve
COPY --from=build /usr/src/app/dist ./dist
EXPOSE 5173
CMD ["serve", "-s", "dist", "-l", "5173"]
