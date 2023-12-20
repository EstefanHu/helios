# TODO: Store db contents
yellow='\033[0;33m'
blue='\033[1;34m'
color_off='\033[0m'

if pg_isready -h localhost -p 5432 | grep -v "accepting"; then
    echo -e "${warningRed}NOTICE:${color_off} Could not connect to ${yellow}postgres${color_off}."
    echo -e "Make sure a local ${yellow}postgres${color_off} server is running then try runnig this command again"
    exit 1
fi

psql -d "heliosdb" -qc "REASSIGN OWNED BY helios TO postgres"
psql -d "heliosdb" -qc "DROP OWNED BY helios"
psql -qc "DROP ROLE helios"
psql -qc "DROP DATABASE heliosdb"

echo -e "Database ${yellow}heliosdb${color_off} and Role ${blue}helios${color_off} have been dropped"