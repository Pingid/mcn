> **🚨 This repository has moved to [@lickle/cn](https://github.com/Pingid/lickle-cn)**

A tiny utility for conditionally joining classNames together.

[![Build Status](https://img.shields.io/github/actions/workflow/status/Pingid/mcn/test.yml?branch=main&style=flat&colorA=000000&colorB=000000)](https://github.com/Pingid/mcn/actions?query=workflow:Test)
[![Build Size](https://img.shields.io/bundlephobia/minzip/mcn?label=bundle%20size&style=flat&colorA=000000&colorB=000000)](https://bundlephobia.com/result?p=mcn)
[![Version](https://img.shields.io/npm/v/mcn?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/mcn)
[![Downloads](https://img.shields.io/npm/dt/mcn.svg?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/mcn)

```bash
npm install mcn # or yarn add mcn or pnpm add mcn
```

This utility is similar to [clx](https://github.com/lukeed/clsx) or [classnames](https://github.com/JedWatson/classnames), with an additional tuple syntax [boolean, show if true, show if false].

Unlike those libraries, this provides two versions of the function:

- **tcn**: Returns a string literal type (useful for better IDE autocomplete and type inference).
- **cn**: Returns a string (normal concatenation).

## Usage

```typescript
import { cn, tcn } from 'mcn'

// Basic usage
cn('rounded-full', active && 'bg-blue')

// Conditional classes using objects
cn('bg-white', { 'border-blue': active })

// Tuple syntax for conditional rendering
cn([active, 'border-black', 'border-white'])

// Falsy values are ignored
cn(null, undefined, false, true)

// Type inference in action
const classes = tcn('bg-white', [active, 'border-blue', 'border-white'])
// Inferred type: "bg-white border-blue" | "bg-white border-white"
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
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
    ["tcn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

</details>

## License

MIT © [Dan Beaven](https://github.com/Pingid)
