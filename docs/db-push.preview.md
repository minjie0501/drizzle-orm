## How to setup and test preview database push feature

Currently `drizzle-kit push` is available **only** for `MySQL` dialect on internal npm release tag

This feature is still in testing process together with adding more cli warnings and suggestions

If you want to give it a try and send us any feedback or bug report - here is a small instruction on how to use `drizzle-kit push` cli

## Where to leave any feedback, suggestions or bug report

You can use our [Discord](https://discord.gg/MdXYZk5QtH) and put any `push` related messages in `#db-push` channel

## How to install and use push command

</br>

1. Install `drizzle-kit@db-push` tag
2. Create `drizzle.config.json[js][ts]` with needed options for push command


`drizzle.config.json` example
```jsonc
{
  "schema": "./db", 
  "connectionString": "mysql://root:password@127.0.0.1:3306/my_db"
}
```
or
```jsonc
{
  "schema": ["./db", "./core-db", "./core/**/*.ts"],
  "host": "127.0.0.1",
  "port": "3306",
  "user": "root",
  "password": "password",
  "database": "my_db",
}
```

`drizzle.config.js` example
```js
/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./schema.ts",
  connectionString: "mysql://root:password@127.0.0.1:3306/my_db",
};
```
or
```js
/** @type { import("drizzle-kit").Config } */
export default {
  schema: ["./db", "./core-db", "./core/**/*.ts"],
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "password",
  database: "my_db",
};
```

`drizzle.config.ts` example
```ts
import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
  schema: "./schema.ts",
  connectionString: process.env.DB_URL,
} satisfies CliConfig;
```

3. Run `drizzle-kit push:mysql` command to apply all schema changes to database

## Current TODO list to make `drizzle-kit@db-push` release to be ready for `latest`

- [ ] Add suggestions for possible data loss in database

> **Note**
> Currently on `drizzle-kit push:mysql` you will see 2 possible outputs
> 
> `[✓] Changes applied` - if `drizzle-kit` detected new schema changes and succesfully applied them on database
>
> `[i] No changes detected` - no schema changes was detected
>
> If some error will appear - you will see database error output that could be sent back to us for fixes

- [ ] Add more tests for different migration test cases
- [ ] Handle rollbacks if push modification won't end up with success ??
