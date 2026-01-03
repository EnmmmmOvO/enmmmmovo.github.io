"use client";
import { type ContactForm, contactSchema } from "@/schemas/contact";
import { useForm as useHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimatedButton from "@/components/animation/AnimatedButton";
import { useTranslations } from "next-intl";


export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useHookForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  // Formspree submit hook
  const [fsState, fsSubmit] = useForm<ContactForm>("xregrlwk");
  const t = useTranslations("contact");

  const onSubmit = async (data: ContactForm) => {
    try {
      await fsSubmit(data); // submit to Formspree
      reset(); // reset form fields
      toast.success(t("messageSent"));
    } catch {
      toast.error(t("submitFailed"));
    }
  };

  return (
    <>
      <div className="mxd-section mxd-section-inner-form padding-default">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-2 mxd-grid-item no-margin" />
                <div className="col-12 col-xl-8">
                  <div className="mxd-block__content contact">
                    <div className="mxd-block__inner-form loading__fade">
                      <div className="form-container">
                        {/* Reply Messages */}
                        <div className="form__reply centered text-center">
                          <i className="ph-fill ph-smiley-wink reply__icon" />
                          <p className="reply__title">{t("done")}</p>
                          <span className="reply__text">
                            {t("thanks")}
                          </span>
                        </div>
                        {/* Contact Form */}
                        <form
                          className="form contact-form"
                          id="contact-form"
                          onSubmit={handleSubmit(onSubmit)}
                        >
                          {/* Hidden Required Fields */}
                          <input
                            type="hidden"
                            name="admin_email"
                            defaultValue="support@mixdesign.dev"
                          />
                          {/* Visible Fields */}
                          <div className="container-fluid p-0">
                            <div className="row gx-0">
                              <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                <input
                                  type="text"
                                  placeholder={t("yourName")}
                                  {...register("Name")}
                                />
                                {errors.Name && (
                                  <p className="error-message">
                                    {errors.Name.message && t(errors.Name.message)}
                                  </p>
                                )}
                              </div>
                              <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                <input
                                  type="email"
                                  placeholder={t("email")}
                                  {...register("E-mail")}
                                />
                                {errors["E-mail"] && (
                                  <p className="error-message">
                                    {errors["E-mail"].message && t(errors["E-mail"].message)}
                                  </p>
                                )}
                              </div>
                              <div className="col-12 mxd-grid-item anim-uni-in-up">
                                <textarea
                                  placeholder={t("content")}
                                  {...register("Message")}
                                />
                                {errors.Message && (
                                  <p className="error-message">
                                    {errors.Message.message && t(errors.Message.message)}
                                  </p>
                                )}
                              </div>
                              <div className="col-12 mxd-grid-item anim-uni-in-up">
                                <AnimatedButton
                                  text={t("submit")}
                                  position={"next"}
                                  as={"button"}
                                  className="btn btn-anim btn-default btn-large btn-opposite slide-right-up"
                                  type="submit"
                                  disabled={isSubmitting || fsState.submitting}
                                >
                                  <i className="ph-bold ph-arrow-up-right" />
                                </AnimatedButton>
                              </div>
                            </div>
                          </div>
                        </form>
                        {/* End Contact Form */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
}
