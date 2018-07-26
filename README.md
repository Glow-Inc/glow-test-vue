# Glow

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
Please design and build a table component that meets the following requirements:
* The table has a `data` prop. It's an array type and is the data source of the table;
* The table has a `hiddenColumns` prop. It's an array type and is used to hide some of the columns;
* The table has a `sortBy` and a `order` prop. Both are string types. The `sortBy` prop is to tell the table which property to sort by. And the `order` is used to specifiy the order to sort in (ascending or descending order);
* The table automatically updates itself when any of the props changes;
* The header is fixed on the top;

NOTE: Please do not use open source Vue table components directly, build this youself. Bootstrap is included, feel free to use it if you want to.

## Data
There are 256 IMDB movies included in the data store to help you focus on building the component. But feel free to use other kinds of data to test your table.

## Bonus:
* Easy to use
* Easy to extend
* Easy to read the data
