# DataBase Configuration

    1. Create new Mysql Schema as "mksn_studio_f4"
    2. Restore the dump file "__dir__/db/dump/2024_02_28.sql"

# Backend Configuration

    1. Open "__dir__/backend/database.js"
    2. Edit the MySql Configuration.
    3. Open "__dir__/backend/config.env" and there are PORT and Base API URL

# Frontend Configuration

    1. Open "__dir__/frontend/.env" and change "VITE_API_URL" according to API url.
    2. To Build the Frontend type "npm run build". All the build files goes into "__dir__/frontend/dist"
