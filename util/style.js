export const propStyles = (...params) => {
  // Remove entries with falsy conditions
  const filterConditions = params.filter(([condition, ..._predicates]) =>
    Boolean(condition)
  )

  const formattedStyles = filterConditions
    .map(([condition, ...predicates]) =>
      predicates.map(formatStyle(condition)).join(' ')
    )
    .join(' ')

  return formattedStyles
}

const formatStyle = (rawValue) => (predicate) => {
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
