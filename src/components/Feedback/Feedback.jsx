import css from "./Feedback.module.css"

export default function ({total, positiveFeedback, }) {
    return (
        <ul className={css.feedback_list}>
            <li className={css.feedback_item}>
                <span>Good: {good}</span>
            </li>
            <li className={css.feedback_item}>
                <span>Neutral: {neutral}</span>
            </li>
            <li className={css.feedback_item}>
                <span>Bad: {bad}</span>
            </li>
            <li className={css.feedback_item}>
                <span>Total: {total}</span>
            </li>
            <li className={css.feedback_item}>
                <span>Positive: {positiveFeedback}%</span>
            </li>
        </ul>
    );
};