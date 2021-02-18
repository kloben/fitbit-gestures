import { FindElement } from '../../src/helpers/dom.helper'
import { getFakeElement } from '../test.util'

describe('Dom Helper', () => {

  test('Test find from Element', () => {
    const input = getFakeElement()

    const response = FindElement(input)

    expect(response).toBe(input)
  })

  test('Test find from string success', () => {
    const input = 'ok'

    const response = FindElement(input)

    expect(response).not.toBe(null)
  })

  test('Test find from string fail', () => {
    const input = 'fail'

    expect(() => {
      FindElement(input)
    }).toThrowError()
  })
})
