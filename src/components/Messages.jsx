function Messages({ messages }) {
  return (
    <div className="message-cont">
      {messages.map((m) => (
        <div className={`message-bin ${m.type}`}>{m.text}</div>
      ))}
    </div>
  );
}

export default Messages;
