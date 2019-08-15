import React  from 'react'
import T from 'prop-types'

export const convertDateTimeStringToTimestamp = dateString => {
  const dateTimeParts = dateString.split(' ')
  const timeParts = dateTimeParts[1].split(':')
  const dateParts = dateTimeParts[0].split('-')

  const date = new Date(dateParts[0], parseInt(dateParts[1], 10) - 1, dateParts[2], timeParts[0], timeParts[1]);
  return date.getTime()
}

const ONE_MIN = 60 * 1000
const TWO_MIN = 2 * ONE_MIN
const ONE_HOUR = 60 * ONE_MIN
const TWO_HOUR = 2 * ONE_HOUR
const ONE_DAY = 24 * ONE_HOUR
const TWO_DAY = 2 * ONE_DAY
const ONE_WEEK = 7 * ONE_DAY
const TWO_WEEK = 2 * ONE_WEEK
const ONE_MONTH = 30 * ONE_DAY
const TWO_MONTH = 2 * ONE_MONTH
const ONE_YEAR = 12 * ONE_MONTH
const TWO_YEAR = 2 * ONE_YEAR

/* eslint-disable complexity */
const convertTimestampToRelative = (time = Date.now(), short = false) => {
  const now = Date.now()

  // Display orinal time when it's a future time (due to incorrect browser time or so)
  if (time > now) return new Date(+time).toString()

  const diff = now - time
  if (diff < ONE_MIN) return 'just now'
  if (diff < TWO_MIN) {
    return short
      ? '1m ago'
      : '1 minute ago'
  }
  if (diff < ONE_HOUR) {
    return short
      ? `${Math.floor(diff / ONE_MIN)}m ago`
      : `${Math.floor(diff / ONE_MIN)} minutes ago`
  }
  if (diff < TWO_HOUR) {
    return short
      ? '1h ago'
      : '1 hour ago'
  }
  if (diff < ONE_DAY) {
    return short
      ? `${Math.floor(diff / ONE_HOUR)}h ago`
      : `${Math.floor(diff / ONE_HOUR)} hours ago`
  }
  if (diff < TWO_DAY) {
    return short
      ? '1d ago'
      : '1 day ago'
  }
  if (diff < ONE_WEEK) {
    return short
      ? `${Math.floor(diff / ONE_DAY)}d ago`
      : `${Math.floor(diff / ONE_DAY)} days ago`
  }
  if (diff < TWO_WEEK) {
    return short
      ? '1w ago'
      : '1 week ago'
  }
  if (diff < ONE_MONTH) {
    return short
      ? `${Math.floor(diff / ONE_WEEK)}w ago`
      : `${Math.floor(diff / ONE_WEEK)} weeks ago`
  }
  if (diff < TWO_MONTH) {
    return short
      ? '1mo ago'
      : '1 month ago'
  }
  if (diff < ONE_YEAR) {
    return short
      ? `${Math.floor(diff / ONE_MONTH)}mo ago`
      : `${Math.floor(diff / ONE_MONTH)} months ago`
  }
  if (diff < TWO_YEAR) {
    return short
      ? '1y ago'
      : '1 year ago'
  }

  return short
    ? `${Math.floor(diff / ONE_YEAR)}y ago`
    : `${Math.floor(diff / ONE_YEAR)} years ago`
}
/* eslint-enable */

const TimeAgo = ({ time, short, toTimestamp }) => {
  if (toTimestamp) {
    time = time
      ? convertDateTimeStringToTimestamp(time)
      : ''
  }

  return (
    <div>{convertTimestampToRelative(time, short)}</div>
  )
}

TimeAgo.propTypes = {
  time: T.oneOfType([T.number, T.string]).isRequired,
  className: T.string,
  short: T.bool,
  toTimestamp: T.bool,
}

TimeAgo.defaultProps = {
  toTimestamp: false,
}

export default TimeAgo
