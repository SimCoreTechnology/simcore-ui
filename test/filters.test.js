/* eslint no-unused-vars: 0 */
/* eslint quote-props: 0 */
/* eslint comma-dangle: 0 */

import _ from 'lodash'

import availabilities from '../external/availabilities'

const filters = require('../data/filters')

const allInstructorIds = [
  7475,
  4112,
  6630,
  1220,
  3726,
  7755,
]

const allInstructorAvailability = {
  7475: [
    { '2017-12-20 00:00:00': { duration: 3.5, start: 16 } },
    { '2017-12-20 00:00:00': { duration: 4, start: 0 } },
    { '2017-12-21 01:30:00': { duration: 4, start: 8 } },
    { '2017-12-22 01:30:00': { duration: 4, start: 8 } },
    { '2017-12-24 00:00:00': { duration: 5, start: 12 } },
    { '2017-12-19 00:00:00': { duration: 6, start: 13 } },
    { '2017-12-25 00:00:00': { duration: 2, start: 3 } },
    { '2017-12-25 00:00:00': { duration: 4, start: 8 } },
    { '2017-12-25 00:00:00': { duration: 3, start: 14 } },
  ],
  4112: [
    { '2017-12-20 00:00:00': { duration: 3, start: 16 } },
    { '2017-12-20 00:00:00': { duration: 2, start: 0 } },
    { '2017-12-20 05:00:00': { duration: 4, start: 14 } },
    { '2017-12-22 05:00:00': { duration: 4, start: 14 } },
    { '2017-12-24 00:00:00': { duration: 6, start: 12 } },
    { '2017-12-19 00:00:00': { duration: 6, start: 13 } },
    { '2017-12-25 00:00:00': { duration: 2, start: 3 } },
    { '2017-12-25 00:00:00': { duration: 5, start: 9 } },
    { '2017-12-25 00:00:00': { duration: 3, start: 14 } },
  ],
  6630: [
    { '2017-12-19 00:00:00': { duration: 6, start: 13 } },
    { '2017-12-20 00:00:00': { duration: 3, start: 16 } },
    { '2017-12-24 00:00:00': { duration: 5, start: 12 } },
    { '2017-12-25 00:00:00': { duration: 2, start: 3 } },
    { '2017-12-25 00:00:00': { duration: 7, start: 8 } },
    { '2017-12-25 00:00:00': { duration: 3, start: 14 } },
  ],
  1220: [
    { '2017-12-19 00:00:00': { duration: 6, start: 13 } },
    { '2017-12-20 00:00:00': { duration: 5, start: 0 } },
    { '2017-12-21 00:00:00': { duration: 3, start: 16 } },
    { '2017-12-22 00:00:00': { duration: 2, start: 16 } },
    { '2017-12-24 00:00:00': { duration: 8, start: 12 } },
    { '2017-12-25 00:00:00': { duration: 2, start: 3 } },
    { '2017-12-25 00:00:00': { duration: 5, start: 8 } },
    { '2017-12-25 00:00:00': { duration: 4, start: 13 } },
  ],
  3726: [
    { '2017-12-20 00:00:00': { duration: 3, start: 16 } },
    { '2017-12-21 05:00:00': { duration: 4, start: 14 } },
    { '2017-12-22 05:00:00': { duration: 4, start: 14 } },
    { '2017-12-24 00:00:00': { duration: 6, start: 12 } },
    { '2017-12-19 00:00:00': { duration: 6, start: 13 } },
    { '2017-12-25 00:00:00': { duration: 2, start: 3 } },
    { '2017-12-25 00:00:00': { duration: 5, start: 8 } },
    { '2017-12-25 00:00:00': { duration: 5, start: 15 } },
  ],
  7755: [
    { '2017-12-24 00:00:00': { duration: 3, start: 16 } },
    { '2017-12-19 00:00:00': { duration: 6, start: 13 } },
    { '2017-12-25 00:00:00': { duration: 2, start: 3 } },
    { '2017-12-25 00:00:00': { duration: 5, start: 8 } },
    { '2017-12-25 00:00:00': { duration: 4, start: 13 } },
    { '2017-12-21 00:00:00': { duration: 3, start: 0 } },
    { '2017-12-22 05:00:00': { duration: 4, start: 14 } },
    { '2017-12-24 00:00:00': { duration: 6, start: 12 } },
  ],
}

