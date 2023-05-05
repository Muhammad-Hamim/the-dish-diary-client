import React from "react";

const Blog = () => {
  return (
    <div className="px-8 lg:px-44 py-12">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-primary-content py-7 rounded-xl shadow-xl bg-primary">
          This is Blog Section
        </h2>
      </div>
      <div className="py-16 space-y-4">
        <div>
          <h2 className="text-3xl font-semibold text-base-content">
            Differences between uncontrolled and controlled components?
          </h2>
          <p className="text-lg">
            In React, components can be either controlled or uncontrolled. The
            main difference between the two is how they manage and update data.
            An uncontrolled component is a component that manages its own state
            internally. This means that the component has its own way of
            managing and updating its data, which is independent of any external
            state. The state of an uncontrolled component is typically managed
            through DOM manipulation and can be accessed and updated using the
            ref attribute. Uncontrolled components are often used for simple
            form inputs like text fields, checkboxes, and radio buttons. On the
            other hand, a controlled component is a component that receives its
            data and state from a parent component. The parent component is
            responsible for managing and updating the state of the controlled
            component. The state of a controlled component is typically managed
            through state variables and is passed down to the component via
            props. Controlled components are often used for more complex form
            inputs like select boxes, where the selected value needs to be
            managed by the parent component. The choice of whether to use a
            controlled or uncontrolled component depends on the specific use
            case and requirements of the component. Uncontrolled components are
            generally easier to use and require less code, but they provide less
            control and flexibility over the data. Controlled components, on the
            other hand, provide more control and flexibility over the data, but
            require more code and can be more complex to implement.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-base-content">
            How to validate React props using PropTypes?
          </h2>
          <p className="text-lg">
            To validate React props using PropTypes, you need to use the
            prop-types package, which allows you to define the expected types
            for each prop passed to your component. After installing this
            package, you can import the PropTypes module in your React component
            and define the propTypes for your component by adding a static
            propTypes property to your component. Within this property, you
            should define the expected types for each prop being passed to the
            component. This way, you can ensure that the props being passed to
            your component are of the correct type and shape, and catch any
            errors or bugs early on in the development process.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-base-content">
            Difference between nodejs and express js.
          </h2>
          <p className="text-lg">
            Node.js is a runtime environment for executing JavaScript code
            outside of a web browser. It is built on top of the V8 JavaScript
            engine and provides a set of built-in modules for performing various
            tasks, such as file I/O, network communication, and more.
            Express.js, on the other hand, is a web framework for Node.js. It
            provides a set of features and tools for building web applications
            and APIs using Node.js. Express.js provides a robust set of
            middleware functions, which can be used to handle various HTTP
            requests and responses, as well as to perform authentication, data
            validation, and more. Here are some key differences between Node.js
            and Express.js:
            <li className="list-decimal">
              Node.js is a runtime environment for executing JavaScript code,
              while Express.js is a web framework built on top of Node js.
            </li>
            <li className="list-decimal">
              Node.js provides built-in modules for performing various tasks,
              such as file I/O, network communication, and more, while
              Express.js provides a set of features and tools for building web
              applications and APIs.
            </li>
            <li className="list-decimal">
              Node.js is low-level and requires more manual configuration,
              while Express.js is higher-level and provides more abstractions
              and convenience.
            </li>
            <li className="list-decimal">
              Node.js can be used for building various types of applications,
              including desktop applications, command-line tools, and more,
              while Express.js is mainly focused on building web applications
              and APIs.
            </li>
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-base-content">
            What is a custom hook, and why will you create a custom hook?
          </h2>
          <p className="text-lg">
            In React, a custom hook is a JavaScript function that allows you to
            reuse logic across multiple components. Custom hooks can be created
            by extracting common functionality from components into a reusable
            hook function. Custom hooks follow a naming convention that begins
            with the word "use". Custom hooks allow you to extract and reuse
            stateful logic from a component, such as fetching data from an API,
            handling browser events, or managing animations. By creating custom
            hooks, you can keep your components clean and focused on rendering
            UI, while encapsulating complex logic in reusable functions. Here
            are some reasons why you might want to create a custom hook:
            <li className="list-decimal">
              Reusability: Custom hooks allow you to reuse stateful logic
              across multiple components, making your code more modular and
              easier to maintain.
            </li>
            <li className="list-decimal">
              Abstraction: Custom hooks allow you to abstract away complex
              logic, making your components cleaner and more focused on
              rendering UI.
            </li>
            <li className="list-decimal">
              Encapsulation: Custom hooks allow you to encapsulate stateful
              logic, making it easier to test and debug.
            </li>
            <li className="list-decimal">
              Consistency: Custom hooks provide a consistent interface for
              working with stateful logic, making it easier for developers to
              reason about and use the codebase.
            </li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
