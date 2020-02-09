# Use a Node.js image and assign it as our build
FROM node:12.6.0 as build
# Set the working directory, copy dependency management files to the working directory,
# and install the dependencies
WORKDIR /usr/src
RUN printenv && \
    mkdir -p packages/suto-ssr

    # ============== node libs ===========
    # ============== node libs ===========
COPY package.json package.json
COPY yarn.lock yarn.lock
# ================= our dependencies ============
COPY packages/suto-ssr/scripts/trap_wrapper.sh trap_wrapper.sh
# ================= our dependencies ============
COPY packages/suto-ssr/package.json packages/suto-ssr/package.json

# ============== node libs ===========

# ============== node libs ===========

RUN chmod a+x trap_wrapper.sh
RUN yarn install
COPY . .


RUN yarn --production
# Create a new image using a minimal Node.js image
# with no extra tools packaged in, such as Yarn or npm for the smallest final size
FROM node:12.6.0-alpine

#https://github.com/nodejs/docker-node#nodealpine
RUN apk add libc6-compat

# Set the working directory for the new image and
WORKDIR /usr/src
ENV NODE_ENV="production"

# Copy files from the base image over to our new image's working directory
COPY --from=build /usr/src .
# https://stackoverflow.com/questions/40944479/how-to-use-bash-with-an-alpine-based-docker-image
RUN apk add bash
EXPOSE 3000
CMD ["bash", "./trap_wrapper.sh"]