const allInstructorAvailabilityBlocksGroupedByDate = {
  '2017-12-19': {
    '26': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 26 },
    '27': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 27 },
    '28': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 28 },
    '29': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 29 },
    '30': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 30 },
    '31': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 31 },
    '32': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 32 },
    '33': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 33 },
    '34': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 34 },
    '35': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 35 },
    '36': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 36 },
    '37': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 37 }
  },
  '2017-12-20': {
    '0': { 'user_ids': ['1220', '4112', '7475'], 'start': 0 },
    '1': { 'user_ids': ['1220', '4112', '7475'], 'start': 1 },
    '2': { 'user_ids': ['1220', '4112', '7475'], 'start': 2 },
    '3': { 'user_ids': ['1220', '4112', '7475'], 'start': 3 },
    '4': { 'user_ids': ['1220', '7475'], 'start': 4 },
    '5': { 'user_ids': ['1220', '7475'], 'start': 5 },
    '6': { 'user_ids': ['1220', '7475'], 'start': 6 },
    '7': { 'user_ids': ['1220', '7475'], 'start': 7 },
    '8': { 'user_ids': ['1220'], 'start': 8 },
    '9': { 'user_ids': ['1220'], 'start': 9 },
    '28': { 'user_ids': ['4112'], 'start': 28 },
    '29': { 'user_ids': ['4112'], 'start': 29 },
    '30': { 'user_ids': ['4112'], 'start': 30 },
    '31': { 'user_ids': ['4112'], 'start': 31 },
    '32': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 32 },
    '33': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 33 },
    '34': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 34 },
    '35': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 35 },
    '36': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 36 },
    '37': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 37 },
    '38': { 'user_ids': ['7475'], 'start': 38 }
  },
  '2017-12-21': {
    '0': { 'user_ids': ['7755'], 'start': 0 },
    '1': { 'user_ids': ['7755'], 'start': 1 },
    '2': { 'user_ids': ['7755'], 'start': 2 },
    '3': { 'user_ids': ['7755'], 'start': 3 },
    '4': { 'user_ids': ['7755'], 'start': 4 },
    '5': { 'user_ids': ['7755'], 'start': 5 },
    '16': { 'user_ids': ['7475'], 'start': 16 },
    '17': { 'user_ids': ['7475'], 'start': 17 },
    '18': { 'user_ids': ['7475'], 'start': 18 },
    '19': { 'user_ids': ['7475'], 'start': 19 },
    '20': { 'user_ids': ['7475'], 'start': 20 },
    '21': { 'user_ids': ['7475'], 'start': 21 },
    '22': { 'user_ids': ['7475'], 'start': 22 },
    '23': { 'user_ids': ['7475'], 'start': 23 },
    '28': { 'user_ids': ['3726'], 'start': 28 },
    '29': { 'user_ids': ['3726'], 'start': 29 },
    '30': { 'user_ids': ['3726'], 'start': 30 },
    '31': { 'user_ids': ['3726'], 'start': 31 },
    '32': { 'user_ids': ['1220', '3726'], 'start': 32 },
    '33': { 'user_ids': ['1220', '3726'], 'start': 33 },
    '34': { 'user_ids': ['1220', '3726'], 'start': 34 },
    '35': { 'user_ids': ['1220', '3726'], 'start': 35 },
    '36': { 'user_ids': ['1220'], 'start': 36 },
    '37': { 'user_ids': ['1220'], 'start': 37 }
  },
  '2017-12-22': {
    '16': { 'user_ids': ['7475'], 'start': 16 },
    '17': { 'user_ids': ['7475'], 'start': 17 },
    '18': { 'user_ids': ['7475'], 'start': 18 },
    '19': { 'user_ids': ['7475'], 'start': 19 },
    '20': { 'user_ids': ['7475'], 'start': 20 },
    '21': { 'user_ids': ['7475'], 'start': 21 },
    '22': { 'user_ids': ['7475'], 'start': 22 },
    '23': { 'user_ids': ['7475'], 'start': 23 },
    '28': { 'user_ids': ['3726', '4112', '7755'], 'start': 28 },
    '29': { 'user_ids': ['3726', '4112', '7755'], 'start': 29 },
    '30': { 'user_ids': ['3726', '4112', '7755'], 'start': 30 },
    '31': { 'user_ids': ['3726', '4112', '7755'], 'start': 31 },
    '32': { 'user_ids': ['1220', '3726', '4112', '7755'], 'start': 32 },
    '33': { 'user_ids': ['1220', '3726', '4112', '7755'], 'start': 33 },
    '34': { 'user_ids': ['1220', '3726', '4112', '7755'], 'start': 34 },
    '35': { 'user_ids': ['1220', '3726', '4112', '7755'], 'start': 35 }
  },
  '2017-12-24': {
    '24': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 24 },
    '25': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 25 },
    '26': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 26 },
    '27': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 27 },
    '28': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 28 },
    '29': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 29 },
    '30': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 30 },
    '31': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 31 },
    '32': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 32 },
    '33': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 33 },
    '34': { 'user_ids': ['1220', '3726', '4112', '7755'], 'start': 34 },
    '35': { 'user_ids': ['1220', '3726', '4112', '7755'], 'start': 35 },
    '36': { 'user_ids': ['1220', '7755'], 'start': 36 },
    '37': { 'user_ids': ['1220', '7755'], 'start': 37 },
    '38': { 'user_ids': ['1220'], 'start': 38 },
    '39': { 'user_ids': ['1220'], 'start': 39 }
  },
  '2017-12-25': {
    '6': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 6 },
    '7': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 7 },
    '8': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 8 },
    '9': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 9 },
    '16': { 'user_ids': ['1220', '3726', '6630', '7475', '7755'], 'start': 16 },
    '17': { 'user_ids': ['1220', '3726', '6630', '7475', '7755'], 'start': 17 },
    '18': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 18 },
    '19': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 19 },
    '20': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 20 },
    '21': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 21 },
    '22': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 22 },
    '23': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 23 },
    '24': { 'user_ids': ['1220', '3726', '4112', '6630', '7755'], 'start': 24 },
    '25': { 'user_ids': ['1220', '3726', '4112', '6630', '7755'], 'start': 25 },
    '26': { 'user_ids': ['1220', '4112', '6630', '7755'], 'start': 26 },
    '27': { 'user_ids': ['1220', '4112', '6630', '7755'], 'start': 27 },
    '28': { 'user_ids': ['1220', '4112', '6630', '7475', '7755'], 'start': 28 },
    '29': { 'user_ids': ['1220', '4112', '6630', '7475', '7755'], 'start': 29 },
    '30': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 30 },
    '31': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 31 },
    '32': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 32 },
    '33': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 33 },
    '34': { 'user_ids': ['3726'], 'start': 34 },
    '35': { 'user_ids': ['3726'], 'start': 35 },
    '36': { 'user_ids': ['3726'], 'start': 36 },
    '37': { 'user_ids': ['3726'], 'start': 37 },
    '38': { 'user_ids': ['3726'], 'start': 38 },
    '39': { 'user_ids': ['3726'], 'start': 39 }
  }
}

const allUserAvailabilitiesForADate = {
  '2': { 'user_ids': ['1220', '4112', '7475'], 'start': 2 },
  '3': { 'user_ids': ['1220', '4112', '7475'], 'start': 3 },
  '4': { 'user_ids': ['1220', '7475'], 'start': 4 },
  '5': { 'user_ids': ['1220', '7475'], 'start': 5 },
  '6': { 'user_ids': ['1220', '7475'], 'start': 6 },
  '7': { 'user_ids': ['1220', '7475'], 'start': 7 },
  '8': { 'user_ids': ['1220'], 'start': 8 },
  '9': { 'user_ids': ['1220'], 'start': 9 },
  '28': { 'user_ids': ['4112'], 'start': 28 },
  '29': { 'user_ids': ['4112'], 'start': 29 },
  '30': { 'user_ids': ['4112'], 'start': 30 },
  '31': { 'user_ids': ['4112'], 'start': 31 },
  '32': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 32 },
  '33': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 33 },
  '34': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 34 },
  '35': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 35 },
  '36': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 36 },
  '37': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 37 },
  '38': { 'user_ids': ['7475'], 'start': 38 }
}

