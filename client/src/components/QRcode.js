function QRcode(props) {
  return (
    <div className="code">
      <span>Scan the QR code to proceed</span>
      <div className="qr-div">
        <img
          src={props.url}
          alt="QR CODE TEXT : 
      {'information' : {'Name', 'Email', 'Phone'},
      'Source' : 'ABC Bank',
      'Token': 'rAndOmlY geNeRATed t0KeN'}"
        ></img>
      </div>
    </div>
  );
}

export default QRcode;
