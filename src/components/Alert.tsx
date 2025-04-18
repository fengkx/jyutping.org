import type React from "react"; // Use import type

interface AlertProps {
  title?: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light";
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({
  title,
  color = "primary",
  children,
}) => {
  // Map color prop to Tailwind CSS classes
  // Using basic background/border/text colors - adjust as needed for closer theme match
  const colorClasses = {
    primary: "bg-blue-100 border-blue-500 text-blue-700", // Added dark mode classes
    secondary: "bg-gray-100 border-gray-500 text-gray-700", // Added dark mode classes
    success: "bg-green-100 border-green-500 text-green-700", // Added dark mode classes
    danger: "bg-red-100 border-red-500 text-red-700", // Added dark mode classes
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700", // Added dark mode classes
    info: "bg-cyan-100 border-cyan-500 text-cyan-700", // Added dark mode classes
    light: "bg-gray-50 border-gray-300 text-gray-600", // Added dark mode classes
  };

  const alertClasses = `border-l-4 px-4 py-2 my-4 ${
    colorClasses[color] || colorClasses.primary
  }`;

  return (
    <div className={alertClasses} role="alert">
      {title && <h4 className="font-bold mb-2">{title}</h4>}
      <div>{children}</div>
    </div>
  );
};

export default Alert;