test('onlyInstructorsInTheFilterShouldReturnAvailabilityTimes', () => {
  const instructorIdsToFilter = [7475, 4112, 7755]

  // NOTE: The response will be sorted by the key. (eg: In this case, 4112 comes before 7475.)
  const expectedFilteredInstructorAvailability = {
    '4112': [
      { '2017-12-20 00:00:00': { 'duration': 3, 'start': 16 } },
      { '2017-12-20 00:00:00': { 'duration': 2, 'start': 0 } },
      { '2017-12-20 05:00:00': { 'duration': 4, 'start': 14 } },
      { '2017-12-22 05:00:00': { 'duration': 4, 'start': 14 } },
      { '2017-12-24 00:00:00': { 'duration': 6, 'start': 12 } },
      { '2017-12-19 00:00:00': { 'duration': 6, 'start': 13 } },
      { '2017-12-25 00:00:00': { 'duration': 2, 'start': 3 } },
      { '2017-12-25 00:00:00': { 'duration': 5, 'start': 9 } },
      { '2017-12-25 00:00:00': { 'duration': 3, 'start': 14 } }
    ],
    '7475': [
      { '2017-12-20 00:00:00': { 'duration': 3.5, 'start': 16 } },
      { '2017-12-20 00:00:00': { 'duration': 4, 'start': 0 } },
      { '2017-12-21 01:30:00': { 'duration': 4, 'start': 8 } },
      { '2017-12-22 01:30:00': { 'duration': 4, 'start': 8 } },
      { '2017-12-24 00:00:00': { 'duration': 5, 'start': 12 } },
      { '2017-12-19 00:00:00': { 'duration': 6, 'start': 13 } },
      { '2017-12-25 00:00:00': { 'duration': 2, 'start': 3 } },
      { '2017-12-25 00:00:00': { 'duration': 4, 'start': 8 } },
      { '2017-12-25 00:00:00': { 'duration': 3, 'start': 14 } }
    ],
    '7755': [
      { '2017-12-24 00:00:00': { 'duration': 3, 'start': 16 } },
      { '2017-12-19 00:00:00': { 'duration': 6, 'start': 13 } },
      { '2017-12-25 00:00:00': { 'duration': 2, 'start': 3 } },
      { '2017-12-25 00:00:00': { 'duration': 5, 'start': 8 } },
      { '2017-12-25 00:00:00': { 'duration': 4, 'start': 13 } },
      { '2017-12-21 00:00:00': { 'duration': 3, 'start': 0 } },
      { '2017-12-22 05:00:00': { 'duration': 4, 'start': 14 } },
      { '2017-12-24 00:00:00': { 'duration': 6, 'start': 12 } }
    ]
  }

  const filteredInstructorAvailability =
    availabilities.getInstructorAvailabilitiesFromAListOfInstructorIds(
      allInstructorAvailability,
      instructorIdsToFilter,
    )

  expect(
    filteredInstructorAvailability).toEqual(
    expectedFilteredInstructorAvailability)

})

