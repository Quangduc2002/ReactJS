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
    <div className="content ">
      <div id="contact">
        <div className="about__title contact__title">
          <h1>
            GET <span>IN TOUCH</span>
          </h1>
          <p>
            I'M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS.
          </p>
        </div>
        <div className={clsx(styles.container)}>
          <div className={clsx(styles.left, "c-3 m-12")}>
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
          <div className={clsx(styles.form, "c-9 m-12 s-12")}>
            <p className={clsx(styles.form_title)}>
              If you have any suggestion, project or even you want to say
              Hello... please fill out the form below and I will reply you
              shortly.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={clsx("auth__form")}
              id={clsx("form")}
            >
              <div className="auth-form__froup">
                <div className="auth-form__froup1 c-5 s-12">
                  <i className="fa-solid fa-user auth-form-icon" />
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
                <div className="auth-form__froup1 c-5 s-12">
                  <i className="ti-email auth-form-icon" />
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
              <div className="auth-form__froup1">
                <i className="fa-solid fa-comments comments" />
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
                  <i className={clsx("fa-solid fa-paper-plane")} />
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
