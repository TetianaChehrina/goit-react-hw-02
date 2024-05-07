import css from "./Options.module.css";

export default function Options() {
    return (
        <ul className={css.options_list}>
      <li className={css.options_item}>
        <button
          className={css.options_btn}> onClick={}
          Good
        </button>
      </li>
      <li className={css.options_item}>
        <button
          className={css.options_btn} onClick={}
        >
          Neutral
        </button>
      </li>
      <li className={css.options_item}>
        <button
          className={css.options_btn} onClick={}
        >
          Bad
        </button>
      </li>
        <li className={css.options_item}>
          <button className={css.options_btn} onClick={}>
            Reset
          </button>
        </li>
    </ul>
    );
};