# Step 1: Build the app
FROM node:18 as builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Step 2: Serve the built app with a web server
FROM nginx:stable-perl
COPY --from=builder /app/dist /usr/share/nginx/html
#expose port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
