
export const DotLoading = () => {
  return (
    <div>
      <div className="px-12 flex">
        <div
          className={`bg-purple-600 p-2 m-4 w-7 h-7 rounded-full animate-bounce first-circle`}
        ></div>
        <div
          className={`bg-gray-200 p-2 m-4 w-7 h-7 rounded-full animate-bounce green-circle second-circle`}
        ></div>
        <div
          className={`bg-purple-600 p-2 m-4 w-7 h-7 rounded-full animate-bounce third-circle`}
        ></div>
      </div>
    </div>
  );
};
