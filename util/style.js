export const propStyles = (...params) => {
  // Transform the input array into an array of pairs
  const pairs = params.reduce((result, _current, index, array) => {
    if (
      index % 2 === 0 &&
      array.length - index > 1 // Exclude the last element if length is odd
    ) {
      result.push(array.slice(index, index + 2))
    }
    return result
  }, [])

  // Remove entries with falsy conditions
  const filterConditions = pairs.filter(([condition, _predicate]) =>
    Boolean(condition)
  )

  // Ensure all predicates are arrays
  const arrayPredicates = filterConditions.map((pair) => {
    const [condition, predicate] = pair
    if (!Array.isArray(predicate)) {
      return [condition, [predicate]]
    }
    return pair
  })

  const formattedPredicates = arrayPredicates.map(([condition, predicates]) => {
    const formatThisPredicate = formatPredicate(condition)
    return predicates.map(formatThisPredicate).join('')
  })

  return formattedPredicates
}

const formatPredicate = (rawValue) => (predicate) => {
  const value = String(rawValue)
  // === ERRORS: ===
  // 1. Predicate must not end with a colon (or a colon with trailing whitespace)
  if (/:\s*$/.test(predicate)) {
    throw new Error('Invalid predicate value: Inappropriate colon')
  }
  // 2. Predicate must not include more than one colon
  if ((predicate.match(/:/g) || []).length > 1) {
    throw new Error('Invalid predicate value: Only one colon is permitted')
  }
  // 3. Predicate must not include a semicolon
  if (/;/.test(predicate)) {
    throw new Error('Invalid predicate value: Do not include semicolon')
  }

  // === BEHAVIORS: ===
  // if the predicate contains a colon, not at the end, just append a semicolon
  if (/:\s*[^:]+\s*$/.test(predicate)) {
    return `${predicate};`
  }

  // if the predicate does not contain a colon, append colon-value-semicolon
  if (/^[^:]+$/.test(predicate)) {
    return `${predicate}: ${value};`
  }

  // Something should have matched by now, this is probably an error
  throw new Error('CSS predicate fell through all matches')
}
