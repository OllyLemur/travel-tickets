export const cookieParser = (cookie: string) => {
  
  const cookieBody: string = cookie.split("=")[1].split(";")[0];

  const pattern: RegExp = /^([^=]+)/;

  const match: RegExpExecArray | null = pattern.exec(cookie);

  if (match && match[1]) {
    const cookieName: string = match[1];
    return [cookieBody, cookieName];
  }
};
