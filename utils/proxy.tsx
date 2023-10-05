export const userLogIn = async (body: any) => {
  const result = await fetch("api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    credentials: "include"
  });  

  const data = await result.json();

  return data;
};

export const userRegistration = async (body: any) => {
  const result = await fetch("api/registration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    credentials: "include"
  });

  const data = await result.json();

  return data;
};

export const userAuth = async () => {
  const result = await fetch("api/auth", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include"
  });
  
  const data = await result.json();

  return data
};
