function Keypad() {
    const handleKeyUp = () => {
      console.log("Entering password...");
    };
    return (
      <div>
        <input type="password" onChange={handleKeyUp} />
      </div>
    );
  }
  
  export default Keypad;