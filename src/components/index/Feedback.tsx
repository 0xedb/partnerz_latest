import style from "./css/feedback.module.css";

const Comment = ({ text, pic }: FComment) => (
  <>
    <p>"{text}"</p>
    <img src={pic} alt="commentor" className={style.commentor} />
  </>
);

const Feedback = () => {
  return (
    <section className={style.feedback}>
      <Comment
        pic="/images/doctor.jpg"
        text={`Everyday, countless number of people walk into the hospital and entrust
    their lives in my hands. It's a huge responsibility. The interesting thing
    is, everyday, I wake up and entrust my financial future in the hands of
    Partnerz Ltd. They seem to understand with uncommon insight, how important
    it is to be a dependable and trusted provider of financial planning
    services. In the two years I have been with the firm, they have shown
    unbridled commitment to seeing me grow financially. I have recommended them
    to numerous colleagues who sing the same song. People trust me with their
    lives, and I, trust Partnerz Ltd with mine. There's no better place to put
    your financial future!`}
      />
    </section>
  );
};

export default Feedback;
