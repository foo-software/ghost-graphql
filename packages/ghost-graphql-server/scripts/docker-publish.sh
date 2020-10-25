#!/bin/bash

DOCKER_TAG_NAME="ghost-graphql-server"
DOCKER_VERSION="latest"
DOCKER_USERNAME="foosoftware"
DOCKERFILE_NAME="Dockerfile"

# set values from flags -v (version)
while getopts "v:" opt; do
  case $opt in
    v)
      DOCKER_VERSION=$OPTARG
      ;;
  esac
done

BUILD_COMMAND="docker build --no-cache -t ${DOCKER_TAG_NAME} . -f ${DOCKERFILE_NAME}"

echo "${BUILD_COMMAND}"
eval $BUILD_COMMAND

TAG_COMMAND="docker tag ${DOCKER_TAG_NAME} ${DOCKER_USERNAME}/${DOCKER_TAG_NAME}:${DOCKER_VERSION}"

echo "${TAG_COMMAND}"
eval $TAG_COMMAND

PUBLISH_COMMAND="docker push ${DOCKER_USERNAME}/${DOCKER_TAG_NAME}:${DOCKER_VERSION}"

echo "${PUBLISH_COMMAND}"
eval $PUBLISH_COMMAND

exit 0