// TODO: REFACTOR - Isolate the actual filter. Currently this works as a loop. - Chad
// TODO: Rename for what's being tested, not the function being called. - Chad
test('groupInstructorAvailabilitiesKeyedByDateAndStartTime', () => {
  const expectedGroupedInstructorAvailability = {
    '2017-12-19': {
      '26': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 26 },
      '27': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 27 },
      '28': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 28 },
      '29': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 29 },
      '30': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 30 },
      '31': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 31 },
      '32': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 32 },
      '33': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 33 },
      '34': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 34 },
      '35': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 35 },
      '36': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 36 },
      '37': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 37 }
    },
    '2017-12-20': {
      '0': { 'user_ids': ['1220', '4112', '7475'], 'start': 0 },
      '1': { 'user_ids': ['1220', '4112', '7475'], 'start': 1 },
      '2': { 'user_ids': ['1220', '4112', '7475'], 'start': 2 },
      '3': { 'user_ids': ['1220', '4112', '7475'], 'start': 3 },
      '4': { 'user_ids': ['1220', '7475'], 'start': 4 },
      '5': { 'user_ids': ['1220', '7475'], 'start': 5 },
      '6': { 'user_ids': ['1220', '7475'], 'start': 6 },
      '7': { 'user_ids': ['1220', '7475'], 'start': 7 },
      '8': { 'user_ids': ['1220'], 'start': 8 },
      '9': { 'user_ids': ['1220'], 'start': 9 },
      '28': { 'user_ids': ['4112'], 'start': 28 },
      '29': { 'user_ids': ['4112'], 'start': 29 },
      '30': { 'user_ids': ['4112'], 'start': 30 },
      '31': { 'user_ids': ['4112'], 'start': 31 },
      '32': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 32 },
      '33': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 33 },
      '34': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 34 },
      '35': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 35 },
      '36': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 36 },
      '37': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 37 },
      '38': { 'user_ids': ['7475'], 'start': 38 }
    },
    '2017-12-21': {
      '0': { 'user_ids': ['7755'], 'start': 0 },
      '1': { 'user_ids': ['7755'], 'start': 1 },
      '2': { 'user_ids': ['7755'], 'start': 2 },
      '3': { 'user_ids': ['7755'], 'start': 3 },
      '4': { 'user_ids': ['7755'], 'start': 4 },
      '5': { 'user_ids': ['7755'], 'start': 5 },
      '16': { 'user_ids': ['7475'], 'start': 16 },
      '17': { 'user_ids': ['7475'], 'start': 17 },
      '18': { 'user_ids': ['7475'], 'start': 18 },
      '19': { 'user_ids': ['7475'], 'start': 19 },
      '20': { 'user_ids': ['7475'], 'start': 20 },
      '21': { 'user_ids': ['7475'], 'start': 21 },
      '22': { 'user_ids': ['7475'], 'start': 22 },
      '23': { 'user_ids': ['7475'], 'start': 23 },
      '28': { 'user_ids': ['3726'], 'start': 28 },
      '29': { 'user_ids': ['3726'], 'start': 29 },
      '30': { 'user_ids': ['3726'], 'start': 30 },
      '31': { 'user_ids': ['3726'], 'start': 31 },
      '32': { 'user_ids': ['1220', '3726'], 'start': 32 },
      '33': { 'user_ids': ['1220', '3726'], 'start': 33 },
      '34': { 'user_ids': ['1220', '3726'], 'start': 34 },
      '35': { 'user_ids': ['1220', '3726'], 'start': 35 },
      '36': { 'user_ids': ['1220'], 'start': 36 },
      '37': { 'user_ids': ['1220'], 'start': 37 }
    },
    '2017-12-22': {
      '16': { 'user_ids': ['7475'], 'start': 16 },
      '17': { 'user_ids': ['7475'], 'start': 17 },
      '18': { 'user_ids': ['7475'], 'start': 18 },
      '19': { 'user_ids': ['7475'], 'start': 19 },
      '20': { 'user_ids': ['7475'], 'start': 20 },
      '21': { 'user_ids': ['7475'], 'start': 21 },
      '22': { 'user_ids': ['7475'], 'start': 22 },
      '23': { 'user_ids': ['7475'], 'start': 23 },
      '28': { 'user_ids': ['3726', '4112', '7755'], 'start': 28 },
      '29': { 'user_ids': ['3726', '4112', '7755'], 'start': 29 },
      '30': { 'user_ids': ['3726', '4112', '7755'], 'start': 30 },
      '31': { 'user_ids': ['3726', '4112', '7755'], 'start': 31 },
      '32': { 'user_ids': ['1220', '3726', '4112', '7755'], 'start': 32 },
      '33': { 'user_ids': ['1220', '3726', '4112', '7755'], 'start': 33 },
      '34': { 'user_ids': ['1220', '3726', '4112', '7755'], 'start': 34 },
      '35': { 'user_ids': ['1220', '3726', '4112', '7755'], 'start': 35 }
    },
    '2017-12-24': {
      '24': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 24 },
      '25': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 25 },
      '26': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 26 },
      '27': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 27 },
      '28': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 28 },
      '29': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 29 },
      '30': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 30 },
      '31': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 31 },
      '32': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 32 },
      '33': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 33 },
      '34': { 'user_ids': ['1220', '3726', '4112', '7755'], 'start': 34 },
      '35': { 'user_ids': ['1220', '3726', '4112', '7755'], 'start': 35 },
      '36': { 'user_ids': ['1220', '7755'], 'start': 36 },
      '37': { 'user_ids': ['1220', '7755'], 'start': 37 },
      '38': { 'user_ids': ['1220'], 'start': 38 },
      '39': { 'user_ids': ['1220'], 'start': 39 }
    },
    '2017-12-25': {
      '6': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 6 },
      '7': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 7 },
      '8': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 8 },
      '9': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 9 },
      '16': { 'user_ids': ['1220', '3726', '6630', '7475', '7755'], 'start': 16 },
      '17': { 'user_ids': ['1220', '3726', '6630', '7475', '7755'], 'start': 17 },
      '18': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 18 },
      '19': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 19 },
      '20': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 20 },
      '21': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 21 },
      '22': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 22 },
      '23': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 23 },
      '24': { 'user_ids': ['1220', '3726', '4112', '6630', '7755'], 'start': 24 },
      '25': { 'user_ids': ['1220', '3726', '4112', '6630', '7755'], 'start': 25 },
      '26': { 'user_ids': ['1220', '4112', '6630', '7755'], 'start': 26 },
      '27': { 'user_ids': ['1220', '4112', '6630', '7755'], 'start': 27 },
      '28': { 'user_ids': ['1220', '4112', '6630', '7475', '7755'], 'start': 28 },
      '29': { 'user_ids': ['1220', '4112', '6630', '7475', '7755'], 'start': 29 },
      '30': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 30 },
      '31': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 31 },
      '32': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 32 },
      '33': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 33 },
      '34': { 'user_ids': ['3726'], 'start': 34 },
      '35': { 'user_ids': ['3726'], 'start': 35 },
      '36': { 'user_ids': ['3726'], 'start': 36 },
      '37': { 'user_ids': ['3726'], 'start': 37 },
      '38': { 'user_ids': ['3726'], 'start': 38 },
      '39': { 'user_ids': ['3726'], 'start': 39 }
    }
  }

  const actualGroupedInstructorAvailability =
    availabilities.groupInstructorAvailabilitiesKeyedByDateAndStartTime(
      allInstructorAvailability
    )

  expect(
    actualGroupedInstructorAvailability).toEqual(
    expectedGroupedInstructorAvailability)
})

// TODO: Rename for what's being tested, not the function being called. - Chad
test('getOnlyTheBlocksWhichContainAllTheUsers', () => {
  const totalInstructorCount = ['3726', '4112', '6630', '7475'].length

  const expectedInstructorAvailabilityBlocks =
    {
      '32': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 32 },
      '33': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 33 },
      '34': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 34 },
      '35': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 35 },
      '36': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 36 },
      '37': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 37 },
    }

  const actualInstructorAvailabilityBlocks =
    availabilities.getOnlyTheBlocksWhichContainAllTheUsers(
      allUserAvailabilitiesForADate,
      totalInstructorCount
    )

  expect(
    actualInstructorAvailabilityBlocks).toEqual(
    expectedInstructorAvailabilityBlocks)

})

// TODO: Rename for what's being tested, not the function being called. - Chad
test('getOnlyTheBlocksWhichContainAllTheUsersAcrossMultipleDays', () => {
  const totalInstructorCount = allInstructorIds.length

  const expectedInstructorAvailabilityBlocks =
    {
      '2017-12-19': {
        '26': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 26 },
        '27': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 27 },
        '28': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 28 },
        '29': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 29 },
        '30': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 30 },
        '31': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 31 },
        '32': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 32 },
        '33': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 33 },
        '34': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 34 },
        '35': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 35 },
        '36': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 36 },
        '37': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 37 }
      },
      '2017-12-20': {},
      '2017-12-21': {},
      '2017-12-22': {},
      '2017-12-24': {
        '24': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 24 },
        '25': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 25 },
        '26': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 26 },
        '27': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 27 },
        '28': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 28 },
        '29': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 29 },
        '30': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 30 },
        '31': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 31 },
        '32': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 32 },
        '33': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 33 }
      },
      '2017-12-25': {
        '6': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 6 },
        '7': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 7 },
        '8': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 8 },
        '9': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 9 },
        '18': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 18 },
        '19': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 19 },
        '20': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 20 },
        '21': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 21 },
        '22': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 22 },
        '23': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 23 },
        '30': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 30 },
        '31': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 31 },
        '32': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 32 },
        '33': { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 33 }
      }
    }

  const actualInstructorAvailabilityBlocks = {}

  _.each(expectedInstructorAvailabilityBlocks, (blocksForDay, key) => {
    actualInstructorAvailabilityBlocks[key] =
      availabilities.getOnlyTheBlocksWhichContainAllTheUsers(blocksForDay, totalInstructorCount)
  })

  expect(
    actualInstructorAvailabilityBlocks).toEqual(
    expectedInstructorAvailabilityBlocks)

})

