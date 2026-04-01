import {
  resetPassword,
  sendResetPasswordOtp,
  type ForgotPasswordParams,
  type ResetPasswordParams,
} from "@/api/auth.api";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Spinner } from "@/components/ui/spinner";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useState } from "react";
import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type Step = "email" | "reset";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState<Step>("email");
  const [submittedEmail, setSetsubmittedEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register: registerEmail,
    handleSubmit: handleEmailSubmit,
    formState: { isValid: isEmailValid, errors: emailErrors },
    setError: setEmailError,
  } = useForm<ForgotPasswordParams>();

  const {
    register: registerReset,
    handleSubmit: handleResetSubmit,
    formState: { isValid: isResetValid, errors: resetErrors },
    setError: setResetError,
    control,
  } = useForm<ResetPasswordParams>();

  const onEmailSubmit: SubmitHandler<ForgotPasswordParams> = async (
    data: ForgotPasswordParams,
  ) => {
    setLoading(true);
    try {
      const res = await sendResetPasswordOtp(data);

      if (!res.success) {
        const message = res.error?.message ?? res.message;

        if (message.toLocaleLowerCase().includes("email")) {
          setEmailError("email", {
            type: "server",
            message,
          });
        } else {
          setEmailError("root", {
            type: "server",
            message,
          });
        }

        setLoading(false);
        return;
      }

      setSetsubmittedEmail(data.email);

      setStep("reset");
    } catch {
      setEmailError("root", { message: "Something went wrong. Try again." });
    } finally {
      setLoading(false);
    }
  };

  const onResetSubmit: SubmitHandler<ResetPasswordParams> = async (
    data: ResetPasswordParams,
  ) => {
    setLoading(true);

    try {
      const res = await resetPassword({
        email: submittedEmail,
        newPassword: data.newPassword,
        otp: data.otp,
      });

      if (!res.success) {
        const message = res.error?.message ?? res.message;

        if (message.toLocaleLowerCase().includes("otp")) {
          setResetError("otp", {
            type: "server",
            message,
          });
        } else if (message.toLocaleLowerCase().includes("newPassword")) {
          setResetError("newPassword", {
            type: "server",
            message,
          });
        } else {
          setResetError("root", {
            type: "server",
            message,
          });
        }

        return;
      }

      toast.success(res.message);
      navigate("/login", { state: { passwordReset: true } });
    } catch (error) {
      setResetError("root", {
        type: "server",
        message: "Network error. Please try again.",
      });
      toast.error("Network error or server unreachable");
      console.log("Unexpected error", error);
      console.log("Network error or server unreachable");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <title>Reset password — Sumptup</title>
      <div className="w-full min-h-dvh flex items-center justify-center">
        <div className="h-68 flex flex-col items-center justify-center gap-7">
          <div
            className="border w-fit dark:border-zinc-700 rounded-lg p-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Logo size="sm" />
          </div>

          <div className="w-full h-fit flex flex-col items-center">
            <h1 className="font-heading text-3xl font-semibold text-center">
              Reset password
            </h1>

            {step === "email" ? (
              <p className="text-center text-sm text-muted-foreground mt-1 max-w-md">
                Include the email address associated with your account and we’ll
                send you an email with instructions to reset your password.
              </p>
            ) : (
              <p className="text-center text-sm text-muted-foreground mt-1 max-w-md">
                We sent an OTP to{" "}
                <span className="text-foreground font-medium">
                  {submittedEmail}
                </span>
                . Enter it below along with your new password.
              </p>
            )}
          </div>

          {step === "email" && (
            <form
              className="w-full"
              onSubmit={handleEmailSubmit(onEmailSubmit)}
            >
              <FieldGroup className="w-full flex flex-col gap-6">
                <Field>
                  <FieldLabel htmlFor="email" className="text-muted-foreground">
                    Email
                  </FieldLabel>
                  <Input
                    placeholder="email@example.com"
                    type="email"
                    id="email"
                    className="py-6 px-5 rounded-2xl"
                    {...registerEmail("email", { required: true })}
                  />
                  {emailErrors.email && (
                    <p className="text-xs text-red-500">
                      {emailErrors.email?.message}
                    </p>
                  )}
                </Field>

                {emailErrors.root && (
                  <p className="text-xs text-red-500 text-center">
                    {emailErrors.root.message}
                  </p>
                )}

                <Field>
                  <Button
                    className="py-6 px-5 rounded-2xl text-base"
                    type="submit"
                    disabled={!isEmailValid || loading}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center gap-2">
                        <Spinner />
                      </div>
                    ) : (
                      <>Send reset instructions</>
                    )}
                  </Button>
                </Field>
              </FieldGroup>
            </form>
          )}

          {step === "reset" && (
            <form
              className="w-full"
              onSubmit={handleResetSubmit(onResetSubmit)}
            >
              <FieldGroup className="w-full flex flex-col gap-6">
                <Field>
                  <FieldLabel htmlFor="otp" className="text-muted-foreground">
                    OTP
                  </FieldLabel>

                  <Controller
                    name="otp"
                    control={control}
                    rules={{
                      required: "OTP is required",
                      minLength: { value: 6, message: "Enter all 6 digits" },
                    }}
                    render={({ field }) => (
                      <InputOTP
                        id="otp"
                        maxLength={6}
                        pattern={REGEXP_ONLY_DIGITS}
                        value={field.value}
                        onChange={field.onChange}
                        containerClassName="w-full gap-3"
                      >
                        <InputOTPGroup className="flex-1 gap-2">
                          <InputOTPSlot
                            index={0}
                            className="w-full h-12 text-lg border"
                          />
                          <InputOTPSlot
                            index={1}
                            className="w-full h-12 text-lg border"
                          />
                          <InputOTPSlot
                            index={2}
                            className="w-full h-12 text-lg border"
                          />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup className="flex-1 gap-2">
                          <InputOTPSlot
                            index={3}
                            className="w-full h-12 text-lg border"
                          />
                          <InputOTPSlot
                            index={4}
                            className="w-full h-12 text-lg border"
                          />
                          <InputOTPSlot
                            index={5}
                            className="w-full h-12 text-lg border"
                          />
                        </InputOTPGroup>
                      </InputOTP>
                    )}
                  />

                  {resetErrors.otp && (
                    <p className="text-xs text-red-500">
                      {resetErrors.otp.message}
                    </p>
                  )}
                </Field>

                <Field>
                  <FieldLabel
                    htmlFor="newPassword"
                    className="text-muted-foreground"
                  >
                    New Password
                  </FieldLabel>
                  <InputGroup className="py-6 px-3 rounded-2xl">
                    <InputGroupInput
                      placeholder="••••••••••••"
                      type={showPassword ? "text" : "password"}
                      id="newPassword"
                      required
                      {...registerReset("newPassword", {
                        required: "Password is required",
                      })}
                    />

                    <InputGroupAddon align={"inline-end"}>
                      {showPassword ? (
                        <IconEyeClosed
                          className="cursor-pointer"
                          onClick={() => setShowPassword(false)}
                        />
                      ) : (
                        <IconEye
                          className="cursor-pointer"
                          onClick={() => setShowPassword(true)}
                        />
                      )}
                    </InputGroupAddon>
                  </InputGroup>

                  {resetErrors.newPassword && (
                    <p className="text-xs text-red-500">
                      {resetErrors.newPassword.message}
                    </p>
                  )}
                </Field>

                {resetErrors.root && (
                  <p className="text-xs text-red-500 text-center">
                    {resetErrors.root.message}
                  </p>
                )}

                <Field>
                  <Button
                    className="py-6 px-5 rounded-2xl text-base"
                    type="submit"
                    disabled={!isResetValid || loading}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center gap-2">
                        <Spinner />
                      </div>
                    ) : (
                      <>Reset password</>
                    )}
                  </Button>
                </Field>
              </FieldGroup>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
