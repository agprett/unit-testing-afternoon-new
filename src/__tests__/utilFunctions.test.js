import React from 'react'
import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'

test('Makes sure text under 100 characters is not modified', () => {
  expect(shortenText(shortText)).toHaveLength(29)
})

test('Makes sure shorten text shortens text to 100 and adds ... after', () => {
  const shortened = shortenText(longText)
  expect(shortened).not.toHaveLength(longText.length)
  expect(shortened.slice(-3)).toBe('...')
})

test('wordCount counts how many words in the posts array', () => {
  expect(wordCount(posts)).toBe(233)
})

test('attachUserName attaches name and has displayName property', () => {
  const newPosts = attachUserName(users, posts)
  expect(newPosts[0]).toHaveProperty('displayName')
})

test('makes sure attachUserName deletes any posts without user', () => {
  const newPosts = attachUserName(users, posts)
  const deleted = posts[5]
  expect(newPosts).not.toContainEqual(deleted)
})