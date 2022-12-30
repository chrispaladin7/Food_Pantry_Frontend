import React, { useState, useEffect } from 'react';
import { getCourierView } from '../services/user.service';
const CourierView: React.FC = () => {
  const [content, setContent] = useState<string>('');
  useEffect(() => {
    getCourierView().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};
export default CourierView;
