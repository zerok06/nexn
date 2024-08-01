#!/bin/bash

docker compose -f replication.yml up

sleep 5

docker exec mongo1 bash /scripts/rs-init.sh

