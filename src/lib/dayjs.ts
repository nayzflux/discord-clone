import dayjs from "dayjs";
import calendar from 'dayjs/plugin/calendar'

dayjs.extend(calendar)

export const formatMessageTimestamp = (timestamp: string) => {
    return dayjs(new Date(timestamp)).calendar();
}