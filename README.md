# Setup

pnpm create svelte@latest my-package
Library project

pnpm create svelte@latest my-app
Skeleton project

Edit files:
my-package/src/lib/index.js
my-app/src/hooks.server.ts
my-app/src/routes/foo/+page.server.ts
my-app/src/routes/foo/+page.svelte

# Repro steps

cd my-package
pnpm install
pnpm run build

cd ../my-app
pnpm install
add to package.json

```
"dependencies": {
    "my-package": "1.0.0"
}
```

pnpm link ../my-package
pnpm dev
browse to http://localhost:5000/foo - Error from server load
browse to http://localhost:5000/login - error from server hooks
