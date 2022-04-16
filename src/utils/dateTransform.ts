/* eslint-disable @typescript-eslint/no-unused-vars */

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

type CompareDatesProps = {
  start_date: Date
  end_date: Date
  unit:
    | 'day'
    | 'week'
    | 'month'
    | 'year'
    | 'hour'
    | 'minute'
    | 'second'
    | 'millisecond'
}

type AddSubtractProps = {
  time: number
  unit:
    | 'day'
    | 'week'
    | 'month'
    | 'year'
    | 'hour'
    | 'minute'
    | 'second'
    | 'millisecond'
  date?: string | number | Date | null
}

type ConvertProps = {
  date: Date
}

type FormatProps = {
  date: string | Date
  format: string
}

const dateTransform = {
  dateNow: (): Date => dayjs().toDate(),

  format: ({ date, format }: FormatProps): string => dayjs(date).format(format),

  convertToUTC: ({ date }: ConvertProps): string =>
    dayjs(date).utc().local().format(),

  addTime: ({ time, unit, date = null }: AddSubtractProps): Date =>
    date
      ? dayjs(date).add(time, unit).toDate()
      : dayjs().add(time, unit).toDate(),

  subtractTime: ({ time, unit, date = null }: AddSubtractProps): Date =>
    date
      ? dayjs(date).subtract(time, unit).toDate()
      : dayjs().subtract(time, unit).toDate(),

  compareDates: ({ start_date, end_date, unit }: CompareDatesProps): number => {
    const start_date_utc = dateTransform.convertToUTC({ date: start_date })
    const end_date_utc = dateTransform.convertToUTC({ date: end_date })

    return dayjs(end_date_utc).diff(start_date_utc, unit)
  }
}

export default dateTransform
