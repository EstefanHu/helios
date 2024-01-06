#!/bin/bash

# TODO: uuid support

# https://stackoverflow.com/questions/5947742/how-to-change-the-output-color-of-echo-in-linux
purple='\033[1;35m'
cyan='\033[1;36m'
green='\033[1;32m'
yellow='\033[0;33m'
red='\033[0;31m'
blue='\033[1;34m'
warningRed='\033[1;91m'
underlineYellow='\033[4;33m'
color_off='\033[0m'

bold=$(tput bold)
reset=$(tput sgr0)
port=5432
db=heliosdb
user=helios
password=helios

if pg_isready -h localhost -p $port | grep -v "accepting"; then
    echo -e "${warningRed}NOTICE:${color_off} Could not connect to ${yellow}postgres${color_off}."
    echo -e "Make sure ${yellow}postgres${color_off} is running on port ${port}"
    exit 1
fi

echo -e "${bold}${underlineYellow}Generating seed data${reset}"
echo

should_create_role=true
if psql postgres -tXAc "SELECT 1 FROM pg_roles WHERE rolname='${user}'" | grep -q 1; then
    echo -e "${warningRed}NOTICE:${color_off} Role ${cyan}\`${user}\`${color_off} already exists!"
    read -p "Override permissions? (y/N) " -n 1 -r
    echo -e
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        psql -d "${db}" -qc "REASSIGN OWNED BY ${user} TO postgres"
        psql -d "${db}" -qc "DROP OWNED BY ${user}"
        psql -qc "DROP ROLE ${user}"
    else
        should_create_role=false
    fi
fi

if $should_create_role; then
    echo -e "Creating role ${cyan}\`${user}\`${color_off} with password ${blue}\`${password}\`${color_off}"
    psql -qc "CREATE ROLE ${user} SUPERUSER LOGIN PASSWORD '${password}'"
    echo -e
fi

should_create_database=true
if psql -lqt | cut -d \| -f 1 | grep -qw ${db}; then
    echo -e "${warningRed}NOTICE:${color_off} Database ${green}\`${db}\`${color_off} already exists!"
    read -p "Override and continue? (y/N) " -n 1 -r
    echo -e
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        psql -qc "DROP DATABASE ${db}"
    else
        should_create_database=false
    fi
fi

if $should_create_database; then
    echo -e "Creating database ${green}\`${db}\`${color_off}"
    psql -qc "CREATE DATABASE ${db}"

    path_to_seeker="$(pwd)/seed/seeker.sql"
    path_to_entry="$(pwd)/seed/entry.sql"
    chmod +x $path_to_seeker
    chmod +x $path_to_entry
    echo -e "Populating tables"
    psql -U helios -d ${db} -q <$path_to_seeker
    psql -U helios -d ${db} -q <$path_to_entry
    echo -e
fi

echo -e "Data generation complete!"
echo -e "You can now connect to postgres using: ${purple}postgres://${user}:${password}@localhost:${port}/${db}${color_off}"
