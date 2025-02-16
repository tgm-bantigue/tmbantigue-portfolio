#!/bin/bash

# Substitute environment variable value to file
substitute() {
  envsubst < $1.yml > $1.tmp && mv $1.tmp $1.yml
}

substitute ./base/secret
substitute ./ingress