// TODO: REFACTOR - Isolate the actual filter. Currently this works as a loop. - Chad
// TODO: Rename for what's being tested, not the function being called. - Chad
test('getOnlyTheBlocksWhichContainExactlyAllTheUsersSortedByStart', () => {
  const expectedInstructorAvailabilityBlocks =
    {
      '2017-12-19': [
        { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 26 },
        { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 27 },
        { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 28 },
        { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 29 },
        { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 30 },
        { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 31 },
        { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 32 },
        { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 33 },
        { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 34 },
        { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 35 },
        { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 36 },
        { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 37 }
      ],
      '2017-12-20': [
        { 'user_ids': ['1220', '4112', '7475'], 'start': 0 },
        { 'user_ids': ['1220', '4112', '7475'], 'start': 1 },
        { 'user_ids': ['1220', '4112', '7475'], 'start': 2 },
        { 'user_ids': ['1220', '4112', '7475'], 'start': 3 },
        { 'user_ids': ['1220', '7475'], 'start': 4 },
        { 'user_ids': ['1220', '7475'], 'start': 5 },
        { 'user_ids': ['1220', '7475'], 'start': 6 },
        { 'user_ids': ['1220', '7475'], 'start': 7 },
        { 'user_ids': ['1220'], 'start': 8 },
        { 'user_ids': ['1220'], 'start': 9 },
        { 'user_ids': ['4112'], 'start': 28 },
        { 'user_ids': ['4112'], 'start': 29 },
        { 'user_ids': ['4112'], 'start': 30 },
        { 'user_ids': ['4112'], 'start': 31 },
        { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 32 },
        { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 33 },
        { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 34 },
        { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 35 },
        { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 36 },
        { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 37 },
        { 'user_ids': ['7475'], 'start': 38 }
      ],
      '2017-12-21': [
        { 'user_ids': ['7755'], 'start': 0 },
        { 'user_ids': ['7755'], 'start': 1 },
        { 'user_ids': ['7755'], 'start': 2 },
        {
          'user_ids': ['7755'],
          'start': 3
        },
        { 'user_ids': ['7755'],
          'start': 4 },
        {
          'user_ids': ['7755'],
          'start': 5
        },
        { 'user_ids': ['7475'], 'start': 16 },
        {
          'user_ids': ['7475'],
          'start': 17
        },
        { 'user_ids': ['7475'], 'start': 18 },
        {
          'user_ids': ['7475'],
          'start': 19
        },
        { 'user_ids': ['7475'], 'start': 20 },
        {
          'user_ids': ['7475'],
          'start': 21
        },
        { 'user_ids': ['7475'], 'start': 22 },
        {
          'user_ids': ['7475'],
          'start': 23
        },
        { 'user_ids': ['3726'], 'start': 28 },
        {
          'user_ids': ['3726'],
          'start': 29
        },
        { 'user_ids': ['3726'], 'start': 30 },
        {
          'user_ids': ['3726'], 'start': 31
        },
        { 'user_ids': ['1220', '3726'], 'start': 32 },
        {
          'user_ids': ['1220', '3726'],
          'start': 33
        },
        { 'user_ids': ['1220', '3726'], 'start': 34 },
        {
          'user_ids': ['1220', '3726'],
          'start': 35
        },
        { 'user_ids': ['1220'], 'start': 36 },
        { 'user_ids': ['1220'], 'start': 37 }
      ],
      '2017-12-22': [
        { 'user_ids': ['7475'], 'start': 16 }, {
          'user_ids': ['7475'],
          'start': 17
        }, { 'user_ids': ['7475'], 'start': 18 }, {
          'user_ids': ['7475'],
          'start': 19
        }, { 'user_ids': ['7475'], 'start': 20 }, {
          'user_ids': ['7475'],
          'start': 21
        }, { 'user_ids': ['7475'], 'start': 22 }, {
          'user_ids': ['7475'],
          'start': 23
        }, {
          'user_ids': ['3726', '4112', '7755'],
          'start': 28
        }, {
          'user_ids': ['3726', '4112', '7755'],
          'start': 29
        }, {
          'user_ids': ['3726', '4112', '7755'],
          'start': 30
        }, {
          'user_ids': ['3726', '4112', '7755'],
          'start': 31
        }, {
          'user_ids': ['1220', '3726', '4112', '7755'],
          'start': 32
        }, {
          'user_ids': ['1220', '3726', '4112', '7755'],
          'start': 33
        }, {
          'user_ids': ['1220', '3726', '4112', '7755'],
          'start': 34
        }, { 'user_ids': ['1220', '3726', '4112', '7755'], 'start': 35 }
      ],
      '2017-12-24': [
        { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 24
        }, { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 25
        }, { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 26
        }, { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 27
        }, { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 28
        }, { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 29
        }, { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 30
        }, { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 31
        }, { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 32
        }, { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 33
        }, { 'user_ids': ['1220', '3726', '4112', '7755'],
          'start': 34
        }, { 'user_ids': ['1220', '3726', '4112', '7755'],
          'start': 35
        }, { 'user_ids': ['1220', '7755'],
          'start': 36
        }, { 'user_ids': ['1220', '7755'],
          'start': 37
        }, { 'user_ids': ['1220'],
          'start': 38
        }, { 'user_ids': ['1220'],
          'start': 39
        }
      ],
      '2017-12-25': [
        {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 6
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 7
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 8
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 9
        }, {
          'user_ids': ['1220', '3726', '6630', '7475', '7755'],
          'start': 16
        }, {
          'user_ids': ['1220', '3726', '6630', '7475', '7755'],
          'start': 17
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 18
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 19
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 20
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 21
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 22
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 23
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7755'],
          'start': 24
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7755'],
          'start': 25
        }, {
          'user_ids': ['1220', '4112', '6630', '7755'],
          'start': 26
        }, {
          'user_ids': ['1220', '4112', '6630', '7755'],
          'start': 27
        }, {
          'user_ids': ['1220', '4112', '6630', '7475', '7755'],
          'start': 28
        }, {
          'user_ids': ['1220', '4112', '6630', '7475', '7755'],
          'start': 29
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 30
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 31
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 32
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 33
        }, { 'user_ids': ['3726'], 'start': 34 }, {
          'user_ids': ['3726'],
          'start': 35
        }, { 'user_ids': ['3726'], 'start': 36 }, {
          'user_ids': ['3726'],
          'start': 37
        }, { 'user_ids': ['3726'], 'start': 38 },
        { 'user_ids': ['3726'], 'start': 39 }
      ]
    }

  const actualInstructorAvailabilityBlocks =
    availabilities.getOnlyTheBlocksWhichContainExactlyAllTheUsersSortedByStart(
      allInstructorAvailabilityBlocksGroupedByDate
    )

  expect(expectedInstructorAvailabilityBlocks)
    .toEqual(actualInstructorAvailabilityBlocks)
})

