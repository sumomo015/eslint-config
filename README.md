# @sumomo015/eslint-config

sumomo015のESLint設定パッケージです。TypeScriptおよびVue.jsプロジェクト向けに最適化されています。

## 特徴

- 📦 TypeScript専用モードとVue + TypeScriptモードに対応
- 🎨 Stylisticルールによるコードフォーマット
- 📥 Import文の整理とソート
- ⚡ ESLint Flat Config対応
- 🔧 カスタマイズ可能な設定

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

### TypeScript専用プロジェクト

`eslint.config.mjs`または`eslint.config.ts`を作成:

```typescript
import { defineESLintConfig } from '@sumomo015/eslint-config'

export default defineESLintConfig({
  mode: 'TS_ONLY',
  tsconfigRootDir: import.meta.dirname,
})
```

### Vue + TypeScriptプロジェクト

```typescript
import { defineESLintConfig } from '@sumomo015/eslint-config'

export default defineESLintConfig({
  mode: 'VUE_WITH_TS',
  tsconfigRootDir: import.meta.dirname,
})
```

## オプション

### ESLintConfigsOptions

| プロパティ        | 型                           | 必須 | 説明                                                               |
| ----------------- | ---------------------------- | ---- | ------------------------------------------------------------------ |
| `mode`            | `'TS_ONLY' \| 'VUE_WITH_TS'` | ✅   | 使用するモード。TypeScript専用またはVue + TypeScript               |
| `tsconfigRootDir` | `string`                     | ✅   | `tsconfig.json`があるルートディレクトリのパス                      |
| `internalRegex`   | `string`                     | ❌   | 内部パッケージを識別するための正規表現パターン(import順序の制御用) |
| `ignores`         | `string[]`                   | ❌   | ESLintで無視するファイル/ディレクトリのパターン                    |

### 例: カスタムignoresとinternalRegexを使用

```typescript
import { defineESLintConfig } from '@sumomo015/eslint-config'

export default defineESLintConfig({
  mode: 'TS_ONLY',
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
    mode: 'TS_ONLY',
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
- **Vue**: Vue.js固有のルール(VUE_WITH_TSモード時のみ)
- **Import**: import文の整理とソート
- **Stylistic**: コードスタイルとフォーマットのルール

## 必要な環境

- **Node.js**: >=22.0.0

## 依存関係

### Peer Dependencies

- `eslint` ^9.0.0
- `typescript` ^5.0.0

### 主要な依存パッケージ

- `@eslint/js`
- `@stylistic/eslint-plugin`
- `@typescript-eslint/parser`
- `typescript-eslint`
- `eslint-plugin-import-x`
- `eslint-plugin-vue`
- `vue-eslint-parser`
