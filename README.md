# Back-Office | Tous au chateau

### Local Setup

##### clone repo

- `git clone https://github.com/tonoli/tousauchateau_back.git backend`
- `cd backend`
- `yarn`

##### Installer local instace de PostgreSQL
https://www.postgresql.org/download/macosx/
- Créer une base de donné nomé `strapi`
- Créer un user ayant des droits sur cette base `strapi` avec comme password `Z9zDhYphq43WRAwY7bJeh9Yf4nRcdOnK`
```
sudo -u postgres psql
postgres=# create database strapi;
postgres=# create user strapi with encrypted password 'Z9zDhYphq43WRAwY7bJeh9Yf4nRcdOnK';
postgres=# grant all privileges on database strapi to strapi;
postgres=# \q
```


- `yarn develop`

### Troubleshooting 
`
error error: select distinct "entreprises_components".* from "entreprises_components" where "field" = $1 and "component_type" in ($2, $3, $4) and "entreprises_components"."entreprise_id" in ($5) order by "order" asc - column entreprises_components.entreprise_id does not exist`


```
ALTER TABLE entreprises_components
RENAME COLUMN entrepris_id TO entreprise_id;
```