// TODO: REFACTOR - Isolate the actual filter. Currently this works as a loop. - Chad
// TODO: Rename for what's being tested, not the function being called. - Chad
test('getBlocksClusteredForStartAndDuration', () => {
  const expectedAvailabilityBlocks =
    {
      '2017-12-19': {
        '26': {
          'start': 13,
          'duration': 6,
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755']
        }
      },
      '2017-12-20': {
        '0': { 'start': 0, 'duration': 5, 'user_ids': ['1220', '4112', '7475'] },
        '28': { 'start': 14, 'duration': 5.5, 'user_ids': ['4112'] }
      },
      '2017-12-21': {
        '0': { 'start': 0, 'duration': 3, 'user_ids': ['7755'] },
        '16': { 'start': 8, 'duration': 4, 'user_ids': ['7475'] },
        '28': { 'start': 14, 'duration': 5, 'user_ids': ['3726'] }
      },
      '2017-12-22': {
        '16': { 'start': 8, 'duration': 4, 'user_ids': ['7475'] },
        '28': { 'start': 14, 'duration': 4, 'user_ids': ['3726', '4112', '7755'] }
      },
      '2017-12-24': {
        '24': {
          'start': 12,
          'duration': 8,
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755']
        }
      },
      '2017-12-25': {
        '6': {
          'start': 3,
          'duration': 2,
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755']
        },
        '16': { 'start': 8, 'duration': 12, 'user_ids': ['1220', '3726', '6630', '7475', '7755'] }
      }
    }

  const actualAvailabilityBlocks =
    availabilities.getBlocksClusteredForStartAndDuration(
      allInstructorAvailabilityBlocksGroupedByDate
    )

  expect(
    actualAvailabilityBlocks).toEqual(
    expectedAvailabilityBlocks)

})

