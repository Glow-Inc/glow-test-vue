# Glow Test Vue

## Setup
### Install vue cli
```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

### Install dependencies
```
npm install
# OR
yarn install
```

### Start developing
```
npm run serve
# OR
yarn serve
```


## Requirement
There's a table component in this app, it has four props: `data`, `columns`, `sortBy` and `order`:
* The `data` prop is an array of object and is the data source of the table. Each object in the data is an IMDB movie entry.
* The `columns` prop is also an array type and is used to tell the table what columns to display;
* The `sortBy` and `order` props are string types. The `sortBy` prop is to tell the table which property to sort by. And the `order` is used to specifiy the order to sort in (ascending or descending order);

Please finish the table component to meet the following requirements:
* The table displays all the movie entries;
* The table automatically updates itself when any of the props changes;
* The header is fixed on the top;

NOTE: Please do not use open source Vue table components directly, build this youself. Bootstrap is included, feel free to use it if you want to.


## Bonus:
* Easy to use
* Easy to extend
* Easy to read the data
