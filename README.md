A tiny utility for conditionally joining classNames together.

[![Build Status](https://img.shields.io/github/actions/workflow/status/Pingid/mcn/test.yml?branch=main&style=flat&colorA=000000&colorB=000000)](https://github.com/Pingid/mcn/actions?query=workflow:Test)
[![Build Size](https://img.shields.io/bundlephobia/minzip/mcn?label=bundle%20size&style=flat&colorA=000000&colorB=000000)](https://bundlephobia.com/result?p=mcn)
[![Version](https://img.shields.io/npm/v/mcn?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/mcn)
[![Downloads](https://img.shields.io/npm/dt/mcn.svg?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/mcn)

```bash
npm install mcn # or yarn add mcn or pnpm add mcn
```
This utility is similar to [clx](https://github.com/lukeed/clsx) or [classnames](https://github.com/JedWatson/classnames) with an additional tuple syntax `[boolean, show if true, show if false]`. It also difers in that it infers the literal string type which means if you hover over a variable in your IDE you will see the assigned classnames.

## Usage
```typescript
import { cn  } from 'mcn'

cn('rounded-full', active && 'bg-blue')

cn([active, 'border-black', 'border-white'], { 'text-white': active })

cn('bg-white', [active, 'border-blue'])

cn('bg-white', { 'border-blue': active })
// Infered type ("bg-white" | "bg-white border-blue")

cn('bg-white', [active, 'border-blue', 'border-white'] as const)
// Infered type ("bg-white border-blue" | "bg-white border-white")

// Falsy values are ignored
cn(null, undefined, false, true)
```

## Tailwind Support

Enable classes autocompletion using `cn` with Tailwind CSS.
<details>

<summary>
  Visual Studio Code
</summary>

1. [Install the "Tailwind CSS IntelliSense" Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

2. Add the following to your [`settings.json`](https://code.visualstudio.com/docs/getstarted/settings):

  ```json
   {
    "tailwindCSS.experimental.classRegex": [
      ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
    ]
   }
  ```
</details>

## License
MIT © [Dan Beaven](https://github.com/Pingid)