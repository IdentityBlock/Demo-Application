import { useState } from "react";

function AutofillForm(props) {
  const [name, setName] = useState(props.name);
  const [dob, setDOB] = useState(props.dob);
  const [nic, setNIC] = useState(props.nic);
  const [address, setAddress] = useState(props.address);
  const [email, setEmail] = useState(props.email);
  const [phone, setPhone] = useState(props.phone);
  const [product, setProduct] = useState("");

  const handleSubmit = (e) => {
    if (!(name && nic && address && email && phone && product))
      alert("All fields are required!");
    // console.log("error");
    else {
      console.log(name, nic, address, email, phone, product);
    }

    e.preventDefault();
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label>Full Name:</label>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /> <label>Date of Birth:</label>
      <input
        name="dob"
        type="text"
        value={dob}
        onChange={(e) => setDOB(e.target.value)}
      />
      <br />
      <label>NIC Number:</label>
      <input
        name="nic"
        type="text"
        value={nic}
        onChange={(e) => setNIC(e.target.value)}
      />
      <br />
      <label>Address:</label>
      <input
        name="address"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />
      <label>Email:</label>
      <input
        name="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <input
        name="phone"
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <label>Product:</label>
      <select value={product} onChange={(e) => setProduct(e.target.value)}>
        <option value="">- Please Select Product -</option>
        <option value="1">Regular Savings Account</option>
        <option value="2">'Yasasa' Pensioners' Savings Account</option>
        <option value="3">Super Saver Account</option>
        <option value="4">Power Bonus Account</option>
        <option value="5">Personal Foreign Currency Account</option>
        <option value="6">Udara Senior Citizens Account</option>
        <option value="7">Vibe Savings Account</option>
        <option value="8">Arunalu Children’s Savings Account</option>
        <option value="9">Isuru Minors' Savings Plan</option>
        <option value="10">Dotcom Teen Account</option>
        <option value="11">Anagi Women's Savings Account</option>
        <option value="12">Achiever Salary Savings Account</option>
        <option value="13">Foreign Currency Children’s Savings Account</option>
      </select>
      <br />
      <input type="submit" value="Submit" className="submitBtn" />
    </form>
  );
}

export default AutofillForm;
