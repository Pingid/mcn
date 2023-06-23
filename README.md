A tiny utility for conditionally joining classNames together.

[![Build Status](https://img.shields.io/github/actions/workflow/status/Pingid/mcn/test.yml?branch=main&style=flat&colorA=000000&colorB=000000)](https://github.com/Pingid/mcn/actions?query=workflow:Test)
[![Build Size](https://img.shields.io/bundlephobia/minzip/mcn?label=bundle%20size&style=flat&colorA=000000&colorB=000000)](https://bundlephobia.com/result?p=mcn)
[![Version](https://img.shields.io/npm/v/mcn?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/mcn)
[![Downloads](https://img.shields.io/npm/dt/mcn.svg?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/mcn)

```bash
npm install mcn # or yarn add mcn or pnpm add mcn
```

**Usage**
```typescript
import { cn  } from 'mcn'

cn('rounded-full', active && 'bg-blue', [active, 'border-black', 'border-white'], { 'text-white': active })

// Ignored
cn(null, undefined, false, true)
```
