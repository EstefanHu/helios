#!/bin/bash

# TODO: Add relationships
# TODO: Add seed cleanup
# TODO: Add psql connection string generation

# https://stackoverflow.com/questions/5947742/how-to-change-the-output-color-of-echo-in-linux
purple='\033[1;35m'
cyan='\033[1;36m'
green='\033[1;32m'
red='\033[0;31m'
blue='\033[1;34m'
warningRed='\033[1;91m'
underlineYellow='\033[4;33m'
color_off='\033[0m'

bold=$(tput bold)
reset=$(tput sgr0)

# TODO: Check if postgres is running or not

echo -e "${bold}${underlineYellow}Generating seed data${reset}"
echo

should_create_role=true
if psql postgres -tXAc "SELECT 1 FROM pg_roles WHERE rolname='helios'" | grep -q 1; then
    echo -e "${warningRed}NOTICE:${color_off} Role ${cyan}\`helios\`${color_off} already exists!"
    read -p "Override permissions? (y/N) " -n 1 -r
    echo -e
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        psql -qc "DROP ROLE helios"
    else
        should_create_role=false
    fi
fi

if $should_create_role; then
    echo -e "Creating role ${cyan}\`helios\`${color_off} with password ${blue}\`helios\`${color_off}"
    psql -qc "CREATE ROLE helios SUPERUSER LOGIN PASSWORD 'helios'"
    echo -e
fi

should_create_database=true
if psql -lqt | cut -d \| -f 1 | grep -qw heliosdb; then
    echo -e "${warningRed}NOTICE:${color_off} Database ${green}\`heliosdb\`${color_off} already exists!"
    read -p "Override and continue? (y/N) " -n 1 -r
    echo -e
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        psql -qc "DROP DATABASE heliosdb"
    else
        should_create_database=false
    fi
fi

if $should_create_database; then
    echo -e "Creating database ${green}\`heliosdb\`${color_off}"
    psql -qc "CREATE DATABASE heliosdb"

    path_to_seeker="$(pwd)/seed/seeker.sql"
    path_to_entry="$(pwd)/seed/entry.sql"
    chmod +x $path_to_seeker
    chmod +x $path_to_entry
    echo -e "Populating tables"
    psql -U helios -d heliosdb -q <$path_to_seeker
    psql -U helios -d heliosdb -q <$path_to_entry
    echo -e
    echo -e "Data generation complete!"
fi
