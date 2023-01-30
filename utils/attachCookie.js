const attachCookie = ({ res, token }) => {
  // const oneDay = 1000 * 60 * 60 * 24;

  // res.cookie('token', token, {
  //   httpOnly: true,
  //   expires: new Date(Date.now() + oneDay),
  //   secure: process.env.NODE_ENV === 'production',
  // });
  
  // var randomNumber=Math.random().toString();
  // randomNumber=randomNumber.substring(2,randomNumber.length);
//   let options = {
//     maxAge: 1000 * 60 * 15, // would expire after 15 minutes
//     httpOnly: true, // The cookie only accessible by the web server
//     signed: true // Indicates if the cookie should be signed
// }
  res.cookie('token',token);
  
};

export default attachCookie;
