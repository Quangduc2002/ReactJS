import { useForm } from "react-hook-form";
import clsx from "clsx";
import styles from "./Contact.module.css";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={clsx(styles.content)}>
      <div id={styles.contact}>
        <div className={clsx(styles.about__title, styles.title)}>
          <h1>
            GET <span>IN TOUCH</span>
          </h1>
          <p>
            I'M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS.
          </p>
        </div>
        <div className={clsx(styles.container)}>
          <div className={clsx(styles.left, styles.c_3, styles.m_12)}>
            <ul className={clsx(styles.ul)}>
              <li className={clsx(styles.li)}>
                <p>Phone</p>
                <div className={clsx(styles.content)}>
                  <i className={clsx("fa-brands fa-whatsapp")} />
                  <span>0965420922</span>
                </div>
              </li>
              <li className={clsx(styles.li)}>
                <p>Email</p>
                <div className={clsx(styles.content)}>
                  <i className={clsx("fa-brands fa-whatsapp")} />
                  <span>phamquangduc110@gmail.com</span>
                </div>
              </li>
              <li className={clsx(styles.li)}>
                <p>Instagram</p>
                <div className={clsx(styles.content)}>
                  <i className={clsx("ti-instagram")} />
                  <span>Duc.202</span>
                </div>
              </li>
              <li className={clsx(styles.li)}>
                <p className="contact__li-title">Social Profiles</p>
                <div className={clsx(styles.content)}>
                  <a
                    className={clsx(styles.content_link)}
                    href="https://www.facebook.com/cau.chu.54922169/"
                  >
                    <i className={clsx("ti-facebook", styles.Profiles)} />
                  </a>
                  <a className={clsx(styles.content_link)} href="#contact">
                    <i className={clsx("ti-twitter-alt", styles.Profiles)} />
                  </a>
                  <a
                    className={clsx(styles.content_link)}
                    href="https://github.com/Quangduc2002"
                  >
                    <i
                      className={clsx("fa-brands fa-github", styles.Profiles)}
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div
            className={clsx(styles.form, styles.c_9, styles.m_12, styles.s_12)}
          >
            <p className={clsx(styles.form_title)}>
              If you have any suggestion, project or even you want to say
              Hello... please fill out the form below and I will reply you
              shortly.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={clsx(styles.auth__form)}
              id={clsx("form")}
            >
              <div className={clsx(styles.auth_form__froup)}>
                <div
                  className={clsx(
                    styles.auth_form__froup1,
                    styles.c_5,
                    styles.s_12
                  )}
                >
                  <i
                    className={clsx(styles.auth_form__icon, "fa-solid fa-user")}
                  />
                  <input
                    id="name"
                    name="name"
                    className="auth-form__input"
                    type="text"
                    placeholder="YOUR NAME"
                    {...register("name", { required: true })}
                  />
                  {Object.keys(errors).length !== 0 && (
                    <div>
                      {errors.name?.type === "required" && (
                        <p className={clsx(styles.form_message)}>
                          Please enter the fullname !
                        </p>
                      )}
                    </div>
                  )}
                </div>
                <div
                  className={clsx(
                    styles.auth_form__froup1,
                    styles.c_5,
                    styles.s_12
                  )}
                >
                  <i className={clsx(styles.auth_form__icon, "ti-email")} />
                  <input
                    id="email"
                    name="email"
                    className="auth-form__input"
                    type="text"
                    placeholder="YOUR EMAIL"
                    {...register("email", {
                      required: true,
                      pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                    })}
                  />
                  {Object.keys(errors).length !== 0 && (
                    <div>
                      {errors.email?.type === "required" && (
                        <p className={clsx(styles.form_message)}>
                          Please enter Email !
                        </p>
                      )}
                      {errors.email?.type === "pattern" && (
                        <p className={clsx(styles.form_message)}>
                          Please enter correct email format !
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className={clsx(styles.auth_form__froup1)}>
                <i
                  className={clsx(
                    styles.comments,
                    styles.fa_solid,
                    "fa-solid fa-comments"
                  )}
                />
                <textarea
                  id="comment"
                  name="comment"
                  className={clsx(styles.form_control)}
                  rows={7}
                  placeholder="YOUR MESSAGE"
                  defaultValue={""}
                  {...register("comment", { required: true })}
                />
                {Object.keys(errors).length !== 0 && (
                  <div>
                    {errors.comment?.type === "required" && (
                      <p className={clsx(styles.form_message)}>
                        Message is required !
                      </p>
                    )}
                  </div>
                )}
              </div>
              <div>
                <button className={clsx(styles.link)}>
                  <i
                    className={clsx(styles.solid, "fa-solid fa-paper-plane")}
                  />
                  <span style={{ color: "#fff" }}> Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