// TODO: REFACTOR - Isolate the actual filter. Currently this works as a loop. - Chad
// TODO: Rename for what's being tested, not the function being called. - Chad
test('getBlocksClusteredForStartAndDurationAndKeyedByDate', () => {
  const expectedAvailabiltyBlocks =
    {
      '2017-12-19': [
        {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 26
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 27
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 28
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 29
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 30
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 31
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 32
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 33
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 34
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 35
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 36
        }, { 'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'], 'start': 37 }
      ],
      '2017-12-20': [
        {
          'user_ids': ['1220', '4112', '7475'],
          'start': 0
        }, {
          'user_ids': ['1220', '4112', '7475'],
          'start': 1
        }, {
          'user_ids': ['1220', '4112', '7475'],
          'start': 2
        }, { 'user_ids': ['1220', '4112', '7475'], 'start': 3 }, {
          'user_ids': ['1220', '7475'],
          'start': 4
        }, { 'user_ids': ['1220', '7475'], 'start': 5 }, {
          'user_ids': ['1220', '7475'],
          'start': 6
        }, { 'user_ids': ['1220', '7475'], 'start': 7 }, {
          'user_ids': ['1220'],
          'start': 8
        }, { 'user_ids': ['1220'], 'start': 9 }, {
          'user_ids': ['4112'],
          'start': 28
        }, { 'user_ids': ['4112'], 'start': 29 }, {
          'user_ids': ['4112'],
          'start': 30
        }, { 'user_ids': ['4112'], 'start': 31 }, {
          'user_ids': ['3726', '4112', '6630', '7475'],
          'start': 32
        }, {
          'user_ids': ['3726', '4112', '6630', '7475'],
          'start': 33
        }, {
          'user_ids': ['3726', '4112', '6630', '7475'],
          'start': 34
        }, {
          'user_ids': ['3726', '4112', '6630', '7475'],
          'start': 35
        }, {
          'user_ids': ['3726', '4112', '6630', '7475'],
          'start': 36
        }, { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 37 }, {
          'user_ids': ['7475'],
          'start': 38
        }
      ],
      '2017-12-21': [
        { 'user_ids': ['7755'], 'start': 0 }, {
          'user_ids': ['7755'],
          'start': 1
        }, { 'user_ids': ['7755'], 'start': 2 }, {
          'user_ids': ['7755'],
          'start': 3
        }, { 'user_ids': ['7755'], 'start': 4 }, {
          'user_ids': ['7755'],
          'start': 5
        }, { 'user_ids': ['7475'], 'start': 16 }, {
          'user_ids': ['7475'],
          'start': 17
        }, { 'user_ids': ['7475'], 'start': 18 }, {
          'user_ids': ['7475'],
          'start': 19
        }, { 'user_ids': ['7475'], 'start': 20 }, {
          'user_ids': ['7475'],
          'start': 21
        }, { 'user_ids': ['7475'], 'start': 22 }, {
          'user_ids': ['7475'],
          'start': 23
        }, { 'user_ids': ['3726'], 'start': 28 }, {
          'user_ids': ['3726'],
          'start': 29
        }, { 'user_ids': ['3726'], 'start': 30 }, {
          'user_ids': ['3726'],
          'start': 31
        }, { 'user_ids': ['1220', '3726'], 'start': 32 }, {
          'user_ids': ['1220', '3726'],
          'start': 33
        }, { 'user_ids': ['1220', '3726'], 'start': 34 }, {
          'user_ids': ['1220', '3726'],
          'start': 35
        }, { 'user_ids': ['1220'], 'start': 36 }, { 'user_ids': ['1220'], 'start': 37 }
      ],
      '2017-12-22': [
        { 'user_ids': ['7475'], 'start': 16 }, {
          'user_ids': ['7475'],
          'start': 17
        }, { 'user_ids': ['7475'], 'start': 18 }, {
          'user_ids': ['7475'],
          'start': 19
        }, { 'user_ids': ['7475'], 'start': 20 }, {
          'user_ids': ['7475'],
          'start': 21
        }, { 'user_ids': ['7475'], 'start': 22 }, {
          'user_ids': ['7475'],
          'start': 23
        }, {
          'user_ids': ['3726', '4112', '7755'],
          'start': 28
        }, {
          'user_ids': ['3726', '4112', '7755'],
          'start': 29
        }, {
          'user_ids': ['3726', '4112', '7755'],
          'start': 30
        }, {
          'user_ids': ['3726', '4112', '7755'],
          'start': 31
        }, {
          'user_ids': ['1220', '3726', '4112', '7755'],
          'start': 32
        }, {
          'user_ids': ['1220', '3726', '4112', '7755'],
          'start': 33
        }, {
          'user_ids': ['1220', '3726', '4112', '7755'],
          'start': 34
        }, { 'user_ids': ['1220', '3726', '4112', '7755'], 'start': 35 }
      ],
      '2017-12-24': [
        {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 24
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 25
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 26
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 27
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 28
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 29
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 30
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 31
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 32
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 33
        }, {
          'user_ids': ['1220', '3726', '4112', '7755'],
          'start': 34
        }, {
          'user_ids': ['1220', '3726', '4112', '7755'],
          'start': 35
        }, { 'user_ids': ['1220', '7755'], 'start': 36 }, {
          'user_ids': ['1220', '7755'],
          'start': 37
        }, { 'user_ids': ['1220'], 'start': 38 }, { 'user_ids': ['1220'], 'start': 39 }
      ],
      '2017-12-25': [
        {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 6
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 7
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 8
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 9
        }, {
          'user_ids': ['1220', '3726', '6630', '7475', '7755'],
          'start': 16
        }, {
          'user_ids': ['1220', '3726', '6630', '7475', '7755'],
          'start': 17
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 18
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 19
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 20
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 21
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 22
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 23
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7755'],
          'start': 24
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7755'],
          'start': 25
        }, {
          'user_ids': ['1220', '4112', '6630', '7755'],
          'start': 26
        }, {
          'user_ids': ['1220', '4112', '6630', '7755'],
          'start': 27
        }, {
          'user_ids': ['1220', '4112', '6630', '7475', '7755'],
          'start': 28
        }, {
          'user_ids': ['1220', '4112', '6630', '7475', '7755'],
          'start': 29
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 30
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 31
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 32
        }, {
          'user_ids': ['1220', '3726', '4112', '6630', '7475', '7755'],
          'start': 33
        }, { 'user_ids': ['3726'], 'start': 34 }, {
          'user_ids': ['3726'],
          'start': 35
        }, { 'user_ids': ['3726'], 'start': 36 }, {
          'user_ids': ['3726'],
          'start': 37
        }, { 'user_ids': ['3726'], 'start': 38 }, { 'user_ids': ['3726'], 'start': 39 }]
    }

  const actualAvailabilityBlocks =
    availabilities.getBlocksClusteredForStartAndDurationAndKeyedByDate(
      allInstructorAvailabilityBlocksGroupedByDate
    )

  expect(
    actualAvailabilityBlocks).toEqual(
    expectedAvailabiltyBlocks)

})

test('onlyUserAvailabilitiesForASingleDateShouldBeReturned', () => {
  const expectedUserAvailabilitiesForADate =
    {
      '0': { 'user_ids': ['1220', '4112', '7475'], 'start': 0 },
      '1': { 'user_ids': ['1220', '4112', '7475'], 'start': 1 },
      '2': { 'user_ids': ['1220', '4112', '7475'], 'start': 2 },
      '3': { 'user_ids': ['1220', '4112', '7475'], 'start': 3 },
      '4': { 'user_ids': ['1220', '7475'], 'start': 4 },
      '5': { 'user_ids': ['1220', '7475'], 'start': 5 },
      '6': { 'user_ids': ['1220', '7475'], 'start': 6 },
      '7': { 'user_ids': ['1220', '7475'], 'start': 7 },
      '8': { 'user_ids': ['1220'], 'start': 8 },
      '9': { 'user_ids': ['1220'], 'start': 9 },
      '28': { 'user_ids': ['4112'], 'start': 28 },
      '29': { 'user_ids': ['4112'], 'start': 29 },
      '30': { 'user_ids': ['4112'], 'start': 30 },
      '31': { 'user_ids': ['4112'], 'start': 31 },
      '32': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 32 },
      '33': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 33 },
      '34': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 34 },
      '35': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 35 },
      '36': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 36 },
      '37': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 37 },
      '38': { 'user_ids': ['7475'], 'start': 38 }
    }

  const actualUserAvailabilitiesForADate =
    availabilities.getAllInstructorAvailabilitiesForADate(
      allInstructorAvailabilityBlocksGroupedByDate,
      '2017-12-20',
    )

  expect(actualUserAvailabilitiesForADate)
    .toEqual(expectedUserAvailabilitiesForADate)
})

test('onlyUsersAvailableBetweenAStartTimeAndDurationShouldReturnAvailabilityTimes', () => {
  const expectedUserAvailabilitiesWithinARange =
    {
      '2': { 'user_ids': ['1220', '4112', '7475'], 'start': 2 },
      '3': { 'user_ids': ['1220', '4112', '7475'], 'start': 3 },
      '4': { 'user_ids': ['1220', '7475'], 'start': 4 },
      '5': { 'user_ids': ['1220', '7475'], 'start': 5 },
      '6': { 'user_ids': ['1220', '7475'], 'start': 6 },
      '7': { 'user_ids': ['1220', '7475'], 'start': 7 },
      '8': { 'user_ids': ['1220'], 'start': 8 },
      '9': { 'user_ids': ['1220'], 'start': 9 },
      '28': { 'user_ids': ['4112'], 'start': 28 },
      '29': { 'user_ids': ['4112'], 'start': 29 },
      '30': { 'user_ids': ['4112'], 'start': 30 },
      '31': { 'user_ids': ['4112'], 'start': 31 },
      '32': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 32 },
      '33': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 33 },
    }

  const actualUserAvailabilitiesWithinARange =
    availabilities.filterBlocksWithinATimeRange(allUserAvailabilitiesForADate, 2, 31)

  expect(
    actualUserAvailabilitiesWithinARange)
    .toEqual(expectedUserAvailabilitiesWithinARange)
})

