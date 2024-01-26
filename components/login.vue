<template>
  <div class="cont">
    <input type="test" placeholder="user" v-model="username" />
    <input type="password" placeholder="psw" v-model="password" />
    <button @click="login">Login</button>
    <div>
      Is Logged In: {{ loggedIn }}
      {{ user }}
    </div>
  </div>
</template>

<script setup lang="ts">
import auth0 from "auth0-js";
const { loggedIn, user, session, clear } = useUserSession();

const auth0conf = useRuntimeConfig().public.auth0;
const username = ref<string>("");
const password = ref<string>("");
const webAuth = new auth0.WebAuth({
  domain: auth0conf.domain,
  clientID: auth0conf.clientId,
  redirectUri: "http://localhost:3000/api/authorize",
});

const login = async () => {
  webAuth.login(
    {
      email: username.value,
      password: password.value,
      realm: "Username-Password-Authentication",
      scope: "openid profile email read:current_user",
      responseType: "code",
    },
    () => null, // noop
  );
};
</script>

<style scoped>
.cont {
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 32px;
}
</style>
