import {
  Avatar,
  Button,
  Card,
  FlexChild,
  FlexLayout,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';

export const AddUser = () => {
  const [adduser, setAdduser] = useState();
  const adduserfetch = async () => {
    await axios
      .get("http://localhost:4000/")
      .then((res) => {
        setAdduser(res.data.data.userData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    adduserfetch();
  }, []);

  const removeMember = async (id) => {
    console.log(id);
    const userFilter = adduser.find((items) => items._id === id);
    await axios.post("http://localhost:4000/", userFilter).then((res) => {
      console.log(res);
    });
    adduserfetch();
	toast.success('user successfully deleted')
  };
  return (
    <>
      <Card cardType="Plain">
        <FlexLayout
          desktopWidth="100"
          tabWidth="100"
          mobileWidth="100"
          spacing="loose"
        >
          {adduser?.map((items) => {
            return (
              <FlexLayout
                valign="center"
                halign="fill"
                spacing="loose"
                key={items._id}
              >
                <FlexLayout valign="center" spacing="loose">
                  <Avatar image={items.img} size="large" />
                  <FlexChild>
                    <TextStyles fontweight="extraBold" content={items.name} />
                    <TextStyles
                      fontweight="normal"
                      textcolor="light"
                      type="simpleText"
                      content={items.date}
                    />
                  </FlexChild>
                </FlexLayout>
                <Button
                  content="Delete"
                  length="fullBtn"
                  type="Outlined"
                  icon={<AiOutlineDelete className="sizeclass" />}
                  onClick={() => removeMember(items._id)}
                />
              </FlexLayout>
            );
          })}
        </FlexLayout>
        <ToastContainer position="bottom-right"/>
      </Card>
	  	
      {/* <ToastContainer position="top-right" /> */}
    </>
  );
};

export default AddUser;
