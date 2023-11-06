import { Notification } from "../Notification/Notification"
import { StatsWrap } from "./Statistics.styled"

export const Statistics = ({ stats: { good, neutral, bad }, total, positiveFeedback }) => {
    if (total > 0) {
        return (
            <StatsWrap>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positiveFeedback}%</p>
            </StatsWrap>
        )
    }
    return (<Notification message="There is no feedback"></Notification>)
}