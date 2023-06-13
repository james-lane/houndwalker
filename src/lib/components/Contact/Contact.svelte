<script context="module">
  export const prerender = true;
</script>

<section>
  <form name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <input type="hidden" name="subject" value="Message via website form" />
      <label for="name">Your Name:</label>
      <input id="name" type="text" name="name" />
      <label for="email">Your Email:</label>
      <input id="email" type="email" name="email" />
      <label for="number">Your Phone Number:</label>
      <input id="number" type="tel" name="number" />
      <label for="message">Message:</label>
      <textarea id="message" name="message"></textarea>
      <button type="submit">Send</button>
  </form>
</section>

<style>
  section {
    background: var(--color-grey-light);
    padding: 20px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  form {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    font-family: var(--font-stack);
    width: 100%;
    max-width: 600px;
  }

  label, input, textarea {
    width: 100%;
  }

  label {
    margin: 0 0 8px;
  }

  input, textarea {
    min-height: 44px;
    margin-bottom: 16px;
    border-radius: 4px;
    border: none;
    padding: 0 20px;
    font-family: var(--font-stack);
  }

  textarea {
    min-height: 120px;
    padding: 20px;
  }

  button {
    min-height: 44px;
    min-width: 44px;
    max-width: 200px;
    width: 50vw;
    border-radius: 4px;
    border: none;
    margin: 20px 0;
    background: #3c88b8;
    color: var(--color-white);
    font-weight: bold;
    -webkit-appearance: none;
  }

  @media only screen and (min-width: 1024px)  {
    section {
      padding: 60px 0;
    }
  }
</style>