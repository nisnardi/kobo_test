const API_URL = process.env.EXPO_PUBLIC_GITHUB_USER_CONTENT_API_URL;

export async function fetchUrlList() {
  const response = await fetch(API_URL as string);
  const data = await response.json();
  return data.pages;
}

export async function fetchUserPage(page: string) {
  const usersResponse = await fetch(page);
  const fetchedUsers = await usersResponse.json();

  return fetchedUsers;
}