test('onlyUsersAvailableForAStartTimeAndDurationShouldReturnAvailabilityTimes', () => {
  const instructorCount = ['3726', '4112', '6630', '7475'].length

  const expectedUserAvailabilitiesWithinARange =
    {
      '32': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 32 },
      '33': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 33 },
    }

  const userAvailabilitiesWithinARange =
    availabilities.filterBlocksForATimeRange(allUserAvailabilitiesForADate, 2, 31)

  const actualUserAvailabilitiesForAnEntireRange =
    availabilities.getOnlyTheBlocksWhichContainAllTheUsers(
      userAvailabilitiesWithinARange,
      instructorCount,
    )

  expect(
    actualUserAvailabilitiesForAnEntireRange)
    .toEqual(expectedUserAvailabilitiesWithinARange)
})

test('returnAnyUsersIfTheFilterStartsInsideTheTimeRange', () => {
  const sortedUsersAvailableForADate = filters.sortBlocks(allUserAvailabilitiesForADate)

  const expectedState = true
  const actualState = filters
    .isThisFilterWithinTheOriginalDataSet(
      sortedUsersAvailableForADate,
      2,
      1,
    )

  expect(
    actualState).toEqual(
    expectedState)

})

test('returnAnyUsersIfTheFilterEndsInsideTheTimeRange', () => {
  const sortedUsersAvailableForADate = filters.sortBlocks(allUserAvailabilitiesForADate)

  const expectedState = true
  const actualState = filters
    .isThisFilterWithinTheOriginalDataSet(
      sortedUsersAvailableForADate,
      2,
      36,
    )

  expect(
    actualState).toEqual(
    expectedState)

})

test('doNotReturnAnyUsersIfTheFilterIsGreaterThanTheTimeRange', () => {
  const sortedUsersAvailableForADate = filters.sortBlocks(allUserAvailabilitiesForADate)

  const expectedState = false
  const actualState = filters
    .isThisFilterWithinTheOriginalDataSet(
      sortedUsersAvailableForADate,
      2,
      39,
    )

  expect(
    actualState).toEqual(
    expectedState)

})

test('doNotReturnAnyUsersIfTheFilterIsLessThanTheStartTime', () => {
  const sortedUsersAvailableForADate = filters.sortBlocks(allUserAvailabilitiesForADate)

  const expectedState = false
  const actualState = filters
    .isThisFilterWithinTheOriginalDataSet(
      sortedUsersAvailableForADate,
      0,
      31,
    )

  expect(
    actualState).toEqual(
    expectedState)

})

test('returnContiguousTimeBlocksForUsersInADay', () => {
  const userAvailabilitiesForADate =
    {
      '1': { 'user_ids': ['1220', '4112', '7475'], 'start': 1 },
      '2': { 'user_ids': ['1220', '4112', '7475'], 'start': 2 },
      '3': { 'user_ids': ['1220', '4112', '7475'], 'start': 3 },
      '4': { 'user_ids': ['1220', '7475'], 'start': 4 },
      '5': { 'user_ids': ['1220', '7475'], 'start': 5 },
      '6': { 'user_ids': ['1220', '7475'], 'start': 6 },
      '7': { 'user_ids': ['1220', '7475'], 'start': 7 },
      '8': { 'user_ids': ['1220'], 'start': 8 },
      '9': { 'user_ids': ['1220'], 'start': 9 },
      '28': { 'user_ids': ['4112'], 'start': 28 },
      '29': { 'user_ids': ['4112'], 'start': 29 },
      '30': { 'user_ids': ['4112'], 'start': 30 },
      '31': { 'user_ids': ['4112'], 'start': 31 },
      '32': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 32 },
      '33': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 33 },
      '34': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 34 },
      '35': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 35 },
      '36': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 36 },
      '37': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 37 },
      '38': { 'user_ids': ['7475'], 'start': 38 }
    }

  const expectedContiguousTimeBlocks = {
    '1': {
      start: 1,
      end: 9,
      duration: 9,
      timeBlocks: {
        '1': { 'user_ids': ['1220', '4112', '7475'], 'start': 1 },
        '2': { 'user_ids': ['1220', '4112', '7475'], 'start': 2 },
        '3': { 'user_ids': ['1220', '4112', '7475'], 'start': 3 },
        '4': { 'user_ids': ['1220', '7475'], 'start': 4 },
        '5': { 'user_ids': ['1220', '7475'], 'start': 5 },
        '6': { 'user_ids': ['1220', '7475'], 'start': 6 },
        '7': { 'user_ids': ['1220', '7475'], 'start': 7 },
        '8': { 'user_ids': ['1220'], 'start': 8 },
        '9': { 'user_ids': ['1220'], 'start': 9 },
      }
    },
    '28': {
      start: 28,
      end: 38,
      duration: 11,
      timeBlocks: {
        '28': { 'user_ids': ['4112'], 'start': 28 },
        '29': { 'user_ids': ['4112'], 'start': 29 },
        '30': { 'user_ids': ['4112'], 'start': 30 },
        '31': { 'user_ids': ['4112'], 'start': 31 },
        '32': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 32 },
        '33': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 33 },
        '34': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 34 },
        '35': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 35 },
        '36': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 36 },
        '37': { 'user_ids': ['3726', '4112', '6630', '7475'], 'start': 37 },
        '38': { 'user_ids': ['7475'], 'start': 38 },
      },
    }
  }

  const actualContiguousTimeBlocks = filters.groupInstructorsForADayByContiguousTime(
    userAvailabilitiesForADate
  )

  expect(
    actualContiguousTimeBlocks).toEqual(
    expectedContiguousTimeBlocks)

})