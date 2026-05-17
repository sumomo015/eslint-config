# @sumomo015/eslint-config

sumomo015のESLint設定パッケージです。TypeScriptおよびVue.jsプロジェクト向けに最適化されています。

## 特徴

- 📦 TypeScript、Vue.js、Reactに対応
- ⚛️ React / Next.js プロジェクトのサポート
- 🎨 Vue / Nuxt プロジェクトのサポート
- 🧪 Vitestテストフレームワークのサポート
- ✨ Stylisticルールによるコードフォーマット
- 📥 Import文の整理とソート
- ⚡ ESLint Flat Config対応
- 🔧 機能ごとの柔軟な有効化設定

## インストール

npm/pnpm/yarn等のパッケージマネージャーでインストールできます:

```bash
# pnpm
pnpm add -D @sumomo015/eslint-config eslint typescript

# npm
npm install -D @sumomo015/eslint-config eslint typescript

# yarn
yarn add -D @sumomo015/eslint-config eslint typescript
```

JSRレジストリからのインストールも可能です:

```bash
pnpm add -D jsr:@sumomo015/eslint-config eslint typescript
```

## 使い方

`eslint.config.mjs`または`eslint.config.ts`を作成:

### TypeScriptプロジェクト

```typescript
import { defineESLintConfig } from '@sumomo015/eslint-config'

export default defineESLintConfig({
  tsconfigRootDir: import.meta.dirname,
})
```

### Vue + TypeScriptプロジェクト

```typescript
import { defineESLintConfig } from '@sumomo015/eslint-config'

export default defineESLintConfig({
  feature: {
    vue: { enabled: true },
    vitest: { enabled: true },
  },
  tsconfigRootDir: import.meta.dirname,
})
```

### Nuxtプロジェクト

```typescript
import { defineESLintConfig } from '@sumomo015/eslint-config'

export default defineESLintConfig({
  feature: {
    vue: { enabled: true, nuxt: true },
    vitest: { enabled: true },
  },
  tsconfigRootDir: import.meta.dirname,
})
```

### React + TypeScriptプロジェクト

```typescript
import { defineESLintConfig } from '@sumomo015/eslint-config'

export default defineESLintConfig({
  feature: {
    react: { enabled: true },
    vitest: { enabled: true },
  },
  tsconfigRootDir: import.meta.dirname,
})
```

### Next.jsプロジェクト

```typescript
import { defineESLintConfig } from '@sumomo015/eslint-config'

export default defineESLintConfig({
  feature: {
    react: { enabled: true, next: true },
    vitest: { enabled: true },
  },
  tsconfigRootDir: import.meta.dirname,
})
```

## オプション

### Options

| プロパティ        | 型                                     | 必須 | 説明                                                               |
| ----------------- | -------------------------------------- | ---- | ------------------------------------------------------------------ |
| `feature`         | `object`                               | ❌   | 機能ごとの有効化設定                                               |
| `feature.vue`     | `{ enabled: boolean, nuxt?: boolean }` | ❌   | Vue.js/Nuxtサポート設定                                            |
| `feature.react`   | `{ enabled: boolean, next?: boolean }` | ❌   | React/Next.jsサポート設定                                          |
| `feature.vitest`  | `{ enabled: boolean }`                 | ❌   | Vitestテストフレームワークサポート設定                             |
| `tsconfigRootDir` | `string`                               | ✅   | `tsconfig.json`があるルートディレクトリのパス                      |
| `internalRegex`   | `string`                               | ❌   | 内部パッケージを識別するための正規表現パターン(import順序の制御用) |
| `ignores`         | `string[]`                             | ❌   | ESLintで無視するファイル/ディレクトリのパターン                    |

### 例: カスタムignoresとinternalRegexを使用

```typescript
import { defineESLintConfig } from '@sumomo015/eslint-config'

export default defineESLintConfig({
  tsconfigRootDir: import.meta.dirname,
  internalRegex: '^@mycompany/',
  ignores: ['dist/**', 'build/**', '.cache/**'],
})
```

### 例: カスタムルールの追加

`defineESLintConfig`の第2引数以降にカスタム設定を追加できます:

```typescript
import { defineESLintConfig } from '@sumomo015/eslint-config'

export default defineESLintConfig(
  {
    tsconfigRootDir: import.meta.dirname,
  },
  {
    rules: {
      // カスタムルールをここに追加
      'no-console': 'warn',
    },
  },
)
```

## 含まれる設定

このパッケージには以下の設定が含まれています:

- **JavaScript**: 基本的なJavaScriptのルール
- **TypeScript**: TypeScript固有のルールと型チェック
- **Vue**: Vue.js固有のルール（有効化時のみ）
- **Nuxt**: Nuxt.js固有のルール（Nuxtを有効化時のみ）
- **React**: React固有のルールとReact Hooks（有効化時のみ）
- **Next.js**: Next.js固有のルールとCore Web Vitals（Next.jsを有効化時のみ）
- **Vitest**: Vitestテストフレームワークのルール（有効化時のみ）
- **Import**: import文の整理とソート
- **Stylistic**: コードスタイルとフォーマットのルール

## 必要な環境

- **Node.js**: >=24.0.0

## 依存関係

### Peer Dependencies

- `eslint` ^10.0.0
- `typescript` ^6.0.0

### 主要な依存パッケージ

- `@eslint/js`
- `@stylistic/eslint-plugin`
- `@typescript-eslint/parser`
- `typescript-eslint`
- `eslint-plugin-import-x`
- `eslint-plugin-vue`
- `vue-eslint-parser`
- `@nuxt/eslint-plugin`
- `@eslint-react/eslint-plugin`
- `eslint-plugin-react-hooks`
- `@next/eslint-plugin-next`
- `@vitest/eslint-plugin`
