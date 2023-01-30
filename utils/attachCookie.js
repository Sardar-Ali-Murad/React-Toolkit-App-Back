const attachCookie = ({ res, token }) => {
  // const oneDay = 1000 * 60 * 60 * 24;

  // res.cookie('token', token, {
  //   httpOnly: true,
  //   expires: new Date(Date.now() + oneDay),
  //   secure: process.env.NODE_ENV === 'production',
  // });
  
  var randomNumber=Math.random().toString();
  randomNumber=randomNumber.substring(2,randomNumber.length);
  res.cookie('token',token, { maxAge: 900000, httpOnly: true });
  
};

export default attachCookie;
