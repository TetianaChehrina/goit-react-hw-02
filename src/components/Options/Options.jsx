import css from "./Options.module.css";

export default function Options({
  updateFeedback,
  handleReset,
  totalFeedback,
}) {
  return (
    <ul className={css.options_list}>
      <li className={css.options_item}>
        <button
          className={css.options_btn}
          onClick={() => updateFeedback("good")}
        >
          Good
        </button>
      </li>
      <li className={css.options_item}>
        <button
          className={css.options_btn}
          onClick={() => updateFeedback("neutral")}
        >
          Neutral
        </button>
      </li>
      <li className={css.options_item}>
        <button
          className={css.options_btn}
          onClick={() => updateFeedback("bad")}
        >
          Bad
        </button>
      </li>
      {totalFeedback > 0 && (
        <li className={css.options_item}>
          <button className={css.options_btn} onClick={handleReset}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}
