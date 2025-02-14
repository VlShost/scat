import CallbackForm from '../CallbackForm';
import css from './Callback.module.scss';

const Callback = () => {
  return (
    <section id="callback" className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>
          Заповніть коротку форму і ми зв’яжемося з Вами для відповіді на будь-які питання
        </h2>
        <CallbackForm />
      </div>
    </section>
  );
};

export default Callback;
