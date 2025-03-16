export function Input(props) {
    return (
      <input
        {...props}
        className={`border px-3 py-2 rounded text-black ${props.className || ""}`}
      />
    );
  }
  