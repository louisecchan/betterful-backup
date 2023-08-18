import React from "react";
import { Button, Card, Col, Form, Input, message, Row, Spin } from "antd";
import { useAuthContext } from "../../context/AuthContext";
import { API } from "../../constant";
import { useState } from "react";
import { getToken } from "../../helpers";
import "./profile.scss";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const { user, isLoading, setUser } = useAuthContext();

  const handleProfileUpdate = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(`${API}/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // set the auth token to the user's jwt
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      setUser(responseData);
      message.success("Profile updated successfully!");
    } catch (error) {
      console.error(Error);
      message.error("Error While Updating the Profile!");
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return <Spin size="large" />;
  }

  return (
    <Card className="profileCard fade-in" bordered={false}>
      <h1 className="profileCard-title">Profile</h1>
      <Form
        layout="vertical"
        initialValues={{
          username: user?.username,
          email: user?.email,
          twitter_username: user?.twitter_username,
          linkedin_username: user?.linkedin_username,
          github_username: user?.github_username,
          avatar_url: user?.avatar_url,
          website_url: user?.website_url,
          about: user?.about,
        }}
        onFinish={handleProfileUpdate}
      >
        <Row gutter={[16, 16]}>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  // required: true,
                  message: "Username is required!",
                  type: "string",
                },
              ]}
            >
              <Input className="inputContent" />
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  // required: true,
                  message: "Email is required!",
                  type: "email",
                },
              ]}
            >
              <Input className="inputContent" />
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Avatar URL"
              name="avatar_url"
              rules={[
                {
                  type: "url",
                },
              ]}
            >
              <Input className="inputContent" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Bio"
              name="about"
              rules={[
                {
                  type: "string",
                  max: 120,
                },
              ]}
            >
              <Input className="inputContent" rows={6} />
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Twitter Username"
              name="twitter_username"
              rules={[
                {
                  type: "string",
                },
              ]}
            >
              <Input className="inputContent" />
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="LinkedIn Username"
              name="linkedin_username"
              rules={[
                {
                  type: "string",
                },
              ]}
            >
              <Input className="inputContent" />
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Github Username"
              name="github_username"
              rules={[
                {
                  type: "string",
                },
              ]}
            >
              <Input className="inputContent" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Website URL"
              name="website_url"
              rules={[
                {
                  type: "url",
                },
              ]}
            >
              <Input className="inputContent" />
            </Form.Item>
          </Col>
        </Row>
        <button className="profileButton" htmlType="submit" size="large">
          {loading ? (
            <>
              <Spin size="small" /> Saving
            </>
          ) : (
            "SAVE"
          )}
        </button>
      </Form>
    </Card>
  );
};

export default Profile;
