import { describe, it, expect } from 'vitest'

import { cleanConfig, cleanConfigs } from './clean'

import type { Config } from '../types'

describe('cleanConfig', () => {
  it('設定オブジェクトから指定されたプロパティを削除するべき', () => {
    const input: Config = {
      files: ['file1.js', 'file2.js'],
      ignores: ['ignore1', 'ignore2'],
      languageOptions: { ecmaVersion: 2021 },
      name: 'test',
    }
    const expected = {
      name: 'test',
    }
    expect(cleanConfig(input)).toEqual(expected)
  })

  it('削除可能なプロパティのみが存在する場合、空のオブジェクトを返すべき', () => {
    const input: Config = {
      files: ['file1.js'],
      ignores: ['ignore1'],
      languageOptions: { ecmaVersion: 2021 },
    }
    const expected = {}
    expect(cleanConfig(input)).toEqual(expected)
  })

  it('削除可能なプロパティが存在しない場合、同じオブジェクトを返すべき', () => {
    const input: Config = {
      name: 'test',
      rules: {
        'no-unused-vars': 'error',
      },
    }
    const expected = {
      name: 'test',
      rules: {
        'no-unused-vars': 'error',
      },
    }
    expect(cleanConfig(input)).toEqual(expected)
  })
})

describe('cleanConfigs', () => {
  it('設定オブジェクトの配列をクリーンアップするべき', () => {
    const input: Config[] = [
      {
        files: ['file1.js'],
        ignores: ['ignore1'],
        languageOptions: { ecmaVersion: 2021 },
        name: 'test1',
      },
      {
        files: ['file2.js'],
        ignores: ['ignore2'],
        languageOptions: { ecmaVersion: 2020 },
        name: 'test2',
      },
    ]
    const expected = [
      { name: 'test1' },
      { name: 'test2' },
    ]
    expect(cleanConfigs(input)).toEqual(expected)
  })

  it('入力配列が空の場合、空の配列を返すべき', () => {
    const input: Config[] = []
    const expected: Config[] = []
    expect(cleanConfigs(input)).toEqual(expected)
  })

  it('混在したオブジェクトを含む配列を正しく処理するべき', () => {
    const input: Config[] = [
      {
        files: ['file1.js'],
        ignores: ['ignore1'],
        languageOptions: { ecmaVersion: 2021 },
      },
      {
        name: 'test2',
      },
    ]
    const expected = [
      {},
      { name: 'test2' },
    ]
    expect(cleanConfigs(input)).toEqual(expected)
  })
})
