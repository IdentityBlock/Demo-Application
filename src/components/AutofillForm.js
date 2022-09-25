import { useState } from "react";

function AutofillForm() {
  const [name, setName] = useState("");
  const [dob, setDOB] = useState("");
  const [nic, setNIC] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");

  const handleSubmit = (e) => {
    if (name && nic && address && email && phone && product)
      console.log(name, nic, address, email, phone, product);
    else {
      console.log("error");
    }

    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label>
        Full Name:
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />{" "}
      <label>
        Date of Birth:
        <input
          name="dob"
          type="text"
          value={dob}
          onChange={(e) => setDOB(e.target.value)}
        />
      </label>
      <br />
      <label>
        NIC Number:
        <input
          name="nic"
          type="text"
          value={nic}
          onChange={(e) => setNIC(e.target.value)}
        />
      </label>
      <br />
      <label>
        Address:
        <input
          name="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          name="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <br />
      <label>
        Product:
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
          <option value="13">
            Foreign Currency Children’s Savings Account
          </option>
        </select>
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default AutofillForm;
