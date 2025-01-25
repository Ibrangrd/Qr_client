import { useContext } from "react";
import { ThemeContext } from "../../App";
import { faq } from "../../utils";
const FAQ = () => {
  const theme = useContext(ThemeContext);

  return (
    <div data-theme={theme}>
      <div className="md:w-1/2 w-10/12 mx-auto py-10">
        {faq.map((q) => (
          <div key={q.id} className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">{q?.ques}</div>
            <div className="collapse-content">
              <p>{q?.ans}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
