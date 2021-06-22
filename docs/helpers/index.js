import moment from 'moment'

export const camelize = str => {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1),
    )
    .join('') // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

export const capitalize = str => {
  if (typeof str !== 'string') return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const copySorted = arr => {
  return arr.slice().sort()
}

export const filterPosts = (posts, selectedPeriod) => {
  return posts.filter(post => {
    if (
      selectedPeriod === 'today' &&
      post.created.isAfter(moment().subtract(1, 'day'))
    ) {
      return true
    }
    if (
      selectedPeriod === 'this week' &&
      post.created.isAfter(moment().subtract(7, 'day'))
    ) {
      return true
    }
    if (
      selectedPeriod === 'this month' &&
      post.created.isAfter(moment().subtract(1, 'month'))
    ) {
      return true
    }
  })
}

export const filterRange = (arr, a, b) => {
  // added brackets around the expression for better readability
  return arr.filter(item => a <= item && item <= b)
}

export const getAverageAge = users => {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length
}

export const groupById = arr => {
  return arr.reduce((obj, value) => {
    obj[value.id] = value
    return obj
  }, {})
}

export const pluralize = (number, singularWord) => {
  const text = `${number} ${singularWord}`
  if (number === 1) return text
  return text + 's'
}

export const shuffle = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)) // random index from 0 to i

    // swap elements arr[i] and arr[j]
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
}

export const sortByAge = arr => {
  arr.sort((a, b) => a.age - b.age)
}

export const strip = html => html.replace(/<[^>]*>/g, '')

export const unique = arr => {
  return Array.from(new Set(arr))
}
