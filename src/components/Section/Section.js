import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions"
import { Statistics } from "../Statistics/Statistics"
import { Title } from "./Section.styled"

export const Section = ({ title, stats, total, positiveFeedback, onLeaveFeedback }) => {
    return (
        <div>
        <Title>{title}</Title>
        {title === "Please leave feedback" 
        ? <FeedbackOptions options={["Good", "Neutral", "Bad"]} onLeaveFeedback={onLeaveFeedback}></FeedbackOptions> 
        : <Statistics stats={stats} total={total} positiveFeedback={positiveFeedback}></Statistics>}
        </div>
    )
}