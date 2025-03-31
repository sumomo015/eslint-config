import { describe, it, expect } from 'vitest'

import { defineESLintConfig } from './index'

import type { Config } from './types'

describe('defineESLintConfig 関数のテスト', () => {
  it('TS_ONLY モードで正しい設定が生成されることを確認する', () => {
    const config = defineESLintConfig(
      { mode: 'TS_ONLY', tsconfigRootDir: '/path/to/tsconfig' },
    )
    expect(config).toMatchSnapshot()
  })

  it('VUE_WITH_TS モードで正しい設定が生成されることを確認する', () => {
    const config = defineESLintConfig(
      { mode: 'VUE_WITH_TS', tsconfigRootDir: '/path/to/tsconfig' },
    )
    expect(config).toMatchSnapshot()
  })

  it('内部正規表現と無視リストが指定された場合の設定を確認する', () => {
    const config = defineESLintConfig(
      {
        mode: 'TS_ONLY',
        tsconfigRootDir: '/path/to/tsconfig',
        internalRegex: '^@internal/',
        ignores: ['node_modules', 'dist'],
      },
    )
    expect(config).toMatchSnapshot()
  })

  it('追加のカスタム設定が適用されることを確認する', () => {
    const customConfig: Config = { rules: { 'custom-rule': 'error' } }
    const config = defineESLintConfig(
      { mode: 'TS_ONLY', tsconfigRootDir: '/path/to/tsconfig' },
      customConfig,
    )
    expect(config).toMatchSnapshot()
  })
})
