import { parseISO , formatDistanceToNow } from "date-fns"

const TimeAgo = ({time}) => {
    let timeAgo = ""
    if(time){
        const date = formatDistanceToNow(parseISO(time))
        timeAgo = `${date} ago.`
    }

    return <p className="text-end"><i>{timeAgo}</i></p>
}

export default TimeAgo