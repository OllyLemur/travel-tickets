export const userLogIn = async (body: any) => {
  const result = await fetch("api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    credentials: "include",
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
    credentials: "include",
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
    credentials: "include",
  });

  const data = await result.json();

  return data;
};

export const flightSearch = async (
  to: string,
  from: string,
  location: string,
  destination: string
) => {
  const result = await fetch(
    `api/flights?to=${to}&from=${from}&location=${location}&destination=${destination}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  if (result.ok) {
    const data = await result.json();

    return data;
  } else {
    throw new Error('Cann\'t find flits in this dates');
  }
};
