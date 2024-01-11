"use client";

import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { DateField, InputField, SelectField } from "./shared";
import { userStore } from "@/store/userStore";
import { postUserInfo } from "@/services/userService";
import Cookies from "js-cookie";
import dayjs from "dayjs";

function UserModal() {
  const { user } = userStore();
  const [loading, setLoading] = useState(false);

  /* Form Initial Values */
  const initialValues = {
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    birthday: user?.birthday || "",
    gender: user?.gender || "MALE",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
  };

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const formattedBirthday = dayjs(values.birthday).format(
        "YYYY-MM-DDTHH:mm:ss.SSSZ"
      );
      const res = await postUserInfo({
        ...values,
        birthday: formattedBirthday,
        walletAddress: Cookies.get("wallet_address"),
      });
      if (res) {
        closeModal();
        toast.success("User info added");
      }
    } catch (error) {
      console.log(error);
      toast.success("Error occured. Please try again later");
    }
    setLoading(false);
  };

  return (
    <dialog id="user-modal" className="modal">
      <div className="modal-box bg-main2 text-white">
        <h1 className="mb-5">User Info Form</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form className="flex flex-col items-center gap-6">
              <div className="grid grid-cols-1 justify-center gap-2 sm:grid-cols-2">
                <div className={"w-full"}>
                  <InputField
                    label={"First Name"}
                    id={"firstName"}
                    setFieldValue={setFieldValue}
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="">
                  <InputField
                    label={"Last Name"}
                    id={"lastName"}
                    setFieldValue={setFieldValue}
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className={""}>
                  <SelectField
                    label={"Gender"}
                    id={"gender"}
                    setFieldValue={setFieldValue}
                    options={["Male", "Female", "Other"]}
                  />
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div>
                  <DateField
                    label={"Birthday"}
                    id={"birthday"}
                    setFieldValue={setFieldValue}
                  />
                  <ErrorMessage
                    name="birthday"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className={"w-full"}>
                  <InputField
                    label={"Email"}
                    id={"email"}
                    setFieldValue={setFieldValue}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="">
                  <InputField
                    label={"Phone Number"}
                    id={"phoneNumber"}
                    setFieldValue={setFieldValue}
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-neutral block w-fit max-w-[30ch] self-center truncate border-none  p-3 px-10 text-left italic"
              >
                {loading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Submit"
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>

      {/* Modal Close on backdrop click */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default UserModal;

/* Modal Close Function */
const closeModal = () =>
  (document?.getElementById("user-modal") as HTMLDialogElement)?.close();

/* Form Validation Schema */
const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("First name is required")
    .matches(/^[A-Za-z\s]+$/, "Invalid first name")
    .min(3, "Too short"),
  lastName: Yup.string()
    .required("Last name is required")
    .matches(/^[A-Za-z\s]+$/, "Invalid last name")
    .min(3, "Too short"),
  birthday: Yup.string().required("Birthday is required"),
  gender: Yup.string().required("Gender is required"),
  email: Yup.string().email("Invalid email").required("Email Required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .min(8, "Too short"),
});
